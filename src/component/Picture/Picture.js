import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Picture = (props) => {
    const id = props.id;
    const {friendId}=useParams();
    const[picture, setPicture]= useState([]);
    console.log(picture);
    useEffect(()=>{
        const url =`https://jsonplaceholder.typicode.com/photos/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPicture(data))
    },[])
    const imageStyle= {
        borderRadius: '50%',
        
    }
    const imageStyle2 ={
        float: 'left',
        marginRight:'20px'
    }
    return (
        <div style={imageStyle2} >
          
            <img style={imageStyle} src={picture.thumbnailUrl} alt=""/>
           
           
        </div>
    );
};

export default Picture;