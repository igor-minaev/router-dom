import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes, useNavigate, useParams} from "react-router-dom";


const Profile = () => {
    const navigate = useNavigate()
    return (
        <div>
            profile
            <button onClick={() => {navigate('/login')}}>logout</button>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <div>
                {/*Можно использовать более облегченную компоненту Link, но она не поддерживает функцию для style и className*/}
                <NavLink to='/'>-Main- </NavLink>
                <NavLink to='/profile'>-Profile- </NavLink>
                <NavLink to='/login'>-Login- </NavLink>
                <NavLink to='/profile/settings'>-Settings- </NavLink>
            </div>
            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>Main</div>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/profile/settings' element={<div>Settings</div>}/>
                <Route path='/login/' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
