
import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Drop from './Drop';
import Notifysearch from './Notifysearch';
import Bottom from './Bottom';
import Routes from './Routes';
export default class Event_add extends Component{
  render() {
    return (
      <div>
       
        <div className="container-fluid sb1">
          <div className="row">
          <Notifysearch></Notifysearch>


            <Drop></Drop>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              <div className="sb2-12">
                <ul>
                  <li><img src="images/placeholder.jpg" alt="" />
                  </li>
                  <li>
                    <h5>Victoria Baker <span> Santa Ana, CA</span></h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="index.html"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Add Event</a>
                  </li>
                  <li className="page-back"><a href="index.html"><i className="fa fa-backward" aria-hidden="true" /> Back</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <div className="box-inn-sp">
                  <div className="inn-title">
                    <h4>Add Event</h4>
                    <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                  </div>
                  <div className="bor">
                    <form>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="list-title" type="text" defaultValue className="validate" />
                          <label htmlFor="list-title">Event Name</label>
                        </div>
                        <div className="input-field col s12">
                          <input id="post-auth" type="date" className="validate" />
                          <label htmlFor="post-auth" />
                        </div>
                        <div className="input-field col s12">
                          <div className="file-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload Blog Banner" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <textarea id="textarea1" className="materialize-textarea" defaultValue={""} />
                          <label htmlFor="textarea1">Blog Descriptions:</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Category</label>
                        </div>
                        <div className="input-field col s12">
                          <select multiple>
                            <option value disabled selected>Choose Category</option>
                            <option value={1}>Hotels</option>
                            <option value={2}>Educations</option>
                            <option value={3}>Medical</option>
                            <option value={3}>Health</option>
                            <option value={3}>Fitness</option>
                            <option value={3}>Tution</option>
                            <option value={3}>Software</option>
                            <option value={3}>Wedding</option>
                            <option value={3}>Party</option>
                            <option value={3}>Spa/Club</option>
                          </select>
                          <label>Select Sub Category</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s12">
                          <input type="submit" className="waves-effect waves-light btn-large" defaultValue="Submit" />
                        </div>
                      </div>
                    </form>
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