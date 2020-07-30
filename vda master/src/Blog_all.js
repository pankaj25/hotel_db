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
 class Blog_all extends Component  {
  render(){
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
                  <li><a href="#"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Blog</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-1">
                <h2>All Blog Posts</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <table className="table">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Categories</th>
                      <th>Date</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>5</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>6</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>7</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>8</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>9</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>10</td>
                      <td>Online Business Directory in Port Blair, Andaman</td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>11</td>
                      <td>Grid systems are used for creating page layouts through </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.js" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                    <tr>
                      <td>12</td>
                      <td>My first idea was to create an div class </td>
                      <td>Directory</td>
                      <td>24 may, 2017</td>
                      <td><a href="blog-edit.html" className="sb2-2-1-edit"><i className="fa fa-pencil-square-o" aria-hidden="true" /></a>
                      </td>
                      <td><a href="#" className="sb2-2-1-edit"><i className="fa fa-trash-o" aria-hidden="true" /></a>
                      </td>
                    </tr>
                  </tbody>
                </table>
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


export default Blog_all;