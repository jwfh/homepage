/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const webpack = require('webpack');

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  const postTemplate = path.resolve('./src/components/templates/blog-post.jsx');

  return graphql(`
    {
      allMarkdownRemark(filter: {frontmatter: {published: {eq: true}}}) {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
            }
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
        path: `/blog/${node.frontmatter.path}`,
        component: postTemplate,
      });
    });
  });
};

exports.onCreateWebpackConfig = ({stage, rules, loaders, plugins, actions}) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
      }),
    ],
  });
};
