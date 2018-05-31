import React from 'react'

import Headshot from '../components/headshot'

const IndexPage = ({data}) => (
    <div id="home">
      <Headshot sizes={data.file.childImageSharp.sizes} />
      <div className={'content'}>
        <div className={'inner'}>
          <h1>Ryan Tucker</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum dolore exercitationem itaque laborum, nam omnis
            ratione reprehenderit sapiente ullam ut.</p>
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
`;