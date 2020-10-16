import React, { Component } from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import MenuButton from '../components/MenuButton/MenuButton';

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      menuOpen: false,
    }
  } 


  render() {
    return (
      <div className={styles.container}>
        <Header/>
      </div>
    );
  }
}

export default App;
