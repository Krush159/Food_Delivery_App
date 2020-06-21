import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoFoodly from '../../Resource/logoFoodly.png';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import { connect } from 'react-redux';





class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const { logName}  = this.props
    return (
      <div >
        <div style={{ boxShadow: "5px 5px 10px grey", position: "fixed", top: 0, width: "100%", zIndex: 10000 }}>
          <Navbar color="white" expand="md">
            <Link to='/'><img src={logoFoodly} alt="" style={{ height: 40 }} /></Link>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto " navbar>
                <NavItem className="m-3">
                    <Link to='/AllProducts'>Search</Link>
                </NavItem>
                <NavItem className="m-3">
                    {logName? logName:(<Link to='/Login'>Sign In</Link>)}
                </NavItem>
                
                <NavItem className="m-3">
                    <Link to='/Cart'>Cart</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = state => ({
  logName: state.logName
  
})
export default connect(mapStateToProps)(NavbarHeader)