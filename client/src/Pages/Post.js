import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom'
import axios from 'axios';
import { AuthContext } from '../helpers/AuthContext'

function Post() {
    let { id } = useParams()
    const [postObject, setPostObject] = useState({})
    const [listOfComments, setListOfComments] = useState([])
    const [newComment, setNewComment] = useState("")
    const { authState } = useContext(AuthContext)
    useEffect( () => {
        axios.get(`http://localhost:3001/posts/byId/${id}`).then( (response) => {
            setPostObject(response.data);
            // console.log(response)
        })

        axios.get(`http://localhost:3001/comments/${id}`).then( (response) => {
            setListOfComments(response.data);
            //  console.log(response.data)
        })
    },[])

    const addComment = () =>{
        let data = {commentBody:newComment,PostId:id}
        axios.post("http://localhost:3001/comments", data, {headers : {accessToken: localStorage.getItem('accessToken') }}).then( (response) => {           
          if(response.data.error){
              alert("User doesn't loged in!")
            //   alert(response.data.error)
          }else{
              let addCommentValue = {commentBody:newComment,id:response.data.id,username:response.data.username}
            setListOfComments([...listOfComments, addCommentValue])
            setNewComment("")
          }          
        });
    }

    const deleteComment = (paramId) => {
      // alert(paramId)
      axios.delete(`http://localhost:3001/comments/${paramId}`, {headers : {accessToken: localStorage.getItem('accessToken') }}).then((response) => {
        setListOfComments(listOfComments.filter((val) => {
          return val.id != paramId
        }))
      })
    }

  return <div> 
            <div className="leftSide">
            <div className='post'>
                <div className='title'> {postObject.title}</div>
                <div className='body'> {postObject.postText}</div>
                <div className='footer'> {postObject.username}</div>
            </div>
          </div>
          <div className="rightSide">
              
              <div className="addCommentContainer">
                    <input type="text" value={newComment} placeholder='Comment Type here' name="commentBody" onChange={(event)=>{ setNewComment(event.target.value) }} />
                    <button onClick={addComment}>Add Comment</button>
              </div>
              {listOfComments.map((value, key) =>{
             return <div className="commentSection" key={key}>
                <div className='body'> {value.commentBody}</div>
                <div className='footer'> {value.username}<br/>
                {authState.username == value.username && (
                  <button onClick={() => { deleteComment(value.id) }}>Delete</button>
                )}
                </div>
              </div>
             })}
          </div>
        </div>;
}

export default Post;
