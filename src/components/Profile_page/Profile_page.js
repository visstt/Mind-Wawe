import React from 'react'
import Header from '../Main_page/Header/Header'
import Profile_aside from './Profile_aside'
import './Profile.css'
import Profile_Section from './Profile_Section'
function Profile_page() {
  return (
    <div>
        <Header/>
        <div className="profile_main">
            <Profile_aside/>
            <Profile_Section/>
        </div>
        
    </div>
  )
}

export default Profile_page;