import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTooltip,
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
            <CTooltip content="Active user">
              <CButton color="success" shape="rounded-pill" variant="ghost" size="sm">
                <CIcon icon={icon.cilCheckCircle} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
          <CTableDataCell>
            <CTooltip content="Add user">
              <CButton color="success" variant="ghost" size="sm">
                <CIcon icon={icon.cilNoteAdd} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Update user">
              <CButton color="info" variant="ghost" size="sm">
                <CIcon icon={icon.cilPencil} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Delete user">
              <CButton color="danger" variant="ghost" size="sm">
                <CIcon icon={icon.cilDelete} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
          <CTableDataCell>admin1233</CTableDataCell>
          <CTableDataCell>admin@cmsn.com</CTableDataCell>
          <CTableDataCell>
            <CTooltip content="Deactive user">
              <CButton color="danger" shape="rounded-pill" variant="ghost" size="sm">
                <CIcon icon={icon.cilBan} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
          <CTableDataCell>
            <CTooltip content="Add user">
              <CButton color="success" variant="ghost" size="sm">
                <CIcon icon={icon.cilNoteAdd} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Update user">
              <CButton color="info" variant="ghost" size="sm">
                <CIcon icon={icon.cilPencil} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Delete user">
              <CButton color="danger" variant="ghost" size="sm">
                <CIcon icon={icon.cilDelete} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
        </CTableRow>
        <CTableRow>
          <CTableHeaderCell scope="row">admin1233</CTableHeaderCell>
          <CTableDataCell>admin1233</CTableDataCell>
          <CTableDataCell>admin@cmsn.com</CTableDataCell>
          <CTableDataCell>
            <CTooltip content="Deactive user">
              <CButton color="danger" shape="rounded-pill" variant="ghost" size="sm">
                <CIcon icon={icon.cilBan} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
          <CTableDataCell>
            <CTooltip content="Add user">
              <CButton color="success" variant="ghost" size="sm">
                <CIcon icon={icon.cilNoteAdd} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Update user">
              <CButton color="info" variant="ghost" size="sm">
                <CIcon icon={icon.cilPencil} size="xl" />
              </CButton>
            </CTooltip>
            <CTooltip content="Delete user">
              <CButton color="danger" variant="ghost" size="sm">
                <CIcon icon={icon.cilDelete} size="xl" />
              </CButton>
            </CTooltip>
          </CTableDataCell>
        </CTableRow>
      </CTableBody>
    </CTable>
  )
}

export default Userslist
