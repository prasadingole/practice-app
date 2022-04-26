import styles from './AddUser.module.css'
import Card from '../UI/Card';
const AddUser = (props) => {
    const addUserHandler = (event) => {
        event.preventDefault();
    }
    return (
        <Card className={styles.input}>
        <form  onSubmit={addUserHandler}>
            <label htmlFor="username">User Name</label>
            <input id="username" type="text"></input>
            <label htmlFor="age">Age ( Years ) </label>
            <input id="age" type="number"></input>
            <button type="submit">Add User</button>
        </form>
        </Card>
    );
}

export default AddUser;