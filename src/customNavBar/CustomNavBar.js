import React from 'react'
import {NavLink} from 'react-router-dom';
import {Navbar,Nav,NavItem,Jumbotron,Image} from 'react-bootstrap'




const customNavBar = (props) => {
    
    return (
        <React.Fragment>
            <Navbar inverse collapseOnSelect style={{marginBottom:'-18px'}}>
            <Navbar.Header style={{marginLeft:'-2%'}}>
                <Navbar.Brand >
                <a href="#brand">Travel Blog</a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} >
                        <NavLink to="/" 
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color:'orange',
                                    fontWeight:'bold',
                                    textDecoration:'none'
                                }}> Home
                        </NavLink>
                    </NavItem>
                    <NavItem eventKey={2} >
                        <NavLink to="/about" activeStyle={{
                                    color:'orange',
                                    fontWeight:'bold',
                                    textDecoration:'none'
                                }}> About </NavLink>
                    </NavItem>
                    <NavItem eventKey={3} >
                    <NavLink to="/News" activeStyle={{
                                    color:'orange',
                                    fontWeight:'bold',
                                    textDecoration:'none'
                                }} >News </NavLink>
                    </NavItem>
                </Nav>
            </Navbar.Collapse>
            </Navbar>
            <Jumbotron style={{height:"410px"}}>
                    <Image src={props.person}   style={{ marginLeft:"-4.7%",marginTop:'-4%',width:'1363px',height:'410px'}} rounded />
            </Jumbotron>            
        </React.Fragment>
    )

}

export default customNavBar;