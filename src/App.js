import { useState } from 'react';
import './App.css';
import AddUser from './components/User/AddUser';
import UserList from './components/User/UserList';


function App() {
  const [users,addUser]= useState([]);
  
  const addUserHandler = (user) => {
    addUser( (prevUsers) => {
      return [...prevUsers,user];
    });
  };
 
  return (
    
    <div className="App">
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={users}/>
    </div>

  );
}

export default App;
