import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="logo">
        <span className="logo-bar" />
        Kasala Swaroopa Rani
      </NavLink>
      <ul>
        <li>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={({ isActive }) => isActive ? 'active' : ''}>
            Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
