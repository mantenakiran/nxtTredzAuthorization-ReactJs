// Write your JS code here
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-logout-container">
      <img
        alt="website logo"
        className="nav-image"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      />
      <img
        className="nav-logout"
        alt="nav logout"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
      />

      <ul className="nav-items-desktop-container">
        <li className="nav-text">Home</li>
        <li className="nav-text">Products</li>
        <li className="nav-text">Cart</li>
        <button type="button" className="logout-button">
          Logout
        </button>
      </ul>
    </div>
    <ul className="nav-items-container">
      <li>
        <img
          alt="nav home"
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
        />
      </li>
      <li>
        <img
          alt="nav products"
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
        />
      </li>
      <li>
        <img
          alt="nav cart"
          className="nav-logout"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
        />
      </li>
    </ul>
  </nav>
)
export default Header
