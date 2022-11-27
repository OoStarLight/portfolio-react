import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import tof1 from '../images/tof1.gif'


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
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam facilis, eius
                                        voluptatibus debitis commodi ut ducimus tempora ad quisquam quidem.</p>
                                </div>
                                <a href="#About"><button className="exp"><i className="fa-solid fa-arrow-down"></i>
                                    🔎 Explore</button></a>
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
