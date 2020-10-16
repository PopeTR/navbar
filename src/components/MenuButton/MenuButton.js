import React, { Component } from 'react';


class MenuButton extends Component {
    constructor(props){
        super(props);
        this.state= { 
          open: this.props.open? this.props.open:false,
        }
    }  

    UNSAFE_componentWillReceiveProps(nextProps){
        if(nextProps.open !== this.state.open){
          this.setState({open:nextProps.open});
        }
    }
    
    handleClick(){
        this.setState({open:!this.state.open});
    }

    render(){
        const styles = {
            container: {
              height: '4.8vw',
              display:'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'pointer',
              padding: '4vw',
              background: 'white',
            },

            line: {
              height: '2px',
              width: '20px',
            },

            lineTop: {
              transform: this.state.open ? 'rotate(45deg)':'none',
              transformOrigin: 'top left',
              marginBottom: '5px',
              backgroundColor: 'black',
            },

            lineMiddle: {
              opacity: this.state.open ? 0: 1,
              transform: this.state.open ? 'translateX(-16px)':'none',
              backgroundColor: 'black'
            },

            lineBottom: {
              transform: this.state.open ? 'translateX(-1px) rotate(-45deg)':'none',
              transformOrigin: 'top left',
              marginTop: '5px',
              backgroundColor: 'black'
            },  

          }

        return(
            
            <div style={styles.container} 
                onClick={this.props.onClick ? this.props.onClick: 
                ()=> {this.handleClick();}}>
                <div style={{...styles.line,...styles.lineTop}}/>
                <div style={{...styles.line,...styles.lineMiddle}}/>
                <div style={{...styles.line,...styles.lineBottom}}/>
            </div>
        )
    }
};

export default MenuButton;