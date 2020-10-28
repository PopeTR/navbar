import React, {Component} from 'react';
import styles from './Menu.module.css';

class Menu extends Component {
    // Menu container for all children items when menu is open
  render(){
    return(
      <div className={styles.container}>
        {this.props.children}
      </div>
    )
  }
}

export default Menu;