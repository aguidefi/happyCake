import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className="container-fluid">
        <button className="navbar-toggler shadow-none border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="sidebar offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header text-white border-bottom">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Happy Cake</h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className='nav-link' to="/">🏠Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to='/contacto'>📒Contacto</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='container justify-content-end'>
        <Link className='navbar-brand' to="/">Happy Cake🍰</Link>
      </div>
    </nav>
  )
}
