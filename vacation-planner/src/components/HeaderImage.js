import React, { Component } from 'react'

// React Bootstrap Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export default class HeaderImage extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header-img-div'>
                <Container fluid className='h2-div' >
                <h2 className='h2-title'>Wanderlust: <br></br> (n.) a strong desire for or impulse to <br></br> wander or travel and explore the world</h2>
                </Container>
                <Image src="https://images.unsplash.com/photo-1504609773096-104ff2c73ba4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" fluid />
            </div>
        )
    }

}