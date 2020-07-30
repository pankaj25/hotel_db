
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

export default class Social_media extends Component{
  render() {
    return (
      <div>
        
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
           
            {/*== MY ACCCOUNT ==*/}
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
                  <li className="active"><Link to="#"> Social Media</Link>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-add-blog sb2-2-1">
                <div className="inn-title">
                  <h4>Social Media and Share</h4>
                  <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                </div>
                <div className="bor">
                  <form>
                    <div className="form-group">
                      <label htmlFor="email1">Facebook:</label>
                      <input type="text" className="form-control" id="email1" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email2">Twitter:</label>
                      <input type="text" className="form-control" id="email2" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email3">Google Plus:</label>
                      <input type="text" className="form-control" id="email3" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email4">Linked In:</label>
                      <input type="text" className="form-control" id="email4" placeholder />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email5">Whats App:</label>
                      <input type="text" className="form-control" id="email5" placeholder />
                    </div>
                    <button type="submit" className="btn btn-default">Submit</button>
                  </form>
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