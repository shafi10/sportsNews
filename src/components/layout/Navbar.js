import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <Link class="navbar-brand" to="/">Sports News App</Link>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item">
        <Link class="nav-link" to="/tennis">Tennis</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/football">Football</Link>
      </li>
      <li class="nav-item">
        <Link class="nav-link" to="/topNews">Cricket</Link>
      </li>
    </ul>
  </div>
</nav>
        </div>
    )
}

export default Navbar
