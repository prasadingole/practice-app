import styles from './AddUser.module.css'
import Card from '../UI/Card';
import Button from '../UI/Button'
import React, { useState } from 'react';
import ErrorModal from '../UI/ErrorModal';
const AddUser = (props) => {
    const [enteredUserName,setEnteredUserName] = useState("");
    const [enteredUserAge,setEnteredUserAge] = useState("");
    const [error,setError]= useState(undefined);

    const addUserHandler = (event) => {
        event.preventDefault();
        
        if(enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title:"Invalid Input",
                message : "User name/age can not be blank"
            });
            return; 
        }

        if(+enteredUserAge < 1) {
            setError({
                title:"Invalid Input",
                message : "User age can not be less than 0 years"
            });
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

    const errorResetHandler = () =>{
        setError(undefined);
        setEnteredUserName("");
        setEnteredUserAge("");
    }

    return (
        <React.Fragment>
        {error && <ErrorModal title={error.title} message={error.message} onReset={errorResetHandler}></ErrorModal>}
        <Card className={styles.input}>
        <form  onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text" onChange={userNameChangeHandler} value={enteredUserName}></input>
            <label htmlFor="age">Age ( Years ) </label>
            <input id="age" type="number" onChange={userAgeChangeHandler} value={enteredUserAge}></input>
            <Button type="submit">Add User</Button>
        </form>
        </Card>
        </React.Fragment>
    );
}

export default AddUser;