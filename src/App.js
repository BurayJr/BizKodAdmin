import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import "./sb-admin-2.min.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Userlist from './Userlist';
import OglasList from './OglasList';
import Portal from './Portal';
import OglasListAktiv from './OglasListAktiv';
import OglasListNeaktiv from './OglasListNeaktiv';
import OblastLista from './OblastLista';
import Login from './Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} >
          
        </Route>
        <Route path='/portal' element={<Portal />}>
          <Route path='user-list' element={<Userlist />} />
          <Route path='oglas-list' element={<OglasList />} />
          <Route path='oglas-list-aktiv' element={<OglasListAktiv />} />
          <Route path='oglas-list-neaktiv' element={<OglasListNeaktiv />} />
          <Route path='oblast-lista' element={<OblastLista />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
