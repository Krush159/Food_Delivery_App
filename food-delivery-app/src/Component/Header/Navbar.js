import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logoFoodly from '../../Resource/logoFoodly.png';
import { connect } from 'react-redux';
import './navbar.css'




class NavbarHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const { logName } = this.props
    return (
      < >
        <nav className="navbar navbar-expand-lg navbar-light bg-white" style={{ boxShadow: "5px 5px 10px grey", position: "fixed", top: 0, width: "100%", zIndex: 10000 }}>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link to='/'><img src={logoFoodly} alt="" style={{ height: 40 }} /></Link>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
              <li className="nav-item mr-5" style={{color:"rgb(141, 0, 0)", fontSize: 20}}>
                <Link to='/AllProducts' style={{color:"rgb(141, 0, 0)"}}><i class="fa fa-search" aria-hidden="true"> Search</i></Link>
              </li>
              <li className="nav-item mr-5" style={{color:"rgb(141, 0, 0)", fontSize: 20}}>
                {logName ? (<i class="fa fa-user-circle" aria-hidden="true">  {logName}</i>) : (<Link to='/Login' style={{color:"rgb(141, 0, 0)"}}><i class="fa fa-user" aria-hidden="true">  Sign In</i></Link>)}
              </li>
              <li className="nav-item mr-5" style={{color:"rgb(141, 0, 0)", fontSize: 20}}>
                <Link to='/Cart'><i class="fa fa-cart-plus" style={{color:"rgb(141, 0, 0)"}} aria-hidden="true">  Cart</i></Link>
                {logName ? (<span className='badge badge-warning' id='lblCartCount'> 0 </span>):""}
              </li>
            </ul>
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