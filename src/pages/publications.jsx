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
import {NarrowContainer, PageTitle} from '../components/partials';
import presets from '../presets';

import MathIA from '../pdf/ia_math_x1a.pdf';
import TSPPaper from '../pdf/tsp_paper.pdf';
import HistoryIA from '../pdf/ia_hist_x1a.pdf';
import ChemistryIA from '../pdf/ia_chem_x1a.pdf';
import BiologyIA from '../pdf/ia_biol_x1a.pdf';

const papers = [
  {
    title: 'GAs To Solve The Travelling Salesman Problem',
    link: TSPPaper,
    anchor: 'tsp-paper',
    authors: 'Jacob House, Nabil Miri, Omar Mohamed, and Hassan El-Khatib',
    date: 'December 10 2018',
  },
  {
    title:
      'To What Extent Did Propaganda Allow Hitler to Earn the Support of the German Populace Between 1933 and 1939?',
    link: HistoryIA,
    anchor: 'history-ia',
    authors: 'Jacob House',
    date: 'February 2016',
  },
  {
    title:
      'With Respect to Surface Area to Volume Ratios Affecting Rates of Diffusion, Is One Cell Shape More Efficient Than Others?',
    link: BiologyIA,
    anchor: 'biology-ia',
    authors: 'Jacob House',
    date: 'February 2016',
  },
  {
    title:
      'Investigating the Effect of Sulphuric Acid on Various Metals to Mimic Acid Rain Exposure',
    link: ChemistryIA,
    anchor: 'chemistry-ia',
    authors: 'Jacob House',
    date: 'February 2016',
  },
  {
    title: 'Is Tapering Effective?',
    link: MathIA,
    anchor: 'math-ia',
    authors: 'Jacob House',
    date: 'November 26 2014',
  },
];

const PublicationsPage = () => (
  <Layout title="Publications">
    <NarrowContainer className="narrow py-5 my-5">
      <PageTitle>Publications</PageTitle>
      {papers.map((paper, index) => (
        <p key={index} id={paper.anchor}>
          <strong>
            <a href={paper.link}>{paper.title}</a>.
          </strong>
          {'\n '}
          {paper.authors}, {paper.date}.
        </p>
      ))}
    </NarrowContainer>
  </Layout>
);

export default PublicationsPage;
