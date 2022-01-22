import React from 'react';
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from 'yup'
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

function CreatePost() {
    let navigate = useNavigate()
    const initialValues = {
        title: '',
        postText: '',
        username: ''
    }
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Please Enter Title"),
        postText: Yup.string().required("Please Enter Post Text"),
        username: Yup.string().min(3).max(15).required("Please Enter Username") 
    })
    const onSubmit = (data) => {
         axios.post("http://localhost:3001/posts",data).then( (response)=> {
            navigate('/')
            // console.log(response)
        })
        // console.log(data)
    }

  return <div className='createPostPage'>
        <h2>Create Post Form</h2>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
          <Form>
              <label>Title: </label>
              <ErrorMessage name="title" component="span"/><br/>
              <Field  name="title" placeholder="Please Enter title"/>
                <br/><br/>
              <label>Post Desc: </label>
              <ErrorMessage name="postText" component="span"/><br/>
              <Field  name="postText" placeholder="Please Enter Post Description"/>
              <br/><br/>
              <label>Username: </label>
              <ErrorMessage name="username" component="span"/><br/>
              <Field  name="username" placeholder="Please Enter username"/>
              <br/><br/>
              <button type="submit">Create Post</button>
          </Form>
      </Formik>
      </div>;
}

export default CreatePost;
