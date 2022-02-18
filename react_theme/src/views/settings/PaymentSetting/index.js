import React, { useState } from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
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
  CFormTextarea,
  CFormCheck,
  CTableDataCell,
  CTooltip,
  CButton,
  CTable,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableBody,
} from '@coreui/react'

function PaymentSetting() {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol md={4}>
        <CNav variant="tabs" role="tablist" className="flex-column">
          <CNavItem>
            <CNavLink href="#" active={activeKey === 1} onClick={() => setActiveKey(1)}>
              <h5>
                <CIcon icon={icon.cibCcPaypal} size="xl" /> Paypal Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 2} onClick={() => setActiveKey(2)}>
              <h5>
                <CIcon icon={icon.cibCcStripe} size="xl" /> Stripe Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 3} onClick={() => setActiveKey(3)}>
              <h5>
                <CIcon icon={icon.cibAdobeTypekit} size="xl" /> SSL Commrz Configration
              </h5>
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#" active={activeKey === 4} onClick={() => setActiveKey(4)}>
              <h5>
                <CIcon icon={icon.cibCpanel} size="xl" /> Setup Install Software
              </h5>
            </CNavLink>
          </CNavItem>
        </CNav>
      </CCol>
      <CCol md={8}>
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
                  <CTableDataCell>
                    <CTooltip content="Update permission">
                      <CButton color="info" variant="ghost" size="sm">
                        <CIcon icon={icon.cilPencil} size="xl" />
                      </CButton>
                    </CTooltip>
                    <CTooltip content="Delete permission">
                      <CButton color="danger" variant="ghost" size="sm">
                        <CIcon icon={icon.cilTrash} size="xl" />
                      </CButton>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
                <CTableRow>
                  <CTableHeaderCell scope="row">User</CTableHeaderCell>
                  <CTableDataCell>
                    <CFormCheck id="flexCheckDefault" label="Default checkbox" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CFormCheck id="flexCheckDefault" label="Default checkbox" />
                  </CTableDataCell>
                  <CTableDataCell>
                    <CTooltip content="Update permission">
                      <CButton color="info" variant="ghost" size="sm">
                        <CIcon icon={icon.cilPencil} size="xl" />
                      </CButton>
                    </CTooltip>
                    <CTooltip content="Delete permission">
                      <CButton color="danger" variant="ghost" size="sm">
                        <CIcon icon={icon.cilTrash} size="xl" />
                      </CButton>
                    </CTooltip>
                  </CTableDataCell>
                </CTableRow>
                <CTableDataCell>
                  <CCol md={12}>
                    <CButton color="primary" type="submit">
                      Save permissions
                    </CButton>
                  </CCol>
                </CTableDataCell>
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
                        <CButton type="submit">Create Permission</CButton>
                      </CCol>
                    </CForm>
                  </CCardBody>
                </CCard>
              </CCol>
            </CRow>
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 3}>
            SSl Commrz
          </CTabPane>
          <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 4}>
            Setup Install Soft
          </CTabPane>
        </CTabContent>
      </CCol>
    </CRow>
  )
}

export default PaymentSetting
