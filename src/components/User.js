import React from 'react';

const User = ({ name, email, password, id, updateUser, deleteUser}) => {

  return (
  <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{password}</td>
    <td>
      <button onClick={() => updateUser(id)} className="btn btn-info mr-2">Edit</button>
      <button onClick={() => deleteUser(id)} className="btn btn-danger">Delete</button>
    </td>
  </tr>
  );
}
 
export default User;