import React, { Component } from 'react'
import tof2 from '../images/tof2.gif'
import './About.css'



export default class About extends Component {
    render() {
        return (
            <div className="bg1">
            <div className="container ">
                <div className="row">
                    <h2 className="text-center cn"><span>ABOUT ME</span> <i
                            className="fa-solid fa-circle circ"></i></h2>
                    <div className="col-md-7" data-aos="fade-right" data-aos-duration="1500">
                        <div className="t1">
                            <p className="hi">* Hi, I'm<span> Mehdi</span> </p>
                        </div>
                        <div className="t2">
                            <p className="hii">* I'm <span>25 Y.O</span> </p>
                        </div>
                        <div className="t3">
                            <p className="hii">* Passionate by <span>web dev!</span> </p>
                        </div>

                        <a href="https://www.instagram.com/lahak_elmehdi/?hl=fr" target="_blank"><button className="git">📷  Instagram</button></a>
                    </div>
                    <div className="col-md-5 animation" data-aos="fade-left" data-aos-duration="1200">
                        <img src={tof2} className="w-100" alt=""/>
                    </div>

                </div>
            </div>

        </div>
        )
    }
    }
