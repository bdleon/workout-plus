import React from "react"
import { Link } from "react-router-dom"



import "./NavBar.css"

export const NavBar = () => {


    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/">Logo</Link>
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

        </ul>

    )
}
