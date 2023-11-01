import React from 'react';
import './App.css';
import {NavLink, Outlet, Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <NavLink to='/'>-Main- </NavLink>
                <NavLink to='/profile'>-Profile- </NavLink>
                <NavLink to='/login'>-Login- </NavLink>
                <NavLink to='/profile/settings'>-Settings- </NavLink>
            </div>
            <Routes>
                <Route path='/*' element={<div>Error 404</div>}/>
                <Route path='/' element={<div>Main</div>}/>
                {/*1 variant*/}
                {/*<Route path='/profile/*' element={*/}
                {/*    <div>*/}
                {/*        Profile*/}
                {/*        <Routes>*/}
                {/*            <Route path='/settings' element={<div>settings</div>}/>*/}
                {/*        </Routes>*/}
                {/*    </div>*/}
                {/*}/>*/}
                {/*2 variant*/}
                <Route path='/profile' element={(
                    <div>
                        Profile
                        <Outlet/>
                    </div>)}>
                    <Route path='*' element={<div>Profile page not found</div>}/>
                    <Route path=':id/' element={<div>Id</div>}/>
                    {/*<Route path='/profile/settings' element={<div>settings</div>}/>*/}
                    <Route path='settings' element={<div>settings</div>}/>
                </Route>

                <Route path='/login/*' element={<div>Login</div>}/>
            </Routes>
        </div>
    );
}

export default App;
