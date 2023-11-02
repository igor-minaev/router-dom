import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useParams} from "react-router-dom";

const Profile = () => {
    const params = useParams<'x' | 'y'>()
    const some = params
    console.log(some)
    return <div>Profile</div>
}

function App() {
    return (
        <div className="App">
            <div>
                <NavLink to='/'>-Main- </NavLink>
                <NavLink to='/profile'>-Profile- </NavLink>
                <NavLink to='/login'>-Login- </NavLink>
                <NavLink to='/profile/1'>-Profile/1- </NavLink>
            </div>
            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>Main</div>}/>
                <Route path='/profile/:x/:y' element={<Profile/>}/>
                <Route path='/login/*' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
