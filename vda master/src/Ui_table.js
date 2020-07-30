
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

export default class Ui_table extends Component{
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
                  <li><Link to="#"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
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
                        <h4>Borderless Table</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <table>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alan</td>
                              <td>Jellybean</td>
                              <td>$3.76</td>
                            </tr>
                            <tr>
                              <td>Jonathan</td>
                              <td>Lollipop</td>
                              <td>$7.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Bordered Table</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <table className="bordered">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alan</td>
                              <td>Jellybean</td>
                              <td>$3.76</td>
                            </tr>
                            <tr>
                              <td>Jonathan</td>
                              <td>Lollipop</td>
                              <td>$7.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 sp-top-30">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Striped Table</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <table className="striped">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alan</td>
                              <td>Jellybean</td>
                              <td>$3.76</td>
                            </tr>
                            <tr>
                              <td>Jonathan</td>
                              <td>Lollipop</td>
                              <td>$7.00</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <div className="box-inn-sp box-second-inn">
                      <div className="inn-title">
                        <h4>Highlight Table</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <table className="highlight">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alan</td>
                              <td>Jellybean</td>
                              <td>$3.76</td>
                            </tr>
                            <tr>
                              <td>Jonathan</td>
                              <td>Lollipop</td>
                              <td>$7.00</td>
                            </tr>
                          </tbody>
                        </table>
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
                        <h4>Responsive Table</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                      </div>
                      <div className="tab-inn">
                        <table className="responsive-table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                              <th>Name</th>
                              <th>Item Name</th>
                              <th>Item Price</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                            <tr>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                              <td>Alvin</td>
                              <td>Eclair</td>
                              <td>$0.87</td>
                            </tr>
                          </tbody>
                        </table>
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