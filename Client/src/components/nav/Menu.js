import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuth } from "../../context/auth";
import { useNavigate } from "react-router-dom";
import useCategory from "../../hooks/useCategory";
import Search from "../forms/Search";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import logo from '../../assets/images/ecomlogo.jpg';

const Menu = () => {

  // context
  const [auth, setAuth] = useAuth();
  const [cart, setCart] = useCart();

  // hooks
  const categories = useCategory();
  const navigate = useNavigate();

  const logout = () => {
    setAuth({ ...auth, user: null, token: "" });
    localStorage.removeItem("auth");
    navigate("/login");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container-fluid">
          <NavLink className="navbar-brand ms-5" active='none' to="/">
            <img src={logo} className="ecom-logo" alt='logo' title='Shop-Smart' onClick={() => {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }} />
          </NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item me-3">
                <NavLink className="nav-link" aria-current="page" to="/">
                  HOME
                </NavLink>
              </li>
              <li className="nav-item me-3">
                <NavLink className="nav-link" aria-current="page" to="/shop">
                  SHOP
                </NavLink>
              </li>
              <li className="nav-item me-5 mt-1">
                <Badge
                  count={cart?.length >= 1 ? cart.length : 0}
                  offset={[-5, 11]}
                  showZero={true}
                >
                  <NavLink className="nav-link " aria-current="page" to="/cart">
                    CART
                  </NavLink>
                </Badge>
              </li>
              <li className="me-5">
                <Search />
              </li>
              <li>
                {!auth?.user ? (
                  <ul className="horizontal-list">
                    <li className="nav-item ">
                      <NavLink className="nav-link btn btn-success" to="/login">
                        SIGN IN
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link btn btn-danger " to="/register">
                        SIGN UP
                      </NavLink>
                    </li>
                  </ul>
                ) : (
                  <div className="dropdown">
                    <li>
                      <a
                        className="nav-link pointer dropdown-toggle me-3"
                        data-bs-toggle="dropdown"
                      >
                        {auth?.user?.name?.toUpperCase()}
                      </a>

                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            className="nav-link me-3 p-2 mt-2 mb-2 h3 text-dark"
                            to={`/dashboard/${auth?.user?.role === 1 ? "admin" : "user"
                              }`}
                          >
                            Dashboard
                          </NavLink>
                        </li>

                        <li className="nav-item pointer ">
                          <a onClick={logout} className="nav-link p-2 mt-2 mb-2 h3 text-dark">
                            Logout
                          </a>
                        </li>
                      </ul>
                    </li>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Menu;