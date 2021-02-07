import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as MDIcons from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/doctor/dashboard',
    icon: <AiIcons.AiFillDashboard/>,
    cName: 'nav-text'
  },
  {
    title: 'Education',
    path: '/doctor/education',
    icon: <AiIcons.AiFillRead />,
    cName: 'nav-text'
  },
  {
    title: 'Work Profile',
    path: '/doctor/work',
    icon: <MDIcons.MdWork/>,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/doctor/appointmenttable',
    icon: <FaIcons.FaHandsHelping/>,
    cName: 'nav-text'
  }
];
