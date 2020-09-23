import React from 'react';

const Form = ({ users, setUsers, inputText, setInputText}) => {
  // Extraer los valores del state
  const {name, email, password} = inputText;

  const handleInputChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]:e.target.value
    });
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(name.trim() ==='' || email.trim() ==='' || password.trim() ===''){
      return;
    }
    setUsers([
      ...users,
      {id: Math.random() * 1000, name: name, email : email, password:password}
    ])

    setInputText({
      name:'',
      email:'',
      password:''
    });
    // console.log(users);

    // crear el registro
    // crearUsuario(user);
  }

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