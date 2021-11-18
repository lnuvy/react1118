import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, About, Movie, NotFound } from './pages'
import Sidebar from './front/Sidebar'
import Button from './front/Button'
import Menu from './front/Menu'

export default class App extends Component {
  homeMenu = [
    {
      url: '/',
      name: 'HOME'
    },
    {
      url: '/about',
      name: 'ABOUT'
    },
    {
      url: '/movies',
      name: 'Movie'
    },
  ]

  state = {
    toggle: true,
    open: false,
  }

  // 다크모드 토글
  toggleScreenMode = () => {
    this.setState({ toggle: !this.state.toggle })
  }
  
  // 사이드바 토글
  showSidebar = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { toggle, open } = this.state
    const { homeMenu } = this

    return (
      <div className={`App normal ${toggle ? "" : "dark"}`}>
        
        <Sidebar open={open}>
        <Menu menus={homeMenu}></Menu>
        </Sidebar>
        <Button handleClick={this.toggleScreenMode} position="gooseok">{ toggle ? "DARK" : "LIGHT" }</Button>
        <Button handleClick={this.showSidebar} position="gooseok2">Menu</Button>
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/movies" element={<Movie/>}>
            <Route path=":movieId" element={<Movie/>}/>
          </Route>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    )
  }

}
