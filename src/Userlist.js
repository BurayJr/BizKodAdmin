import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { environment } from './env'
function OglasList() {

    const apiurl = environment.apiurl;
    const [user, setUser] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getUsers();
    }, []);

    let getUsers = async () => {
        try {
            const response = await fetch(`http://192.168.0.184:4000/getAllUsers`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json(); // Pretvaranje odgovora u JSON format
            //stavi uslov ako je status jednako active --- lista aktivnih oglasa
            setUser(data?.items);
            
            
            setLoading(false)
        } catch (error) {
            console.error("Error:", error);
        }

    }

    let handleDelete = async (id) => {  try {

      const response = await fetch(`http://192.168.0.184:4000/deleteUser/${id}`, {
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
                <h1 className="h3 mb-0 text-gray-800 text-left ml-2 font-weight-bold ">LISTA KORISNIKA</h1>
                
            </div>
            {/* <!-- DataTables --> */}
            <div className="card shadow mb-4">
                
                <div className="card-body">
                    {
                      <div className="table-responsive">
                                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className = "text-center">REDNI BROJ</th>
                                            <th className = "text-center">IME</th>
                                            <th className = "text-center">PREZIME</th>
                                            <th className = "text-center">EMAIL</th>
                                            <th className = "text-center">BROJ TELEFONA</th>
                                            <th className = "text-center text-danger">BROJ PRIJAVA</th>
                                            <th className = "text-center">AKCIJA</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {user
                                        .slice()
                                        .sort((a, b) => {
                                            if (a.firstName === undefined && b.firstName === undefined) {
                                                return 0; // Keep the order unchanged if both are undefined
                                            } else if (a.firstName === undefined) {
                                                return 1; // Place a at the end if a.firstName is undefined
                                            } else if (b.firstName === undefined) {
                                                return -1; // Place b at the end if b.firstName is undefined
                                            } else {
                                                return a.firstName.localeCompare(b.firstName); // Compare normally if both are defined
                                            }
                                        })
                                        .map((user,index) => {
                                            return (
                                                <tr> 
                                                  <td className = "text-center">{index+1}</td>
                                                    <td className = "text-center">{user?.firstName}</td>
                                                    <td className = "text-center">{user?.lastName}</td>
                                                    <td className = "text-center">{user?.email}</td>
                                                    <td className = "text-center">{user?.phoneNumber}</td>
                                                    <td className = "text-center">{user?.numberOfReports}</td>
                                                     <th>
                                                     { <div class="d-flex justify-content-between align-items-center ">
                                                            <button onClick={() => handleDelete(user?._id)}  class="btn btn-danger btn-sm mr-1 btn-primary w-100 font-weight-bold">OBRIŠI</button>
                                                        </div> }
                                                    </th> 
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </table>
                            </div>
                    }

                </div>
            </div>
        </>
    )
}

export default OglasList