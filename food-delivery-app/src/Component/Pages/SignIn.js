import React from 'react'
import {Link,Redirect} from 'react-router-dom'
import { connect } from "react-redux"
import { loggedInUserName } from "../../Redux/action"

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: '',
            auth:false,
            notAuth:false
        }
    }
    handleChange = (e) => {
        
        this.setState({
            [e.target.name] : e.target.value,
            notAuth:false
        });
    }
    handleSubmit = (e)=>{
        const { username, password } = this.state
        e.preventDefault();
        var userData = JSON.parse(localStorage.getItem("User"))
        if (userData===null){
            this.setState({
                notAuth:true
            },()=>{})
        }
        for(let i=0; i < userData.length; i++){
            if(userData[i].username === username && userData[i].password === password){
                this.setState({
                    auth:true,
                    notAuth:false
                },()=>{})
                this.props.loggedInUserName(userData[i].username)
            }
            else{
                this.setState({
                    notAuth:true
                },()=>{})
            }
        }
    }
    render() {
        const { username, password, notAuth } = this.state
        const {auth} = this.state
        if(auth){
            return(
                <Redirect to='/AllProducts'/>
            )
        }
        else{
            return (
                <>
                    <div className="container p-5 rounded" style={{marginTop: 100,width:"450px", textAlign:"left", backgroundColor: "lightgrey", border: "1px solid grey"}}>

                        <form onSubmit={(e)=>this.handleSubmit(e)}>
                            <div ><h1 style={{fontFamily:"Cambria", textAlign:"center", color:"grey"}}>SIGN IN</h1></div>
                            <div className="form-row">
                                <div className="col-12 mb-3">
                                    <label for="validationServerUsername" style={{color:"grey"}}>Username</label>
                                    <div className="input-group">
                                        <input
                                            name = "username"  
                                            value = {username} 
                                            type="text"
                                            onChange={(e) => this.handleChange(e)} 
                                            className="form-control" 
                                            aria-describedby="inputGroupPrepend3"
                                            style={{border: "1px solid grey", borderRadius: 5}} 
                                            required />
                                        <div className="invalid-feedback">
                                            
                                    </div>
                                    </div>
                                </div>
                                <div className="col-12 mb-3">
                                    <label for="validationServer01" style={{color:"grey"}}>Password</label>
                                    <input
                                        name = "password"  
                                        value = {password}
                                        type="password"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control "
                                        style={{border: "1px solid grey", borderRadius: 5}} 
                                        required />
                                    <div className="valid-feedback">
                                        
                                </div>
                                </div>

                                <div className="form-check">
                                    <input className="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" required />
                                    <label className="form-check-label" for="invalidCheck3">
                                        Agree to terms and conditions
                                </label>
                                    <div className="invalid-feedback">
                                        You must agree before submitting.
                                </div>
                                </div>
                            </div>
                            <div style={{textAlign:"center"}}>
                                <button className="btn btn-primary btn-block" type="submit">Submit</button>
                            </div>
                        </form>
                        <div style={{ color:"grey", textAlign:"center", marginTop:10}}>Not a member yet? <Link to="/SignUp">Sign Up</Link></div>
                        {notAuth?(<div style={{border: "1px solid red", padding:10, color:"red", textAlign: "center"}}>
                            <h5>Invalid Credentials !</h5>
                            </div>):""}
                    </div>
                </>
            )
        }
    }
}

const mapDispatchToProps= dispatch => ({
    loggedInUserName: (payload) => (dispatch(loggedInUserName(payload)))
})
export default connect(null,mapDispatchToProps)(SignIn)