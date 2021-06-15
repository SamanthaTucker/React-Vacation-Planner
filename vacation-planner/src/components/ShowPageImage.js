import React, { Component } from 'react'

// React Bootstrap Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export default class ShowPageImage extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='header-img-div'>
                <Container fluid className='h2-div' >
                <h2 class='h2-title'>Serendipity: <br></br> (n.) finding something good without looking for it</h2>
                </Container>
                <Image src="https://images.unsplash.com/photo-1527856263669-12c3a0af2aa6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" fluid />
            </div>
        )
    }

}