import React from 'react'
import {
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'
function ActivityLog() {
  return (
    <CTable>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell scope="col">Users</CTableHeaderCell>
          <CTableHeaderCell scope="col">IP Address</CTableHeaderCell>
          <CTableHeaderCell scope="col">Message</CTableHeaderCell>
          <CTableHeaderCell scope="col">Log Time</CTableHeaderCell>
          <CTableHeaderCell scope="col">logged map</CTableHeaderCell>
          <CTableHeaderCell scope="col">More Info</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>Status</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>Status</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">Admin 123</CTableHeaderCell>
          <CTableDataCell>192.168.0.125</CTableDataCell>
          <CTableDataCell>User Updated.</CTableDataCell>
          <CTableDataCell>2022-01-16 17:08:27</CTableDataCell>
          <CTableDataCell>Not Found</CTableDataCell>
          <CTableDataCell>Status</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default ActivityLog
