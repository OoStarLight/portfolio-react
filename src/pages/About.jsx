import React, { Component } from 'react'
import tof2 from '../images/tof2.gif'
import { FaLinkedin } from 'react-icons/fa';
import './About.css'




export default class About extends Component {
    render() {
        return (
            <div className="bg1">
            <div className="container ">
                <div className="row pt-">
                    <h2 className="text-center pt-5 pb-5">ABOUT ME</h2>
                    <div className="col-md-7">
                        <div className="t1">
                            <p className="hi">* Hi, I'm<span className='marked'> Mehdi</span> </p>
                        </div>
                        <div className="t2">
                            <p className="hii">* I'm <span className='marked'>25 Y.O</span> </p>
                        </div>
                        <div className="t3">
                            <p className="hii">* Passionate by <span className='marked'>web dev!</span> </p>
                        </div>

                        <a href="https://www.instagram.com/lahak_elmehdi/?hl=fr" target="_blank"><button className="git"> <FaLinkedin className='paper'/>  LinkedIn</button></a>
                    </div>
                    <div className="col-md-5">
                        <img src={tof2} className="w-100" alt=""/>
                    </div>

                </div>
            </div>

        </div>
        )
    }
    }
