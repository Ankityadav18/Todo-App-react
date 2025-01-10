import { useState } from "react";

function AddTodo({ onNewItem }) {

  const [todoName, setTodoName] = useState();
  const [dueDate, setDueDate] = useState();
  const handleChangeName = (event) => {
    setTodoName(event.target.value)

  }
  const handleChangeDate = (event) => {
    setDueDate(event.target.value)
  }
  const handleAddButtonClicked = () => {
    onNewItem(todoName, dueDate)
    setDueDate("");
    setTodoName("");

  }

  return (
    <>

      <div className="container ">
        <div className="row ay-row">
          <div className="col-6">
            <input type="text" value={todoName} placeholder="enter your todo here"

              onChange={handleChangeName}


            ></input>
          </div>
          <div className="col-4">
            <input type="date" value={dueDate} onChange={handleChangeDate}></input>
          </div>
          <div className="col-2"><button type="button" className="btn btn-success kg-button ag-button"
            onClick={handleAddButtonClicked}


          >Add</button></div>
        </div>
      </div>
    </>
  )

}
export default AddTodo;