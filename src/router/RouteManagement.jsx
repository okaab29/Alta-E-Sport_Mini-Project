import React, { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage/LoginPage';
import LayoutComponents from '../components/layouts/LayoutComponents';
import HomePage from '../pages/HomePage/HomePage';
import ForumPage from '../pages/ForumPage/ForumPage';

const RouteManagement = () => {
    const token = localStorage.getItem('token')
    const navigate = useNavigate()

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token])

    return (
        <Suspense>
            {!token ? (
                <Routes>
                    <Route path='/' element={<LoginPage/>}/>
                </Routes>
            ) : (
                <LayoutComponents>
                    <Routes>
                        <Route path='/home' element={<HomePage/>}/>
                        <Route path='/forum' element={<ForumPage/>}/>
                    </Routes>
                </LayoutComponents>
            )}
        </Suspense>
    );
}

export default RouteManagement;
