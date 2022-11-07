import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './ReadServer.css'


export default function ReadServer() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:8080/backend/rest/api/server`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    const setData = (data) => {
        let { id, name, language, framework } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Name', name);
        localStorage.setItem('Language', language);
        localStorage.setItem('Framework', framework)
    }

    const getData = () => {
        axios.get(`http://localhost:8080/backend/rest/api/server`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:8080/backend/rest/api/server/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <div className="container">
                <div className="table-responsive">
                    <table
                        className="table table-bordered   table-striped"
                        style={{ marginTop: 100 }}
                    >
                        <thead className="table__head">
                            <tr className="winner__table">
                                <th>No</th>
                                <th>
                                    <i className="fa fa-user" aria-hidden="true" /> Sever Name
                                </th>
                                <th>
                                    <i className="fa fa-group" aria-hidden="true" /> Language
                                </th>
                                <th>
                                    {" "}
                                    <i className="fa fa-phone" aria-hidden="true" /> Framework
                                </th>
                                <th>
                                    <i className="fa fa-edit" aria-hidden="true" /> Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {APIData.map((data, index) => {
                                return (
                                    <tr className="winner__table">
                                        <td>{index + 1}</td>
                                        <td>{data.name}</td>
                                        <td>{data.language}</td>
                                        <td>{data.framework}</td>
                                        <th>
                                            <Link to='/update'>
                                                <button className='btn btn-outline-secondary' onClick={() => setData(data)}>Update</button>
                                            </Link>
                                            <button className='btn btn-outline-danger ml-4' onClick={() => onDelete(data.id)}>Delete</button>
                                        </th>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
