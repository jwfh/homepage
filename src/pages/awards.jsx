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

import {Link} from 'gatsby';
import Layout from '../components/layout';
import SEO from '../components/seo';
import {NarrowContainer, PageTitle, PageSubtitle} from '../components/partials';

const AwardsPage = () => (
  <Layout>
    <SEO title="Awards" />
    <NarrowContainer className="narrow py-5 my-5">
      <PageTitle>Awards</PageTitle>
      <PageSubtitle>
        <a id="deans-list">Faculty of Science Dean's List, 2016&ndash;17</a>
      </PageSubtitle>
      <p>
        The dean’s list recognizes academic excellence; a maximum of ten per
        cent of students in the Faculty shall be eligible. Full details are
        available on Memorial University's{' '}
        <a href="https://www.mun.ca/hss/news/deanslist/criteria.php">website</a>
        .
      </p>

      <PageSubtitle>
        <a id="regional-science-fair">
          NL Regional Science Fair Bronze Medal, 2015
        </a>
      </PageSubtitle>
      <p>
        A statistical analysis of training techniques used in competitive
        swimming, entitled <em>Is Tapering Effective?</em>, to satisfy the
        Internal Assessment requirement for the International Baccalaureate SL
        Mathematics certificate.
      </p>
      <p>
        I then, with permission, entered this report into the schoolwide science
        fair where it ranked among the top projects and was chosen to move on to
        the Regional Science Fair. Here I won a bronze medal and was
        congratulated for the level of statistical analysis performed in the
        report.
      </p>
      <p>
        The paper is available in PDF format with my other{' '}
        <Link to="/publications#math-ia">publications</Link>.
      </p>
    </NarrowContainer>
  </Layout>
);

export default AwardsPage;
