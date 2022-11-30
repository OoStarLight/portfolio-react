import React, { Component } from 'react'
import "./Header.css";
import { Link } from 'react-router-dom'
import { FaCircle } from 'react-icons/fa';

export default class Header extends Component {




    render() {
        return (
        <>
        <header className="d-flex justify-content-around">
            <span className="logo"><Link to="/" >Mehdi  <FaCircle className='dot'/> </Link></span>

                <nav>
                    <ul>
                        <li className="mx-4 "><Link to="/" className="text-decoration-none text-dark">Home</Link></li>
                        <li className="mx-4 "><Link to="/About" href="#About" className="text-decoration-none text-dark">About</Link></li>
                        <li className="mx-4 "><Link to="/Portfolio" className="text-decoration-none text-dark">Portfolio</Link></li>
                        <li className="mx-4 "><Link to="/Contact" className="text-decoration-none text-dark">Contact me</Link></li>
                    </ul>
                </nav>

        </header>

        </>
        )
    }
}
