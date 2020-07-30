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

export default class Sight_see_booking_all extends Component{
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
              <Routes></Routes>
              {/*== LEFT MENU ==*/}
              
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Package Booking Enquiry</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Sight Seeing Booking Enquiry</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-users" className="dropdown-content">
                          <li><a href="#!">Add New</a>
                          </li>
                          <li><a href="#!">Edit</a>
                          </li>
                          <li><a href="#!">Update</a>
                          </li>
                          <li className="divider" />
                          <li><a href="#!"><i className="material-icons">delete</i>Delete</a>
                          </li>
                          <li><a href="#!"><i className="material-icons">subject</i>View All</a>
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
                                <th>Sight Seeing</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Message</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/2.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Home Appliances Repair &amp; Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/3.jpg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Packers and Movers</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/4.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Security System Dealers</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/5.jpg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Skin Care &amp; Treatment</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/2.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Home Appliances Repair &amp; Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/3.jpg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Packers and Movers</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/4.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Security System Dealers</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/5.jpg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Skin Care &amp; Treatment</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Domestic Help Services</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+91 32111 65412</td>
                                <td>enquiry@mail.com</td>
                                <td>Australia</td>
                                <td>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</td>
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