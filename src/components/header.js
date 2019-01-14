import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
export default class Header extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar className="site-header" dark expand="md">
          <NavbarBrand tag={Link} to="/">
            <StaticQuery
              query={graphql`
                query {
                  placeholderImage: file(relativePath: { eq: "icon.png" }) {
                    childImageSharp {
                      fluid(maxWidth: 30) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              `}
              render={data => (
                <Img
                  fluid={data.placeholderImage.childImageSharp.fluid}
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
              )}
            />
            BagNag
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink to="/about" tag={Link}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/privacy">
                  Privacy
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: '',
}
