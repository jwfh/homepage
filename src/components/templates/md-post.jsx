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
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';
import presets from '../../presets';

import {PhotoLayout} from '../layout';
import {NarrowContainer} from '../partials';

const BlogPost = ({data: {markdownRemark: post}}) => {
  let photo;
  if (
    typeof post.frontmatter.image !== 'undefined' &&
    post.frontmatter.image !== null &&
    post.frontmatter.image !== ''
  ) {
    photo = require('../../images/' + post.frontmatter.image);
  }
  let currentBC = presets.breadcrumbLabels;
  let currentSlug = '/';
  let breadcrumbPaths = post.fields.slug.split('/').filter((s) => s !== '');
  breadcrumbPaths.pop();
  let breadcrumbs = [{label: 'Home', link: '/'}];
  breadcrumbPaths.map((s) => {
    let label = currentBC[s].name;
    currentBC = currentBC[s];
    currentSlug += s + '/';
    let ret = {label, link: currentSlug};
    breadcrumbs.push(ret);
  });
  breadcrumbs.push({label: 'This Page', link: null});

  return (
    <PhotoLayout
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      breadcrumbs={breadcrumbs}
      photo={photo}
    >
      <NarrowContainer className="narrow py-5 my-5">
        <div dangerouslySetInnerHTML={{__html: post.html}} />
      </NarrowContainer>
    </PhotoLayout>
  );
};

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
        image
      }
      fields {
        slug
      }
    }
  }
`;