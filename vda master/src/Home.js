import React, { Component } from 'react';
import './css/style.css';
//import { BrowserRouter as Router, Link } from 'react-router-dom'
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import { Link } from "react-router-dom";
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';
import Bottom from './Bottom';
//import { Routes} from ".";

//import { Link, Router } from 'react-router-dom';
class Home extends Component {
  render() {
    return (
      
          
            <div>
              
				<div className="sb2-1">
                    {/*== USER INFO ==*/}
                    
                    {/*== LEFT MENU ==*/}
                   <Routes></Routes>
                  </div>
            </div>
          );
        }
}

    


export default Home;

