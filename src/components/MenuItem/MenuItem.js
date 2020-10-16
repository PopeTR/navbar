import React, {Component} from 'react';
import styles from './MenuItem.module.css';

class MenuItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    
    render() {
        return(
            <div className={styles.containerItem} onClick={this.props.onClick}>
                <p>{this.props.children}</p>
            </div>  
        )
    }
}

export default MenuItem;