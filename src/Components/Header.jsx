
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";


import { useSelector } from "react-redux";

const Header = () => {
  const cartData = useSelector((state) => state.productReducer.productData);

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container px-4 px-lg-5 py-1">
            <a className="navbar-brand d-flex align-items-center" href="#!">
              <h2 className="d-inline m-0 text-primary fst-italic">
                Shopping Cart
              </h2>
            </a>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navItems"
              aria-controls="navItems"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="navbar-collapse collapse" id="navItems">
              <ul className="navbar-nav me-auto my-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    id="ShopItems"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Shop
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="ShopItems">
                    <li>
                      <a className="dropdown-item" href="#!">
                        All Products
                      </a>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        Popular Items
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#!">
                        New Arrivals
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form className="d-flex mt-2">
                <button className="btn btn-outline-dark active" type="submit">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    bounce
                    className="me-1"
                  />
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">
                    {cartData.length}
                  </span>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
