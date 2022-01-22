import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';

function Registration() {
     const initialValues = {
        username: '',
        password: ''
    }
    const validationSchema = Yup.object().shape({
        username: Yup.string().min(3).max(15).required("Please Enter Username"),
        password: Yup.string().min(4).max(20).required()
    })
    const onSubmit = (data) => {
         axios.post("http://localhost:3001/auth",data).then( (response)=> {
            // navigate('/')
             console.log(response)
        })
    }

  return <div className='createPostPage'>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form>
          <h2>Registration Form</h2>         
              <label>Username: </label>
              <ErrorMessage name="username" component="span"/><br/>
              <Field  name="username" placeholder="Please Enter username"/><br/>
              <label>Password: </label>
              <ErrorMessage name="password" component="span"/><br/>
              <Field  type="password" name="password" placeholder="Please Enter Password"/>
              <br/><br/>
              <button type="submit">Register User</button>
          </Form>
      </Formik>
      </div>;
}

export default Registration;
