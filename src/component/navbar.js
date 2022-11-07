import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";
import logo from '../file.png'

export class NavBar extends Component {


  render() {

    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container">
                  <Link className="navbar-brand" to="/"><img src={logo} alt="" className='img-fluid' style={{ height: '20px' }} /> NewsApp</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">

                      <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/business">Bussiness</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/entertainment">Entertainment</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/health">Health</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/science">Science</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/sports">Sports</Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/technology">Technology</Link>
                      </li>
                    </ul>

                    <div className={`form-check d-flex form-switch ms-2 text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>
                      <input className="form-check-input" onClick={this.props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{this.props.color} </label>
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
}

export default NavBar