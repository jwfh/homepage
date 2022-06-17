/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const webpack = require('webpack');
const _ = require('lodash');
const {createFilePath, createFileNode} = require('gatsby-source-filesystem');

exports.createPages = ({actions, graphql, reporter}) => {
  const {createPage} = actions;
  const blogTemplate = path.resolve('./src/components/templates/md-post.jsx');
  const tagTemplate = path.resolve('./src/components/templates/tag.jsx');
  return graphql(`
    {
      postsRemark: allMarkdownRemark(
        filter: {frontmatter: {published: {eq: true}}}
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            frontmatter {
              published
              title
              date
              tags
            }
            fields {
              slug
            }
            id
            html
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }
    res.data.postsRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
          slug: node.fields.slug,
        },
      });
    });

    res.data.tagsGroup.group.forEach((tag) => {
      createPage({
        path: `/blog/tags/${_.kebabCase(tag.fieldValue)}/`,
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
      });
    });
  
  });
};

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        jquery: 'jquery',
        'window.jquery': 'jquery',
        $: 'jquery',
        'window.$': 'jquery',
        // document: 'jquery',
      }),
    ],
  });
};

exports.onCreateNode = ({node, getNode, actions}) => {
  const {createNodeField} = actions;
  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({node, getNode, basePath: 'pages'});
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
  }
};
