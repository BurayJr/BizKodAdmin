import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import Userlist from './Userlist'
import OglasList from './OglasList'
import OglasListAktiv from './OglasListAktiv'
import OglasListNeaktiv from './OglasListNeaktiv'
import OblastLista from './OblastLista'

function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className='container-fluid'>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portal

