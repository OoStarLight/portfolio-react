import React, { Component } from 'react'
import { FaInstagram } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './Contact.css'



export default class Contact extends Component {
    render() {
        return (
        <>
            <h2 className="text-center"><span>CONTACT ME</span></h2>
            <div className='container'>
                <div className='row'>
                    <div className="col-md-6 " data-aos="fade-down" data-aos-duration="1500">
                            <form>
                                
                                <input type="text" placeholder="Full Name" className="inp"/>
                                <input type="email" placeholder="E-mail" className="inp"/>
                                <textarea placeholder="Message ..." id="" cols="30" rows="10" className="ta"></textarea>
                            </form>
                            <button className="submit"><i className="fa-solid fa-paper-plane"></i> Submit</button>
                    </div>
                    <div className="col-md-6 ps-5" data-aos="fade-up" data-aos-duration="1200">
                            <div className="hov">
                                <a href="https://www.instagram.com/lahak_elmehdi/?hl=fr">
                                    <FaInstagram className='insta'/></a>
                                <span className="instaT"></span>
                            </div>
                            <div className="hov"><a href="https://www.linkedin.com/in/mehdi-lahak-b87775193/">
                                <FaLinkedin className='insta'/></a>
                                <span className="instaT"></span>
                            </div><div className="hov"><a href="https://github.com/OoStarLight">
                                <FaGithub className='insta'/></a>
                                <span className="instaT"></span>
                            </div>

                        </div>
                </div>

            </div>
        </>
        )
    }
}
