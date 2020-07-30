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
export default class Ui_tab extends Component{
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
                        <h4>Variable Tabs</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn tab-posi">
                        <ul className="tabs">
                          <li className="tab col s3"><a className="active" href="#test1">Test 1</a>
                          </li>
                          <li className="tab col s3"><a href="#test2">Test 2</a>
                          </li>
                          <li className="tab col s3"><a href="#test3">Test 3</a>
                          </li>
                          <li className="tab col s3"><a href="#test4">Test 4</a>
                          </li>
                        </ul>
                        <div id="test1" className="col s12 tab-pad">Test 1</div>
                        <div id="test2" className="col s12 tab-pad">Test 2</div>
                        <div id="test3" className="col s12 tab-pad">Test 3</div>
                        <div id="test4" className="col s12 tab-pad">Test 4</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 sp-top-30">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Variable Tabs Disable</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn tab-posi">
                        <ul className="tabs">
                          <li className="tab col s3"><a className="active" href="#test11">Test 1</a>
                          </li>
                          <li className="tab col s3"><a href="#test22">Test 2</a>
                          </li>
                          <li className="tab col s3 disabled"><a href="#test33">Test 3</a>
                          </li>
                          <li className="tab col s3"><a href="#test44">Test 4</a>
                          </li>
                        </ul>
                        <div id="test11" className="col s12 tab-pad">Test 1</div>
                        <div id="test22" className="col s12 tab-pad">Test 2</div>
                        <div id="test33" className="col s12 tab-pad">Test 3</div>
                        <div id="test44" className="col s12 tab-pad">Test 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Swipeable Tabs</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn tab-posi">
                        <ul id="tabs-swipe-demo" className="tabs">
                          <li className="tab col s3"><a href="#test-swipe-1">Test 1</a>
                          </li>
                          <li className="tab col s3"><a className="active" href="#test-swipe-2">Test 2</a>
                          </li>
                          <li className="tab col s3"><a href="#test-swipe-3">Test 3</a>
                          </li>
                          <li className="tab col s3"><a href="#test-swipe-4">Test 4</a>
                          </li>
                        </ul>
                        <div id="test-swipe-1" className="col s12 blue tab-col">Test 1</div>
                        <div id="test-swipe-2" className="col s12 yellow tab-col">Test 2</div>
                        <div id="test-swipe-3" className="col s12 green tab-col">Test 3</div>
                        <div id="test-swipe-4" className="col s12 pink tab-col">Test 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       <Bottom></Bottom>
      </div>
    );
  }
}