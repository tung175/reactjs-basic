import logo from './logo.svg';
import './App.scss';
import MyComponents from './Example/MyComponents';
import ListToDo from './Todos/ListToDo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './Nav/Nav';
import React from "react";
import DetailUsers from './Users/DetailUsers';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Home from './Example/Home';
import ListUsers from './Users/ListUsers';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
        <Nav/>
        <img src={logo} className="App-logo" alt="logo" />
        <Switch>
          <Route path="/" exact>
            <Home/>
          </Route>
          <Route path="/Example">
           <MyComponents/>
          </Route>
          <Route path="/Todos">
            <ListToDo/>
          </Route>
          <Route path="/User" exact>
            <ListUsers/>
          </Route>
          <Route path="/User/:id">
            <DetailUsers/>
          </Route>
        </Switch>
      </header>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    </div>
    </BrowserRouter>

  );
}

export default App;
