import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
    
    
    if (props.users.length === 0) {
            return;
    }
    

    return (
        <Card className={styles.users}>
            <ul>
                {props.users.map(user => {
                    return <li key={user.userId}>{user.userName} ({user.userAge} Years Old)</li>
                })}
            </ul>
        </Card>
    )
}

export default UserList;