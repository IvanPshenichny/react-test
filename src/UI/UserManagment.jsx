import React, {useState} from "react";
import styless from "./CssModules/Users.module.css"
import styles from "./CssModules/Content.module.css"

const InitialState = {
  InitialUsersState: [
  {id:1,Name: 'Ivan'},
  {id:2,Name: 'Viktor'},
  {id:3,Name: 'Boris'},
  {id:4,Name: 'Gaga'}
],
NewUserName: '',}

var UsersState = [];

function UserManagment () {
  const [deleteUsersState,deleteUser] = useState(InitialState.InitialUsersState);
  const [addUsersState,addUser] = useState(InitialState.InitialUsersState);
  const [addUserNameState,changeUserName] = useState(InitialState.NewUserName);

   UsersState = [...new Set (addUsersState.concat(deleteUsersState))];

  // const DeleteUsers = () => {deleteUser(deleteUsersState.splice(1,3))}
    
  const AddUsers = () => {addUser(addUsersState.concat({id:UsersState.length +1,Name: addUserNameState})); changeUserName('')}
  const ChangeUserName = (e) => {changeUserName(e.target.value)}

    var UsersList = UsersState.map(u=>{ return(
      <div className={styless.users}> 
      <img src ='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' /> 
      <button>Delete</button>  
      <div>{u.Name}</div> 
      </div>
      )})

  return (
    <div className={styles.content}>
      <div>
       {UsersList}
      </div>
      <div>
       <textarea
       placeholder='Add Name' 
       value = {addUserNameState}
       onChange = {ChangeUserName}>
       </textarea>
      </div>
      <div>
       <button onClick={AddUsers}>Add new user</button>
      </div>
      
    </div>
  );
};
export { UserManagment };
export {UsersState}