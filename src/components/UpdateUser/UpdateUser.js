import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateUser = () => {
    const {id} = useParams();
    const [user, setUser] = useState([]);
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${id}`)
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[id]);
    const handleUpdateUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;

        const updateUser = {name, email}

        const url = `http://localhost:5000/users/${id}`

        fetch(url, {
            method: 'PUT',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log('Success', data);
           alert('User added successfully');
           e.target.reset()
        })
    }
    return (
        <div>
            <h4>name: {user.name}</h4>
            <form onSubmit={handleUpdateUser}>
            <input type="text" name="name" placeholder='Enter your name' id="" /><br />
            <input type="email" name="email" placeholder='Enter your email' id="" /><br />
            <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateUser;