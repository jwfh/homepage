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

import ContactJPG from './images/about.jpg';
import ResumePDF from './pdf/resume.pdf';
import LogoSVG from './images/logo.svg';
import MathIA from './pdf/ia_math_x1a.pdf';
import TSPPaper from './pdf/tsp_paper.pdf';
import HistoryIA from './pdf/ia_hist_x1a.pdf';
import ChemistryIA from './pdf/ia_chem_x1a.pdf';
import BiologyIA from './pdf/ia_biol_x1a.pdf';
import BookStacks from './images/_DSC3717-Processed.jpg';
import Librarian from './images/LibrarianMockup.jpg';
import PoolBlocks from './images/pool-generic.jpg';
import PortraitPhoto from './images/_DSC3842-Processed.jpg';
import Sunset from './images/sunset.jpg';
// import ProductPhoto from './images/_DSC0058-Processed.jpg';
import AboutJPG1 from './images/_DSC8963-bg.jpg';
import AboutJPG2 from './images/_DSC8819-bg.jpg';
import PenAndCoffee from './images/_DSC5309-Processed.jpg';

// import StockPhoto from '../../images/bg_4.jpg';
import QuidiVidi1 from './images/title-5.jpg';
import Harbour1 from './images/title-4.jpg';
import Cliff1 from './images/title-1.jpg';
import Sunset1 from './images/title-3.jpg';

