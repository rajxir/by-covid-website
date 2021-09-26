import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

function Seo({ description, lang, meta, image, keywords, title }) {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const metaDescription =
          description || data.site.siteMetadata.description
        const metaImage =
            image || data.site.siteMetadata.image
        return (
          <Helmet
            htmlAttributes={{
              lang,
            }}
            title={title}
            titleTemplate={`%s | ${data.site.siteMetadata.title}`}
            meta={[
              {
                name: 'description',
                content: metaDescription,
              },
              {
                property: 'og:title',
                content: title,
              },
              {
                property: 'og:description',
                content: metaDescription,
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: 'og:type',
                content: 'website',
              },
              {
                property: "og:image",
                content: metaImage,
              },
              {
                name: 'twitter:card',
                content: 'summary',
              },
              {
                name: 'twitter:creator',
                content: data.site.siteMetadata.author,
              },
              {
                name: 'twitter:title',
                content: title,
              },
              {
                name: 'twitter:description',
                content: metaDescription,
              },
            ]
              .concat(meta)}
          />
        )
      }}
    />
  )
}

Seo.defaultProps = {
  lang: 'en',
  meta: [],
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.array,
  title: PropTypes.string.isRequired,
}

export default Seo

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        image
      }
    }
    allMdx {
      edges {
        node {
          frontmatter {
            title
          }
        }
      }
    }
  }
`
