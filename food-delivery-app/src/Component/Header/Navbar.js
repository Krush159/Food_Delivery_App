import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoFoodly from '../../Resource/logoFoodly.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

const links = [

  { to: '/Login', text: 'Sign in' },
  { to: '/Cart', text: 'Cart'}
];

const createNavItem = ({ to, text, className }) => (
  <NavItem className="m-3" key={text}>
    <Link to={to}>{text}</Link>
  </NavItem>
);

export default class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };

    
  }

  toggle=()=> {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {
    return (
      <div >
        <div style={{boxShadow:"5px 5px 10px grey", position:"fixed", top: 0, width: "100%", zIndex:10000}}>
        <Navbar color="white"  expand="md">
          <NavbarBrand ><Link to='/'><img src={logoFoodly} alt="" style={{height:60}}/></Link></NavbarBrand>
          <Nav><input placeholder="Search Restaurant or Cuisine"/> <button>Search</button></Nav>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
                
              {links.map(createNavItem)}
            </Nav>
          </Collapse>
        </Navbar>
        </div>
      </div>
    );
  }
}