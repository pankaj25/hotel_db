import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

class Notifysearch extends Component {
  render() {
    return (
      <>
      <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
                    <a href="#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></a>
                    <a href="#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></a>
                    <a href="index.html" className="logo">
                    
                      <img src="https://www.visitorsdeals.com/static/media/logo-full.a4ea859c.png" alt="" />
                    </a>
                  </div>
      <div className="col-md-6 col-sm-6 mob-hide">
                    <form className="app-search">
                      <input type="text" placeholder="Search..." className="form-control" />
                      <Link to=""><i className="fa fa-search" /></Link>
                    </form>
                  </div>
      <div className="col-md-2 tab-hide">
                    <div className="top-not-cen">
                      <a className="waves-effect btn-noti" href="#"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></a>
                      <a className="waves-effect btn-noti" href="#"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></a>
                      <a className="waves-effect btn-noti" href="#"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></a>
                    </div>
                  </div>
                  </>
    );
  }
}
export default Notifysearch;

