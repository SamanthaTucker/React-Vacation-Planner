import React, { Component } from 'react'
import './App.css';
//Components
import NavBar from './components/NavBar'
import HeaderImage from './components/HeaderImage'




class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>

      <HeaderImage />
      
      <NavBar />

      </div>

    )
  }
}
export default App