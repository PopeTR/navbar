import React, { Component } from 'react';
import Header from '../components/Header/Header';
import axios from 'axios';
import Menu from '../components/Menu/Menu';
import MenuButton from '../components/MenuButton/MenuButton';
import styles from './App.module.css';
import Carousel from '../components/Carousel/Carousel';
import Footer from '../components/Footer/Footer';
import Accordion from '../components/Accordion/Accordion';
import AccordionItem from '../components/Accordion/AccordionItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      menuOpen: false,
      socks: []
    }
  } 

  componentDidMount(){
    axios
    .get('https://navbar-askphill.firebaseio.com/.json')
    .then(response => {
      this.setState({socks: response.data})
    }).catch(error => console.log(error))
  }

  handleMenuClick() {
    const doesShow = this.state.menuOpen;
    this.setState({menuOpen:!doesShow});
  }
  
  handleLinkClick() {
    this.setState({menuOpen: false});
  }


  render() {
    const{socks}=this.state
    const allSocks = socks.filter(sock => sock.menu === "All Socks")
    const dailySocks = socks.filter(sock => sock.menu === "Daily")
    const sportSocks = socks.filter(sock => sock.menu === "Sports")
    const travelSocks = socks.filter(sock => sock.menu === "Travel")
    const medicalSocks = socks.filter(sock => sock.menu === "Medical")
    
    return (
      <div>
        <div className={styles.styledheader}>
            <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()}/>
            <Header/>
        </div>

        { this.state.menuOpen ?
          
          <Menu>
            <Carousel/>
            <Accordion>
              <div label='All Socks'>
                { allSocks.map((sock) => 
                  <AccordionItem
                    key={sock.id}
                    name={sock.name}
                    products={sock.products}
                    link={sock.link} 
                  />)
                }
              </div>

              <div label='Daily'>
                { dailySocks.map((sock) => 
                  <AccordionItem
                    key={sock.id}
                    name={sock.name}
                    products={sock.products}
                    link={sock.link}  
                  />)
                }
              </div>

              <div label='Sports'>
                { sportSocks.map((sock) => 
                  <AccordionItem
                    key={sock.id}
                    name={sock.name}
                    products={sock.products}
                    link={sock.link} 
                  />)
                }
              </div>

              <div label='Travel'>
                { travelSocks.map((sock) => 
                  <AccordionItem
                    key={sock.id}
                    name={sock.name}
                    products={sock.products}
                    link={sock.link}  
                  />)
                }
              </div>

              <div label='Medical'>
                {medicalSocks.map((sock) => 
                  <AccordionItem
                    key={sock.id}
                    name={sock.name}
                    products={sock.products} 
                    link={sock.link} 
                  />)
                }
              </div>
            </Accordion>
            <Footer/>
          </Menu> 
        : null }  
      </div>
    );   
  }
}

export default App;
