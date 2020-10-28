import React, { Component } from 'react';
import styles from './Accordion.module.css';
import AccordionSection from './AccordionSection';

class Accordion extends Component {
  constructor(props) {
    super(props);
    const openSections = {};
    this.state = { openSections };
  }

  onClick = label => {
    const {
      state: { openSections },
    } = this;

    const isOpen = !!openSections[label];

    this.setState({
      openSections: {
        [label]: !isOpen
      }
    });
  };

  
  render() {
    const {
      onClick,
      props: { children },
      state: { openSections },
    } = this;
    
    return (
      <div className={styles.listContainer}>
        {children.map((child, index) => ( 
          <AccordionSection
            key={index}
            isOpen={!!openSections[child.props.label]}
            label={child.props.label}
            onClick={onClick}
          >
            {child.props.children}
          </AccordionSection>
        ))}

      </div>
    );
  }
}

export default Accordion;