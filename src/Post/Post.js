import React, { useEffect, useState } from 'react';
import PostSingle from '../PostSinge/PostSingle';
import './post.css';

const Post = () => {
    const [post, setPost] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(req => req.json())
        .then(data => setPost(data))
    },[])

    return (
        <div className='postContainer'>
            {
                post.map(ele=><PostSingle key={ele.id} data = {ele}></PostSingle>)
            }
            
        </div>
        
    );
};

export default Post;