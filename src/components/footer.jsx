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
              {presets.site.footerLinks.map((service, index) => (
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
              {presets.site.footerServices.map((service, index) => (
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
            <h2 className="ftco-heading-2">Contact Me</h2>
            <div className="block-23 mb-3">
              <ul>
                <li>
                  <a href={presets.site.addressLink}>
                    <span className="icon icon-map-marker" />
                    <span className="text">{presets.site.address}</span>
                  </a>
                </li>
                <li>
                  <a href={'tel:' + presets.site.phone}>
                    <span className="icon icon-phone" />
                    <span className="text">{presets.site.phone}</span>
                  </a>
                </li>
                <li>
                  <a href={'mailto:' + presets.site.email}>
                    <span className="icon icon-envelope" />
                    <span className="text">{presets.site.email}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 text-center">
          <p>{presets.site.copyright}</p>
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