const site = {
  pages: {
    home: {
      about: {
        carousel: [
          {
            preface: 'Hello',
            titleBefore: 'I\'m',
            titleEm: 'Jacob House',
            titleAfter: '',
            subtitle: 'A Software Developer and Design Enthusiast',
            buttonLabel: 'Click',
            buttonLink: '',
            image: AboutJPG1,
          },
          {
            preface: '',
            titleBefore: 'I\'m a',
            titleEm: 'software developer',
            titleAfter: 'from St. John\'s, Nfld.',
            subtitle: '',
            buttonLabel: 'Click',
            buttonLink: '',
            image: AboutJPG2,
          },
        ],
        title: 'About Me',
        subtitle: '',
        image: PenAndCoffee,
        body: `
I'm a software developer from St. John's, Newfoundland, Canada. Currently in the final semester of a computer sciece degree, my interests are primarily in areas such as security, automation, and operating systems. In my spare time I practice photography and graphic design.`,
        panels: [
          {
            title: 'Software',
            body:
              'I\'m a recent convert to Vim. I prefer LaTeX over any other word processor. I think Python is fun, but not at the cost if ignoring low-level details. Most of all, I believe in working _with_ my programming language, operating system, and hardware rather than against it (and yes, that means knowing how they work).',
            icon: '',
          },
          {
            title: 'Design',
            body:
              'Though most of my time is spent staring at text in a shell, you\'ll often see at least a few of the Adobe CC apps open in my dock. I\'m always squeezing a little photo editing here or logo design there in my spare time.',
            icon: '',
          },
        ],
        counter: {
          number: 384,
          caption: 'Git Contributions This Year',
        },
      },
      resumeBanner: {
        text: 'View my **Résumé**',
        buttonLabel: 'Download PDF',
        buttonLink: ResumePDF,
        // Need to use <a> rather than <Link> here otherwise the PDF doesn't load
        external: true,
      },
      skills: {
        sliders: {
          first: {
            title: 'Technical Skills',
            subtitle:
              'Give me a terminal and a compiler. I\'ll take care of the rest.',
            content: [
              // Choose a maximum of SIX skills
              {label: 'Python', value: '90'},
              {label: 'JavaScript (including React)', value: '80'},
              {label: 'C/C++', value: '75'},
              {label: 'Java', value: '65'},
              {label: 'Shell (Fish, ZSH, PoSH)', value: '80'},
              {label: 'Vim (Editor)', value: '85'},
            ],
          },
          second: {
            title: 'Design Skills',
            subtitle: 'Form that gives function a voice to be heard.',
            content: [
              // Choose a maximum of SIX skills
              {label: 'Adobe Creative Cloud', value: '85'},
              {label: 'DSLR Photography', value: '80'},
              {label: 'Print Design', value: '70'},
              {label: 'Web & App UX', value: '75'},
            ],
          },
        },
        details: {
          title: 'Strategy, Design, and a bit of Magic',
          subtitle: 'Areas of my work that I am most interested in.',
          content: [
            // Use multiples of THREE here
            {
              title: 'Software Development',
              link: '/portfolio/software/',
              icon: 'flasks',
              list: [
                'Correctness',
                'Code Quality',
                'User Experience',
                'Documentation',
              ],
            },
            {
              title: 'Computer Security',
              link: '/portfolio/security/',
              icon: 'analysis',
              list: [
                'Network',
                'Application',
                'Cryptographic',
                'Threat Modeling',
              ],
            },
            {
              title: 'Systems Administration',
              link: '/portfolio/sysadmin/',
              icon: 'ideas',
              list: [
                'OS Agnostic',
                'Automated Deployment',
                'Userbase Integration',
                'TCO & ROI',
              ],
            },
          ],
        },
      },
      linkBanner: {
        text: 'Check out my **GitHub** repos',
        buttonLabel: 'Open Link',
        buttonLink: 'https://github.com/jwfh',
        external: true,
      },
      contactBanner: {
        text: 'I\'m **Available** For Freelancing',
        buttonLabel: 'Hire me',
        buttonLink: '/contact',
        external: false,
      },
      projects: {
        title: 'Projects & Awards',
        subtitle:
          'This section is all about future goals and past success. The sky is, indeed, the limit.',
        content: [
          /*
           * There are FIVE panels. They are as follow.
           * -------
           * |   |2|
           * | 1 |-|
           * |   |3|
           * |-----|
           * |4| 5 |
           * -------
           */
          {
            title: 'VOWR Music Librarian',
            subtitle: 'Python Web App',
            link: '/projects/vowr-librarian/',
            image: Librarian,
          },
          {
            title: 'Dean\'s List 2016-17',
            subtitle: 'Academic Award',
            link: '/awards/',
            image: BookStacks,
          },
          {
            title: 'Portrait Photography',
            subtitle: 'Hobby & Passion',
            link: '/portfolio/photography/',
            image: PortraitPhoto,
          },
          // {
          //   title: 'Product Photography',
          //   subtitle: 'Finding the Perfect Angle',
          //   link: '/portfolio/photography',
          //   image: ProductPhoto,
          // },
          {
            title: 'Regional Science Fair',
            subtitle: 'Bronze Medal',
            link: '/awards/',
            image: PoolBlocks,
          },
          {
            title: 'Landscape Photography',
            subtitle: 'Hobby & Passion',
            link: '/portfolio/photography/',
            image: Sunset,
          },
        ],
      },
      blog: {
        title: 'My Blog',
        subtitle: 'A little of everything, and nothing you can do without.',
      },
      contact: {
        title: 'Hey You',
        subtitle: `Thanks for taking the time to look at my little slice of the Internet. 
          Please feel free to drop me a line if you'd like to get in touch!`,
        image: ContactJPG,
        formAction: 'https://formspree.io/jacob@jwfh.ca',
      },
    },
    contact: {
      address: 'St. John\'s, Newfoundland, Canada',
      mapsLink: 'https://goo.gl/maps/BR2QeabAA422',
    },
    publications: {
      papers: [
        {
          title: 'GAs To Solve The Travelling Salesman Problem',
          link: TSPPaper,
          anchor: 'tsp-paper',
          authors:
            'Jacob House, Nabil Miri, Omar Mohamed, and Hassan El-Khatib',
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
      ],
    },
  },
  header: {
    logo: LogoSVG,
    name: 'Jacob WF House',
  },
  footer: {
    links: [
      {label: 'Home', link: '/'},
      {label: 'Projects', link: '/projects/'},
      {label: 'Blog', link: '/blog/'},
      {label: 'Contact', link: '/contact/'},
    ],
    services: [
      {label: 'Software Development', link: '/portfolio/software/'},
      {label: 'Software Security', link: '/portfolio/security/'},
      {label: 'Photography', link: '/portfolio/photography/'},
      {label: 'Graphic Design', link: '/portfolio/design/'},
    ],
    contact: [
      {
        icon: 'github',
        link: 'https://github.com/jwfh',
        label: 'GitHub',
      },
      {
        icon: 'instagram',
        link: 'https://instagram.com/jacobsinthehouse',
        label: 'Instagram',
      },
      {
        icon: 'linkedin',
        link: 'https://www.linkedin.com/in/jacob-house-a699a4162',
        label: 'LinkedIn',
      },
    ],
  },
  copyright: {
    text: `Copyright ©${new Date().getFullYear()} Jacob House. Provided under dual MIT and Creative Commons Attribution 4.0 License.`,
    link: 'https://github.com/jwfh/homepage#license',
  },
  bgPhotos: [QuidiVidi1, Harbour1, Cliff1, Sunset1],
  keywords: [
    'gatsby',
    'application',
    'react',
    'portfolio',
    'resume',
    'résumé',
    'software',
    'security',
    'app development',
    'software developer',
    'photography',
    'photo',
    'graphics',
    'graphic design',
    'graphic designer',
    'adobe',
    'photoshop',
    'illustrator',
    'lightroom',
    'premiere',
    'premiere pro',
    'python',
    'numpy',
    'javascript',
    'react',
    'c',
    'c++',
    'java',
    'rust',
    'go',
    'vim',
    'vi',
    'bash',
    'zsh',
    'fish',
    'linux',
    'ubuntu',
    'arch',
    'manjaro',
    'bsd',
    'freebsd',
    'macos',
    'mac',
    'mac os x',
    'operating sysetem',
    'web development',
  ],
};

export default site;
