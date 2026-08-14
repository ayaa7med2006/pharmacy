import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark px-5" data-bs-theme="dark">
      <div className="container-fluid">
        <NavLink className="navbar-brand text-success fw-bold" to="/">
          Pharmacy App
        </NavLink>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-2">
            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-success' : 'nav-link text-white'} to="/home"> Home </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-success' : 'nav-link text-white'} to="/products"> Products </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className={({ isActive }) => isActive ? 'nav-link active fw-bold text-success' : 'nav-link text-white'} to="/auth/login"> Login</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;