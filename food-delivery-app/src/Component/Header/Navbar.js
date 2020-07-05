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
    const { logName } = this.props
    return (
      < >
        {/* <div style={{ boxShadow: "5px 5px 10px grey", position: "fixed", top: 0, width: "100%", zIndex: 10000 }}>
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
        </div> */}
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ boxShadow: "5px 5px 10px grey", position: "fixed", top: 0, width: "100%", zIndex: 10000 }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/'><img src={logoFoodly} alt="" style={{ height: 40 }} /></Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item mr-3">
                <Link to='/AllProducts'>Search</Link>
              </li>
              <li className="nav-item mr-3">
                {logName ? logName : (<Link to='/Login'>Sign In</Link>)}
              </li>
              <li className="nav-item mr-3">
                <Link to='/Cart'>Cart</Link>
              </li>
            </ul>
            {/* <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </nav>

      </>
    );
  }
}
const mapStateToProps = state => ({
  logName: state.logName

})
export default connect(mapStateToProps)(NavbarHeader)