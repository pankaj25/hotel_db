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

export default class Ui_preload extends Component{
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
             
              <Routes></Routes>
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Ui Form</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Loading Bar</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="progress">
                          <div className="determinate" style={{width: '70%'}} />
                        </div>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Loading Progress Bar Animated</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="progress">
                          <div className="indeterminate" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 sp-top-30">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Loading Bar Animated</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="row">
                          <div className="col s12 m4">
                            <div className="preloader-wrapper big active">
                              <div className="spinner-layer spinner-blue-only">
                                <div className="circle-clipper left">
                                  <div className="circle" />
                                </div>
                                <div className="gap-patch">
                                  <div className="circle" />
                                </div>
                                <div className="circle-clipper right">
                                  <div className="circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col s12 m4">
                            <div className="preloader-wrapper active">
                              <div className="spinner-layer spinner-red-only">
                                <div className="circle-clipper left">
                                  <div className="circle" />
                                </div>
                                <div className="gap-patch">
                                  <div className="circle" />
                                </div>
                                <div className="circle-clipper right">
                                  <div className="circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col s12 m4">
                            <div className="preloader-wrapper small active">
                              <div className="spinner-layer spinner-green-only">
                                <div className="circle-clipper left">
                                  <div className="circle" />
                                </div>
                                <div className="gap-patch">
                                  <div className="circle" />
                                </div>
                                <div className="circle-clipper right">
                                  <div className="circle" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
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
      </div>
    );
  }
}