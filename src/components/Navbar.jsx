import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger fixed-top">
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav ms-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to="/">🏠Home</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contacto'>📒Contacto</Link>
          </li>
        </ul>
      </div>
      <div className='container justify-content-sm-end'>
        <Link className='navbar-brand' to="/">Happy Cake🍰</Link>
      </div>
    </nav>
  )
}
