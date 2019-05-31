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

import React from 'react';
import presets from '../presets';
import {
  Header as HeaderComponent,
  Container,
  Nav,
  MobileMenu,
  NavList,
  NavItem,
  NavLink,
  Logo,
  Name,
  Brand,
} from './partials';

export const HomeHeader = () => (
  <HeaderComponent>
    <Nav>
      <Container>
        <Brand to="/">
          <Logo src={presets.header.logo} />
          <Name>{presets.header.name}</Name>
        </Brand>
        <MobileMenu label="Menu" />
        <NavList>
          <NavItem label="Home" anchor="home-section" />
          <NavItem label="About" anchor="about-section" />
          <NavItem label="Skills" anchor="skills-section" />
          <NavItem label="Projects" anchor="projects-section" />
          {/* <NavItem label="My Blog" anchor="blog-section" /> */}
          <NavItem label="Contact" anchor="contact-section" />
        </NavList>
      </Container>
    </Nav>
  </HeaderComponent>
);

export const GeneralHeader = () => (
  <HeaderComponent>
    <Nav>
      <Container>
        <Brand to="/">
          <Logo src={presets.header.logo} />
          <Name>{presets.header.name}</Name>
        </Brand>
        <MobileMenu label="Menu" />
        <NavList>
          <NavLink label="Home" to="/" />
          <NavLink label="Skills" to="/skills/" />
          <NavLink label="Projects" to="/projects/" />
          {/* <NavLink label="My Blog" to="/blog/" /> */}
          <NavLink label="Contact" to="/contact/" />
        </NavList>
      </Container>
    </Nav>
  </HeaderComponent>
);

// export default Header;
