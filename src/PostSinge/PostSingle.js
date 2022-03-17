import React from 'react';
import { Link } from 'react-router-dom';
import './postsingle.css';

const PostSingle = (props) => {
    const {id, title, body} = props.data;
    
    return (
        <div className='singlePostContainer'>
            <div>
                <span>ID: {id}</span>
                <h4>{title}</h4>
            </div>
            <Link className='link' to={`postsingle/${id}`}>Read More</Link>
        </div>
    );
};

export default PostSingle;