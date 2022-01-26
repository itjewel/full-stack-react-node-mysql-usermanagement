import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom'

function Home() {
let navigate = useNavigate()

const [listOfPosts, setlistOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts", {headers:{accessToken: localStorage.getItem('accessToken')}}).then((response) => {
      setlistOfPosts(response.data)
      //  console.log(response.data)

    });
  }, [])

const likeAPost = (postId) => {
  axios.post("http://localhost:3001/likes", {PostId:postId}, {headers: {accessToken: localStorage.getItem('accessToken')}}).then((response) => {
    setlistOfPosts(listOfPosts.map((post) => {
      if(post.id === postId){
        if(response.data.liked){
          return {...post, Likes: [...post.Likes,0]}
        } else {
          const LikesArray = post.Likes
          LikesArray.pop();
          return {...post, Likes: LikesArray}

        }
      }else{
        return post;
      }
    }))
  // alert(response.data)
  })
}

  return <div><br/>
      {listOfPosts.map((value,index) => {
    return <div className='post' key={index}>
        <div className='title' onClick={ () => { navigate(`/post/${value.id}`) } }> {value.title}</div>
        <div className='body'> {value.postText}</div>
        <div className='footer'> {value.username}
        <button onClick={() => { likeAPost(value.id)}}>Like</button>
        <label>{value.Likes.length}</label>
        </div>
      </div>
    })}
    </div>;
}

export default Home;
