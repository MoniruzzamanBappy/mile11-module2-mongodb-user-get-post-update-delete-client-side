import React from 'react';
import { Link } from 'react-router-dom';
import './User.css'

const User = ({user, handleDeleteBtn}) => {
    const {name, email , _id} = user;
    // const {handleDelete} = handleDeleteBtn;
    return (
        <div className='item-cont'>
            <h4>{name}</h4>
            <p>{email}</p>
            <Link to={`/update/${_id}`}>Update</Link>
            <button onClick={()=>handleDeleteBtn(_id)}>Delete</button>
        </div>
    );
};

export default User;