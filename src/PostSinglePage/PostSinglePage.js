import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';

const PostSinglePage = () => {
    let {postId} = useParams();
    const [postData, setPostData] = useState({});
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(req=>req.json())
        .then(data=>setPostData(data))
    },[])
    const {id, title, body}=postData
    return (
        <div>
            <span>{id}</span>
            <h1>{title}</h1>
            <p>{body}</p>
            <button><Link to={"/"}>Go Back</Link></button>
            <div className="commentSection">
                <Comment pId={postId}></Comment>
            </div>
        </div>
    );
};

export default PostSinglePage;