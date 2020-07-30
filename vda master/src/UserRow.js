import React, {useState} from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
export const UserRow = (props) => {

    const [loading, setloading] = useState(false)
    const [deleted, setdeleted] = useState(false)
    const  { user } = props


    const deleteUser = async () => {
        let confirm = window.confirm("Delete the user with id " + user.id + "?")
        if(confirm){
            setloading(true)
            let res = await Axios.post('/admin/deleteUser', { id: user.id })
            if (res.data.status === "success") {
                setloading(false)
                setdeleted(true)
            }
        }
    }

    if(loading){
        return ( <tr aria-colspan={6} style={{textAlign: "center"}}><td>Deleting...</td></tr> )
    }

    if(deleted){
        return ( <tr aria-colspan={6} style={{textAlign: "center"}}><td>User Deleted</td></tr> )
    }
    return (
        
        <tr key={user.id}>
            
            <td>{user.hasOwnProperty("id")?user.id:""}</td>
            <td><Link to="#"><span className="list-enq-name">{user.hasOwnProperty("name")?user.name:""}</span>

            </Link>
            </td>
            <td>{user.hasOwnProperty("contactNumber")?user.contactNumber:""}</td>
            <td>{user.hasOwnProperty("email")?user.email:""}</td>
           
            <td>
              <Link to="user_edit" target="_blank"><i className="fa fa-pencil-square-o" aria-hidden="true" /></Link>
              
            </td>
            <td>
                <i onClick={deleteUser} style={{cursor:'pointer'}} className="fa fa-trash-o" aria-hidden="true" />
            </td>
          </tr>
    )
}
