import React, {useEffect} from 'react';
import './App.css';
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate, useParams, useSearchParams} from "react-router-dom";


const Profile = () => {

    const [searchParams, setSearchParams] = useSearchParams()
    console.log(searchParams.get('name'))
    console.log(Object.fromEntries(searchParams))

    return (
        <div>
            profile
            <button onClick={() => {
                setSearchParams({age: '32'})
            }}>add age</button>
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
            </div>
            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>Main</div>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/login/' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
