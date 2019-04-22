/*
 * Copyright (c) 2019 Jacob House and Colorlib.
 *
 * This file is licensed under a Creative Commons Attribution (CC BY 4.0)
 * license.
 *
 * The source of the content design and HTML is Colorlib's Niko theme.
 * Conversion to React and minor modifications to the theme were done by
 * Jacob House.
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

import {Link} from 'gatsby';
import React from 'react';
import presets from '../presets';

const Footer = () => (
  <footer className="ftco-footer ftco-section">
    <div className="container">
      <div className="row mb-5">
        <div className="col-md">
          <div className="ftco-footer-widget mb-4 ml-md-4">
            <h2 className="ftco-heading-2">Links</h2>
            <ul className="list-unstyled">
              {presets.footer.links.map((service, index) => (
                <li key={index}>
                  <Link to={service.link}>
                    <span className="icon-long-arrow-right mr-2" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Services</h2>
            <ul className="list-unstyled">
              {presets.footer.services.map((service, index) => (
                <li key={index}>
                  <Link to={service.link}>
                    <span className="icon-long-arrow-right mr-2" />
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-md">
          <div className="ftco-footer-widget mb-4">
            <h2 className="ftco-heading-2">Get In Touch</h2>
            <div className="block-23 mb-3">
              <ul>
                {presets.footer.contact.map((link, index) => (
                  <li key={index}>
                    <a href={link.link}>
                      <span className={'icon icon-' + link.icon} />
                      <span className="text">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>
            <a href={presets.copyright.link}>{presets.copyright.text}</a>
          </p>
          <p>
            This template is made with{' '}
            <i className="icon-heart color-danger" aria-hidden="true" /> by{' '}
            <a
              href="https://colorlib.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colorlib
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
