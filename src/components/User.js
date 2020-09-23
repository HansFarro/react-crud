import React from 'react';

const User = ({name,email,password}) => {
  return (         
  <tr>
    <td>{name}</td>
    <td>{email}</td>
    <td>{password}</td>
    <td>
      <button className="btn btn-info mr-2">Edit</button>
      <button className="btn btn-danger ">Delete</button>
    </td>
  </tr> 
  );
}
 
export default User;