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

import AboutJPG from './images/about.jpg';
import ResumePDF from './pdf/resume.pdf';

const site = {
  pages: {
    home: {
      about: {},
      resumeBanner: {
        text: 'View my **Résumé**',
        buttonLabel: 'Download PDF',
        buttonLink: ResumePDF,
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
              {label: 'DSLR Photography', value: '75'},
              {label: 'Print Design', value: '70'},
              {label: 'Web & App UX', value: '80'},
            ],
          },
        },
        details: {
          title: 'Strategy, Design, and a bit of Magic',
          subtitle: '',
        },
      },
      banner: {
        text: 'I\'m **Available** For Freelancing',
        buttonLabel: 'Hire me',
        buttonLink: '/contact',
      },
      projects: {},
      blog: {},
      contact: {
        title: 'Hey You',
        subtitle: `Thanks for taking the time to look at my little slice of the Internet. 
          Please feel free to drop me a line if you'd like to get in touch!`,
        image: AboutJPG,
        formAction: 'https://formspree.io/jacob@jwfh.ca',
      },
    },
    contact: {
      address: 'St. John\'s, Newfoundland, Canada',
      mapsLink: 'https://goo.gl/maps/BR2QeabAA422',
    },
  },
  header: {},
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
};

export default site;
