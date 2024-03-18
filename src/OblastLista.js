import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { environment } from './env'
function OblastLista() {

    const apiurl = environment.apiurl;
    const [oblastLista, setOblastLista] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const [category, setCategory] = useState('');


    useEffect(() => {
        getOblasti()
    }, [])
    let getOblasti = async () => {
        try {
            const response = await fetch(`http://192.168.0.184:4000/getAreas`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json();
            setOblastLista(data?.items)
            setLoading(false)
        } catch (error) {
            console.error("Error:", error);
        }

    }

    let addOblasti = async () => {
        try {

            const response = await fetch(`http://192.168.0.184:4000/addArea`, {

                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name: category })
            });
            const data = await response.json();
            setLoading(false)
            window.location.reload()

        } catch (error) {
            console.error("Error:", error);
        }

    }





    let handleDelete = async (id) => {  try {

        const response = await fetch(`http://192.168.0.184:4000/deleteArea/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        console.log(data);
        window.location.reload()

    } catch (error) {
        console.error("Error:", error);
    }
       
    }

    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800 text-left ml-2 font-weight-bold ">LISTA OBLASTI</h1>

            </div>

            <input className="mb-2" type="text" id="textInput" placeholder="Dodaj tekstić"
                value={category}
                onChange={(e) => setCategory(e.target.value)} /><br />
            <button className="btn btn-primary mb-2" id="submitButton" onClick={addOblasti} >Dodaj</button><br />

            {/* <!-- DataTables --> */}
            <div className="card shadow mb-4 float-left">


                <div className="card-body">
                    {
                        <div className="table-responsive">
                            <table className="table table-bordered " id="dataTable" width="100%" cellSpacing="0">
                                <thead>
                                    <tr>
                                        <th className="text-center">Oblast</th>
                                        <th className="text-center">Akcija</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        oblastLista &&
                                        oblastLista.map((oblast, index) => {
                                            return (
                                                <tr>
                                                    <td className="text-center">{oblast?.name}</td>
                                                    <th>
                                                        <div class="d-flex justify-content-center align-items-center">
                                                            <button onClick={() => handleDelete(oblast?._id)} class="btn btn-danger btn-sm mr-1 btn-primary w-100 font-weight-bold">OBRIŠI</button>
                                                        </div>

                                                    </th>
                                                </tr>
                                            )
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    }

                </div>
            </div>
        </>
    )
}

export default OblastLista