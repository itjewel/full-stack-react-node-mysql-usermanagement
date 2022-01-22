
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import {AuthContext} from './helpers/AuthContext';
import { useState, useEffect } from 'react'
import axios from 'axios';


function App() {
  const [authState, setAuthState] = useState({username:"", id:0, status:false})
 useEffect(()=>{
  axios.get("http://localhost:3001/auth/auth",{headers: {accessToken: localStorage.getItem('accessToken')}}).then((response) => {
    if(response.data.error){
      setAuthState({...authState, status:false})
    }else {
      setAuthState({username:response.data.username, id:response.data.id, status:true})    
    }
  })
    
 },[])

 const logOut = () => {
   localStorage.removeItem("accessToken")
  setAuthState({username:"", id:0, status:false})
 }

  return <div className="App">
    <AuthContext.Provider value={{authState, setAuthState}}>
   <Router>
     <Link to="/">Home | </Link>
     <Link to="/createpost">Create A Post | </Link>
     { !authState.status ? (
        <>
        <Link to="/registration">Registration | </Link>
        <Link to="/login">Login | </Link>
        </>
      ) : (
        <>
        <button className='logOutButton' onClick={logOut}> LogOUt </button>
        </>
      )}
      <h1>{authState.username}</h1>
     <Routes>
       <Route path="/" exact element={ <Home /> } />
       <Route path="/createpost" exact element={ <CreatePost/>} />
       <Route path="/post/:id" exact element={ <Post/>} />       
      <Route path="/registration" exact element={ <Registration />} />
      <Route path="/login" exact element={ <Login />} />         
     </Routes>
   </Router>
   </AuthContext.Provider>
  
  </div>
 
}

export default App;
