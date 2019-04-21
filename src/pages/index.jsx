/* eslint-disable no-inline-comments */
import React from 'react';
import {Link, withPrefix, graphql} from 'gatsby';
import {BottomFade} from '../components/fade';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';

import AboutJPG from '../images/about.jpg';

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={['gatsby', 'application', 'react']} />
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{maxWidth: '300px', marginBottom: '1.45rem'}}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}

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
    </section>

    <section
      class="ftco-about ftco-counter img ftco-section"
      id="about-section"
    >
      <div class="container">
        <div class="row d-flex">
          <div class="col-md-6 col-lg-5 d-flex">
            <div class="img-about img d-flex align-items-stretch">
              <div class="overlay" />
              <div
                class="img d-flex align-self-stretch align-items-center"
                style="background-image:url(images/about-1.jpg);"
              />
            </div>
          </div>
          <div class="col-md-6 col-lg-7 pl-lg-5 py-5">
            <div class="row justify-content-start pb-3">
              <div class="col-md-12 heading-section ftco-animate">
                <span class="subheading">Welcome</span>
                <h2
                  class="mb-4"
                  style="font-size: 34px; text-transform: capitalize;"
                >
                  About Me
                </h2>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia. It is a paradisematic country,
                  in which roasted parts of sentences fly into your mouth.
                </p>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <div class="media block-6 services d-block ftco-animate">
                  <div class="icon">
                    <span class="flaticon-analysis" />
                  </div>
                  <div class="media-body">
                    <h3 class="heading mb-3">Web Design</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="media block-6 services d-block ftco-animate">
                  <div class="icon">
                    <span class="flaticon-analysis" />
                  </div>
                  <div class="media-body">
                    <h3 class="heading mb-3">Web Application</h3>
                    <p>
                      A small river named Duden flows by their place and
                      supplies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="counter-wrap ftco-animate d-flex mt-md-3">
              <div class="text p-4 pr-5 bg-primary">
                <p class="mb-0">
                  <span class="number" data-number="200">
                    0
                  </span>
                  <span>Finished Projects</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> */}

    {data.allMarkdownRemark.edges.map((post) => (
      <Link key={post.node.id} to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))}

    {/*
     * Skills section
     */}
    <section className="ftco-section bg-light" id="skills-section">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Skills</span>
              <h2 className="mb-4">My Skills</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
            </div>
          </BottomFade>
        </div>
        <div className="row">
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>Photoshop</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-1"
                    role="progressbar"
                    aria-valuenow="75"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '75%'}}
                  >
                    <span>75%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>jQuery</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-2"
                    role="progressbar"
                    aria-valuenow="60"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '60%'}}
                  >
                    <span>60%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>HTML5</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-3"
                    role="progressbar"
                    aria-valuenow="85"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '85%'}}
                  >
                    <span>85%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>CSS3</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-4"
                    role="progressbar"
                    aria-valuenow="90"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '90%'}}
                  >
                    <span>90%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>WordPress</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-5"
                    role="progressbar"
                    aria-valuenow="70"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '70%'}}
                  >
                    <span>70%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
          <div className="col-md-6 animate-box">
            <BottomFade>
              <div className="progress-wrap">
                <h3>SEO</h3>
                <div className="progress">
                  <div
                    className="progress-bar color-6"
                    role="progressbar"
                    aria-valuenow="80"
                    aria-valuemin="0"
                    aria-valuemax="100"
                    style={{width: '80%'}}
                  >
                    <span>80%</span>
                  </div>
                </div>
              </div>
            </BottomFade>
          </div>
        </div>
        <div className="row justify-content-center py-5 mt-5">
          <BottomFade>
            <div className="col-md-12 heading-section text-center">
              <span className="subheading">What I Do</span>
              <h2 className="mb-4">Strategy, design and a bit of magic</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia
              </p>
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
     * Note section
     */}
    <section className="ftco-section ftco-hireme">
      <div className="container">
        <div className="row">
          <BottomFade>
            <div className="col-md-8 col-lg-9 d-flex align-items-center">
              <h2>
                I'm <span>Available</span> For Freelancing
              </h2>
            </div>
          </BottomFade>
          <BottomFade>
            <div className="col-md-4 col-lg-3 d-flex align-items-center">
              <p className="mb-0">
                <a href="#" className="btn btn-white py-4 px-5">
                  Hire me
                </a>
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
              <h2 className="mb-4">Hey You</h2>
              <p>
                Thanks for taking the time to look at my portfolio. Please feel
                free to drop me a line if you'd like to get in touch!
              </p>
            </div>
          </BottomFade>
        </div>
        <div className="row no-gutters block-9">
          <div className="col-md-6 order-md-last d-flex">
            <form action="#" className="bg-light p-4 p-md-5 contact-form">
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
                  value="Send Message"
                  className="btn btn-primary py-3 px-5"
                />
              </div>
            </form>
          </div>
          <div className="col-md-6 d-flex">
            <div
              className="img"
              style={{backgroundImage: `url(${AboutJPG})`}}
            />
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

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
