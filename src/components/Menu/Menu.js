import React, {Component} from 'react';
import styles from '../MenuItem/MenuItem.module.css';

class Menu extends Component {
    // constructor(props){
    //   super(props);
    //   this.state={
    //     open: this.props.open? this.props.open:false,
    //   }
    // }
      
    // shouldComponentDidUpdate(nextProps){
    //   if(nextProps.open !== this.state.open){
    //     this.setState({open:nextProps.open});
    //   }
    // }
    
    render(){
      return(
        <div className={styles.container}>
            {this.props.children}
        </div>
      )
    }
  }

export default Menu;