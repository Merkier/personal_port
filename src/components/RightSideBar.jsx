import React from 'react'
import './RightSideBar.css'
import GHicon from './github_icon.png'
import Xicom from './x_icon.png'
import FBicon from './facebook_icon.png'
import INicon from './instagram_icon.png'

export default function RightSideBar() {
  return (
    <div className='rightimagelinks'>
    <ul>
    <div className='imagelinks'>
        <ul> 
          <li><a href='' target='blank'><img src={GHicon}></img></a></li>
          <li><a href='' target='blank'><img src={Xicom}></img></a></li>
          <li><a href='' target='blank'><img src={FBicon}></img></a></li>
          <li><a href='' target='blank'><img src={INicon}></img></a></li>
        </ul>
      </div>
    </ul>
    </div>
  )
}
