import React from 'react'

import Headshot from '../components/headshot'

const IndexPage = ({ data }) => (
  <div id="home">
    <Headshot sizes={data.file.childImageSharp.sizes}/>
    <div className='content'>
      <div className='inner'>
        <h1>Ryan Tucker</h1>
        <p>I'm a Front-End Developer out of Washington, DC. Some of my skills include React, Node, ReasonML, AngularJS,
          CSS,
          and HTML. Currently I'm creating great user experiences at <a
            href="https://www.zoomdata.com">Zoomdata</a>.</p>
      </div>
    </div>
    <ul className="icons">
      <li><a href="https://twitter.com/RCTucker88" className="icon fab fa-twitter"><span
        className="label">Twitter</span></a></li>
      <li><a href="https://github.com/rtucker88" className="icon fab fa-github"><span
        className="label">Github</span></a></li>
      <li><a href="https://www.linkedin.com/in/rtucker88/" className="icon fab fa-linkedin"><span
        className="label">LinkedIn</span></a></li>
      <li><a href="https://www.instagram.com/rctucker88/" className="icon fab fa-instagram"><span
        className="label">Instagram</span></a></li>
      <li><a href="https://medium.com/@RCTucker88" className="icon fab fa-medium"><span className="label">Medium</span></a>
      </li>
    </ul>
  </div>
)

export default IndexPage


export const query = graphql`
  query Headshot {
  file(relativePath: {eq: "headshot.jpg"}) {
    childImageSharp {
      sizes(maxWidth: 500) {
          ...GatsbyImageSharpSizes
      }
    }
  }
}
`