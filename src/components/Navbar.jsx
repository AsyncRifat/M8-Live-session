import React from 'react';
import { Link, NavLink } from 'react-router';
import { TiShoppingCart } from 'react-icons/ti';
import { MdBookmarkAdd } from 'react-icons/md';

const Navbar = () => {
  return (
    <div className="navbar p-0 bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="cursor-pointer mr-2 lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {' '}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{' '}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
              >
                Home
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
              >
                About
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/cart"
                className={({ isActive }) => (isActive ? 'text-red-500' : '')}
              >
                <TiShoppingCart size={22} />
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/favorites"
                className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
              >
                <MdBookmarkAdd size={22} />
              </NavLink>
            </li>
          </ul>
        </div>

        <Link to="/" className="font-bold text-xl">
          FlagshipFaceOff
        </Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'text-red-500' : '')}
            >
              <TiShoppingCart size={22} />
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/favorites"
              className={({ isActive }) => (isActive ? 'text-cyan-500' : '')}
            >
              <MdBookmarkAdd size={22} />
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
