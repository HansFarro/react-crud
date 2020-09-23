import React from 'react';
import User from '../components/User';

const Table = ({users}) => {
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
          <User name={user.name} email={user.email} password={user.password} />
        ))}
      </tbody>
    </table>
   );
}
 
export default Table;