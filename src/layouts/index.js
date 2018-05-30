import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/scss/main.scss'

import Header from '../components/header'

const Layout = ({ children, data }) => {
  return (
    <div>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: 'description', content: 'Sample' },
          { name: 'keywords', content: 'sample, something' },
        ]}
      />
      <Header siteTitle={data.site.siteMetadata.title}/>
      <div id="wrapper">
        {children()}
      </div>

      <div id="bg"></div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
