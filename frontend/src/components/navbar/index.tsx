import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="d-flex flex-column flex-md-row align-items-center py-3 px-md-4 bg-secondary">
      <div className="container">
        <nav className="my-2 my-md-0 mr-md-3">
          <Link to="/" className="btn btn-secondary btn-lg">
            Alex's Info Company
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
