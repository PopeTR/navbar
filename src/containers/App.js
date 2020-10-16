import React, { Component } from 'react';
import Header from '../components/Header/Header';
import MenuItem from '../components/MenuItem/MenuItem';
import Menu from '../components/Menu/Menu';
import MenuButton from '../components/MenuButton/MenuButton';
import styled from 'styled-components';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 13.0667vw;
    border-bottom: 1px solid rgb(229, 229, 229);
    position: relative;
    top: 0;
    background: white;
`

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      menuOpen: false,
    }
  } 

  handleMenuClick() {
    const doesShow = this.state.menuOpen;
    this.setState({menuOpen:!doesShow});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }


  render() {
    const menu = ['All Socks','Daily','Sports','Travel','Medical']
    const menuItems = menu.map((val,index)=>{
      return (
        <MenuItem 
          key={index} 
          onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)   
    });
    
    return (
      <div>
        <StyledHeader>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()}/>
            <Header/>
        </StyledHeader>
        { this.state.menuOpen ?
          <Menu>
            <Carousel/>
            {menuItems}
            <Footer/>
            </Menu> 
          : null }
          
      </div>
    );
    
  }
}

export default App;
