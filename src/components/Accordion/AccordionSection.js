import React, { Component } from 'react';
import styles from './Accordion.module.css';
import Chevron from './Chevron';

class AccordionSection extends Component {
    constructor(props) {
        super(props);
        this.state= {
          dropdown: false
        }
      } 
// Dropdown prop passed to the chevron to determine whether the AccordionSection has been clicked. 
  onClick = () => {
    const {onClick, label} = this.props
    const {dropdown} = this.state
    // On click of label, set dropdown state to opposite. 
    onClick(label);
    this.setState({dropdown: !dropdown})
  };

  render() {
      const {dropdown} = this.state
      const {children} = this.props
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      // Accordion container for each section
      // label received from Accordion
      // Chevron displayed next to label as a flexbox
      // If the accordion is open then display the children which come from Accordion.js
      <div className={styles.accordionContainer} onClick={onClick}>
        <div className={styles.label}>
          {label}
          <div className={styles.accordionChevronContainer}>
            <Chevron className={styles.accordionChevron} dropdown={dropdown}/> 
          </div>
        </div>
        { isOpen && (
          <div className={styles.accordionOpen}>
            {children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;