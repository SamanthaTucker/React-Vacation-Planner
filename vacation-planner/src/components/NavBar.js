import React, { Component } from 'react'

// React Bootstrap Imports
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'



export default class NavBar extends Component {

    constructor(props){
        super(props)
    }

    render(){
        return(
            <div className='navbar-div'>
                <Nav className='nav-ul' defaultActiveKey="/home" as="ul">
                <Nav.Item as="li">
                    <Nav.Link className='nav-link' href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='nav-link' eventKey="link-1">Locations</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='nav-link' eventKey="link-2">Hotels</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='nav-link' eventKey="link-2">Flights</Nav.Link>
                </Nav.Item>
                <Nav.Item as="li">
                    <Nav.Link className='nav-link' eventKey="link-2">Travel Notes</Nav.Link>
                </Nav.Item>
                <div className='navbtn-div'>
                <Button className='nav-btn' variant="outline-light">Start Planning</Button>{' '}
                </div>
                </Nav>
            </div>
        )
    }

}