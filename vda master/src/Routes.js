import React, { Component } from 'react';
import './App.css';
import './css/style.css';
import { Link } from 'react-router-dom';
import './css/materialize.css';
import './css/mob.css';
import './css/bootstrap.css';
import './js/custom.js';

import Collapsible from 'react-collapsible';


class Routes extends Component {
  render() {
    
    return (
      


<div className="sb2-1"><div  className="sb2-12"><ul>

  <li><img src="images/placeholder.jpg" alt=""/></li>
  <li></li></ul></div><div className="sb2-13"><ul className="collapsible" data-collapsible="accordion">
      <li>
      <Link to ={"/ListingAll"}  className="menu-active"><i className="fa fa-bar-chart" aria-hidden="true"></i> dashboard</Link>
    </li>

    <li>
    
   
      {/* <Collapsible trigger={"Listing"}>
      <ul>
       
        <li><Link to="ListingAll">All Listing</Link></li>
         <li><Link to="Listingadd">Add New listing</Link></li>
        <li><Link to="Listingcatall ">All listing Categories</Link></li>
        <li><Link to="Listingcatadd ">Add listing Categories</Link></li>
        </ul>
        </Collapsible></li>
       
    <li> */}
    <li>
    <Collapsible open={true} trigger={"Transactions"}>
    <ul>
    <li><Link to="ListingAll">All Transactions</Link></li>
    </ul>
    </Collapsible>
    </li>

    <Collapsible open={true} trigger={"Users"}>
    <ul>
    <li><Link to="Userall">All Users</Link></li>
    <li><Link to="User_add">Add New user</Link></li>
    <li><Link to="User_edit">Edit user</Link></li>
    </ul>
    </Collapsible>
    </li>

    {/* <li>
       <Collapsible trigger ={"Tour Packages"}>
      <ul>
        <li><Link to="Package_all">All Packages</Link></li>
        <li><Link to="Package_add">Add New Package</Link></li>
        <li><Link to="Package_cat_all ">All Package Categories</Link></li>
        <li><Link to="Package_cat_add ">Add Package Categories</Link></li></ul>
        </Collapsible></li>
    <li>
       <Collapsible trigger={"Hotels"}>
    <ul>
    <li><Link to="Hotel_all ">All   Hotels</Link></li>
    <li><Link to=" Hotel_add  ">Add New   Hotel</Link></li>
    <li><Link to=" Hotel_room_type_all">Room Type</Link></li>
    <li><Link to=" Hotel_room_type_add  ">Add Room Type</Link></li></ul>
    </Collapsible></li>


    <li>
      <Collapsible trigger={"Sight Seeings"}>
      <ul>
    <li><Link to="Sight_see_all ">All Sight Seeings</Link></li>
    <li><Link to="Sight_see_add ">Add New Sight Seeing</Link></li></ul>
      </Collapsible></li>
      
    <li>
       <Collapsible trigger={"Events"}>
      <ul>
        <li><Link to="Event_all">All Events</Link></li>
      <li><Link to="Event_add">Add New Event</Link></li></ul>
      </Collapsible></li>
    <li>
      <Collapsible trigger={"Ui-Kits"}>
        <ul>
        <li><Link to="Ui_form">Ui_form</Link></li>
        <li><Link to="Ui_kit">Ui_kit</Link></li>
        <li><Link to="Ui_table">Ui_table</Link></li>
        <li><Link to ="Ui_pre_load">Ui_pre_load</Link></li>
        <li><Link to="Ui_tab  ">Ui_tab</Link></li>
        <li><Link to="Ui_icons  ">Ui_icons</Link></li>
        <li><Link to="Ui_collapsible.">Ui_collapsible</Link></li></ul></Collapsible> </li>

        
    <li>
      <Collapsible trigger={"Discounts"}>
        <ul>
        <li><Link to="Discount">All Discounts</Link></li>
        <li><Link to="Discount_add">Add New Discounts</Link></li></ul></Collapsible></li>

    <li>
      
      <Collapsible trigger={"Offers_add"}>
        <ul>
       <li><Link to="offers ">All Offers</Link></li>
      <li><Link to="Offers_add">Add New Offers</Link></li></ul></Collapsible>
       </li>

    <li>
      <Collapsible trigger={"Booking"}>  <ul>
      <li> <Link to="Hotel_booking_all">Hotel</Link></li>
        <li><Link to="Package_booking_all">Package</Link></li>
        <li> <Link to="Sight_see_booking-all">Sight Seeings</Link></li>
        <li><Link to="Event-booking-all">Events</Link></li></ul></Collapsible></li>

<li>
        <Collapsible trigger={"Blog"} > <ul>
      <li><Link to="Blog_all ">All Blogs</Link></li>
      <li><Link to="Blog_add ">Add Blog</Link></li></ul></Collapsible>  </li>
 */}

       {/* <li> <Link to="Social_media"><i className="fa fa-plus-square-o" aria-hidden="true"></i> Social Media</Link></li>
<li><Link to="Login" target="_blank"><i className="fa fa-sign-in" aria-hidden="true"></i> Login</Link></li>
    */}
      
          
</ul>
</div></div>
            
    );
  }
}
export default Routes;

