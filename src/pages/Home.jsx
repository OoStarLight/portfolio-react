import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import tof1 from '../images/tof1.gif'
import {FaPeriscope} from 'react-icons/fa';
import { Link } from 'react-router-dom'

    export default class Home extends Component {







    render() {
        return (
        <>
            
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 ">
                                
                                <div className="catchyTitle">
                                    <h1 >Welcome to the party !</h1>
                                </div>
                                <div className="para">
                                    
                                </div>
                                <Link to="/About"><button className="exp">
                                <FaPeriscope className='periscope paper'/> Explore</button></Link>
                            </div>
                            <div className="col-md-6">
                                <img src={tof1} className="w-75" alt=""/>
                            </div>

                        </div>
                    </div>
                    {/* <button className="navigator">
                        
                        <span classNameName="up"><a href="#Home">up!</a></span>

                    </button> */}

                
        </>
        )
    }
    }
