import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import { useNavigate } from 'react-router-dom'

function Home() {
let navigate = useNavigate()

const [listOfPosts, setlistOfPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setlistOfPosts(response.data)
      //  console.log(response.data)

    });
  }, [])

  return <div>
      {listOfPosts.map((value,index) => {
    return <div className='post' key={index}>
        <div className='title' onClick={ () => { navigate(`/post/${value.id}`) } }> {value.title}</div>
        <div className='body'> {value.postText}</div>
        <div className='footer'> {value.username}</div>
      </div>
    })}
    </div>;
}

export default Home;
