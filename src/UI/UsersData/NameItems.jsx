import React from "react";
import styles from "../CssModules/Users.module.css"

let NameItems = (props) => {
    return(
        <div>
        <div className={styles.users}>
       <img src ='https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png' /> 
       
        </div>
        <div>{props.Name} </div>
        {/*    <button>Delete</button>  */}

        </div>
    )
}
export default NameItems;