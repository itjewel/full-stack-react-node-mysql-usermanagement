import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilUser,
  cilLockLocked,
  cilSettings,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Add User',
        to: '/users/adduser',
      },
      {
        component: CNavItem,
        name: 'Users',
        to: '/users/userslist',
      },
      {
        component: CNavItem,
        name: 'Activity Log',
        to: '/users/activitylog',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Roles & Permissions',
    icon: <CIcon icon={cilLockLocked} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Roles',
        to: '/roles-permission/roles',
      },
      {
        component: CNavItem,
        name: 'Permissions',
        to: '/roles-permission/permissions',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Settings',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'General Setting',
        to: '/settings/general-setting',
      },
      {
        component: CNavItem,
        name: 'Payment Setting',
        to: '/settings/payment-setting',
      },
      {
        component: CNavItem,
        name: 'Profile Setting',
        to: '/settings/profile-setting',
      },
      {
        component: CNavItem,
        name: 'Authentication',
        to: '/settings/auth-setting',
      },
    ],
  },
]

export default _nav