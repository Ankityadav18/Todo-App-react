
import AppName from './Component/AppName'
import AddTodo from './Component/AddTodo'
import TodoItems from './Component/TodoItems'
import "./App.css";
import { use } from 'react';
import { useState } from 'react';
import WelcomeMessage from './Component/WelcomeMessage';
import Footer from './Component/Footer';


function App() {

  // let initial_todoItems = [{
  //   name: "Milk",
  //   dueDate: "4/1/2025"
  // },
  // {
  //   name: "Go to Market",
  //   dueDate: "4/1/2025"

  // },
  // {
  //   name: "Enjoy vacation",
  //   dueDate: "4/1/2025"

  // }



  // ];
  const [todoItems, setTodoItems] = useState([]);
  // console.log(todoItems,setTodoItems);
  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added:${itemName} Date:${itemDueDate}`)
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }]
setTodoItems(newTodoItems)


  }

  const handleDelete=(todoItemName)=>{

    const newTodoItems=todoItems.filter(item=>item.name!==todoItemName)
    console.log(`Item to be Deleted :${todoItemName}`)
    setTodoItems(newTodoItems)
  }



  return (
    <center className='todo-container'>

      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length==0 && <WelcomeMessage ></WelcomeMessage>}
      <TodoItems todoItems={todoItems}  onDeleteClick={handleDelete}></TodoItems>
      <Footer></Footer>

    </center>
    
    
  )
}

export default App;
