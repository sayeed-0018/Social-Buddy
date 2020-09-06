import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Comment from '../Comment/Comment';


const FriendDetail = () => {
    const {friendId}=useParams();
    const[friend, setFriend]= useState({});
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/posts/${friendId}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[])
    const friendStyle = {
        border: '1px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }
    
    return (
        <div style={friendStyle}>
            
            <div >
            <p>User Id: {friendId}</p>
            <h3> Title of The Post: {friend.title}</h3>
            <p>Body of the Post: {friend.body}</p>
            <br/>
            </div>
            <div>
               
            <Comment></Comment>
            </div>
            
            
        </div>
    );
};

export default FriendDetail;