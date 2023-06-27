import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom';
export default function Navbar(props) {
  return (

<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid justify-content-center">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.about}</Link>
        </li>
      </ul>


<div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
  <input class="form-check-input" type="checkbox" role="switch" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
  <label class="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
</div>

    </div>
  </div>
</nav>

  )
}

Navbar.protoTypes = {
    title:PropTypes.string.isRequired,
    about:PropTypes.string.isRequired
};

Navbar.defaultProps = {
    title:'set title here',
    about:'About text here'
};