import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../assets/scss/main.scss'

import Header from '../components/header'

const Layout = ({ children, data }) => (
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
        {
          property: 'og:title',
          content: 'Ryan Tucker\'s Portfolio',
        },
        {
          property: 'og:image',
          content: `https://ryanctucker.com${data.file.childImageSharp.sizes.src}`,
        },
        {
          property: 'og:description',
          content: 'Ryan Tucker is a front-end developer based out of Washington, DC. He specializes in React, Node, ReasonML, AngularJS and more.',
        },
        {
          property: 'og:type',
          content: 'website',
        }
      ]}
    />
    <Header siteTitle={data.site.siteMetadata.title}/>
    <div id="wrapper">
      {children()}
    </div>

    <div id="bg"></div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    file(relativePath: {eq: "headshot.jpg"}) {
      childImageSharp {
        sizes(maxWidth: 500) {
          src
       }
      }
    }
}
`
