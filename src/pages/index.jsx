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

import React, {Component} from 'react';
import {Link, withPrefix, graphql} from 'gatsby';
import {BottomFade} from '../components/fade';
import Layout from '../components/layout';
// import Image from '../components/image';
import SEO from '../components/seo';
import presets from '../presets';
import {
  Section,
  Container,
  Row,
  SectionTitle,
  Banner,
  Slider,
  DetailPanel,
  CarouselSlider,
} from '../components/partials';
import makeCarousel from 'react-reveal/makeCarousel';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import styled, {css} from 'styled-components';

export class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carouselIdx: 0,
    };
  }

  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState({
  //       carouselIdx: this.state.carouselIdx + 1,
  //     });
  //   }, 5000);
  // }

  render() {
    const {carouselIdx} = this.state;
    const CarouselUI = ({children}) => (
      <div className="home-slider owl-carousel" style={{display: 'block'}}>
        {children}
      </div>
    );
    const Carousel = makeCarousel(CarouselUI);
    return (
      <Layout>
        <SEO title="Home" />
        <section id="home-section" className="hero">
          <Carousel defaultWait={3500}>
            {presets.pages.home.about.carousel.map((slider, index) => (
              <Slide key={index} right>
                <CarouselSlider {...slider} />
              </Slide>
            ))}
          </Carousel>
        </section>

        {/* <section
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
    </section> */}
        {/* 
    {data.allMarkdownRemark.edges.map((post) => (
      <Link key={post.node.id} to={post.node.frontmatter.path}>
        {post.node.frontmatter.title}
      </Link>
    ))} */}

        {
          // Banner section #1 (Résumé)
        }
        <Banner
          external={presets.pages.home.resumeBanner.external}
          text={presets.pages.home.resumeBanner.text}
          button={{
            label: presets.pages.home.resumeBanner.buttonLabel,
            link: presets.pages.home.resumeBanner.buttonLink,
          }}
        />

        {
          // Skills section
        }
        <Section className="bg-light" id="skills-section">
          <Container>
            <SectionTitle
              className="pb-5"
              tagline="Skills"
              title={presets.pages.home.skills.sliders.first.title}
              subtitle={presets.pages.home.skills.sliders.first.subtitle}
            />
            <Row>
              {presets.pages.home.skills.sliders.first.content.map(
                (slider, index) => (
                  <Slider
                    value={slider.value}
                    label={slider.label}
                    key={index}
                  />
                )
              )}
            </Row>
            <SectionTitle
              className="py-5"
              tagline="Skills"
              title={presets.pages.home.skills.sliders.second.title}
              subtitle={presets.pages.home.skills.sliders.second.subtitle}
            />
            <Row>
              {presets.pages.home.skills.sliders.second.content.map(
                (slider, index) => (
                  <Slider
                    value={slider.value}
                    label={slider.label}
                    key={index}
                  />
                )
              )}
            </Row>
            <SectionTitle
              className="py-5 mt-5"
              tagline="What I Do"
              title={presets.pages.home.skills.details.title}
              subtitle={presets.pages.home.skills.details.subtitle}
            />
            <Row>
              {presets.pages.home.skills.details.content.map((panel, index) => (
                <DetailPanel
                  key={index}
                  title={panel.title}
                  link={panel.link}
                  icon={panel.icon}
                >
                  {panel.list}
                </DetailPanel>
              ))}
            </Row>
          </Container>
        </Section>

        {
          // Banner section #2 (Hire Me)
        }
        <Banner
          external={presets.pages.home.banner.external}
          text={presets.pages.home.banner.text}
          button={{
            label: presets.pages.home.banner.buttonLabel,
            link: presets.pages.home.banner.buttonLink,
          }}
        />

        {
          // Project section
        }
        <Section className="ftco-project" id="projects-section">
          <Container>
            <SectionTitle
              className="pb-5"
              tagline="Accomplishments"
              title={presets.pages.home.projects.title}
              subtitle={presets.pages.home.projects.subtitle}
            />
            <Row>
              <div className="col-md-8">
                <BottomFade>
                  <div
                    className="project img img-2 d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage:
                        'url(\'' +
                        presets.pages.home.projects.content[0].image +
                        '\')',
                    }}
                  >
                    <div className="overlay" />
                    <div className="text text-center p-4">
                      <h3>
                        <Link to={presets.pages.home.projects.content[0].link}>
                          {presets.pages.home.projects.content[0].title}
                        </Link>
                      </h3>
                      <span>
                        {presets.pages.home.projects.content[0].subtitle}
                      </span>
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
                        style={{
                          backgroundImage:
                            'url(\'' +
                            presets.pages.home.projects.content[1].image +
                            '\')',
                        }}
                      >
                        <div className="overlay" />
                        <div className="text text-center p-4">
                          <h3>
                            <Link
                              to={presets.pages.home.projects.content[1].link}
                            >
                              {presets.pages.home.projects.content[1].title}
                            </Link>
                          </h3>
                          <span>
                            {presets.pages.home.projects.content[1].subtitle}
                          </span>
                        </div>
                      </div>
                    </BottomFade>
                  </div>
                  <div className="col-md-12">
                    <BottomFade>
                      <div
                        className="project img d-flex justify-content-center align-items-center"
                        style={{
                          backgroundImage:
                            'url(\'' +
                            presets.pages.home.projects.content[2].image +
                            '\')',
                        }}
                      >
                        <div className="overlay" />
                        <div className="text text-center p-4">
                          <h3>
                            <Link
                              to={presets.pages.home.projects.content[2].link}
                            >
                              {presets.pages.home.projects.content[2].title}
                            </Link>
                          </h3>
                          <span>
                            {presets.pages.home.projects.content[2].subtitle}
                          </span>
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
                    style={{
                      backgroundImage:
                        'url(\'' +
                        presets.pages.home.projects.content[3].image +
                        '\')',
                    }}
                  >
                    <div className="overlay" />
                    <div className="text text-center p-4">
                      <h3>
                        <Link to={presets.pages.home.projects.content[3].link}>
                          {presets.pages.home.projects.content[3].title}
                        </Link>
                      </h3>
                      <span>
                        {presets.pages.home.projects.content[3].subtitle}
                      </span>
                    </div>
                  </div>
                </BottomFade>
              </div>
              <div className="col-md-8">
                <BottomFade>
                  <div
                    className="project img d-flex justify-content-center align-items-center"
                    style={{
                      backgroundImage:
                        'url(\'' +
                        presets.pages.home.projects.content[4].image +
                        '\')',
                    }}
                  >
                    <div className="overlay" />
                    <div className="text text-center p-4">
                      <h3>
                        <Link to={presets.pages.home.projects.content[4].link}>
                          {presets.pages.home.projects.content[4].title}
                        </Link>
                      </h3>
                      <span>
                        {presets.pages.home.projects.content[4].subtitle}
                      </span>
                    </div>
                  </div>
                </BottomFade>
              </div>
            </Row>
          </Container>
        </Section>

        {
          // Blog section
        }
        <Section className="bg-light" id="blog-section">
          <div className="container">
            <div className="row justify-content-center mb-5 pb-5">
              <BottomFade>
                <div className="col-md-7 heading-section text-center">
                  <span className="subheading">Blog</span>
                  <h2 className="mb-4">My Blog</h2>
                  <p>
                    Far far away, behind the word mountains, far from the
                    countries Vokalia and Consonantia
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
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
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
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
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
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia.
                      </p>
                    </div>
                  </div>
                </div>
              </BottomFade>
            </div>
          </div>
        </Section>

        {
          // Contact section
        }
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
  }
}

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
