import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';

class Drop extends Component {
  render() {
    return (
      
      <div className="col-md-2 col-sm-3 col-xs-6">
      {/* Dropdown Trigger */}
      <Link className="waves-effect dropdown-button top-user-pro" href="#" data-activates="top-menu"><img src="images/user/6.png" alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
        </Link>
      {/* Dropdown Structure */}
      <ul id="top-menu" className="dropdown-content top-menu-sty">
        <li><Link to="Setting" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting  </Link>
        </li>
        <li><  Link to="Listing_all" className="waves-effect"><i className="fa fa-list-ul" aria-hidden="true" /> Listings  </Link>
        </li>
        <li><  Link to="Hotel_all" className="waves-effect"><i className="fa fa-building-o" aria-hidden="true" /> Hotels  </Link>
        </li>
        <li><  Link to="Package_all" className="waves-effect"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages  </Link>
        </li>
        <li><  Link to="Event_all" className="waves-effect"><i className="fa fa-flag-checkered" aria-hidden="true" /> Events  </Link>
        </li>
        <li><  Link to="Offers" className="waves-effect"><i className="fa fa-tags" aria-hidden="true" /> Offers  </Link>
        </li>
        <li><  Link to="User_add" className="waves-effect"><i className="fa fa-user-plus" aria-hidden="true" /> Add New User  </Link>
        </li>
        <li><  Link to="#" className="waves-effect"><i className="fa fa-undo" aria-hidden="true" /> Backup Data  </Link>
        </li>
        <li className="divider" />
        <li><  Link to="#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout  </Link>
        </li>
      </ul>
    </div>
            
    );
  }
}
export default Drop;

