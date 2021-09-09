import React from 'react';
import "../styles/header.css"
import { GiHamburgerMenu } from 'react-icons/gi'
import { colors } from '../utilities/colors';

export default function Header(){
    return (
        <nav className="container-header">
            <div className="left">
                <GiHamburgerMenu className="menu-burger" color={colors.white} size={22}/>
                <h3 className="brand">WINE.DELIVERY</h3>
            </div>
            <div className="middle">
                <input className="input-search" placeholder="Search in Wine.Delivery"/>
                <button className="btn-search">SEARCH</button>
            </div>
            <div className="right">
                <a className="sign-up">SIGN UP</a>
                <a className="login">LOGIN</a>        
            </div>
        </nav>
    )
}