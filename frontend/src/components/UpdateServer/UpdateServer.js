import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function UpdateServer() {
    const navigate = useNavigate()
    const [id, setId] = useState(null);
    const [name, setName] = useState('');
    const [language, setLanguage] = useState('');
    const [framework, setFramework] = useState(false);

    useEffect(() => {
        setId(localStorage.getItem('Id'))
        setName(localStorage.getItem('Name'));
        setLanguage(localStorage.getItem('Language'));
        setFramework(localStorage.getItem('Framework'));
    }, []);

    const updateData = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8080/backend/rest/api/server/${id}`, {
            id,
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
                    Update Server
                </h2>
                <form className='login-form'>
                    <input hidden placeholder='Server Id' value={id} onChange={(e) => setId(e.target.value)} />
                    <input placeholder='Server Name' value={name} onChange={(e) => setName(e.target.value)} />
                    <input placeholder='Server Category' value={language} onChange={(e) => setLanguage(e.target.value)} />
                    <input placeholder='Server Mobile No.' value={framework} onChange={(e) => setFramework(e.target.value)} />
                    <button onClick={updateData} type='submit'>Update Server</button>
                </form>
            </div>

        </div>

    )
}
