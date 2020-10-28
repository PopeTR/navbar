import React, {Component} from 'react';
import styles from './Menu.module.css';

class Menu extends Component {
    
    render(){
      return(
        <div className={styles.container}>
            {this.props.children}
        </div>
      )
    }
  }

export default Menu;