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

import {Link} from 'gatsby';
import React from 'react';
import presets from '../presets';
import {
  Footer as FooterComponent,
  Row,
  FooterList,
  IconItem,
  FooterCopyright,
} from './partials';

const Footer = () => (
  <FooterComponent>
    <Row className="mb-5">
      <FooterList title="Links">
        {presets.footer.links.map((link, index) => (
          <IconItem
            key={index}
            className="mr-2"
            to={link.link}
            label={link.label}
            icon="long-arrow-right"
          />
        ))}
      </FooterList>
      <FooterList title="Services">
        {presets.footer.services.map((service, index) => (
          <IconItem
            key={index}
            className="mr-2"
            to={service.link}
            label={service.label}
            icon="long-arrow-right"
          />
        ))}
      </FooterList>
      <FooterList className="block-23" title="Get In Touch">
        {presets.footer.contact.map((link, index) => (
          <IconItem
            external
            className="icon"
            key={index}
            href={link.link}
            label={link.label}
            icon={link.icon}
          />
        ))}
      </FooterList>
    </Row>
    <Row>
      <FooterCopyright
        link={presets.copyright.link}
        text={presets.copyright.text}
      />
    </Row>
  </FooterComponent>
);

export default Footer;
