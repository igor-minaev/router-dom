import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";


function App() {
    return (
        <div className="App">
            <div>
                <NavLink to='/'>-Main- </NavLink>
                <NavLink style={({isActive}) => ({color: isActive ? 'lime' : 'black'})}
                         to='/profile'>-Profile- </NavLink>
                <NavLink to='/login'>-Login- </NavLink>
                <NavLink to='/profile/settings'>-Settings- </NavLink>
            </div>
            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>Main</div>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/profile/settings' element={<div>Settings</div>}/>
                <Route path='/login/*' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
