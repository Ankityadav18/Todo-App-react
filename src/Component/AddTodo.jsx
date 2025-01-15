import { useState ,useRef, useContext} from "react";
import { BiMessageAdd } from "react-icons/bi";
import { TodoItemsContext } from "../store/todo-items-store";

function AddTodo() {

const {addNewItem} =useContext(TodoItemsContext)
  const [todoName,setTodoName]=useState("");
  const [dueDate,setDueDate]=useState("");
 
 
 
 
  const handleNameChange=(event)=>{
    setTodoName(event.target.value);
  };
  
  
  
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  };
 
 
 
 
  const handleAddButtonClicked=(event)=>{
event.preventDefault();
    addNewItem(todoName,dueDate);
    setDueDate("");
    setTodoName("");
  }
  // const todoNameElement=useRef();
  // const dueDateElement=useRef()
  // const handleAddButtonClicked = (event) => {
  // event.preventDefault()
  //   const todoName=todoNameElement.current.value;
  //   todoNameElement.current.value=""
  //   const dueDate =dueDateElement.current.value
  //   dueDateElement.current.value=""
  //   console.log(todoName,dueDate)
  // }
return (
    <>
      <div className="container ">
        <form className="row ay-row"

        
        >
          <div className="col-6">
            <input type="text"  placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleNameChange} 

  
            ></input>
          </div>
          <div className="col-4">
            <input type="date"   value={dueDate} onChange={handleDateChange} ></input>
          </div>
          <div className="col-2"><button type="submit"
           className="btn btn-success kg-button ag-button"
         onClick={handleAddButtonClicked}  >
            <BiMessageAdd />
            
            </button>
            </div>
        </form>
      </div>
    </>
  )

}
export default AddTodo;