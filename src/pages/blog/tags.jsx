import React from 'react';
import {Link, graphql} from 'gatsby';

import PropTypes from 'prop-types';
// Utilities
import kebabCase from 'lodash/kebabCase';
// Components
import {Helmet} from 'react-helmet';

import Layout, {PhotoLayout} from '../../components/layout';
import {bcMaker, NarrowContainer} from '../../components/partials';
let photo = require('../../images/_DSC3717-Processed.jpg');
import SEO from '../../components/seo';

import presets from '../../presets';

const TagsPage = ({
  data: {
    allMarkdownRemark: {group},
  },
}) => (
  <Layout title={presets.pages.home.blog.title}>
    <NarrowContainer className="narrow py-5 my-5">
      <h1>Tags</h1>
      <ul>
        {group.map((tag) => (
          <li key={tag.fieldValue}>
            <Link to={`/blog/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          </li>
        ))}
      </ul>
    </NarrowContainer>
  </Layout>
);

TagsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.arrayOf(
        PropTypes.shape({
          fieldValue: PropTypes.string.isRequired,
          totalCount: PropTypes.number.isRequired,
        }).isRequired,
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
};

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
  `;

export default TagsPage;