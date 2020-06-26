import React from 'react'
import { Link } from 'react-router-dom'

export default class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

            name: '',
            email: '',
            username: '',
            password: '',
            mobile: '',

        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    handleSubmit = (e) => {
        const { name, email, username, password, mobile } = this.state
        console.log(this.state)
        e.preventDefault()
        if (name === "" || email === "" || username === "" || password === "" || mobile === "") {
            alert("Enter All Details");
            return;
        }
        if (!this.validateEmail(email)) {
            alert("Invalid Email !!!");
            return;
        }
        let User = JSON.parse(localStorage.getItem("User"))
        if (!User) {
            User = []
        }
        User.push(this.state)
        localStorage.setItem("User", JSON.stringify(User))
        this.setState({
            name: '',
            email: '',
            username: '',
            password: '',
            mobile: '',
        })
    }
    validateEmail = (email) => {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    render() {
        const { name, email, username, password, mobile } = this.state
        return (
            <>
                <div className="container rounded" style={{ height:"100vh", padding: "5px 60px", marginTop: 80, width: "550px", textAlign: "left", backgroundColor: "lightgrey", border: "1px solid grey" }}>

                    <form onSubmit={(e) => this.handleSubmit(e)}>
                        <div ><h1 style={{ fontFamily: "Cambria", textAlign: "center", color: "grey" }}>SIGN UP</h1></div>
                        <div className="form-row">
                            <div className="col-12 mb-3">
                                <label style={{ color: "grey" }}>Name</label>
                                <div className="input-group">
                                    <input
                                        name="name"
                                        value={name}
                                        type="text"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control"
                                        aria-describedby="inputGroupPrepend3"
                                        style={{ border: "1px solid grey", borderRadius: 5 }}
                                        required />
                                    <div className="invalid-feedback">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label style={{ color: "grey" }}>Email</label>
                                <div className="input-group">
                                    <input
                                        name="email"
                                        value={email}
                                        type="email"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control"
                                        aria-describedby="inputGroupPrepend3"
                                        style={{ border: "1px solid grey", borderRadius: 5 }}
                                        required />
                                    <div className="invalid-feedback">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label style={{ color: "grey" }}>Username</label>
                                <div className="input-group">
                                    <input
                                        name="username"
                                        value={username}
                                        type="text"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control"
                                        aria-describedby="inputGroupPrepend3"
                                        style={{ border: "1px solid grey", borderRadius: 5 }}
                                        required />
                                    <div className="invalid-feedback">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label style={{ color: "grey" }}>Password</label>
                                <div className="input-group">
                                    <input
                                        name="password"
                                        value={password}
                                        type="password"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control "
                                        style={{ border: "1px solid grey", borderRadius: 5 }}
                                        required />
                                    <div className="valid-feedback">

                                    </div>
                                </div>
                            </div>
                            <div className="col-12 mb-3">
                                <label style={{ color: "grey" }}>Mobile</label>
                                <div className="input-group">
                                    <input
                                        name="mobile"
                                        value={mobile}
                                        type="number"
                                        onChange={(e) => this.handleChange(e)}
                                        className="form-control"
                                        aria-describedby="inputGroupPrepend3"
                                        style={{ border: "1px solid grey", borderRadius: 5 }}
                                        required />
                                    <div className="invalid-feedback">

                                    </div>
                                </div>
                            </div>

                            <div className="form-check">
                                <input className="form-check-input is-valid" type="checkbox" value="" id="invalidCheck3" required />
                                <label className="form-check-label" >
                                    Agree to terms and conditions
                        </label>
                                <div className="invalid-feedback">
                                    You must agree before submitting.
                        </div>
                            </div>
                        </div>
                        <div style={{ textAlign: "center" }}>
                            <button className="btn btn-primary btn-block" type="submit">Submit</button>
                        </div>
                    </form>
                    <div style={{ color: "grey", textAlign: "center", marginTop: 10 }}>Already have an account? <Link to="/Login">Sign In</Link></div>
                </div>
            </>
        )
    }
}