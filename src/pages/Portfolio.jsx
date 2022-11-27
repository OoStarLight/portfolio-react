import React, { Component } from 'react'
import library from '../images/library.png'
import nike from '../images/nike.png'
import niwax from '../images/niwax.png'
import swipy from '../images/swipy.png'
import './Portfolio.css'

export default class Portfolio extends Component {
    render() {
        return (
        <>
            <h2 className="text-center "> Portfolio</h2>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6 pb-5">
                        <div className="text-center">
                            <img src={swipy} className="port-img rotationLeft" alt=""/>
                            <h3 className='mt-2'>Swipy</h3>
                            
                            <a href="https://oostarlight.github.io/Swipy/" target={'_blank'} className="links">Link to project </a>                            
                        </div>
                    </div>
                    <div className="col-md-6 pb-5">
                        <div className="text-center">
                            <img src={nike} className="port-img rotationRight" alt=""/>
                            <h3 className='mt-2'>Nike Form</h3>
                            
                            <a href="https://oostarlight.github.io/form-nike/" target={'_blank'} className="links">Link to project  </a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 ">
                        <div className="text-center">
                            <img src={niwax} className="port-img rotationLeft" alt=""/>
                            <h3 className='mt-2'>Niwax</h3>
                            
                            <a href="https://oostarlight.github.io/Mehdi-lahak/" target={'_blank'} className="links">Link to project </a>
                        </div>
                    </div>
                    <div className="col-md-6 ">
                        <div className="text-center">
                            <img src={library} className="port-img rotationRight" alt=""/>
                            <h3 className='mt-2'>Library Form</h3>
                            
                            <a href="https://oostarlight.github.io/Library-Form/" target={'_blank'} className="links">Link to project</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
        )
    }
}
