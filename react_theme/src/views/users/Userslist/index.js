import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import {
  CRow,
  CButton,
  CForm,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CTooltip,
  CFormInput,
} from '@coreui/react'

function Userslist() {
  const handleDelete = () => {
    alert(123)
  }
  return (
    <CRow>
      <CForm className="d-grid gap-2 d-md-flex justify-content-md-end">
        <CTooltip content="Add user">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilUserPlus} size="lg" /> Add User
          </CButton>
        </CTooltip>
        <CTooltip content="Print Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilPrint} size="lg" /> Print
          </CButton>
        </CTooltip>
        <CTooltip content="Import Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilArrowThickToBottom} size="lg" /> Import
          </CButton>
        </CTooltip>
        <CTooltip content="PDF Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cibAdobeAcrobatReader} size="lg" /> PDF
          </CButton>
        </CTooltip>
        <CTooltip content="Export Users">
          <CButton color="dark" variant="outline">
            <CIcon icon={icon.cilArrowThickToTop} size="lg" /> Export
          </CButton>
        </CTooltip>
        <CForm className="d-flex">
          <CFormInput type="search" className="me-2" placeholder="Search" />
          <CTooltip content="Search Users">
            <CButton type="submit" color="dark" variant="outline">
              <CIcon icon={icon.cilSearch} />
            </CButton>
          </CTooltip>
        </CForm>
      </CForm>
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
              <CTooltip content="User Details">
                <CButton color="success" variant="ghost" size="sm">
                  <CIcon icon={icon.cilOpentype} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Update user">
                <CButton color="info" variant="ghost" size="sm">
                  <CIcon icon={icon.cilPencil} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton color="danger" variant="ghost" size="sm" onClick={handleDelete}>
                  <CIcon icon={icon.cilTrash} size="xl" />
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
              <CTooltip content="User Details">
                <CButton color="success" variant="ghost" size="sm">
                  <CIcon icon={icon.cilLowVision} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Update user">
                <CButton color="info" variant="ghost" size="sm">
                  <CIcon icon={icon.cilPencil} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton color="danger" variant="ghost" size="sm">
                  <CIcon icon={icon.cilTrash} size="xl" />
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
              <CTooltip content="User Details">
                <CButton color="success" variant="ghost" size="sm">
                  <CIcon icon={icon.cilLowVision} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Update user">
                <CButton color="info" variant="ghost" size="sm">
                  <CIcon icon={icon.cilPencil} size="xl" />
                </CButton>
              </CTooltip>
              <CTooltip content="Delete user">
                <CButton color="danger" variant="ghost" size="sm">
                  <CIcon icon={icon.cilTrash} size="xl" />
                </CButton>
              </CTooltip>
            </CTableDataCell>
          </CTableRow>
        </CTableBody>
      </CTable>
    </CRow>
  )
}

export default Userslist
