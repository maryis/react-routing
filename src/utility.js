import React from 'react';
import {Route, Link} from 'react-router-dom';


export const CustomMenu = props => (
    <Route
        path={props.path}
        exact={props.exact}
        children={({match})=>{
            return (
                !match ?
                    <Link to={props.path} className={match ? 'text-danger':'text-info'}>{props.label}</Link>
                    :
                    <span>{props.label}</span>
            )
        }}
    />
);