import React, {Component} from 'react';
import styles from './Accordion.module.css';

class AccordionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <a className={styles.accordionItem} href={this.props.link}>
                <p className={styles.accordionSocks}>{this.props.name}</p>
                <p className={styles.accordionProducts}>{this.props.products} products</p>
            </a>
        )
    }
}

export default AccordionItem;