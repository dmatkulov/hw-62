import React from 'react';
import {NavLink} from 'react-router-dom';

const Toolbar: React.FC = () => {
  return (
    <div className="flex justify-between">
      <p>Logo</p>
      <nav>
        <ul className="flex gap-3">
          <li>
            <NavLink
              to="/"
              className="text-blue-200 focus:text-white focus:underline"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="text-blue-200 focus:text-white focus:underline"
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contacts"
              className="text-blue-200 focus:text-white focus:underline"
            >
              Contacts
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;