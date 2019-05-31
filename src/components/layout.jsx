/*
 * Copyright (c) 2019 Jacob House.
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

import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

import {HomeHeader, GeneralHeader} from './header';
import Footer from './footer';
import SEO from './seo';
import presets from '../presets';
import {PhotoTitleTile} from './partials';

import 'katex/dist/katex.min.css';

import '../css/ionicons.min.css';
// import '../css/animate.css';
import '../css/flaticon.css';
import '../css/icomoon.css';
import '../css/layout.css';
import '../css/style.css';
import '../css/magnific-popup.css';
import '../css/owl.carousel.min.css';
import '../css/owl.theme.default.min.css';

// Indices 0 and 3 are a little difficult to read
const {bgPhotos} = presets;

export const HomeLayout = ({children, title}) => (
  <Fragment>
    <SEO title={title} />
    <HomeHeader />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

const Layout = ({children, title}) => (
  <Fragment>
    <SEO title={title} />
    <GeneralHeader />
    <main>{children}</main>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;

export class PhotoLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photo: bgPhotos[this.props.photoIndex],
    };
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('prev', prevProps);
    if (prevProps.photoIndex !== this.props.photoIndex) {
      this.setState(
        {
          photo: bgPhotos[this.props.photoIndex],
        },
        () => {
          console.log(this.state.photo);
        }
      );
    }
  }
  render() {
    const {title, children, photoIndex, ...rest} = this.props;
    console.log('chose index', photoIndex, this.state.photo);
    return (
      <Layout title={title}>
        <PhotoTitleTile
          // ...rest here so that breadcrumbs are passed to PhotoTitleTile
          key={this.state.photo}
          {...rest}
          title={title}
          image={this.state.photo}
        />
        {children}
      </Layout>
    );
  }
}
