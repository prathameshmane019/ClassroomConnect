import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="h-screen w-64 bg-slate-200 text-zinc-800 flex flex-col">
      <div className="p-6">
        <h2 className="text-2xl font-semibold">Attendance Management</h2>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        <NavLink
          to="/admin/dashboard"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/manageStudent"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
         Manage Students
        </NavLink>
        <NavLink
          to="/admin/manageFaculty"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
       Manage Faculty
        </NavLink>
        <NavLink
          to="/admin/manageClass"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
         Manage Classes
        </NavLink>
        <NavLink
          to="/admin/profile"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
         profile
        </NavLink>
        <NavLink
          to="/logout"
          className={({ isActive }) =>
            isActive
              ? 'block px-4 py-2 bg-primary text-slate-200 rounded-md'
              : 'block px-4 py-2 hover:bg-primary hover:text-slate-200 rounded-md'
          }
        >
          Logout
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
