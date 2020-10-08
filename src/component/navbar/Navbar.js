import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './navbar.css';

const Navbar = (props) => {
    const { title } = props
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-success">
            <Link to="/" className="navbar-brand">{title}</Link>
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                <li className="nav-item active">
                    <Link to="/" className="nav-link">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to="/contact/add" className="nav-link">Add Contact <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link to="/about" className="nav-link">About <span className="sr-only">(current)</span></Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.defaultProps = {
    title: "My title"
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
export default Navbar;