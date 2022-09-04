import React from 'react';
import clsx from 'clsx';
import { NavLink } from 'react-router-dom';

const navigation = [{ name: 'Komentarze', path: '/comments' }];

export const SideNav = () => (
  <div className="hidden md:flex md:w-64 md:flex-col md:inset-y-0">
    <div className="flex-1 flex flex-col min-h-0 bg-indigo-700">
      <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
        <div className="mt-5 flex-1 px-2 space-y-1">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              className={({ isActive }) =>
                clsx([
                  'text-white hover:bg-indigo-600 hover:bg-opacity-75 group flex items-center px-2 py-2 text-sm font-medium rounded-md',
                  isActive && 'bg-indigo-800 text-white',
                ])
              }
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  </div>
);
