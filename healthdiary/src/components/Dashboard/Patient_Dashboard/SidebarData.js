import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/patient/',
    icon: <AiIcons.AiFillDashboard />,
    cName: 'nav-text'
  },
  {
    title: 'Doctor visits',
    path: '/patient/doctorvisit',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Appointments',
    path: '/patient/appointmenttable',
    icon: <FaIcons.FaHandsHelping/>,
    cName: 'nav-text'
  },
  {
    title: 'Allergies',
    path: '/patient/allergies',
    icon: <GiIcons.GiMedicalPackAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Pain',
    path: '/patient/pain',
    icon: <GiIcons.GiBackPain />,
    cName: 'nav-text'
  },
  {
    title: 'Family Health History',
    path: '/patient/history',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Upload Reports',
    path: '/patient/uploadreports',
    icon: <FaIcons.FaUpload />,
    cName: 'nav-text'
  }
];