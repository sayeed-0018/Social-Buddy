import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

const Friend = (props) => {
    const { name, email, id, title, body } = props.friend;
    const history = useHistory();
    const handleClick =(friendId) =>{
        const url = `/friend/${friendId}`;
        history.push(url)
    }
    const friendStyle = {
        border: '8px solid tomato',
        margin: '20px',
        padding: '20px',
        borderRadius: '20px',
    }
    return (
        <div style={friendStyle}>
            <h2> Post Title: {title}</h2>
            <h4>Post: {body}</h4>
            
            <Button variant="contained" color="secondary" onClick={()=>handleClick(id)} >see more </Button>
        </div>
    );
};

export default Friend;