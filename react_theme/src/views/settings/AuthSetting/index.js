import React from 'react'
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
  CButtonGroup,
} from '@coreui/react'

function AuthSetting() {
  return (
    <CRow>
      <CCol xs={12}>
        <CCardBody>
          <CForm className="row g-3">
            <CCol md={3}>
              <CFormLabel htmlFor="inputEmail8">Stripe Payment</CFormLabel>
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="stripe_payment_status"
                  id="stripe_payment_status1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="stripe_payment_status"
                  id="stripe_payment_status2"
                  autoComplete="off"
                  label="OFF"
                />
              </CButtonGroup>
            </CCol>
          </CForm>
          <CForm>
            <CCol md={3}>
              <CFormLabel htmlFor="inputEmail8">SSLCOMMERZ Payment</CFormLabel>
              <CButtonGroup role="group" aria-label="Basic checkbox toggle button group">
                <CFormCheck
                  type="radio"
                  button={{ color: 'primary', variant: 'outline' }}
                  name="sslcommerz_payment_status"
                  id="sslcommerz_payment_status1"
                  autoComplete="off"
                  label="YES"
                />
                <CFormCheck
                  type="radio"
                  button={{ color: 'danger', variant: 'outline' }}
                  name="sslcommerz_payment_status"
                  id="sslcommerz_payment_status2"
                  autoComplete="off"
                  label="OFF"
                />
              </CButtonGroup>
            </CCol>
          </CForm>
        </CCardBody>
      </CCol>
    </CRow>
  )
}

export default AuthSetting
