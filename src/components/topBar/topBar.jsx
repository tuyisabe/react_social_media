import React from 'react'
import { Search,Person,Chat,Notifications } from '@mui/icons-material'
import './topBar.css' 
export default function TopBar() {
  return (
    <div className='topBar-container'>
        <div className="topBarLeft">
            <span className="logo">NATChat</span>
        </div>
        <div className="topBarCenter">
            <div className="topBarsearch">
           <Search className='searchIcon'/>
            <input type="text" placeholder='Search Person,Post,Video,....'className='searchInput' />
        </div></div>
        <div className="topBarRight">
            <div className="topBarlinks">
                <span className="topBarLink">Home Page</span>
                <span className="topBarLink">Timeline</span>
            </div>
        <div className="topBarIcons">
            <div className="topBarIconItem">
            <Person/>
                <span className="topBarIconBadge">5</span>
            </div>
            <div className="topBarIconItem">
            <Chat/>
                <span className="topBarIconBadge">10</span>
            </div>
            <div className="topBarIconItem">
            <Notifications/>
                <span className="topBarIconBadge">40</span>
            </div> </div>
            <img src="/assets/1.jpg" alt="" className='profilePicture' />
       
        </div>        
    </div>
  )
}
