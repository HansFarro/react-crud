import React from 'react';
import User from '../components/User';

const API = process.env.REACT_APP_API;

const Table = ({ users, setInputText }) => {
  // Eliminar Usuario
  const deleteUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`,{
      method: 'DELETE'
    });

    const data = await res.json();
    console.log(data);
  }
  
  //Actualizar Usuario
  const updateUser = async (id) => {
    const res = await fetch(`${API}/user/${id}`)
    const data = await res.json();
    
    setInputText({
      name:data.name,
      email:data.email,
      password:data.password
    })
    
  } 

  return ( 
    <table className="table table-striped table-light">
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Password</th>
          <th scope="col">Action</th> 
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user._id} name={user.name} email={user.email} password={user.password} updateUser={updateUser} deleteUser={deleteUser} id={user._id} />
        ))}
      </tbody>
    </table>
   );
}
 
export default Table;