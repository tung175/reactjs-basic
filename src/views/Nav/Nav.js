import React from "react";
import './Nav.scss'
import {
    Link, NavLink,
  } from "react-router-dom";
class Nav extends React.Component{
    render(){
        return (
            <>
                <div className="topnav">
                    <NavLink to="/" activeClassName="active" exact={true}>
                    Home
                    </NavLink>
                    <NavLink to="/Example" activeClassName="active">
                    Example
                    </NavLink>
                    <NavLink to="/Todos" activeClassName="active">
                    Todos
                    </NavLink>
                    <NavLink to="/User" activeClassName="active">
                    Users
                    </NavLink>
                </div>
            </>
        )
    }
}

export default Nav