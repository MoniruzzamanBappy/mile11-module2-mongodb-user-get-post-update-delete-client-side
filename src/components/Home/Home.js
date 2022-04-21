import React, { useEffect, useState } from 'react';
import User from '../User/User';
import './Home.css'

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res=>res.json())
        .then(data=>setUsers(data))
    },[]);

    const handleDeleteUser = id=>{
        const proceed = window.confirm('Are you sure? You want to delete this data.');
        if(proceed){
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
            .then(res=>res.json())
            .then(data=>{
                if(data.deletedCount> 0){
                    const remaining = users.filter(u=>u._id !== id);
                    setUsers(remaining);
                }
            })
        }
    }
    return (
        <div>

            <h1>users: {users.length}</h1>
            <div className='user-cont'>

            {
                users.map(user=><User key={user._id} user={user} handleDeleteBtn={handleDeleteUser}></User>)
            }
            </div>
            
        </div>
    );
};

export default Home;