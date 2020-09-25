import React ,{ useState} from 'react';
import Navbar from '../components/Navbar';
import Form from '../components/Form';
import Table from '../components/Table.js';

const Home = () => {
  // Crear el state de datos
  const [users, setUsers] = useState([]);
  const [inputText, setInputText] = useState({
    name:'',
    email:'',
    password:''
  })
  const [edit,setEdit]=useState(false);
  
  // Crear el state error
  const [error, setError] = useState(false);

  return (
    <>
    <Navbar />
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-4 mt-5">
          <Form users={users} setUsers={setUsers} error={error} setError={setError} inputText={inputText} setInputText={setInputText}/>
        </div>
        <div className="col-12 col-md-12 col-lg-8 mt-5">
         <Table users={users} setEdit={setEdit} setInputText={setInputText}/>
         {/* <div class="alert alert-secondary text-center">Agrega algunos usuarios</div> */}
        </div>
      </div>
    </div>
    </>
   );
}
 
export default Home;