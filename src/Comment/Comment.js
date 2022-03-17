import React, { useEffect, useState } from 'react';
import CommentSingle from './CommentSingle/CommentSingle';

const Comment = (props) => {
    const [cdata, setData] = useState([])

    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${props.pId}/comments`)
        .then(req=>req.json())
        .then(data=>setData(data))
    },[])
    return (
        <div>
            {cdata.map(ele => <CommentSingle key={ele.id} com={ele} />)}
        </div>
    );
};

export default Comment;