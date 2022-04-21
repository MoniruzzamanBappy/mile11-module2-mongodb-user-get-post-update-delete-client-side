import React from 'react';

const AddUsers = () => {
     const handleAddUser =(e)=>{
         e.preventDefault();
         const name = e.target.name.value;
         const email = e.target.email.value;

         const user = {name, email}

         fetch('http://localhost:5000/users', {
             method: 'POST',
             headers:{
                 'content-type': 'application/json'
             },
             body: JSON.stringify(user)
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
            <h2>Please add your info</h2>
            <form onSubmit={handleAddUser}>
            <input type="text" name="name" placeholder='Enter your name' id="" /><br />
            <input type="email" name="email" placeholder='Enter your email' id="" /><br />
            <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddUsers;