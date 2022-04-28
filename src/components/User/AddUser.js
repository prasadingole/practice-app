import styles from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button'
import { useState } from 'react';
const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName] = useState("");
    const [enteredUserAge,setEnteredUserAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
          return; 
        }

        if(+enteredUserAge < 1) {
          return;
        }
        
        props.onAddUser( {userName :enteredUserName, userAge : enteredUserAge , userId : Math.random()})

        setEnteredUserName("");
        setEnteredUserAge("");
    }

    const userNameChangeHandler = (event) => {
        setEnteredUserName(event.target.value);
    }

    const userAgeChangeHandler = (event) => {
        setEnteredUserAge(event.target.value);
    }

    return (
        <Card className={styles.input}>
        <form  onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName}></input>
            <label htmlFor="age">Age ( Years ) </label>
            <input id="age" type="number" onChange={userAgeChangeHandler} value={enteredUserAge}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
    );
}

export default AddUser;