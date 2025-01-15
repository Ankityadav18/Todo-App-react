
import AppName from './Component/AppName'
import AddTodo from './Component/AddTodo'
import TodoItems from './Component/TodoItems'
import "./App.css";
import { use } from 'react';
import { useState } from 'react';
import WelcomeMessage from './Component/WelcomeMessage';
import Footer from './Component/Footer';
import { TodoItemsContext } from './store/todo-items-store';


function App() {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (itemName, itemDueDate) => {
    const newTodoItems = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate
    }]
    setTodoItems(newTodoItems)
  }
  const deleteItem = (todoItemName) => {

    const newTodoItems = todoItems.filter(item => item.name !== todoItemName)

    setTodoItems(newTodoItems)
  };



  return (

    <TodoItemsContext.Provider value={{
      
      todoItems:todoItems,
      addNewItem:addNewItem,
      deleteItem:deleteItem

      
      }}>
      <center className='todo-container'>
        <AppName></AppName>
        <AddTodo ></AddTodo>
        {<WelcomeMessage ></WelcomeMessage>}
        <TodoItems></TodoItems>
        <Footer></Footer>
      </center>
    </TodoItemsContext.Provider>

  )
}

export default App;
