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

import Layout from '../components/layout';
import {NarrowContainer, Formatter} from '../components/partials';
import NotFoundImage from '../images/404-error.jpg';

const body = `\
# Lost?

##### _Stay where you're at 'til we comes where you're to._

If it's possible that you clicked on a dead link or made a typographical error, perhaps the [home page](/)
could help you get where you're going. 

If you're sure that there should be a page here, open an 
[issue](https://github.com/jwfh/homepage/issues) and I'll take a look at what 
could be causing the trouble.
`;

const Page = () => (
  <Layout title="404 Not Found">
    <NarrowContainer className="narrow py-5 my-5">
      <Formatter>{body}</Formatter>
      <a href="https://www.distilled.net/wp-content/themes/distilled_2011/images/all/404-gentlemen.jpg">
        <div
          style={{
            backgroundImage: `url(${NotFoundImage})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            width: '100%',
            height: '50vh',
          }}
        />
      </a>
    </NarrowContainer>
  </Layout>
);

export default Page;
