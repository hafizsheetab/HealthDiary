import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FaIcons from 'react-icons/fa';
import * as GiIcons from 'react-icons/gi';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Doctor visits',
    path: '/reports',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Allergies',
    path: '/products',
    icon: <GiIcons.GiMedicalPackAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Pain',
    path: '/team',
    icon: <GiIcons.GiBackPain />,
    cName: 'nav-text'
  },
  {
    title: 'Family Health History',
    path: '/messages',
    icon: <IoIcons.IoMdPeople />,
    cName: 'nav-text'
  },
  {
    title: 'Health Tracker',
    path: '/support',
    icon: <FaIcons.FaClipboard />,
    cName: 'nav-text'
  },
  {
    title: 'Upload Reports',
    path: '/support',
    icon: <FaIcons.FaUpload />,
    cName: 'nav-text'
  },
  {
    title: 'Social Habits',
    path: '/support',
    icon: <FaIcons.FaClipboardCheck/>,
    cName: 'nav-text'
  }

];