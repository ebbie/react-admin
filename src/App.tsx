import React from 'react';
import Dashboard from './secure/dashboard/Dashboard';
import './App.css';
import Users from './secure/users/users';
import {BrowserRouter, Route} from "react-router-dom";
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path={'/'} component={RedirectToDashboard} />
        <Route path={'/dashboard'} exact component={Dashboard} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/users'} component={Users} exact />
        <Route path={'/users/create'} component={UserCreate} />
        <Route path={'/users/:id/edit'} component={UserEdit} />
        <Route path={'/roles'} component={Roles} exact />
        <Route path={'/roles/create'} component={RoleCreate} exact />
      </BrowserRouter>
    </div>

  );
}

export default App;
