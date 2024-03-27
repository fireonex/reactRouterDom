import React from 'react';
import {useLocation} from "react-router-dom";

export const Error404 = () => {
    const location = useLocation();

    return (
        <div>
            Error404
            <p>{location.pathname}</p>
        </div>
    );
};

