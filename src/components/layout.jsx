/* eslint-disable no-inline-comments */
/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import {StaticQuery, graphql} from 'gatsby';

import Header from './header';
import Footer from './footer';
import '../css/layout.css';

import '../css/europa.css';

import '../css/poppins.css';
import '../css/open-iconic-bootstrap.min.css';
import '../css/animate.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';
import '../css/magnific-popup.css';
import '../css/aos.css';
import '../css/ionicons.min.css';
import '../css/flaticon.css';
import '../css/icomoon.css';
import '../css/style.css';

const Layout = ({children}) => (
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
    render={(data) => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div
        // style={{
        //   margin: '0 auto',
        //   maxWidth: 960,
        //   padding: '0px 1.0875rem',
        //   paddingTop: 0,
        // }}
        >
          <main>{children}</main>
        </div>
        <Footer />

        {/* Loader */}
        {/* <div id="ftco-loader" className="show fullscreen">
          <svg className="circular" width="48" height="48">
            <circle
              className="path-bg"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              stroke="#eee"
            />
            <circle
              className="path"
              cx="24"
              cy="24"
              r="22"
              fill="none"
              strokeWidth="4"
              strokeMiterlimit="10"
              stroke="#F96D00"
            />
          </svg>
        </div> */}
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
