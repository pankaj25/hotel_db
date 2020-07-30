import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MDBAlert } from "mdbreact";
import "./LoginPrad.css";

import Navbar2 from "./Navbar2";
class LoginPrad extends Component {
	constructor(props) {
		super(props);

		if (localStorage.usertoken) {
			this.props.history.push(`/`);
		}
		this.state = {
			email: "",
			password: "",
			errors: []
		};
	}

	handleEmail = event => {
		this.setState({
			email: event.target.value
		});
	};

	handlePassword = event => {
		this.setState({
			password: event.target.value
		});
	};

	handleSubmit = event => {
		event.preventDefault();
// ---------------------------------
// this.props.history.push(`/`);	
// --------------------------------
		try {
			axios
				.post("users/login", {
					email: this.state.email,
					password: this.state.password
				})
				.then(response => {
					console.log("ress - " + response.message);

					if (response.data === "Error: Wrong Email/Password") {
						console.log("Login failed");
						let arr = [];
						arr.push(response.data);

						this.setState({
							errors: arr
						});
					} else if (response.data) {
						console.log(response.data.message);
						localStorage.setItem("usertoken", response.data.token);
						this.props.history.push(`/`);
					}
				})
				.catch(err => {
					console.log(err);
				});
		} catch (e) {
			console.log("Error in Login");
			console.log(e);
		}
	};

	render() {
		// ------------------- this code use for facebook and google login-------------------------
	

		let success = false;

		if (this.props.location.state && this.props.location.state.success) {
			success = true;
		}

		const successMessage = (
			<MDBAlert color="success">Registration successful</MDBAlert>
		);

		const err = (
			<MDBAlert color="danger">
				{this.state.errors.map((error, i) => (
					<p key={i}>{error}</p>
				))}
			</MDBAlert>
		);

		return (
			<React.Fragment>
				<Navbar2 source="login" />
				<div className="spacer" />

				<div className="main" style={{backgroundColor:'red'}}>
					<div className="detailsform" style={{backgroundColor:'red'}}>
						<div className="select">
							<Link
								to="/login"
								style={{ textDecoration: "none" }}
							>
								<div className="LoginTopLoginButton">
									Admin Log In
								</div>
							</Link>
						</div>

						{success && successMessage}
						{this.state.errors.length !== 0 ? (
							err
						) : (
							<div style={{ height: "5vh" }} />
						)}

						{/* <div style={{height: "5vh"}} /> */}

						<form className="form-group">
							<input
								className="inputBox"
								type="email"
								placeholder="Your Address"
								onChange={this.handleEmail}
								// style={{'border-bottom': '1px solid red',
								// 	'background-color': 'white'}}
							/>
							<br />
							<br />
							<input
								className="inputBox"
								type="password"
								placeholder="Your Password"
								onChange={this.handlePassword}
								// style={{'border-bottom': '1px solid red',
								// 	'background-color': 'white'}}
							/>
							<br />
							<br />
							<div className="remember">
								<input type="checkbox" id="rememberme" />
								<label for="rememberme" className="align">
									Remember Me
								</label>
								{/* <span className="align"></span> */}
								<span>Forgot your password?</span>
							</div>
							<br />

							<div className="loginContainer">
								<div style={{backgroundColor:'white',color:'red'}}
									className="loginButton"
									onClick={this.handleSubmit}
								>
									Log In
								</div>
							</div>

							<br />
							<br />

							<div className="or">
                                <div className="line" />
                                <span>Sign in with social network</span>
                                <div className="line" />
                            </div>
						</form>

					
					</div>
				</div>
				{/* <FooterPage /> */}
			</React.Fragment>
		);
	}
}

export default LoginPrad;
