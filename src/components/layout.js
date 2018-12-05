import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
// import styled from 'react-emotion'
import styled from '@emotion/styled'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
import './../styles/codrops.css'
// import './../styles/layout.css'

const Content = styled.div`
  ${tw`px-32 py-8 font-sans`};
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>{children}</Content>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
