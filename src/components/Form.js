import React, { useEffect } from 'react';

const API = process.env.REACT_APP_API;

const Form = ({ users, setUsers, inputText, setInputText}) => {
  // Extraer los valores del state
  const {name, email, password} = inputText;
  // console.log(API);
  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]:e.target.value
    });
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(`${API}/users`,{
      method:'POST',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })

    const data = await res.json();
    console.log(data);
    // if(name.trim() ==='' || email.trim() ==='' || password.trim() ===''){
    //   return;
    // }
    // setUsers([
    //   ...users,
    //   {id: Math.random() * 1000, name: name, email : email, password:password}
    // ])
    setInputText({
      name:'',
      email:'',
      password:''
    });
  }
  
  useEffect(() => {
    const getUsers = async () =>{
      const res= await fetch(`${API}/users`)
      const data = await res.json();
      setUsers(data);
    }
    getUsers()
  },[users])

  return ( 
    <form className="card p-3 bg-light" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control mb-3" id="name" placeholder="Name" onChange={handleInputChange} value={name} name="name"/>
        <input type="email" className="form-control mb-3" id="email" placeholder="Email" onChange={handleInputChange} value={email} name="email"/>
        <input type="password" className="form-control" id="password" placeholder="Password" onChange={handleInputChange} value={password} name="password"/>
      </div>
      <button type="submit" className="btn btn-secondary">Submit</button> 
    </form>
   );
}
 
export default Form;