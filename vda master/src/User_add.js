import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Bottom from './Bottom';
import Axios from 'axios'

export default class  User_add extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email:"",
      contactNumber: "",
      password: "",
      confirmPassword: "",
      error: "",
      color: 'red'
    }
  }

  onChange = ( event ) => {
    console.log(event.target.name, event.target.value)
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  submit = async ( event ) => {
    event.preventDefault()
    if (
      this.state.name === "" ||
      this.state.email === "" ||
      this.state.contactNumber === "" ||
      this.state.password === "" ||
      this.state.confirmPassword === ""
    ) {
      this.setState({
        color: "red",
        message: "Please fill all the fields",
      })
    } else if (this.state.password !== this.state.confirmPassword) {

      this.setState({
        color: "red",
        message: "Passwords dont match"
      })
    } else {

      let { name, email, contactNumber, password } = this.state;
      let addData = { name, email, contactNumber, password };
      let response = await Axios.post("/admin/addUser", addData);
      if (response.data.status === "success") {
        this.setState({
          color: "green",
          message: "User added successfully",
          name: "",
          email: "",
          contactNumber: "",
          password: "",
          confirmPassword: "",
        });
      } else {

        this.setState({
          color: "red",
          message: response.data.error,
        });
      }
    }

    return false
  }
  render() {
    return (
      <div>
        
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
         <Notifysearch></Notifysearch>
         <Drop></Drop>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              
              {/*== LEFT MENU ==*/}
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                  </li>
                  <li className="active-bre"><Link to="#">Add User</Link>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Add New User</h4>
                        {this.state.message !== "" && <p style={{textAlign: "center", color:this.state.color}}>{this.state.message}</p>}
                      </div>
                      <div className="tab-inn">
                        <form>
                        <div className="row">
                            
                            <div className="input-field col s12">
                              <input id="name" type="text" name="name" required={true} value={this.state.name} onChange={this.onChange} className="validate" />
                              {this.state.name === "" && <label htmlFor="name">Name</label>}
                            </div>
                          </div>
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="phone" type="text" name="contactNumber" required value={this.state.contactNumber} onChange={this.onChange} className="validate" />
                              {this.state.contactNumber === "" && <label htmlFor="phone">Contact Number</label>}
                            </div>
                            <div className="input-field col s12">
                              <input id="email" type="email" name = "email" required value={this.state.email} onChange={this.onChange} className="validate" />
                              {this.state.email === "" && <label htmlFor="email">Email</label>}
                            </div>
                          </div>
                          
                          <div className="row">
                            <div className="input-field col s6">
                              <input id="password" type="password" name="password" required value={this.state.password} onChange={this.onChange} className="validate" />
                              {this.state.password === "" && <label htmlFor="password">New Password</label>}
                            </div>
                            <div className="input-field col s6">
                              <input id="password1" type="password" name="confirmPassword" required value={this.state.confirmPassword} onChange={this.onChange} className="validate" />
                              {this.state.confirmPassword === "" && <label htmlFor="password1">Confirm New Password</label>}
                            </div>
							
                          </div>
                          
                          <div className="row">
                            <div className="input-field col s12">
                              <input type="submit" onClick={this.submit} className="waves-effect waves-light btn-large" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*== BOTTOM FLOAT ICON ==*/}
        <Bottom></Bottom>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
}