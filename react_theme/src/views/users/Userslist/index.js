import React from 'react'
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
} from '@coreui/react'

function Userslist() {
  return (
    <CTable>
      <CTableHead color="light">
        <CTableRow>
          <CTableHeaderCell scope="col">Name</CTableHeaderCell>
          <CTableHeaderCell scope="col">Username</CTableHeaderCell>
          <CTableHeaderCell scope="col">E-Mail Address</CTableHeaderCell>
          <CTableHeaderCell scope="col">Status</CTableHeaderCell>
          <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
        </CTableRow>
      </CTableHead>
      <CTableBody>
        <CTableRow>
          <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
          <CTableDataCell>admin1233</CTableDataCell>
          <CTableDataCell>admin@cmsn.com</CTableDataCell>
          <CTableDataCell>
            <CButton color="success" shape="rounded-pill">
              Approve
            </CButton>
          </CTableDataCell>
          <CTableDataCell>Add, Delete, Update</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
          <CTableDataCell>admin1233</CTableDataCell>
          <CTableDataCell>admin@cmsn.com</CTableDataCell>
          <CTableDataCell>Status</CTableDataCell>
          <CTableDataCell>Add, Delete, Update</CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
          <CTableDataCell>admin1233</CTableDataCell>
          <CTableDataCell>admin@cmsn.com</CTableDataCell>
          <CTableDataCell>stat</CTableDataCell>
          <CTableDataCell>Add, Delete, Update</CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default Userslist
