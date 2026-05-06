import { NavLink } from 'react-router-dom';
import { Sprout } from 'lucide-react';

export default function Header() {
  return (
    <header>
      <div className="logo-container">
        <Sprout color="#fce043" size={32} />
        <h1>www.MA pesticides.ac.in</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')}>About Us</NavLink></li>
          <li><NavLink to="/products" className={({ isActive }) => (isActive ? 'active' : '')}>Products</NavLink></li>
          <li><NavLink to="/disease-guide" className={({ isActive }) => (isActive ? 'active' : '')}>Disease Guide</NavLink></li>
          <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : '')}>Contact</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}
