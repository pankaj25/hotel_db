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

export default class Ui_collapse extends Component{
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
                  <li><Link to="#"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                  </li>
                  <li className="active-bre"><Link to="#"> Ui Form</Link>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Normal Collapsible</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Collapsible Expandable</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible" data-collapsible="expandable">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Collapsible Popup</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <ul className="collapsible popout" data-collapsible="accordion">
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">filter_drama</i>First</div>
                            <div className="collapsible-body coll-body"><span>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">place</i>Second</div>
                            <div className="collapsible-body coll-body"><span>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks</span>
                            </div>
                          </li>
                          <li>
                            <div className="collapsible-header coll-head"><i className="material-icons">whatshot</i>Third</div>
                            <div className="collapsible-body coll-body"><span>making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate</span>
                            </div>
                          </li>
                        </ul>
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