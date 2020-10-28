import React, {Component} from 'react';
import styles from './Accordion.module.css';

class AccordionItem extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
// props passed from App.js to display a list of accordion items as a link to the stox page
    render() {
        const {link, name, products} = this.props
        return(
            <a className={styles.accordionItem} href={link}>
                <p className={styles.accordionSocks}>{name}</p>
                <p className={styles.accordionProducts}>{products} products</p>
            </a>
        )
    }
}

export default AccordionItem;