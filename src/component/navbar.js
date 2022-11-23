import React from 'react'
import {
  Link, useLocation,useNavigate
} from "react-router-dom";
import logo from '../file.png'




const NavBar = (props) => {
  let navigation = useNavigate();
  const handelLogout = () => {
      localStorage.removeItem('token')//remove the token from the storage so the user cant login again
      navigation('/login');
  }
  const location = useLocation(); // to set the active in navbar ONLY BE USED IN THE FUNCTION COMPONENET
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
              <div className="container">
                <Link className="navbar-brand" to="/"><img src={logo} alt="" className='img-fluid' style={{ height: '20px' }} /> NewsApp</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">

                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/business' ? 'active' : ''}`} to="/business">Bussiness</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/entertainment' ? 'active' : ''}`} to="/entertainment">Entertainment</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/health' ? 'active' : ''}`} to="/health">Health</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/science' ? 'active' : ''}`} to="/science">Science</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/sports' ? 'active' : ''}`} to="/sports">Sports</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/technology' ? 'active' : ''}`} to="/technology">Technology</Link>
                    </li>
                    <li className="nav-item">
                      <Link className={`nav-link ${location.pathname === '/search' ? 'active' : ''}`} to="/search"><i className="bi bi-search "></i></Link>
                    </li>
                    <li className="nav-item">
                     { localStorage.getItem('token')? <Link className={`nav-link ${location.pathname === '/favnews' ? 'active' : ''}`} to="/favnews">Favrouit news</Link>: " "}
                    </li>
                  </ul>
                  <div>
                                {!localStorage.getItem('token')?<form className='d-flex '>
                                    <Link className={`btn mx-2 btn-${props.mode==='dark'? 'secondary': 'primary'}`} to="/login">Login </Link>
                                    <Link className={`btn mx-2 btn-${props.mode==='dark'? 'secondary': 'primary'}`} to="/signup">Signup </Link>
                                </form>:<button className={`btn  mx-2 btn-${props.mode==='dark'? 'secondary': 'primary'}`} onClick={handelLogout} > Logout </button>}
                            </div>
                  <div className={`form-check d-flex form-switch mx-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                    <input className="form-check-input mx-2" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.color} </label>
                    
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}


export default NavBar