import React from 'react';
import './App.css';
import {NavLink, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <NavLink to='/'>-Main- </NavLink>
                <NavLink to='/profile'>-Profile- </NavLink>
                <NavLink to='/login'>-Login- </NavLink>
            </div>
            <Routes>
                <Route path='/' element={<div>Main</div>}/>
                <Route path='/profile' element={<div>Profile</div>}/>
                <Route path='/login' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
