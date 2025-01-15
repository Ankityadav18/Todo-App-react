 import { useContext } from "react";
 import TodoItem from "./TodoItem";
import { TodoItemsContext } from "../store/todo-items-store";
 
 function TodoItems(){
//   const contextObj= useContext(TodoItemsContext)
const {todoItems}=useContext(TodoItemsContext)
 // with the help of destructuing.
  console.log(todoItems)
   
   
   return (<div className='items-container'>
      {todoItems.map((item)=>{
       return <TodoItem key={item.name} todoName={item.name} todoDate={item.dueDate} ></TodoItem>

      })}    
     </div>
    )
 }


 export default TodoItems;