import React from 'react'
import CIcon from '@coreui/icons-react'
import * as icon from '@coreui/icons'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import axios from 'axios'
import * as Yup from 'yup'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CFormInput,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CRow,
} from '@coreui/react'

const AddUser = () => {
  const initialValues = {
    first_name: '',
    last_name: '',
    phone_number: '',
    email_address: '',
    username: '',
    password: '',
    date_of_birth: '',
  }
  const validationSchema = Yup.object().shape({
    first_name: Yup.string().required('Please Enter First Name'),
    last_name: Yup.string().required('Please Enter Last Name'),
    phone_number: Yup.string().min(3).max(15).required('Please Enter Phone Number'),
    email_address: Yup.string().min(3).max(15).required('Please Enter email address'),
    username: Yup.string().min(3).max(15).required('Please Enter Username'),
    password: Yup.string().min(3).max(15).required('Please Enter password'),
    date_of_birth: Yup.string().min(3).max(15).required('Please Enter date of birth'),
  })
  const onSubmit = (data) => {
    axios.post('http://localhost:3001/posts', data).then((response) => {
      console.log(234)
    })
  }

  return (
    <CRow>
      <CCol xs={12}>
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <CCard className="mb-4">
            <CCardBody>
              <Form className="row g-3">
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">First Name </CFormLabel>
                  <Field name="first_name" type="text" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="first_name" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Last Name</CFormLabel>
                  <Field name="last_name" type="text" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="last_name" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Select Role</CFormLabel>
                  <CFormInput type="text" id="inputEmail4" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputAddress2">Gender</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputCity">Country</CFormLabel>
                  <CFormSelect id="inputState">
                    <option>Choose...</option>
                    <option>...</option>
                  </CFormSelect>
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputZip">Phone</CFormLabel>
                  <Field name="phone_number" id="inputZip" className="form-control" />
                  <ErrorMessage name="phone_number" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">E-Mail Address</CFormLabel>
                  <Field
                    type="email"
                    name="email_address"
                    id="inputEmail4"
                    className="form-control"
                  />
                  <ErrorMessage name="email_address" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Username</CFormLabel>
                  <Field type="text" name="username" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="username" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Password</CFormLabel>
                  <Field type="text" name="password" id="inputEmail4" className="form-control" />
                  <ErrorMessage name="password" component="span" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Confirm Password</CFormLabel>
                  <CFormInput type="text" id="inputEmail4" />
                </CCol>
                <CCol md={4}>
                  <CFormLabel htmlFor="inputEmail4">Date Of Birth</CFormLabel>
                  <Field
                    type="date"
                    name="date_of_birth"
                    id="inputPassword4"
                    className="form-control"
                  />
                  <ErrorMessage name="date_of_birth" component="span" />
                </CCol>
                <CCol md={8}>
                  <CFormLabel htmlFor="inputAddress">Address</CFormLabel>
                  <CFormTextarea id="exampleFormControlTextarea1" rows="3"></CFormTextarea>
                </CCol>
                <CCol md={12}>
                  <CButton type="submit">
                    <CIcon icon={icon.cilNoteAdd} /> Create an account
                  </CButton>
                </CCol>
              </Form>
            </CCardBody>
          </CCard>
        </Formik>
      </CCol>
    </CRow>
  )
}

// function AddUser() {
//   return ()
// }

export default AddUser
