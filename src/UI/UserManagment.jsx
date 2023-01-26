import React, { useState, useEffect } from "react";
import styless from "./CssModules/Users.module.css";
import styles from "./CssModules/Content.module.css";

var UsersList = [];
localStorage.setItem("usersState", JSON.stringify([]));

function UserManagment() {
  const State = JSON.parse(localStorage.getItem("usersState"));
  const [usersState, changeUsersList] = useState(State);
  const [addUserNameState, changeUserName] = useState("");

  useEffect(() => {
    changeUsersList(State);
  }, []);
  useEffect(() => {
    localStorage.setItem("usersState", JSON.stringify(usersState));
  }, [usersState]);

  const DeleteUsers = (id) => {
    changeUsersList(usersState.filter((item) => item.id !== id));
  };

  const AddUsers = () => {
    if (addUserNameState.length > 0) {
      changeUsersList(
        usersState.concat({ id: usersState.length + 1, Name: addUserNameState })
      );
      changeUserName("");
    }
  };
  const ChangeUserName = (e) => {
    changeUserName(e.target.value);
  };

  UsersList = usersState;

  const Users = usersState.map((u) => {
    return (
      <div className={styless.users}>
        <img src="https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png" />
        <button onClick={() => DeleteUsers(u.id)}>Delete</button>
        <div>{u.Name}</div>
      </div>
    );
  });

  return (
    <div className={styles.content}>
      <div>{Users}</div>
      <div>
        <textarea
          placeholder="Add Name"
          value={addUserNameState}
          onChange={ChangeUserName}
        ></textarea>
      </div>
      <div>
        <button onClick={AddUsers}>Add new user</button>
      </div>
    </div>
  );
}
export { UserManagment };
export { UsersList };
