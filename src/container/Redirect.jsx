import React from 'react';
import { Navigate } from 'react-router-dom';

const RedirectPage = () => {
    return <Navigate to="/sys/home" />;
};
export default RedirectPage;