import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="navbar bg-base-100 shadow-md px-4">
      
      {/* Left */}
      <div className="navbar-start">
        <Link to="/" className="text-xl font-bold">
          Litho Engineering
        </Link>
      </div>

      {/* Center */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal gap-4">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/supervisors">Supervisors</Link></li>
          {user && <li><Link to="/admin">Admin</Link></li>}
        </ul>
      </div>

      {/* Right */}
      <div className="navbar-end gap-3">
        {user ? (
          <>
            <span className="text-sm">{user.email}</span>
            <button onClick={logout} className="btn btn-error btn-sm">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-primary btn-sm">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
