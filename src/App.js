import React from 'react';
import Home from './Home/Home';
import './App.css'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import PostSinglePage from './PostSinglePage/PostSinglePage';

const App = () => {
  return (
        <Router>
          <div className='container'>
            <Routes>
              <Route  path="/" element={ <Home /> } />
              <Route  path="/postsingle/:postId" element={ <PostSinglePage /> } />
            </Routes> 
          </div>
        </Router>
  );
};

export default App;