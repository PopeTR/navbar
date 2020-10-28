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

  onClick = () => {
    const {dropdown} = this.state
    this.props.onClick(this.props.label);
    this.setState({dropdown: !dropdown})
  };

  render() {
      const {dropdown} = this.state
    const {
      onClick,
      props: { isOpen, label },
    } = this;

    return (
      <div className={styles.accordionContainer} onClick={onClick}>
        <div className={styles.label}>
          {label}
          <div className={styles.accordionChevronContainer}>
            <Chevron className={styles.accordionChevron} dropdown={dropdown}/> 
          </div>
        </div>
        { isOpen && (
          <div className={styles.accordionOpen}>
            {this.props.children}
          </div>
        )}
      </div>
    );
  }
}

export default AccordionSection;