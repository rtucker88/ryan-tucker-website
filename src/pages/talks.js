import React from 'react'

import Presentation from '../components/presentation'

const TalksPage = ({ data }) => {
  const {allFile, allTalksJson} = data;
  const joinedTalks = allTalksJson.edges.map(({ node }) => {
    const { name } = node;

    const file = allFile.edges.find(({node}) => node.childImageSharp.sizes.originalName === name);

    return {
      ...node,
      ...file.node,
    }
  })

  return (
    <div id="talks">
      {joinedTalks.map(({ childImageSharp, description, link, title }) => (<Presentation
        key={title}
        title={title}
        link={link}
        description={description}
        img={childImageSharp.sizes}
      />))}
    </div>
  )
}

export default TalksPage

export const query = graphql`
    query PresentationImages {
  allTalksJson {
    edges {
      node {	
      	name: img
        description
        title
        link
      }
    }
  }
  allFile(filter:{
  	relativePath:{
      regex: "/talks/"
    }
    extension: {
      eq: "png"
    }
}) {
   edges {
     node {
      	childImageSharp {
          sizes(maxWidth: 500) {
            	...GatsbyImageSharpSizes
            	originalName
          }
        }
     }
   }
 } 
}
`
