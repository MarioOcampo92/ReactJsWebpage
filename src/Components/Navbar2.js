import React from 'react'

function NavbarR() {
  
  return (
    <nav>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" style={{
          padding: 20
      }
      }>
  <a class="navbar-brand" href="#">Mario</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link" href="#Apis">Apis</a>
      <a class="nav-item nav-link" href="#Skills">Skills</a>

    </div>
  </div>
</nav>
    </nav>
  
  )
}

export default NavbarR;