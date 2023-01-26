import React, { useState, useEffect } from "react";
import styles from "./CssModules/Content.module.css";

localStorage.setItem("ToDoList", JSON.stringify([]));

function ToDo() {
  const ToDoStateList = JSON.parse(localStorage.getItem("ToDoList"));
  const [ToDoState, ChangeToDoList] = useState([ToDoStateList]);
  const [InputValue, SetInputValue] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    ChangeToDoList(ToDoStateList);
  }, []);
  useEffect(() => {
    localStorage.setItem("ToDoList", JSON.stringify(ToDoState));
  }, [ToDoState]);

  const SetToDoText = (e) => {
    SetInputValue(e.target.value);
  };
  const AddToDo = () => {
    if (InputValue.length>0) {
    ChangeToDoList([
      ...ToDoState,
      {
        id: ToDoState.length + 1,
        value: InputValue,
        editing: false,
        disabled: false,
      },
    ]);
    SetInputValue("");
  }

};

  const DeleteToDo = (id) => {
    ChangeToDoList(ToDoState.filter((item) => item.id !== id));
  };
  const EditToDoItem = (todo) => {
    SetInputValue(todo.value);
    const newList = [...ToDoState].map((item) => {
      if (item.id === todo.id) {
        item.editing = true;
        item.disabled = true;
      } else if (item.id != todo.id) {
        item.disabled = true;
      }
      return item;
    });
    
    ChangeToDoList(newList);
    setEditing(true);
  };
  const saveEdit = () => {
    if (InputValue.length < 0) return;
    const newList = [...ToDoState].map((item) => {
      if (item.editing) {
        item.value = InputValue;
        item.editing = false;
        item.disabled = false;
      } else if (!item.editing) {
        item.disabled = false;
      }
      return item;
    });
    ChangeToDoList(newList);
    setEditing(false);
    SetInputValue("");
  };

  const ToDoList = ToDoState.map((item) => {
    return (
      <div>
        {item.value}
          
        <button onClick={() => DeleteToDo(item.id)}>Delete</button>
        <button
          disabled={item.disabled}
          onClick={() => EditToDoItem(item, item.id)}
        >
          Edit
        </button>
      </div>
    );
  });

  return (
    <div className={styles.content}>
      <input
        value={InputValue}
        onChange={SetToDoText}
        type="text"
        placeholder="Add ToDo"
      />
      {editing ? (
        <button onClick={saveEdit}> Save Changes </button>
      ) : (
        <button onClick={AddToDo}> Add </button>
      )}
      <div>{ToDoList}</div>
    </div>
  );
}
export { ToDo };
