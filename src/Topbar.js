import { faBell, faCircleUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { environment } from './env'

function Topbar() {
    const [searchQuery, setSearchQuery] = useState('');
    const [user, setUser] = useState([]);

    

    const handleSearchSubmit = async (name) => {
        name.preventDefault();
        try {
            const response = await fetch(`http://192.168.0.184:4000/getAllUsers`, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            });
           
            

            const data = await response.json();
            // Handle the response data (list of users) as needed
            console.log('Search results:', data);
        } catch (error) {
            console.error('Error searching users:', error);
        }
    };

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark topbar mb-4 static-top shadow">
            <button   id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search"
                onSubmit={handleSearchSubmit}>
                <div className="input-group">
                    <input type="text" className="form-control bg-light border-0 small"
                        placeholder="Search for..." aria-label="Search"
                        aria-describedby="basic-addon2" value={searchQuery}
                        onChange={handleSearchSubmit} />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                            <FontAwesomeIcon icon={faSearch} />
                        </button>
                    </div>
                </div>
            </form> */}

            <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown no-arrow d-sm-none">
                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <FontAwesomeIcon icon={faSearch} />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                        aria-labelledby="searchDropdown">
                        <form className="form-inline mr-auto w-100 navbar-search">
                            <div className="input-group">
                                <input type="text" className="form-control bg-light border-0 small"
                                    placeholder="Search for..." aria-label="Search"
                                    aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">
                                        <FontAwesomeIcon icon={faSearch} />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
                <div className="topbar-divider d-none d-sm-block"></div>
                <button type="submit" className="btn btn-primary btn-lg" onClick={() => (window.location.href='/login')} >Logout</button>
            </ul>
        </nav>
    )
}

export default Topbar;