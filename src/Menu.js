import React from 'react';
import {Link} from 'react-router-dom';
import {CustomMenu} from "./utility";

export const Menu = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <a href="/">Home</a>
                    <a href="/call">Call</a>
                    <a href="/asdfghjkl">Not Found</a>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/call">Call</Link>
                    <Link to="/asdfghjkl">Not Found</Link>
                </li>
            </ul>

            <ul>
                <li>
                    <CustomMenu path={'/'} exact label='Home'/>
                </li>
                <li>
                    <CustomMenu path={'/call'} exact label='Call'/>
                </li>
                <li>
                    <CustomMenu path={'/asdfghjkl'} exact label='Not Found'/>
                </li>
            </ul>

        </div>
    )
};