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

import React from 'react';
import PropTypes from 'prop-types';
import {Link, withPrefix, graphql} from 'gatsby';
import {BottomFade} from '../components/fade';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import presets from '../presets';
import remark from 'remark';
import remark2react from 'remark-react';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* <section id="home-section" class="hero">
      <div class="home-slider  owl-carousel">
        <div class="slider-item ">
          <div class="overlay" />
          <div class="container">
            <div
              class="row d-md-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                class="one-third order-md-last img"
                style="background-image:url(images/bg_1.jpg);"
              >
                <div class="overlay" />
              </div>
              <div
                class="one-forth d-flex  align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <a
                  href="https://vimeo.com/45830194"
                  class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span class="ion-ios-play play" />
                </a>
                <div class="text">
                  <span class="subheading">Hello</span>
                  <h1 class="mb-4 mt-3">
                    I'm <span>Niko Bochser</span>
                  </h1>
                  <h2 class="mb-4">A Freelance Web Developer</h2>
                  <p>
                    <a href="#" class="btn-custom">
                      Hire me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="slider-item">
          <div class="overlay" />
          <div class="container">
            <div
              class="row d-flex no-gutters slider-text align-items-end justify-content-end"
              data-scrollax-parent="true"
            >
              <div
                class="one-third order-md-last img"
                style="background-image:url(images/bg_2.jpg);"
              >
                <div class="overlay" />
              </div>
              <div
                class="one-forth d-flex align-items-center ftco-animate"
                data-scrollax=" properties: { translateY: '70%' }"
              >
                <a
                  href="https://vimeo.com/45830194"
                  class="icon-video popup-vimeo d-flex justify-content-center align-items-center"
                >
                  <span class="ion-ios-play play" />
                </a>
                <div class="text">
                  <h1 class="mb-4 mt-3">
                    I'm a <span>web designer</span> from Scotland
                  </h1>
                  <p>
                    <a href="#" class="btn-custom">
                      Hire me
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</section>*/}

    <section
      className="ftco-about ftco-counter img ftco-section"
      id="about-section"
    >
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 col-lg-5 d-flex">
            <div className="img-about img d-flex align-items-stretch">
              <div className="overlay" />
              <div
                className="img d-flex align-self-stretch align-items-center"
                style={{backgroundImage: 'url(\'/tmp/about-1.jpg\')'}}
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
            <div className="row justify-content-start pb-3">
              <BottomFade>
                <div className="col-md-12 heading-section">
                  <span className="subheading">Welcome</span>
                  <h2
                    className="mb-4"
                    style={{fontSize: '34px', textTransform: 'capitalize'}}
                  >
                    About Me
                  </h2>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia. It is a paradisematic
                    country, in which roasted parts of sentences fly into your
                    mouth.
                  </p>
                </div>
              </BottomFade>
            </div>
            <div className="row">
              <div className="col-md-6">
                <BottomFade>
                  <div className="media block-6 services d-block">
                    <div className="icon">
                      <span className="flaticon-analysis" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Web Design</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </BottomFade>
              </div>
              <div className="col-md-6">
                <BottomFade>
                  <div className="media block-6 services d-block">
                    <div className="icon">
                      <span className="flaticon-analysis" />
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Web Application</h3>
                      <p>
                        A small river named Duden flows by their place and
                        supplies.
                      </p>
                    </div>
                  </div>
                </BottomFade>
              </div>
            </div>
            <BottomFade>
              <div className="counter-wrap d-flex mt-md-3">
                <div className="text p-4 pr-5 bg-primary">
                  <p className="mb-0">
                    <span className="number" data-number="200">
                      0
                    </span>
                    <span>Finished Projects</span>
                  </p>
                </div>
              </div>
            </BottomFade>
          </div>
        </div>
      </div>
    </section>
    {/* 
    {data.allMarkdownRemark.edges.map((post) => (
      <Link key={post.node.id} to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))} */}

    {/*
     * Banner section #1
     */}
    <section className="ftco-section ftco-banner">
      <div className="container">
        <div className="row">
          <BottomFade>
            <div className="col-md-8 col-lg-9 d-flex align-items-center">
              <h2>
                {
                  remark()
                    .use(remark2react)
                    .processSync(presets.pages.home.resumeBanner.text).contents
                }
              </h2>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 col-lg-3 d-flex align-items-center">
              <p className="mb-0">
                <Link
                  to={presets.pages.home.resumeBanner.buttonLink}
                  className="btn btn-white py-3 px-5"
                >
                  {presets.pages.home.resumeBanner.buttonLabel}
                </Link>
              </p>
            </div>
          </BottomFade>
        </div>
      </div>
    </section>

    {/*
     * Skills section
     */}
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Skills</span>
              <h2 className="mb-4">
                {presets.pages.home.skills.sliders.first.title}
              </h2>
              <p>{presets.pages.home.skills.sliders.first.subtitle}</p>
            </div>
          </BottomFade>
        </div>
        <div className="row">
          {presets.pages.home.skills.sliders.first.content.map(
            (slider, index) => (
              <div key={index} className="col-md-6 animate-box">
                <BottomFade>
                  <div className="progress-wrap">
                    <h3>{slider.label}</h3>
                    <div className="progress">
                      <div
                        className={'progress-bar color-' + (index + 1)}
                        role="progressbar"
                        aria-valuenow={slider.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: slider.value + '%'}}
                      >
                        <span>{slider.value + '%'}</span>
                      </div>
                    </div>
                  </div>
                </BottomFade>
              </div>
            )
          )}
        </div>
        <div className="row justify-content-center py-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Skills</span>
              <h2 className="mb-4">
                {presets.pages.home.skills.sliders.second.title}
              </h2>
              <p>{presets.pages.home.skills.sliders.second.subtitle}</p>
            </div>
          </BottomFade>
        </div>
        <div className="row">
          {presets.pages.home.skills.sliders.second.content.map(
            (slider, index) => (
              <div key={index} className="col-md-6 animate-box">
                <BottomFade>
                  <div className="progress-wrap">
                    <h3>{slider.label}</h3>
                    <div className="progress">
                      <div
                        className={'progress-bar color-' + (index + 1)}
                        role="progressbar"
                        aria-valuenow={slider.value}
                        aria-valuemin="0"
                        aria-valuemax="100"
                        style={{width: slider.value + '%'}}
                      >
                        <span>{slider.value + '%'}</span>
                      </div>
                    </div>
                  </div>
                </BottomFade>
              </div>
            )
          )}
        </div>
        <div className="row justify-content-center py-5 mt-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">What I Do</span>
              <h2 className="mb-4">
                {presets.pages.home.skills.details.title}
              </h2>
              <p>{presets.pages.home.skills.details.subtitle}</p>
            </div>
          </BottomFade>
        </div>

        <div className="row">
          <BottomFade>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1">
                <span className="icon">
                  <i className="flaticon-analysis" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">
                    <a href="#">Explore</a>
                  </h3>
                  <h4>Design Sprints</h4>
                  <h4>Product Strategy</h4>
                  <h4>UX Strategy</h4>
                </div>
              </div>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1">
                <span className="icon">
                  <i className="flaticon-flasks" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">
                    <a href="#">Create</a>
                  </h3>
                  <h4>Information</h4>
                  <h4>UX/UI Design</h4>
                  <h4>Branding</h4>
                </div>
              </div>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 text-center d-flex">
              <div className="services-1">
                <span className="icon">
                  <i className="flaticon-ideas" />
                </span>
                <div className="desc">
                  <h3 className="mb-5">
                    <a href="#">Learn</a>
                  </h3>
                  <h4>Prototyping</h4>
                  <h4>User Testing</h4>
                  <h4>UI Testing</h4>
                </div>
              </div>
            </div>
          </BottomFade>
        </div>
      </div>
    </section>

    {/*
     * Banner section #2
     */}
    <section className="ftco-section ftco-banner">
      <div className="container">
        <div className="row">
          <BottomFade>
            <div className="col-md-8 col-lg-9 d-flex align-items-center">
              <h2>
                {
                  remark()
                    .use(remark2react)
                    .processSync(presets.pages.home.banner.text).contents
                }
              </h2>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 col-lg-3 d-flex align-items-center">
              <p className="mb-0">
                <Link
                  to={presets.pages.home.banner.buttonLink}
                  className="btn btn-white py-3 px-5"
                >
                  {presets.pages.home.banner.buttonLabel}
                </Link>
              </p>
            </div>
          </BottomFade>
        </div>
      </div>
    </section>

    {/*
     * Project section
     */}
    <section className="ftco-section ftco-project" id="projects-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">Accomplishments</span>
              <h2 className="mb-4">Our Projects</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </BottomFade>
        </div>
        <div className="row">
          <div className="col-md-8">
            <BottomFade>
              <div
                className="project img img-2 d-flex justify-content-center align-items-center"
                style={{backgroundImage: 'url(\'/tmp/project-1.jpg\')'}}
              >
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-12">
                <BottomFade>
                  <div
                    className="project img d-flex justify-content-center align-items-center"
                    style={{backgroundImage: 'url(\'/tmp/project-2.jpg\')'}}
                  >
                    <div className="overlay" />
                    <div className="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </BottomFade>
              </div>
              <div className="col-md-12">
                <BottomFade>
                  <div
                    className="project img d-flex justify-content-center align-items-center"
                    style={{backgroundImage: 'url(\'/tmp/project-3.jpg\')'}}
                  >
                    <div className="overlay" />
                    <div className="text text-center p-4">
                      <h3>
                        <a href="#">Branding &amp; Illustration Design</a>
                      </h3>
                      <span>Web Design</span>
                    </div>
                  </div>
                </BottomFade>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <BottomFade>
              <div
                className="project img d-flex justify-content-center align-items-center"
                style={{backgroundImage: 'url(\'/tmp/project-4.jpg\')'}}
              >
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-8">
            <BottomFade>
              <div
                className="project img d-flex justify-content-center align-items-center"
                style={{backgroundImage: 'url(\'/tmp/project-5.jpg\')'}}
              >
                <div className="overlay" />
                <div className="text text-center p-4">
                  <h3>
                    <a href="#">Branding &amp; Illustration Design</a>
                  </h3>
                  <span>Web Design</span>
                </div>
              </div>
            </BottomFade>
          </div>
        </div>
      </div>
    </section>

    {/*
     * Blog section
     */}
    <section className="ftco-section bg-light" id="blog-section">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-5">
          <BottomFade>
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Blog</span>
              <h2 className="mb-4">Our Blog</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </BottomFade>
        </div>
        <div className="row d-flex">
          <BottomFade>
            <div className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{backgroundImage: 'url(\'/tmp/image_1.jpg\')'}}
                />
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">March 23, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 d-flex">
              <div className="blog-entry justify-content-end">
                <a
                  href="single.html"
                  className="block-20"
                  style={{backgroundImage: 'url(\'/tmp/image_2.jpg\')'}}
                />
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">March 23, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 d-flex">
              <div className="blog-entry">
                <a
                  href="single.html"
                  className="block-20"
                  style={{backgroundImage: 'url(\'/tmp/image_3.jpg\')'}}
                />
                <div className="text mt-3 float-right d-block">
                  <div className="d-flex align-items-center mb-3 meta">
                    <p className="mb-0">
                      <span className="mr-2">March 23, 2019</span>
                      <a href="#" className="mr-2">
                        Admin
                      </a>
                      <a href="#" className="meta-chat">
                        <span className="icon-chat" /> 3
                      </a>
                    </p>
                  </div>
                  <h3 className="heading">
                    <a href="single.html">
                      Why Lead Generation is Key for Business Growth
                    </a>
                  </h3>
                  <p>
                    A small river named Duden flows by their place and supplies
                    it with the necessary regelialia.
                  </p>
                </div>
              </div>
            </div>
          </BottomFade>
        </div>
      </div>
    </section>

    {/*
     * Contact section
     */}
    <section
      className="ftco-section contact-section ftco-no-pb"
      id="contact-section"
    >
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <BottomFade>
            <div className="col-md-7 heading-section text-center">
              <span className="subheading">Contact</span>
              <h2 className="mb-4">{presets.pages.home.contact.title}</h2>
              <p>{presets.pages.home.contact.subtitle}</p>
            </div>
          </BottomFade>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form
              action={presets.pages.home.contact.formAction}
              method="POST"
              className="bg-light p-4 p-md-5 contact-form"
            >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="form-group">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="7"
                  className="form-control"
                  placeholder="Message"
                />
              </div>
              <div className="form-group">
                <input
                  type="submit"
                  value="Dispatch Carrier Pidgeon"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{
                backgroundImage: `url(${presets.pages.home.contact.image})`,
              }}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export const postQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      limit: 3
      filter: {frontmatter: {published: {eq: true}}}
    ) {
      edges {
        node {
          id
          html
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default IndexPage;
