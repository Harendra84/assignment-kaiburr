import  { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';
import './CreateServer.css'

export default function CreateServer() {
    const navigate = useNavigate()
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [framework, setFramework] = useState(false);

    const postData = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8080/backend/rest/api/server`, {
            name,
            language,
            framework
        }).then(() => {
            navigate('/Servers')
        })
    }
    return (
        <div className='containerr'>
            <div className='login-card'>
                <h2>
                    Creater Server
                </h2>
                <form className='login-form'>
                    <input placeholder='name' onChange={(e) => setName(e.target.value)} />
                    <input placeholder='language' onChange={(e) => setLanguage(e.target.value)} />
                    <input placeholder='framework' onChange={(e) => setFramework(e.target.value)} />
                    <button onClick={postData} type='submit'>Create</button>
                </form>
            </div>
        </div>
    )
}
