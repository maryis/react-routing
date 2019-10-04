import React from 'react';
import { NavLink} from "react-router-dom";
import * as myConsts from './Constants'


export const MenuBar =(props) => {

    return(
        <nav className={`navbar navbar-expand-sm justify-content-center ${props.className}`}>
            <ul className="navbar-nav">

            {
                myConsts.paths.filter(item => item.title!=="Error").map((item) => {
                    return (
                        <li key={item.id} className="nav-item ">
                            <NavLink to={item.path}> {item.title}  </NavLink>
                        </li>
                    )
                })
            }

            </ul>

        </nav>
    )
}