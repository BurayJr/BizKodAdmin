import { faUser } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { environment } from './env'

function OglasListAktiv() {

    const apiurl = environment.apiurl;
    const [oglasLista, setOglasLista] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        //On Load
        getOglasi();
    }, []);

    let getOglasi = async () => {
        try {
            const response = await fetch(`http://192.168.0.184:4000/getAllAdvertisment`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
            const data = await response.json(); // Pretvaranje odgovora u JSON format
            //stavi uslov ako je status jednako active --- lista aktivnih oglasa
            data?.items.forEach(element => {
                const pendingOglasi = data?.items.filter(oglas => oglas?.status === "active");
                setOglasLista(pendingOglasi);
            });

            setLoading(false)
        } catch (error) {
            console.error("Error:", error);
        }

    }


    let handleRefuse = async (_id) => {
        try {
            const response = await fetch('http://192.168.0.184:4000/acceptAdvertisment', {
                method: 'POST', // ili 'PUT', 'DELETE' ako je potrebno
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: _id, status: 'inactive' }),
              })
              const data = await response.json();
              window.location.reload();
        } catch (error) {
            console.error("Error:", error);
        }
    }

   
    const listOfImages = [
        'https://strongbuild.rs/images/apartments/83_slika1.jpg',
        'https://strongbuild.rs/images/apartments/92_slika1.jpg',
        'https://cdn.divisnekretnine.rs/nekretnina/12881/prodaja-stana-bw-riviera-divis-nekretnine-200m2-enterijer%20(5)-feature.jpg',
        'https://www.gradnja.rs/wp-content/uploads/2016/09/stan-budimpesta.jpg',
        'https://www.gradnja.rs/wp-content/uploads/2013/09/enterijer-stana-slike.jpg',
        'https://cdn.navidiku.rs/firme/galerija2/s54417/adaptacije-stanova-i-krecenje-dnevne-sobe-8198b1-6.jpg'
        // Add more image URLs as needed
    ];
   

   


    return (
        <>
            <div className="d-sm-flex align-items-center  mb-4">
            <img src="https://cdn-icons-png.freepik.com/256/5610/5610944.png" width="30" height="30"/>
                <h1 className="h3 mb-0 text-gray-800 text-left ml-2 font-weight-bold ">LISTA AKTIVNIH OGLASA</h1>

            </div>
            

            
            {/* <!-- DataTables --> */}
            <div className="card shadow mb-4">
                
                <div className="card-body">
                    {
                       <div className="table-responsive">
                                <table className="table table-bordered " id="dataTable" width="100%" cellSpacing="0">
                                    <thead>
                                        <tr>
                                            <th className = "text-center">Slika</th>
                                            <th className = "text-center">Cena</th>
                                            <th className = "text-center">Opis</th>
                                            <th className = "text-center">Korisnim</th>
                                            <th className = "text-center">Akcija</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {oglasLista
                                        .map((oglas,index) => {
                                            return (
                                                <tr>
                                                    <td className="text-center">
            <img src={listOfImages[index % listOfImages.length]} alt={`Picture ${index}`} />
        </td>
                                                    <td className = "text-center">{oglas?.price}</td>
                                                    <td className = "text-center">{oglas?.description}</td>
                                                    <td className = "text-center">{oglas?.user?.firstName}</td>
                                                    <th>
                                                        <div class="d-flex justify-content-center align-items-center">
                                                            <button onClick={() => handleRefuse(oglas?._id)}  class="btn btn-danger btn-sm mr-1 btn-primary w-100 font-weight-bold">ODBACI</button>
                                                        </div>

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

export default OglasListAktiv