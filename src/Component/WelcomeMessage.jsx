import styles from "../Component/Welcome.module.css"
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function WelcomeMessage(){
 const {todoItems}=useContext(TodoItemsContext)

    return todoItems.length===0 && <p className={styles.para}>Enjoy Your Day!!!!!</p>

}
export default WelcomeMessage;