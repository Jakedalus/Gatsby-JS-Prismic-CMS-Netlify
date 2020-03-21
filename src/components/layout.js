/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "./layout.css";
import styled from 'gatsby-plugin-styled-components';

const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

const Layout = ({ children }) => {

  return (
    <>
      <Main>{children}</Main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
