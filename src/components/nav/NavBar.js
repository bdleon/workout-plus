import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/posts">Logo</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/category">category</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Logout</Link>
            </li>
        </ul>
    )
}
