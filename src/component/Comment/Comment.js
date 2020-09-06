import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Picture from '../Picture/Picture';

const Comment = () => {
    const {friendId}=useParams();
    const[comment, setComment]= useState([]);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/comments?postId=${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setComment(data))
    },[])
    const commentStyle={
        border:'1px solid lightgray',
        margin:'20px',
        padding:'20px',
        
    }
    return (
        <div>
            {
                comment.map(comment =><div style={commentStyle}>
                    <Picture id={comment.id}></Picture>
                    <div>
                    <h3>Commentator's Name: {comment.name}</h3>
                    <p>Commentator's Email:{comment.email} </p>
                    <p>Comments of the Post: {comment.body}</p>
                    </div>
                    
                    </div>)
            }
        </div>
    );
};

export default Comment;