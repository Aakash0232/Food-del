import React from 'react'
import './Sidebar.css'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='sidebar'>
    <div className="sidebar-options">
        <NavLink to='/add'className="sidebar-option">
            <img src={assets.add_icon_white}/>
            <p>Add item</p>
        </NavLink>
        <NavLink to='/List' className="sidebar-option">
            <img src={assets.bag_icon}/>
            <p>list item</p>
        </NavLink>
        <NavLink to='/Orders' className="sidebar-option">
            <img src={assets.bag_icon}/>
            <p>Oders</p>
        </NavLink>
    </div>

    </div>
  )
}

export default Sidebar