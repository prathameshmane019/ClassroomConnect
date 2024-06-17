import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './components/home.jsx'
import Layout from './components/layout.jsx'
import Login from './components/login.jsx'
import { Route } from 'react-router-dom'
import Dashboard from './components/dashboard.jsx'
import AuthenticatedLayout from './components/userLayout.jsx'
import AttendanceForm from './components/attendanceForm.jsx'
import Profile from './components/profile'
// import AttendanceViewer from './components/attendance'
const router = createBrowserRouter(createRoutesFromElements(
  <>
  <Route path="/" element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
  </Route>
  <Route path ="/user" element={<AuthenticatedLayout />}>
   <Route path="/user/dashboard" element={<Dashboard />} />
   <Route path="/user/attendance" element={<AttendanceForm />} />
   <Route path="/user/profile" element={<Profile />} />
 </Route>
 </>
))
ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
