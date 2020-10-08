import React from 'react'
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h2>Page Not Found 404</h2>
            <Link to="/">Back to home</Link>
        </div>
    )
}


export default PageNotFound;