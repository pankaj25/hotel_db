import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';
import Bottom from './Bottom';

export default class Ui_kit extends  Component{
  render() {
    return (
      <div>
        

        
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <Notifysearch></Notifysearch>
           <Drop></Drop>
          </div>
        </div>
        
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
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
                        <h4>Select Input Boxes</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn select-pos">
                        <form>
                          <div className="input-field col s12">
                            <select>
                              <option value disabled selected>Choose your option</option>
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                              <option value={3}>Option 3</option>
                            </select>
                            <label>Materialize Select</label>
                          </div>
                          <div className="input-field col s12">
                            <select multiple>
                              <option value disabled selected>Choose your option</option>
                              <option value={1}>Option 1</option>
                              <option value={2}>Option 2</option>
                              <option value={3}>Option 3</option>
                            </select>
                            <label>Materialize Multiple Select</label>
                          </div>
                          <div className="input-field col s12">
                            <select multiple>
                              <optgroup label="team 1">
                                <option value={1}>Option 1</option>
                                <option value={2}>Option 2</option>
                              </optgroup>
                              <optgroup label="team 2">
                                <option value={3}>Option 3</option>
                                <option value={4}>Option 4</option>
                              </optgroup>
                            </select>
                            <label>Optgroups</label>
                          </div>
                          <div className="input-field col s12">
                            <select className="icons">
                              <option value disabled selected>Choose your option</option>
                              <option value data-icon="images/user/4.png" className="circle">example 1</option>
                              <option value data-icon="images/user/5.png" className="circle">example 2</option>
                              <option value data-icon="images/user/6.png" className="circle">example 3</option>
                            </select>
                            <label>Images in select</label>
                          </div>
                          <div className="input-field col s12">
                            <select className="icons">
                              <option value disabled selected>Choose your option</option>
                              <option value data-icon="images/user/4.png" className="circle">example 1</option>
                              <option value data-icon="images/user/5.png" className="circle">example 2</option>
                              <option value data-icon="images/user/6.png" className="circle">example 3</option>
                            </select>
                            <label>Images in select</label>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Radio Input Buttons</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <input name="group1" type="radio" id="test1" />
                            <label htmlFor="test1">Red</label>
                          </p>
                          <p>
                            <input name="group1" type="radio" id="test2" />
                            <label htmlFor="test2">Yellow</label>
                          </p>
                          <p>
                            <input className="with-gap" name="group1" type="radio" id="test3" />
                            <label htmlFor="test3">Green</label>
                          </p>
                          <p>
                            <input name="group1" type="radio" id="test4" disabled="disabled" />
                            <label htmlFor="test4">Brown</label>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Date Pickers</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <label htmlFor="date-picker">Red</label>
                            <input type="date" id="date-picker" className="datepicker" />
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Chips</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <div className="chips" />
                        <div className="chips chips-initial" />
                        <div className="chips chips-placeholder" />
                        <div className="chips chips-autocomplete" />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 sp-top-30">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Checkboxes</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p>
                            <input type="checkbox" id="test5" />
                            <label htmlFor="test5">Red</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test6" defaultChecked="checked" />
                            <label htmlFor="test6">Yellow</label>
                          </p>
                          <p>
                            <input type="checkbox" className="filled-in" id="filled-in-box" defaultChecked="checked" />
                            <label htmlFor="filled-in-box">Filled in</label>
                          </p>
                          <p>
                            <input type="checkbox" id="indeterminate-checkbox" />
                            <label htmlFor="indeterminate-checkbox">Indeterminate Style</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test7" defaultChecked="checked" disabled="disabled" />
                            <label htmlFor="test7">Green</label>
                          </p>
                          <p>
                            <input type="checkbox" id="test8" disabled="disabled" />
                            <label htmlFor="test8">Brown</label>
                          </p>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Switches</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        {/* Switch */}
                        <div className="switch mar-bot-20">
                          <label>
                            Off
                            <input type="checkbox" />
                            <span className="lever" /> On
                          </label>
                        </div>
                        {/* Disabled Switch */}
                        <div className="switch">
                          <label>
                            Off
                            <input disabled type="checkbox" />
                            <span className="lever" /> On
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>File Uploads &amp; File Input</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <div className="file-field input-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Uploads Multiple files</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <div className="file-field input-field">
                            <div className="btn">
                              <span>File</span>
                              <input type="file" multiple />
                            </div>
                            <div className="file-path-wrapper">
                              <input className="file-path validate" type="text" placeholder="Upload one or more files" />
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Range Filter</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <form action="#">
                          <p className="range-field">
                            <input type="range" id="test9" min={0} max={100} />
                          </p>
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