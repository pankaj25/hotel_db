const { default: Bottom } = require("./Bottom")

var NewComponent = React.createClass({
  render: function() {
    return (
      <div>
       
        {/*== ALL CSS FILES ==*/}
        <link rel="stylesheet" href="css/style.css" />
        <link rel="stylesheet" href="css/mob.css" />
        <link rel="stylesheet" href="css/bootstrap.css" />
        <link rel="stylesheet" href="css/materialize.css" />
        {/* HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries */}
        {/* WARNING: Respond.js doesn't work if you view the page via file:// */}
        {/*[if lt IE 9]>
	
	
	<![endif]*/}
        {/*== MAIN CONTRAINER ==*/}
        <div className="container-fluid sb1">
          <div className="row">
            {/*== LOGO ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6 sb1-1">
              <a href="#" className="btn-close-menu"><i className="fa fa-times" aria-hidden="true" /></a>
              <a href="#" className="atab-menu"><i className="fa fa-bars tab-menu" aria-hidden="true" /></a>
              <a href="index.html" className="logo"><img src="images/logo1.png" alt="" />
              </a>
            </div>
            {/*== SEARCH ==*/}
            <div className="col-md-6 col-sm-6 mob-hide">
              <form className="app-search">
                <input type="text" placeholder="Search..." className="form-control" />
                <a href><i className="fa fa-search" /></a>
              </form>
            </div>
            {/*== NOTIFICATION ==*/}
            <div className="col-md-2 tab-hide">
              <div className="top-not-cen">
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-commenting-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-envelope-o" aria-hidden="true" /><span>5</span></a>
                <a className="waves-effect btn-noti" href="#"><i className="fa fa-tag" aria-hidden="true" /><span>5</span></a>
              </div>
            </div>
            {/*== MY ACCCOUNT ==*/}
            <div className="col-md-2 col-sm-3 col-xs-6">
              {/* Dropdown Trigger */}
              <a className="waves-effect dropdown-button top-user-pro" href="#" data-activates="top-menu"><img src="images/user/6.png" alt="" />My Account <i className="fa fa-angle-down" aria-hidden="true" />
              </a>
              {/* Dropdown Structure */}
              <ul id="top-menu" className="dropdown-content top-menu-sty">
                <li><a href="setting.html" className="waves-effect"><i className="fa fa-cogs" aria-hidden="true" />Admin Setting</a>
                </li>
                <li><a href="listing-all.html" className="waves-effect"><i className="fa fa-list-ul" aria-hidden="true" /> Listings</a>
                </li>
                <li><a href="hotel-all.html" className="waves-effect"><i className="fa fa-building-o" aria-hidden="true" /> Hotels</a>
                </li>
                <li><a href="package-all.html" className="waves-effect"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                </li>
                <li><a href="event-all.html" className="waves-effect"><i className="fa fa-flag-checkered" aria-hidden="true" /> Events</a>
                </li>
                <li><a href="offers.html" className="waves-effect"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                </li>
                <li><a href="user-add.html" className="waves-effect"><i className="fa fa-user-plus" aria-hidden="true" /> Add New User</a>
                </li>
                <li><a href="#" className="waves-effect"><i className="fa fa-undo" aria-hidden="true" /> Backup Data</a>
                </li>
                <li className="divider" />
                <li><a href="#" className="ho-dr-con-last waves-effect"><i className="fa fa-sign-in" aria-hidden="true" /> Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*== BODY CONTNAINER ==*/}
        <div className="container-fluid sb2">
          <div className="row">
            <div className="sb2-1">
              {/*== USER INFO ==*/}
              <div className="sb2-12">
                <ul>
                  <li><img src="images/placeholder.jpg" alt="" />
                  </li>
                  <li>
                    <h5>Victoria Baker <span> Santa Ana, CA</span></h5>
                  </li>
                  <li />
                </ul>
              </div>
              {/*== LEFT MENU ==*/}
              <div className="sb2-13">
                <ul className="collapsible" data-collapsible="accordion">
                  <li><a href="index.html" className="menu-active"><i className="fa fa-bar-chart" aria-hidden="true" /> Dashboard</a>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-list-ul" aria-hidden="true" /> Listing</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="listing-all.html">All listing</a>
                        </li>
                        <li><a href="listing-add.html">Add New listing</a>
                        </li>
                        <li><a href="listing-cat-all.html">All listing Categories</a>
                        </li>
                        <li><a href="listing-cat-add.html">Add listing Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-user" aria-hidden="true" /> Users</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="user-all.html">All Users</a>
                        </li>
                        <li><a href="user-add.html">Add New user</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-umbrella" aria-hidden="true" /> Tour Packages</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="package-all.html">All Packages</a>
                        </li>
                        <li><a href="package-add.html">Add New Package</a>
                        </li>
                        <li><a href="package-cat-all.html">All Package Categories</a>
                        </li>
                        <li><a href="package-cat-add.html">Add Package Categories</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-h-square" aria-hidden="true" /> Hotels</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-all.html">All Hotels</a>
                        </li>
                        <li><a href="hotel-add.html">Add New Hotel</a>
                        </li>
                        <li><a href="hotel-room-type-all.html">Room Type</a>
                        </li>
                        <li><a href="hotel-room-type-add.html">Add Room Type</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-picture-o" aria-hidden="true" /> Sight Seeings</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="sight-see-all.html">All Sight Seeings</a>
                        </li>
                        <li><a href="sight-see-add.html">Add New Sight Seeing</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-calendar-o" aria-hidden="true" /> Events</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="event-all.html">All Events</a>
                        </li>
                        <li><a href="event-add.html">Add New Event</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-braille" aria-hidden="true" /> Ui-Kits</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="ui-form.html">ui-form</a>
                        </li>
                        <li><a href="ui-kit.html">ui-kit</a>
                        </li>
                        <li><a href="ui-table.html">ui-table</a>
                        </li>
                        <li><a href="ui-pre-load.html">ui-pre-load</a>
                        </li>
                        <li><a href="ui-tab.html">ui-tab</a>
                        </li>
                        <li><a href="ui-icons.html">ui-icons</a>
                        </li>
                        <li><a href="ui-collapsible.html">ui-collapsible</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-usd" aria-hidden="true" /> Discounts</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="discount.html">All Discounts</a>
                        </li>
                        <li><a href="discount-add.html">Add New Discounts</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-tags" aria-hidden="true" /> Offers</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="offers.html">All Offers</a>
                        </li>
                        <li><a href="offers-add.html">Add New Offers</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-ticket" aria-hidden="true" /> Booking &amp; Enquiry</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="hotel-booking-all.html">Hotel</a>
                        </li>
                        <li><a href="package-booking-all.html">Package</a>
                        </li>
                        <li><a href="sight-see-booking-all.html">Sight Seeings</a>
                        </li>
                        <li><a href="event-booking-all.html">Events</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="javascript:void(0)" className="collapsible-header"><i className="fa fa-rss" aria-hidden="true" /> Blog &amp; Articals</a>
                    <div className="collapsible-body left-sub-menu">
                      <ul>
                        <li><a href="blog-all.html">All Blogs</a>
                        </li>
                        <li><a href="blog-add.html">Add Blog</a>
                        </li>
                      </ul>
                    </div>
                  </li>
                  <li><a href="social-media.html"><i className="fa fa-plus-square-o" aria-hidden="true" /> Social Media</a>
                  </li>
                  <li><a href="login.html" target="_blank"><i className="fa fa-sign-in" aria-hidden="true" /> Login</a>
                  </li>
                </ul>
              </div>
            </div>
            {/*== BODY INNER CONTAINER ==*/}
            <div className="sb2-2">
              {/*== breadcrumbs ==*/}
              <div className="sb2-2-2">
                <ul>
                  <li><a href="index.html"><i className="fa fa-home" aria-hidden="true" /> Home</a>
                  </li>
                  <li className="active-bre"><a href="#"> Dashboard</a>
                  </li>
                  <li className="page-back"><a href="index.html"><i className="fa fa-backward" aria-hidden="true" /> Back</a>
                  </li>
                </ul>
              </div>
              {/*== DASHBOARD INFO ==*/}
              <div className="sb2-2-1">
                <h2>Admin Dashboard</h2>
                <p>The .table class adds basic styling (light padding and only horizontal dividers) to a table:</p>
                <div className="db-2">
                  <ul>
                    <li>
                      <div className="dash-book dash-b-1">
                        <h5>Listings</h5>
                        <h4>948</h4>
                        <a href="#">View more</a>
                      </div>
                    </li>
                    <li>
                      <div className="dash-book dash-b-2">
                        <h5>Users</h5>
                        <h4>672</h4>
                        <a href="#">View more</a>
                      </div>
                    </li>
                    <li>
                      <div className="dash-book dash-b-3">
                        <h5>Enquirys</h5>
                        <h4>689</h4>
                        <a href="#">View more</a>
                      </div>
                    </li>
                    <li>
                      <div className="dash-book dash-b-4">
                        <h5>Events</h5>
                        <h4>24</h4>
                        <a href="#">View more</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sb2-2-3">
                <div className="row">
                  {/*== Country Campaigns ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Country Campaigns</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dropdown1"><i className="material-icons">more_vert</i></a>
                        {/* Dropdown Structure */}
                        <ul id="dropdown1" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Country</th>
                                <th>Client</th>
                                <th>Changes</th>
                                <th>Budget</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="txt-dark weight-500">Australia</span>
                                </td>
                                <td>Beavis</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>2.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$1478</span>
                                </td>
                                <td>
                                  <span className="label label-success">Active</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">Cuba</span>
                                </td>
                                <td>Felix</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>1.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$951</span>
                                </td>
                                <td>
                                  <span className="label label-danger">Closed</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">France</span>
                                </td>
                                <td>Cannibus</td>
                                <td><span className="txt-danger"><i className="fa fa-angle-up" aria-hidden="true" /><span>-8.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$632</span>
                                </td>
                                <td>
                                  <span className="label label-default">Hold</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">Norway</span>
                                </td>
                                <td>Neosoft</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>7.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$325</span>
                                </td>
                                <td>
                                  <span className="label label-default">Hold</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">South Africa</span>
                                </td>
                                <td>Hencework</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>9.43%</span></span>
                                </td>
                                <td>
                                  <span>$258</span>
                                </td>
                                <td>
                                  <span className="label label-success">Active</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*== Country Campaigns ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Country Campaigns</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dropdown2"><i className="material-icons">more_vert</i></a>
                        {/* Dropdown Structure */}
                        <ul id="dropdown2" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>State</th>
                                <th>Client</th>
                                <th>Changes</th>
                                <th>Budget</th>
                                <th>Status</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="txt-dark weight-500">California</span>
                                </td>
                                <td>Beavis</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>2.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$1478</span>
                                </td>
                                <td>
                                  <span className="label label-success">Active</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">Florida</span>
                                </td>
                                <td>Felix</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>1.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$951</span>
                                </td>
                                <td>
                                  <span className="label label-danger">Closed</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">Hawaii</span>
                                </td>
                                <td>Cannibus</td>
                                <td><span className="txt-danger"><i className="fa fa-angle-up" aria-hidden="true" /><span>-8.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$632</span>
                                </td>
                                <td>
                                  <span className="label label-default">Hold</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">Alaska</span>
                                </td>
                                <td>Neosoft</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>7.43%</span></span>
                                </td>
                                <td>
                                  <span className="txt-dark weight-500">$325</span>
                                </td>
                                <td>
                                  <span className="label label-default">Hold</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="txt-dark weight-500">New Jersey</span>
                                </td>
                                <td>Hencework</td>
                                <td><span className="txt-success"><i className="fa fa-angle-up" aria-hidden="true" /><span>9.43%</span></span>
                                </td>
                                <td>
                                  <span>$258</span>
                                </td>
                                <td>
                                  <span className="label label-success">Active</span>
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
              {/*== User Details ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>User Details</h4>
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
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
                                <th>Name</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Country</th>
                                <th>Listings</th>
                                <th>Enquiry</th>
                                <th>Bookings</th>
                                <th>Reviews</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/user/1.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <span className="label label-danger">12</span>
                                </td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                                <td>
                                  <span className="label label-info">36</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/2.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <span className="label label-danger">12</span>
                                </td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                                <td>
                                  <span className="label label-info">36</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/3.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <span className="label label-danger">12</span>
                                </td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                                <td>
                                  <span className="label label-info">36</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/4.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <span className="label label-danger">12</span>
                                </td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                                <td>
                                  <span className="label label-info">36</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/user/5.png" alt="" /></span>
                                </td>
                                <td><a href="#"><span className="list-enq-name">Marsha Hogan</span><span className="list-enq-city">Illunois, United States</span></a>
                                </td>
                                <td>+01 3214 6522</td>
                                <td>chadengle@dummy.com</td>
                                <td>Australia</td>
                                <td>
                                  <span className="label label-primary">02</span>
                                </td>
                                <td>
                                  <span className="label label-danger">12</span>
                                </td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                                <td>
                                  <span className="label label-info">36</span>
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
              <div className="sb2-2-3">
                <div className="row">
                  {/*== Listing Enquiry ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Listing Enquiry</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-listings"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-listings" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Select</th>
                                <th>Listing</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>City</th>
                                <th>Enquiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" className="filled-in" id="filled-in-box-1" defaultChecked="checked" />
                                  <label htmlFor="filled-in-box-1" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Taaj Club House</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>12 may</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">15</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" className="filled-in" id="filled-in-box-2" defaultChecked="checked" />
                                  <label htmlFor="filled-in-box-2" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/2.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Grand Hotel</span><span className="list-enq-city">Rio,Brazil</span>
                                </td>
                                <td>07 aug</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">05</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" className="filled-in" id="filled-in-box-3" defaultChecked="checked" />
                                  <label htmlFor="filled-in-box-3" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/3.jpg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Grand Pales</span><span className="list-enq-city">Chennai,India</span>
                                </td>
                                <td>18 jun</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">35</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" className="filled-in" id="filled-in-box-4" />
                                  <label htmlFor="filled-in-box-4" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/4.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Lake Palace Hotel</span><span className="list-enq-city">Beijing,China</span>
                                </td>
                                <td>09 apr</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" className="filled-in" id="filled-in-box-5" />
                                  <label htmlFor="filled-in-box-5" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/5.jpg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">First Class Hotel</span><span className="list-enq-city">Berlin,Germany</span>
                                </td>
                                <td>21 jun</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">18</span>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*== Hotel Bookings ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Hotel Bookings</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-hotel"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-hotel" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Select</th>
                                <th>Listing</th>
                                <th>Name</th>
                                <th>Date</th>
                                <th>City</th>
                                <th>Enquiry</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>
                                  <input type="checkbox" id="ch2-1" />
                                  <label htmlFor="ch2-1" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/1.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Taaj Club House</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>12 may</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">15</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" id="ch2-2" />
                                  <label htmlFor="ch2-2" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/2.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Grand Hotel</span><span className="list-enq-city">Rio,Brazil</span>
                                </td>
                                <td>07 aug</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">05</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" id="ch2-3" />
                                  <label htmlFor="ch2-3" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/3.jpg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Grand Pales</span><span className="list-enq-city">Chennai,India</span>
                                </td>
                                <td>18 jun</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">35</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" id="ch2-4" />
                                  <label htmlFor="ch2-4" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/4.jpeg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Lake Palace Hotel</span><span className="list-enq-city">Beijing,China</span>
                                </td>
                                <td>09 apr</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">24</span>
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  <input type="checkbox" id="ch2-5" />
                                  <label htmlFor="ch2-5" />
                                </td>
                                <td><span className="list-img"><img src="images/listing/5.jpg" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">First Class Hotel</span><span className="list-enq-city">Berlin,Germany</span>
                                </td>
                                <td>21 jun</td>
                                <td>Hawaii</td>
                                <td>
                                  <span className="label label-success">18</span>
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
              {/*== Latest Activity ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  {/*== Latest Activity ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Latest Activity</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-activ"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-activ" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn list-act-hom">
                        <ul>
                          <li className="list-act-hom-con">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>12 may, 2017</span> Arrival and Evening Dhow Cruise</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                          </li>
                          <li className="list-act-hom-con">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>08 Jun, 2017</span> City Tour and Evening Free</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                          </li>
                          <li className="list-act-hom-con">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>27 July, 2017</span> Desert Safari with Dinner</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                          </li>
                          <li className="list-act-hom-con">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>14 Aug, 2017</span> Day at leisure</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                          </li>
                          <li className="list-act-hom-con">
                            <i className="fa fa-clock-o" aria-hidden="true" />
                            <h4><span>24 Sep, 2017</span> Departure</h4>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/*== Social Media ==*/}
                  <div className="col-md-6">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Social Media</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-social"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-social" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi">
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                <th>Media</th>
                                <th>Name</th>
                                <th>Share</th>
                                <th>Like</th>
                                <th>Members</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/1.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Linked In</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/2.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Twitter</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/3.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Facebook</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/4.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Google Plus</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/5.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">YouTube</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/6.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">WhatsApp</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/7.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">VK</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
                                </td>
                              </tr>
                              <tr>
                                <td><span className="list-img"><img src="images/sm/2.png" alt="" /></span>
                                </td>
                                <td><span className="list-enq-name">Twitter</span><span className="list-enq-city">Illunois, United States</span>
                                </td>
                                <td>15K</td>
                                <td>18K</td>
                                <td>
                                  <span className="label label-success">263</span>
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
              {/*== User Details ==*/}
              <div className="sb2-2-3">
                <div className="row">
                  <div className="col-md-12">
                    <div className="box-inn-sp">
                      <div className="inn-title">
                        <h4>Google Map</h4>
                        <p>Airtport Hotels The Right Way To Start A Short Break Holiday</p>
                        <a className="dropdown-button drop-down-meta" href="#" data-activates="dr-map"><i className="material-icons">more_vert</i></a>
                        <ul id="dr-map" className="dropdown-content">
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
                          <li><a href="#!"><i className="material-icons">play_for_work</i>Download</a>
                          </li>
                        </ul>
                        {/* Dropdown Structure */}
                      </div>
                      <div className="tab-inn">
                        <div className="table-responsive table-desi tab-map">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6290413.804893654!2d-93.99620524741552!3d39.66116578737809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880b2d386f6e2619%3A0x7f15825064115956!2sIllinois%2C+USA!5e0!3m2!1sen!2sin!4v1469954001005" allowFullScreen />
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
});