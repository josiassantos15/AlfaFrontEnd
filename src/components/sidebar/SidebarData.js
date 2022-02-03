import React from 'react'
import Shop from '../shop/Shop';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import AssessmentIcon from '@mui/icons-material/Assessment';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CalculateIcon from '@mui/icons-material/Calculate';
import ShopIcon from '@mui/icons-material/Shop';
// https://mui.com/components/material-icons/ <yarn add @mui/icons-material>
export const SidebarData = [
    {
        title: "Home",
        icon: <HomeIcon/>,
        link: "/home"
    },
    {
        title: "Dashboard",
        icon: <DashboardIcon/>,
        link: "/dashboard"
    }, 
    {
        title: "Analytics",
        icon: <AssessmentIcon/>,
        link: "/Analytics"
    },
    {
        title: "MailBox",
        icon: <MailIcon/>,
        link: "/mailbox"
    },
    {
        title: "Calculate",
        icon: <CalculateIcon/>,
        link: "/calculate"
    },
    {
        title: "Shop",
        icon: <ShopIcon/>,
        link: <Shop />
    }
    
]

