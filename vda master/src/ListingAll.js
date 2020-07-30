
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
import { ListRow } from './ListRow';
import Axios from 'axios'

export default class ListingAll extends Component {

  constructor(props){
    super(props)
    this.state = {
      loading: true,
      data: []
    }
  }
  componentDidMount = async () => {
    let { data } = await Axios.get('/admin/allTransactions')
    this.setState({
      loading: false,
      data: data
    })

  }

  render() {

    if(this.state.loading){
      return(
        <div style={{display:"flex", height:"100vh"}}>
          <div style={{margin:"auto"}}>Loading</div>
        </div>
      )
    }
    return (
      <div>
        
       
	

        {/*== MAIN CONTRAINER ==*/}
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
                  <li className="active-bre"><a href="#">All Transactions</a>
                  </li>
                </ul>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>All Transcations</h4>
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
                                <th>Reference Number</th>
                                <th>Rate ID</th>
                                <th>User ID</th>
                                <th>Total Rate</th>
                                <th>Base Rate</th>
                                <th>Currency</th>
                                <th>Provider ID</th>
                                <th>Status</th>
                                <th>
                                  <tr>Commission</tr>
                                  <tr>
                                    <td>Amount</td>
                                    <td>Description</td>
                                    <td>Type</td>
                                  </tr>
                                </th>
                                <th>
                                  <tr>Taxes</tr>
                                  <tr>
                                    <td>Amount</td>
                                    <td>Description</td>
                                    <td>Type</td>
                                  </tr>
                                </th>
                                <th>Refundable</th>
                                <th>Deposit Required</th>
                                <th>Guarantee Required</th>
                                <th>Online Cancellable</th>
                                <th>Pay At Hotel</th>
                                <th>Cancel Transaction</th>
                              </tr>
                            </thead>
                            <tbody>
                              {this.state.data.map( (transaction) => <ListRow key={transaction.refNo} transaction={transaction} />)}
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