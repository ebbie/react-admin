import React from 'react';
import Dashboard from './secure/dashboard/Dashboard';
import './App.css';
import Users from './secure/users/users';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from './public/Login';
import Register from './public/Register';
import RedirectToDashboard from './secure/RedirectToDashboard';
import UserCreate from './secure/users/UserCreate';
import UserEdit from './secure/users/UserEdit';
import Roles from './secure/roles/Roles';
import RoleCreate from './secure/roles/RoleCreate';
import RoleEdit from './secure/roles/RoleEdit';
import Products from './secure/products/Products';
import ProductCreate from './secure/products/ProductCreate';
import ProductEdit from './secure/products/ProductEdit';

function App() {
  console.log("insinde App");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RedirectToDashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path={'/login'} element={<Login />} />
          <Route path={'/register'} element={<Register />} />
          <Route path={'/users'} element={<Users />} />
          <Route path={'/users/create'} element={<UserCreate />} />
          {/* <Route path={'/users/:id/edit'} element={<UserEdit />} /> */}
          <Route path={'/roles'} element={<Roles />}  />
          <Route path={'/roles/create'} element={<RoleCreate />}  />
          {/* <Route path={'/roles/:id/edit'} element={<RoleEdit />}/> */}
          <Route path={'/products'} element={<Products />}  />
          <Route path={'/products/create'} element={<ProductCreate />}  />
          {/* <Route path={'/products/:id/edit'} element={<ProductEdit />}/> */}
        </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
