import './App.css';
import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom'
import { Home, About, NotFound, Post } from './pages'
import Button from './Button'
import Menu from './Menu'
import Sidebar from './Sidebar';

class App extends Component {
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
      url: '/posts',
      name: 'POST'
    },
  ]

  state = {
    toggle: true,
    open: false,
  }

  toggleScreenMode = () => {
    this.setState({ toggle: !this.state.toggle })
  }

  showSidebar = () => {
    this.setState({ open: !this.state.open })
  }


  render() {
    const { toggle, open } = this.state
    const { homeMenu } = this

    return (
      <div className={`App normal ${toggle ? "" : "dark"}`}>
        <Button handleClick={this.showSidebar}>Menu</Button>
        <Sidebar open={open}>
        <Menu menus={homeMenu}></Menu>
        </Sidebar>
        <Button handleClick={this.toggleScreenMode} position="gooseok">{ toggle ? "DARK" : "LIGHT" }</Button>
        
        
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/about" element={<About/>}/>
          <Route path="/posts" element={<Post/>}>
            <Route path=":postId" element={<Post/>}/>
          </Route>
          <Route exact path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    )
  }
}
export default App;