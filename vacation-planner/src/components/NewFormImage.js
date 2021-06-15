import React, { Component } from 'react'

// React Bootstrap Imports
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'


export default class NewFormImage extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='newform-img-div'>
                <Container fluid className='h2-div' >
                <h2 class='h2-title'>Dérive: <br></br> <small>(Origin: french)</small> <br></br> A spontaneous and unplanned journey where the traveller is guided by the landscape and architechture</h2>
                </Container>
                <Image src="https://images.unsplash.com/photo-1418854982207-12f710b74003?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" fluid />
            </div>
        )
    }

}