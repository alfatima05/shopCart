import { Navbar, Nav, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Navbar className="header">
        <Nav className="nav">
          <NavItem className="nav-item">
            <Link to="/" className="nav-link">
              Shopping Cart
            </Link>
          </NavItem>

          <NavItem className="nav-item">
            <Link to="/Manage" className="nav-link">
              Manage
            </Link>
          </NavItem>
          <NavItem className="nav-item">
            <Link to="/Cart" className="nav-link">
              cart
            </Link>
          </NavItem>

          <NavItem className="nav-item">
            <Link to="/update" className="nav-link">
              Update
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
