import React from 'react';
import Post from '../Post/Post';

const Home = () => {
    return (
        <div>
            <h1 style={{margin:"50px 0",textAlign:"center"}}>The today news</h1>
            <Post></Post>
        </div>
    );
};

export default Home;