import { NavLink } from 'react-router-dom';
import Clock from './Clock';

const Header = () => {
  return (
    <header>
      <div>
        <h2>Business Pro</h2>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/services">Services</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
      <Clock />
    </header>
  );
};

export default Header;
