import React from 'react'
import "./Sidebar.css"
import logo from "../../images/logo.png"
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard'
import ClassIcon from '@mui/icons-material/Class'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import ArticleIcon from '@mui/icons-material/Article';


const Sidebar = () => {
  return (
    <div className='sidebarContainer'>
      <div className='sidebarTop'>
        <img src={logo} className='sidebarLogo' alt="logo"/>
      </div>

      <div className='sidebarMiddle'>
        <div className='middleItems'>
          <div className='icon'>
            <SpaceDashboardIcon fontSize='small'/>
          </div>
          <div className='iconName'>Dashboard</div>
        </div>
        <div className='middleItems'>
          <div className='icon'>
            <ClassIcon fontSize='small' />
          </div>
          <div className='iconName'>My Course</div>
        </div>
        <div className='middleItems'>
          <div className='icon'>
            <AccessTimeIcon fontSize='small'/>
          </div>
          <div className='iconName'>My Projects</div>
        </div>
        <div className='middleItems'>
          <div className='icon'>
            <ArticleIcon fontSize='small'/>
          </div>
          <div className='iconName'>Attendance</div>
        </div>
      </div>


      <div className='sidebarBottom'>Bottom</div>
    </div>
  )
}

export default Sidebar