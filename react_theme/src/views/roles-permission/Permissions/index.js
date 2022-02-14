import React, { useState } from 'react'
import {
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CForm,
  CFormLabel,
  CFormInput,
  CFormSelect,
  CFormTextarea,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
  CTableDataCell,
  CFormCheck,
} from '@coreui/react'

function Permissions() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <>
      <CNav variant="tabs" role="tablist">
        <CNavItem>
          <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
            Create Permission
          </CNavLink>
        </CNavItem>
        <CNavItem>
          <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
            Add Permission
          </CNavLink>
        </CNavItem>
      </CNav>

      <CTabContent>
        <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
          <CTable>
            <CTableHead color="light">
              <CTableRow>
                <CTableHeaderCell scope="col">Name</CTableHeaderCell>
                <CTableHeaderCell scope="col">Admin</CTableHeaderCell>
                <CTableHeaderCell scope="col">User</CTableHeaderCell>
                <CTableHeaderCell scope="col">Actions</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">Admin</CTableHeaderCell>
                <CTableDataCell>
                  <CFormCheck id="flexCheckDefault" label="Default checkbox" />
                </CTableDataCell>
                <CTableDataCell>
                  <CFormCheck id="flexCheckChecked" label="Checked checkbox" defaultChecked />
                </CTableDataCell>
                <CTableDataCell>Add, Delete, Update</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">User</CTableHeaderCell>
                <CTableDataCell>User</CTableDataCell>
                <CTableDataCell>3</CTableDataCell>
                <CTableDataCell>Add, Delete, Update</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
        </CTabPane>
        <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
          <CRow>
            <CCol xs={12}>
              <CCard className="mb-4">
                <CCardBody>
                  <CForm className="row g-3">
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail8">Permission Name</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputEmail4">Display Name</CFormLabel>
                      <CFormInput type="text" id="inputEmail4" />
                    </CCol>
                    <CCol md={8}>
                      <CFormLabel htmlFor="inputAddress">Description</CFormLabel>
                      <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                    </CCol>
                    <CCol md={12}>
                      <CButton type="submit">Create Role</CButton>
                    </CCol>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CTabPane>
      </CTabContent>
    </>
  )
}

export default Permissions
