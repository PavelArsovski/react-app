import { NavLink } from "react-router-dom";

const HeaderComponent = () => {
  const handleLogout = () => {
    console.log("User logged out");
  };

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">
            StudentDormApp
          </a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to="/students">
                  Students
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/dorms">
                  Dorms
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/rooms">
                  Rooms
                </NavLink>
              </li>
            </ul>
          </div>
          <button
            className="btn btn-outline-light ms-auto"
            onClick={handleLogout}
          >
            Logout
          </button>
        </nav>
      </header>
    </div>
  );
};

export default HeaderComponent;