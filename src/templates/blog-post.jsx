import React from 'react';
import {graphql} from 'gatsby';

const BlogPost = () => {
  return <div />;
};

export default BlogPost;

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: {path: {eq: $path}}) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`;
