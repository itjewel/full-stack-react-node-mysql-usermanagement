import React,{useState, useContext} from 'react';
import axios from 'axios';
import { useNavigate} from 'react-router-dom'
import { AuthContext } from '../helpers/AuthContext'

function Login() {
  let navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const { setAuthState } = useContext(AuthContext)

  const loginSubmit = () => {
    const data = {username: username, password: password}
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if(response.data.error){
        alert(response.data.error)
      } else {
         localStorage.setItem("accessToken", response.data.token)
         setAuthState({username:response.data.username, id:response.data.id, status:true})
         navigate('/')
        // alert("success")
      }
    })    
  }

  return <div>
    <h2>Login Form</h2>
    <label>UserName</label>
    <input type="text" name="username" onChange={(event)=> { setUsername(event.target.value) }}/>
    <br/><br/>
    <label>Password</label>
    <input type="password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
    <br/><br/>
    <button type="button" onClick={loginSubmit}> Login </button>
  </div>;
}

export default Login;
