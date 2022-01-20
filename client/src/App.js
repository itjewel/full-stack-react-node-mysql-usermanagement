
import React from 'react'
import {
  BrowserRouter as Router,
  Routes,Route,
  Switch,
  Link
} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import CreatePost from './Pages/CreatePost';
import Post from './Pages/Post';


function App() {

  return <div className="App">
   <Router>
     <Link to="/">Home | </Link>
     <Link to="/createpost">Create A Post</Link>
     <Routes>
       <Route path="/" exact element={ <Home /> } />
       <Route path="/createpost" exact element={ <CreatePost/>} />
       <Route path="/post/:id" exact element={ <Post/>} />
     </Routes>
   </Router>
  
  </div>
 
}

export default App;
