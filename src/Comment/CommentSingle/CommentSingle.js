import React from 'react';
import './commentSinge.css'
const CommentSingle = (props) => {
    const {name, email, body} = props.com
    return (
        <div className='com'>
            <p><strong>{name}</strong></p>
            <address><strong>Email:</strong>{email}</address>
            <h4>Comment: </h4>
            <p>{body}</p>
        </div>
    );
};

export default CommentSingle;