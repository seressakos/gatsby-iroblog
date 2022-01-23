/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { useState, useEffect  } from 'react';
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
  allNodeHomePage {
    nodes {
      field_hero {
        width
      }
      relationships {
        field_hero {
          uri {
            url
          }
        }
        field_bookimage {
          uri {
            url
          }
        }
        field_profile_image {
          uri {
            url
          }
        }
      }
      field_booktext {
        value
      }
    }
  }
}
  `)




  return (
    <>
     <Header
         images={data.allNodeHomePage.nodes[0].relationships.field_hero }
     />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
