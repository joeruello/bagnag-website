import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div
    style={{
      background: '#F77B26',
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        display: 'flex',
        alignItems: 'baseline',
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0, marginRight: 16 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <nav>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: 8,
          }}
        >
          About
        </Link>
        <Link
          to="/support"
          style={{
            color: 'white',
            textDecoration: 'none',
            marginRight: 8,
          }}
        >
          Support
        </Link>
        <Link
          to="/privacy"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          Privacy
        </Link>
      </nav>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}

export default Header
