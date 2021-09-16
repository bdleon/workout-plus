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
                <Link className="navbar__link" to="#"
                    onClick={
                        () => {
                            localStorage.removeItem("workout_token")
                        }
                    }>
                    Logout
                </Link>
            </li>
            <li className="nav-item">
                <input id="searchTerms"

                    className="form-control w-100"
                    type="search"
                    placeholder="Search"
                    aria-label="Search" />
            </li>

        </ul>

    )
}
