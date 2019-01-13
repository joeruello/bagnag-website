import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <nav class="site-header sticky-top py-1">
    <div class="container d-flex flex-column flex-md-row justify-content-between">
      <Link className="py-2 d-none d-md-inline-block" to="/">
        Download
      </Link>
      <Link className="py-2 d-none d-md-inline-block" to="/about">
        About
      </Link>
      <Link className="py-2 d-none d-md-inline-block" to="/privacy">
        Privacy
      </Link>
    </div>
  </nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
