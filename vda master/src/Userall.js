import React, { Component } from 'react';
import './css/style.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import Routes from './Routes';
import Drop from './Drop';
import Notifysearch from './Notifysearch';
import Bottom from './Bottom';
import Axios from 'axios'
import { UserRow } from './UserRow';
export default class Userall extends Component{

  constructor(props){
    super(props)
    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount = async () => {
    let { data } = await Axios.get('/admin/allUsers')
    this.setState({
      loading: false,
      data: data
    })

  }

  delete = (event) => {
    event.preventDefault()
    let confirm = window.confirm("You sure you want to delete the user with id " + event.target.name)
    if(confirm){
       
    }
  }
  render() {

    if(this.state.loading){
      return(
        <div style={{display:"flex", height:"100vh"}}><div style={{margin:"auto"}}>Loading</div></div>
      )
    }

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
              {/*== LEFT MENU ==*/}
              
            </div>
            <div className="sb2-2">
              <div className="sb2-2-2">
                <ul>
                  <li><Link to="/"><i className="fa fa-home" aria-hidden="true" /> Home</Link>
                  </li>
                  <li className="active-bre"><Link to="#"> All Users</Link>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>User Details</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-users"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-users" className="dropdown-content">
                          <li><Link to="user-add">Add New</Link>
                          </li>
                          <li><Link to="user-edit">Edit</Link>
                          </li>
                          <li><Link to="#!">Update</Link>
                          </li>
                          <li className="divider" />
                          <li><Link to="#!"><i className="material-icons">delete</i>Delete</Link>
                          </li>
                          <li><Link to="user-view"><i className="material-icons">subject</i>View All</Link>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>UserId</th>
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Edit</th>
                                <th>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.data.map((user) => <UserRow user={user} />)}
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
       
      </div>
    );
  }
}