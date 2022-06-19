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
import BookStacks from './images/_DSC3717-Processed.jpg';
import Librarian from './images/LibrarianMockup.jpg';
import PoolBlocks from './images/pool-generic.jpg';
import PortraitPhoto1 from './images/_DSC3842-Processed.jpg';
import PortraitPhoto2 from './images/_DSC7184-Processed.jpg';
import Sunset from './images/sunset.jpg';
// import ProductPhoto from './images/_DSC0058-Processed.jpg';
import AboutJPG1 from './images/_DSC8963-bg.jpg';
import AboutJPG2 from './images/_DSC8819-bg.jpg';
import PenAndCoffee from './images/_DSC5309-Processed.jpg';
import CodeImage1 from './images/_DSC7566.jpg';
import CodeImage2 from './images/_DSC7567.jpg';
import CodeImage3 from './images/IMG_9211.jpg';

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
            subtitle: 'A Cloud Software Developer and Design Enthusiast',
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
        titlePreface: 'Welcome',
        title: 'About Me',
        subtitle: '',
        image: CodeImage3,
        body: `
I lead the Release Automation team at [Verafin](https://verafin.com/) in 
St.&nbsp;John's, Newfoundland, Canada. My interests are primarily in areas such as cloud architecture, 
security, and operating systems. In my spare time I enjoy DIY renovation and restoration projects, 
learning about historic building techniques, and weight lifting.`,
        panels: [
          {
            title: 'Software',
            body:
              `
Most of the code I write is Terraform for work with AWS. When it comes to writing business logic, I&nbsp;
used to be a die-hard Python fan, but lately have been enjoying working with Java. 

Most of all, I&nbsp;believe in working _with_ my programming language, operating system, 
and hardware rather than against it (and yes, that means striving to know how they work under the hood).`,
            icon: '',
          },
          {
            title: 'Home DIY',
            body: `
After buying an old house and falling in love with old construction, my biggest hobby is
working on our ~~renovation~~ restoration.
            
The best part is learning about the science of things like the original [lath and plaster](./projects/plaster/)
walls, lime mortar for brickwork, and classic hydronic heating principles, in order to help the house instead of
[hurt it](https://www.vintagebuilding.com/lime-mortar-vs-portland-cement/).`,
            icon: '',
          },
        ],
        counter: {
          number: 447,
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
          tagline: 'Skills',
          first: {
            title: 'Technical Skills',
            subtitle:
              'Give me a terminal and a compiler. I\'ll take care of the rest.',
            content: [
              // Choose a maximum of SIX skills
              { label: 'Terraform', value: '90' },
              { label: 'Amazon Web Services', value: '85' },
              { label: 'Java', value: '75' },
              { label: 'Text Processing (Vim, Sed, Awk)', value: '75' },
              { label: 'Python', value: '85' },
              { label: 'C/C++', value: '60' },
            ],
          },
          second: {
            title: 'Design Skills',
            subtitle: 'Form that gives function a voice to be heard.',
            content: [
              // Choose a maximum of SIX skills
              { label: 'Adobe Creative Cloud', value: '85' },
              { label: 'DSLR Photography', value: '70' },
              { label: 'Print Design', value: '70' },
              { label: 'Web & App UX', value: '65' },
            ],
          },
        },
        details: {
          tagline: 'What I Do',
          title: 'Strategy, Design, and a bit of Magic',
          subtitle: 'Areas of my work that I am most interested in.',
          content: [
            // Use multiples of THREE here
            {
              title: 'Cloud Architecture',
              link: '/portfolio/cloud/',
              icon: 'ideas',
              list: [
                'Serverless',
                'Automated Deployment',
                'Fault Tolerant',
                'Cost Optimized'
              ],
            },
            {
              title: 'Software Development',
              link: '/portfolio/software/',
              icon: 'flasks',
              list: [
                'Correctness',
                'Code Quality',
                'D.R.Y.',
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
        text: 'Read my paper about the **Mirai botnet**',
        buttonLabel: 'Open PDF',
        buttonLink: '/assets/pdf/mirai.pdf',
        external: true,
      },
      projects: {
        tagline: 'Accomplishments',
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
            title: 'Dean\'s List 2016-17',
            subtitle: 'Academic Award',
            link: '/awards/',
            image: BookStacks,
          },
          {
            title: 'VOWR Music Librarian',
            subtitle: 'Python Web App',
            link: '/projects/vowr-librarian/',
            image: Librarian,
          },
          {
            title: 'Portrait Photography',
            subtitle: 'Hobby & Passion',
            link: '/portfolio/photography/',
            image: PortraitPhoto2,
          },
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
        title: 'Fall in Love with the Process',
        subtitle: 'Read the latest about my hobbies and projects.',
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
  },
  header: {
    logo: LogoSVG,
    name: 'Jacob WF House',
  },
  footer: {
    links: [
      { label: 'Home', link: '/' },
      { label: 'Projects', link: '/projects/' },
      { label: 'Blog', link: '/blog/' },
      { label: 'Contact', link: '/contact/' },
    ],
    services: [
      { label: 'Software Development', link: '/portfolio/software/' },
      { label: 'Software Security', link: '/portfolio/security/' },
      { label: 'Photography', link: '/portfolio/photography/' },
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
  breadcrumbLabels: {},
};

export default site;
