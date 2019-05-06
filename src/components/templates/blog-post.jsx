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

import React, {Fragment} from 'react';
import {graphql} from 'gatsby';
import PropTypes from 'prop-types';

import {GeneralHeader} from '../header';
import SEO from '../../components/seo';
import Footer from '../footer';
import {
  NarrowContainer,
  PageTitle,
  PhotoTitleTile,
} from '../../components/partials';

import '../../css/ionicons.min.css';
import '../../css/flaticon.css';
import '../../css/icomoon.css';
import '../../css/layout.css';
import '../../css/style.css';
import '../../css/magnific-popup.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';

// import StockPhoto from '../../images/bg_4.jpg';
import QuidiVidi1 from '../../images/title-5.jpg';
import QuidiVidi2 from '../../images/title-2.jpg';
import Harbour1 from '../../images/title-4.jpg';
import Cliff1 from '../../images/title-1.jpg';
import Sunset from '../../images/title-3.jpg';

const bgPhotos = [QuidiVidi1, Harbour1, QuidiVidi2, Cliff1, Sunset];

const BlogPost = ({data}) => {
  const {markdownRemark: post} = data;
  return (
    <Fragment>
      <GeneralHeader />
      <main>
        <SEO title={post.frontmatter.title} />
        <PhotoTitleTile title={post.frontmatter.title} image={bgPhotos[3]} />
        <NarrowContainer className="narrow py-5 my-5">
          <div dangerouslySetInnerHTML={{__html: post.html}} />
        </NarrowContainer>
      </main>
      <Footer />
    </Fragment>
  );
};

// BlogPost.propTypes = {
//   children: PropTypes.node.isRequired,
//   data: PropTypes.object.isRequired,
// };

export default BlogPost;

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: {slug: {eq: $slug}}) {
      html
      id
      frontmatter {
        title
      }
      fields {
        slug
      }
    }
  }
`;
