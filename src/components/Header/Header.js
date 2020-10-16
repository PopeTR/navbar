import React, {Component} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import MenuButton from '../MenuButton/MenuButton';

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 13.0667vw;
    border-bottom: 1px solid rgb(229, 229, 229);
    position: relative;
    top: 0;
    background: white;
`
const StyledLogo = styled.img`
    max-width: 100%
`

const Container = styled.div`
    display: flex;
    width: 96vw;
    align-items: center;
    justify-content: space-between;
`

const Cart = styled.svg`
    fill: black;
    margin-right: 4vw;
    height: 6.0vw;
`
const Text = styled.p`
    position: absolute;
    top: -8%;
    right: 61%;
    font-size: 2.66667vw;
`
const Div = styled.div`
    position: relative;
    height: 6.0vw;
`

const Icons = styled.div`
    display: flex;
    align-items: center;
`

const Logo = styled.div`
    width: 35vw;
    padding-top: 4px;
    display: flex;
`

const Search = styled(FontAwesomeIcon)`
    margin-right: 3.6vw;
    width: 5.0vw !important;
    height: 5.0vw;
`


class Header extends Component {
    constructor(props) {
        super(props);
        this.state= {
          menuOpen: false,
        }
      } 

      handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
      }
    
      toggleMenuHandler = () => {
        const {menuOpen} = this.state
        this.setState({menuOpen:!menuOpen});
      }

    render() {
        return (
            <StyledHeader>
                <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()}/>
                <Container>
                    <Logo>
                        <StyledLogo src="https://www.wandel.nl/upload_mm/7/a/b/59ec7eba-5910-45cb-ba55-a0a7cdaf807f_LOGO%20III_zwart_1200_850x132.png" href="www.stoxenergy.com"/>
                    </Logo>
                    <Icons>
                        <Search icon={faSearch}/>
                        <Div>
                            <Cart xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16 6v-2c0-2.209-1.791-4-4-4s-4 1.791-4 4v2h-5v18h18v-18h-5zm-7-2c0-1.654 1.346-3 3-3s3 1.346 3 3v2h-6v-2zm10 18h-14v-14h3v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h6v1.5c0 .276.224.5.5.5s.5-.224.5-.5v-1.5h3v14z"/></Cart>
                            <Text>0</Text>
                        </Div>
                    </Icons>
                </Container>      
            </StyledHeader> 
        )
    }
}

export default Header;