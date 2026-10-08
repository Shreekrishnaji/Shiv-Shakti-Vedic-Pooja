import '../css/Navbar.css';
import logo from '../assets/logo.png'; // Replace with your image filename in src/assets/

export default function Navbar() {
  return (
    <nav className="navbar">
      <a href="#" className="navbar-brand">
        <img src={logo} alt="Shiv Shakti Logo" className="navbar-logo" />
        <h1 className="navbar-title">Shiv Shakti</h1>
      </a>

      <ul className="navbar-links">
        <li><a href="#about">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Book Appointment</a></li>
      </ul>
    </nav>
  );
}