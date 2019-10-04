import React from 'react';
import {Link} from "react-router-dom";
import * as myConsts from "./Constants";



export const SlideBar = (props) => {

    return (
        <nav className="navbar  bg-dark h-100 align-content-lg-start">

            <ul className="navbar-nav" >

                {
                    myConsts.paths.filter(item => item.title!=="Error").map((item) => {
                        return (
                            <li key={item.id} className="nav-item ">
                                <Link to={item.path}> {item.title}  </Link>
                            </li>
                        )
                    })
                }
            </ul>

        </nav>
    )
}