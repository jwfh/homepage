/*
 * Copyright (c) 2019 Jacob WF House.
 *
 * This file is licensed under a MIT license.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to
 * deal in the Software without restriction, including without limitation the
 * rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
 * sell copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 */

import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

import presets from '../../presets';
import { PhotoLayout } from '../layout';
import { NarrowContainer } from '../partials';
import { blogPostBcMaker, generateMigrationFrontmatter, getBlogImage, isMainpagePost } from '../blog'


const BlogPost = ({ data: { markdownRemark: post } }) => (
  <PhotoLayout
    title={post.frontmatter.title}
    site={presets.pages.home.blog.title}
    date={post.frontmatter.date}
    breadcrumbs={blogPostBcMaker(post)}
    photo={getBlogImage(post)}
    alignment={post.frontmatter.imagealign}
    mainpage={isMainpagePost(post)}
  >
    <NarrowContainer className="narrow py-5 my-5">
      {generateMigrationFrontmatter(post)}
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </NarrowContainer>
  </PhotoLayout>
);


BlogPost.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      id
      frontmatter {
        title
        date
        image
        imagealign
        mainpage
      }
      fields {
        slug
      }
    }
  }
`;
