import React, { Component } from 'react'
import './App.css';
//Components
import NavBar from './components/NavBar'
import HeaderImage from './components/HeaderImage'
import NewFormImage from './components/NewFormImage'
import EditFormImage from './components/EditFormImage'
import ShowPageImage from './components/ShowPageImage'


class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div>

      <HeaderImage />

      <NavBar />

      <NewFormImage />

      <EditFormImage /> 

      <ShowPageImage />

      </div>

    )
  }
}
export default App