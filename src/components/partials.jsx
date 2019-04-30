/*
 * Copyright (c) 2019 Jacob House and Colorlib.
 *
 * This file is licensed under a Creative Commons Attribution (CC BY 4.0)
 * license.
 *
 * The source of the content design and HTML is Colorlib's Niko theme.
 * Conversion to React and major modifications to the theme structure were
 * done by Jacob House.
 *
 * You are free to:
 *   - Share: copy and redistribute the material in any medium or format.
 *   - Adapt: remix, transform, and build upon the material for any purpose,
 *     even commercially.
 * Under the following terms:
 *   - Attribution: You must give appropriate credit, provide a link to the
 *     license, and indicate if changes were made. You may do so in any
 *     reasonable manner, but not in any way that suggests the licensor
 *     endorses you or your use.
 *   - No additional restrictions — You may not apply legal terms or
 *     technological measures that legally restrict others from doing anything
 *     the license permits.
 *
 * The licensor cannot revoke these freedoms as long as you follow the license
 * terms.
 */

import React from 'react';
import {Link} from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import presets from '../presets';
import {media} from './breakpoints';
import {BottomFade} from './fade';
import remark from 'remark';
import remark2react from 'remark-react';

export const CarouselSlider = ({
  image,
  title,
  preface,
  subtitle,
  buttonLink,
  buttonLabel,
}) => (
  <div className="slider-item">
    <div className="overlay" />
    <div className="container">
      <div
        className="row d-flex no-gutters slider-text align-items-end justify-content-end"
        data-scrollax-parent="true"
      >
        <div
          className="one-third order-md-last img"
          style={{backgroundImage: `url(${image})`}}
        >
          <div className="overlay" />
        </div>
        {/* <BottomFade> */}
        <div
          className="one-forth d-flex align-items-center"
          data-scrollax=" properties: { translateY: '70%' }"
        >
          <div className="text">
            <span className="subheading">{preface}</span>
            <h1 className="mb-4 mt-3">
              {title.before} <span>{title.in}</span> {title.after}
            </h1>
            <h2 className="mb-4">{subtitle}</h2>
            <p>
              <Link to={buttonLink} className="btn-custom">
                {buttonLabel}
              </Link>
            </p>
          </div>
        </div>
        {/* </BottomFade> */}
      </div>
    </div>
  </div>
);

export const Logo = styled.div`
  height: 4vh;
  width: 4vh;
  background-image: url(${(props) => props.src});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: left center;
`;

export const Name = () => <div />;

const BrandLink = ({children, className, ...rest}) => (
  <Link
    {...rest}
    className={'navbar-brand' + (className ? ` ${className}` : '')}
  >
    {children}
  </Link>
);

export const Brand = styled(BrandLink)`
  display: inline-block;
  padding-top: 0.3125rem;
  padding-bottom: 0.3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  :hover,
  :focus {
    text-decoration: none;
  }
  color: #000000;
  padding-top: 0.7rem;
  padding-bottom: 0.7rem;
  font-weight: 900;
  font-size: 24px;
  text-transform: uppercase;
`;

Brand.propTypes = {
  to: PropTypes.string.isRequired,
};

export const Header = styled.header`
  margin-bottom: 1.45rem;
`;

export const Footer = ({children, className, ...rest}) => (
  <footer
    {...rest}
    className={'ftco-footer ftco-section' + (className ? ` ${className}` : '')}
  >
    <div className="container">{children}</div>
  </footer>
);

export const Row = ({children, className, ...rest}) => (
  <div {...rest} className={'row' + (className ? ` ${className}` : '')}>
    {children}
  </div>
);

export const FooterCopyright = ({link, text, className, ...rest}) => (
  <div
    {...rest}
    className={'col-md-12 text-center' + (className ? ` ${className}` : '')}
  >
    <p>
      <a href={link}>{text}</a>
    </p>
    <p>
      This template is made with{' '}
      <i className="icon-heart color-danger" aria-hidden="true" /> by{' '}
      <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">
        Colorlib
      </a>
      .
    </p>
  </div>
);

export const FooterList = ({children, className, title, ...rest}) => (
  <div {...rest} className={'col-md' + (className ? ` ${className}` : '')}>
    <div className="ftco-footer-widget mb-4">
      <h2 className="ftco-heading-2">{title}</h2>
      <ul className="list-unstyled block-23">{children}</ul>
    </div>
  </div>
);

export const IconItem = ({external, className, icon, label, ...rest}) =>
  external ? (
    <li>
      <a {...rest}>
        <span className={'icon-' + icon + (className ? ` ${className}` : '')} />
        {label}
      </a>
    </li>
  ) : (
    <li>
      <Link {...rest}>
        <span className={'icon-' + icon + (className ? ` ${className}` : '')} />
        {label}
      </Link>
    </li>
  );

