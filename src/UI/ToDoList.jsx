import React, {useState} from "react";
import styles from "./CssModules/Content.module.css"

function ToDo () {
    const [ToDoState, ChangeToDoList] = useState([]);
    const [InputValue, SetInputValue] = useState(['']);
    const [editing, setEditing] = useState (false);

    const SetToDoText = (e) => {
       SetInputValue(e.target.value)
    }
    const AddToDo = () => {
        ChangeToDoList([...ToDoState,{id:ToDoState.length, value: InputValue, editing: false}]);
        SetInputValue ('')
    }
    const DeleteToDo = (id) => {
        ChangeToDoList (ToDoState.filter(item => item.id !== id))
    }
    // const EditToDoItem = (todo)=> {
    //     SetInputValue (todo.value);
    //     const newList = [...ToDoState].map(i=>{
    //         if(i.id === todo.id) {item.editing = true;}
    //         return item
    //     })
    //     ChangeToDoList (newList)
    //     setEditing (true)    
    // };
    const saveEdit = () => {
        if(InputValue.length<0) return;
        
    }
    
    const ToDoList = ToDoState.map (i => {return (
        <div> 
            {i.value}
              
        <button onClick = {() => DeleteToDo (i.id)}>Delete</button>
        {/* <button onClick = {() => EditToDoItem (i.id,i.value)}>Edit</button> */}
       
        </div>
    )})

    return (
        <div className={styles.content}>
            <input value = {InputValue} onChange={SetToDoText} type = "text" placeholder="AddToDo" />
            <button onClick={AddToDo}> </button> 
            <div>
                {ToDoList}
            </div>
        </div>
    )
}
export {ToDo}