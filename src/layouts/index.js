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
          {
            name: 'description',
            content: 'The portfolio website for Ryan Tucker. A front-end developer based out of Washington, DC.',
          },
          {
            name: 'keywords',
            content: 'Ryan Tucker, developer, JavaScript, React, ReasonML, Node, AngularJS, front end, web development',
          },
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
