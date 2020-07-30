import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Notifysearch from './Notifysearch';
import Drop from './Drop';
import Routes from './Routes';
import Bottom from './Bottom';

export default class Offers extends Component{
  render() {
    return (
      <div>
        
        
	
	
        {/*== MAIN CONTRAINER ==*/}
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
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>All Offers</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-users" className="dropdown-content">
                          <li><Link to="#!">Add New</Link>
                          </li>
                          <li><Link to="#!">Edit</Link>
                          </li>
                          <li><Link to="#!">Update</Link>
                          </li>
                          <li className="divider" />
                          <li><Link to="#!"><i className="material-icons">delete</i>Delete</Link>
                          </li>
                          <li><Link to="#!"><i className="material-icons">subject</i>View All</Link>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>User</th>
                                <th>event</th>
                                <th>Offers</th>
                                <th>Date</th>
                                <th>Country</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="Offers_edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><Link to="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></Link>
                                </td>
                                <td>50%</td>
                                <td>18 may, 2018</td>
                                <td>Australia</td>
                                <td>
                                  <Link to="offers-edit.html"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
                                </td>
                                <td>
                                  <Link to="#"><i className="fa fa-trash-o" aria-hidden="true" /></Link>
                                </td>
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
        </div>
        {/*== BOTTOM FLOAT ICON ==*/}
        <Bottom></Bottom>
        {/*======== SCRIPT FILES =========*/}
      </div>
    );
  }
}