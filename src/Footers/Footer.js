import React from 'react'
import PropTypes from 'prop-types'
import "../CSS/Footer.css"

function Footer(props) {
  return (
    <div class="footer-basic">
      <footer>
        <ul class="list-inline">
          <li class="list-inline-item"><a href="#">This is a Footer</a></li>
        </ul>
        <p class="copyright">No one @2022</p>
      </footer>
    </div>
    
  )
}

Footer.propTypes = {}

export default Footer