import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

export const Loader = ({ isLoading, children }) => {
    
    return isLoading ?
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
        :
        <>{children}</>
}