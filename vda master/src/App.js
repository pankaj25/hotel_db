import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Forgot from './Forgot';
import ListingAll from './ListingAll';
import Listingadd from './Listingadd';
 import Listing_cat_edit from './Listing_cat_edit';
import Listing_cat_all from './Listing_cat_all';
import Listing_cat_add from './Listing_cat_add';
import Login from './Login';
import Blog_add from './Blog_add';
import Blog_all from './Blog_all';
import Discount from'./Discount';
import Discount_add from './Discount_add';
import Home from './Home';
import Discount_edit from './Discount_edit';
import Drop from './Drop';
import Event_add from './Event_add';
import Bottom from './Bottom';
import User_view from './User_view';
import User_edit from './User_edit';
import Userall from './Userall';
import User_add from './User_add';
import Ui_table from './Ui_table';
import Ui_temp from './Ui_temp';
import Ui_tab from './Ui_tab';
import Ui_preload from './Ui_preload';
import Ui_kit from './Ui_kit';
import Ui_icons from './Ui_icons';
import Ui_form from './Ui_form';
import Ui_collapse from './Ui_collapse';
import Social_media from './Social_media';
import Sight_see_edit from './Sight_see_edit';
import Sight_see_add from './Sight_see_add';
import Sight_see_all from './Sight_see_all';
import Sight_see_booking_all from './Sight_see_booking_all';
import Sight_see_booking_view from './Sight_see_booking_view';
import Offers from './Offers';
import Offers_Edit from './Offers_Edit';
import Offers_add from './Offers_add';
import Package_add from './Package_add';
import Package_all  from './Package_all';
import Package_booking_view from './Package_booking_view';
import Package_cat_add from './Package_cat_add';
import Package_cat_all from './Package_cat_all';
import Package_cat_edit from './Package_cat_edit';
import Package_edit from './Package_edit';
import Hotel_add from './Hotel_add';
import Hotel_all from './Hotel_all';
import Hotel_booking_all from './Hotel_booking_all';
import Hotel_edit from './Hotel_edit';
import Hotel_room_type_add from './Hotel_room_type_add';
import Hotel_room_type_all from './Hotel_room_type_all';
import Hotel_room_type_edit from './Hotel_room_type_edit';
import Event_all from './Event_all';
import Event_booking_all from './Event_booking_all';
import Event_booking_view from './Event_booking_view';
import Event_edit from './Event_edit';
import Setting from './Setting';
import Listing_edit from './Listing_edit';

import LoginPrad from './LoginPrad'




function App() {
  return (
    <>

      <Switch>
         <Route exact path='/' component={ListingAll} />
			
        <Route exact path='/ListingAll' component={ListingAll}/>
        <Route exact path='/Listingadd' component={Listingadd}/>
        <Route exact path='/Listingedit' component={Listing_edit}/>
        <Route exact path='/Listingcatedit' component={Listing_cat_edit}/>
        <Route exact path='/Listingcatall' component={Listing_cat_all}/>
        <Route exact path='/Listingcatadd' component={Listing_cat_add}/>
        <Route exact path='/Login' component={LoginPrad}/>
        <Route exact  path='/Drop'    component ={Drop}/>
        <Route exact path ='/Discount_add' component={Discount_add}/>
        <Route exact path ='/Discount' component={Discount}/>
         <Route exact path ='/Discount_edit' component={Discount_edit}/>
        <Route exact path='/Blog_add' component={Blog_add}/>
        <Route exact path='/Blog_all' component={Blog_all}/>
        <Route exact path='/Bottom' component={Bottom}/>
        <Route exact path='/Offers' component={Offers}/>
        <Route exact path='/Offers_add' component={Offers_add}/>
        <Route exact path='/Offers_Edit' component={Offers_Edit}/>
        <Route exact path='/Packageadd' component={Package_add}/>
        <Route exact path='/Packageall' component={Package_all}/>
        <Route exact path='/Package_booking_view' component={Package_booking_view}/>
        <Route exact path='/Package_cat_add' component={Package_cat_add}/>
        <Route exact path='/Package_cat_all' component={Package_cat_all}/>
        <Route exact path='/Package_cat_edit' component={Package_cat_edit}/>
        <Route exact path='/Package_edit' component={Package_edit}/>
        <Route exact path='/Hotel_add' component={Hotel_add}/>
        <Route exact path='/Hotel_all' component={Hotel_all}/>
        <Route exact path='/Hotel_booking_all' component={Hotel_booking_all}/>
        <Route exact path='/Hotel_edit' component={Hotel_edit}/>
        <Route exact path='/Hotel_room_type_add' component={Hotel_room_type_add}/>
        <Route exact path='/Hotel_room_type_all' component={Hotel_room_type_all}/>
        <Route exact path='/Hotel_room_type_edit' component={Hotel_room_type_edit}/>
        <Route exact path='/Event_add' component={Event_add}/>
        <Route exact path='/Event_all' component={Event_all}/>
        <Route exact path='/Event_booking_all' component={Event_booking_all}/>
        <Route exact path='/Event_booking_view' component={Event_booking_view}/>
        <Route exact path='/Event_edit' component={Event_edit}/>
        <Route exact path='/Forgot' component={Forgot}/>
        <Route exact path='/Setting' component={Setting}/>
        <Route exact path='/Sight_see_add' component={Sight_see_add}/>
        <Route exact path='/Sight_see_all' component={Sight_see_all}/>
        <Route exact path='/Sight_see_booking_all' component={Sight_see_booking_all}/>
        <Route exact path='/Sight_see_booking_view' component={Sight_see_booking_view}/>
        <Route exact path='/Sight_see_edit' component={Sight_see_edit}/>
        <Route exact path='/Social_media' component={Social_media}/>
        <Route exact path='/Ui_collapse' component={Ui_collapse}/>
        <Route exact path='/Uiform' component={Ui_form}/>
        <Route exact path='/Ui_icons' component={Ui_icons}/>
        <Route exact path='/Ui_kit' component={Ui_kit}/>
         <Route exact path='/Ui_preload' component={Ui_preload}/>
        <Route exact path='/Ui_tab' component={Ui_tab}/>
        <Route exact path='/Ui_table' component={Ui_table}/>
        <Route exact path='/Ui_temp' component={Ui_temp}/>
        <Route exact path='/User_add' component={User_add}/>
        <Route exact path='/Userall' component={Userall}/>
        <Route exact path='/User_edit' component={User_edit}/>
        <Route exact path='/User_view' component={User_view}/>
      </Switch>

    </>
  );
}

export default App;
