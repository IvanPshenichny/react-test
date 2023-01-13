import React, {useState} from "react";
import styles from "./CssModules/Content.module.css"
import styless from "./CssModules/Users.module.css"
import { UsersState } from "./UserManagment";
import NameItems from "./UsersData/NameItems"



function Users  () {
  
  const UsersStateList = UsersState.map(u=> {return (<div className={styless.users}> 
    <img src ='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' />
    <div>{u.Name}</div>
    </div>)})
  debugger
  return (
    <div className={styles.content}>
      <div>
        {UsersStateList}
        
      </div>
      
    </div>
  );
};
export { Users };