export const Container = ({children, className, ...rest}) => (
  <div {...rest} className={'container' + (className ? ` ${className}` : '')}>
    {children}
  </div>
);

export const NarrowContainer = styled(Container)`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  ${media.phone`
    max-width: 540px;
  `}
  ${media.tablet`
    max-width: 720px;
  `}
  ${media.desktop`
    max-width: 720px;
  `}
  ${media.giant`
    max-width: 1140px;
  `}
`;

export const Nav = ({children, className, ...rest}) => (
  <nav
    {...rest}
    className={
      'navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light site-navbar-target' +
      (className ? ` ${className}` : '')
    }
    id="ftco-navbar"
  >
    {children}
  </nav>
);

export const MobileMenu = ({label, children, className, ...rest}) => (
  <button
    {...rest}
    className={
      'navbar-toggler js-fh5co-nav-toggle fh5co-nav-toggle' +
      (className ? ` ${className}` : '')
    }
    type="button"
    data-toggle="collapse"
    data-target="#ftco-nav"
    aria-controls="ftco-nav"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="oi oi-menu" /> {label}
    {children}
  </button>
);

export const NavList = ({children, className, ...rest}) => (
  <div
    {...rest}
    className={'collapse navbar-collapse' + (className ? ` ${className}` : '')}
    id="ftco-nav"
  >
    <ul className="navbar-nav nav ml-auto">{children}</ul>
  </div>
);

export const NavItem = ({label, className, anchor, ...rest}) => (
  <li {...rest} className={'nav-item' + (className ? ` ${className}` : '')}>
    <a href={'#' + anchor} className="nav-link">
      <span>{label}</span>
    </a>
  </li>
);

export const Section = ({children, className, ...rest}) => (
  <section
    {...rest}
    className={'ftco-section' + (className ? ` ${className}` : '')}
  >
    {children}
  </section>
);

export const SectionTitle = ({className, title, subtitle, tagline}) => (
  <div
    className={
      'row justify-content-center' + (className ? ` ${className}` : '')
    }
  >
    <BottomFade>
      <div className="col-md-12 heading-section text-center">
        <span className="subheading">{tagline}</span>
        <h2 className="mb-4">{title}</h2>
        <p>{subtitle}</p>
      </div>
    </BottomFade>
  </div>
);

export const Banner = ({className, text, button, external}) => (
  <Section className={'ftco-banner' + (className ? ` ${className}` : '')}>
    <Container>
      <Row>
        <BottomFade>
          <div className="col-md-8 col-lg-9 d-flex align-items-center">
            <h2>
              {
                remark()
                  .use(remark2react)
                  .processSync(text).contents
              }
            </h2>
          </div>
        </BottomFade>
        <BottomFade>
          <div className="col-md-4 col-lg-3 d-flex align-items-center">
            <p className="mb-0">
              {external ? (
                <a href={button.link} className="btn btn-white py-3 px-5">
                  {button.label}
                </a>
              ) : (
                <Link to={button.link} className="btn btn-white py-3 px-5">
                  {button.label}
                </Link>
              )}
            </p>
          </div>
        </BottomFade>
      </Row>
    </Container>
  </Section>
);

export const Slider = ({value, label, index, className, ...rest}) => (
  <div
    {...rest}
    className={'col-md-6 animate-box' + (className ? ` ${className}` : '')}
  >
    <BottomFade>
      <div className="progress-wrap">
        <h3>{label}</h3>
        <div className="progress">
          <div
            className={'progress-bar color-' + (index + 1)}
            role="progressbar"
            aria-valuenow={value}
            aria-valuemin="0"
            aria-valuemax="100"
            style={{width: value + '%'}}
          >
            <span>{value + '%'}</span>
          </div>
        </div>
      </div>
    </BottomFade>
  </div>
);

export const DetailPanel = ({className, title, icon, link, children}) => (
  <BottomFade className={className}>
    <div className="col-md-4 text-center d-flex">
      <div className="services-1">
        <Link to={link}>
          <span className="icon">
            <i className={'flaticon-' + icon} />
          </span>
          <div className="desc">
            <h3 className="mb-5">{title}</h3>
            {children.map((child, index) => (
              <h4 key={index}>{child}</h4>
            ))}
          </div>
        </Link>
      </div>
    </div>
  </BottomFade>
);

export const PageTitle = styled.h2`
  padding-top: 1.5pc;
`;

export const PageSubtitle = styled.h4`
  padding-top: 1pc;
`;
