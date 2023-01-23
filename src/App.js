
import './App.css';
import styles from "./UI/CssModules/App.module.css";
import { Header } from './UI/Header';
import { NavBar } from './UI/NavBar';
import { Content } from './UI/Content';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { Users } from './UI/Users';
import { UserManagment } from './UI/UserManagment';
import { ToDo } from './UI/ToDoList';

const App = () => {
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <Header/>
      <NavBar/>
      <Content/>
      <Routes>
      <Route path ='/ToDoList/' element = {<ToDo/>}/>
      <Route path ='/UserManagment/' element = {<UserManagment/>}/>
      <Route path ='/Users/' element = {<Users/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
