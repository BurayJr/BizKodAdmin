import { faFaceLaughWink, faTachographDigital, faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <ul className="navbar-nav bg-dark sidebar sidebar-dark accordion" id="accordionSidebar">

            {/* <!-- Sidebar - Brand --> */}
            <a className="sidebar-brand d-flex align-items-center justify-content-center" href="user-list">
                
                <div className="sidebar-brand-text mx-3">Zzimers<sup></sup></div>
            </a>

            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            
            {/* <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/* <!-- Nav Item - Users --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/user-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Users</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Oglasi na čekanju --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/oglas-list">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Lista oglasa na čekanju</span>
                </Link>
            </li>
            {/* <!-- Nav Item - Lista aktivnih oglasa --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/oglas-list-aktiv">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Lista aktivnih oglasa</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Lista neaktivnih oglasa --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/oglas-list-neaktiv">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Lista neaktivnih oglasa</span>
                </Link>
            </li>

            {/* <!-- Nav Item - Lista Oblasti --> */}
            <li className="nav-item active">
                <Link className="nav-link" to="/portal/oblast-lista">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                    <span>Lista oblasti</span>
                </Link>
            </li>
            {/* <!-- Nav Item - Lista Oblasti --> */}
            {/* <li className="nav-item active">
                <Link className="nav-link" to="/portal/login-screen">
                    <FontAwesomeIcon icon={faUsers} style={{ marginRight: "0.5rem" }} />
                </Link>
            </li> */}
          
        </ul>
    )
}

export default Sidebar