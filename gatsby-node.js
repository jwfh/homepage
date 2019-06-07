/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const webpack = require('webpack');
const {createFilePath, createFileNode} = require('gatsby-source-filesystem');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;
  const blogTemplate = path.resolve('./src/components/templates/md-post.jsx');
  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}) {
        edges {
          node {
            frontmatter {
              published
              title
              date
            }
            fields {
              slug
            }
            id
            html
          }
        }
      }
    }
  `).then((res) => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({node}) => {
      createPage({
        path: node.fields.slug,
        component: blogTemplate,
        context: {
          slug: node.fields.slug,
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
