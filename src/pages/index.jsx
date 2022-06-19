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
import { Link, graphql } from 'gatsby';
import { BottomFade } from '../components/fade';
import { HomeLayout } from '../components/layout';
// import Image from '../components/image';
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
import Slide from 'react-reveal/Slide';
import remark from 'remark';
import remark2react from 'remark-react';
import CountUp from 'react-countup';
import { getBlogImage } from '../components/blog';

export const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const CarouselUI = ({ children }) => (
    <div className="home-slider owl-carousel" style={{ display: 'block' }}>
      {children}
    </div>
  );
  const Carousel = makeCarousel(CarouselUI);
  return (
    <HomeLayout title="Home">
      <section id="home-section" className="hero">
        <Carousel defaultWait={5000}>
          {presets.pages.home.about.carousel.map((slider, index) => (
            <Slide key={index} right>
              <CarouselSlider {...slider} />
            </Slide>
          ))}
        </Carousel>
      </section>

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
                  style={{
                    backgroundImage:
                      'url(' + presets.pages.home.about.image + ')',
                  }}
                />
              </div>
            </div>
            <div className="col-md-6 col-lg-7 pl-lg-5 py-5">
              <div className="row justify-content-start pb-3">
                <BottomFade>
                  <div className="col-md-12 heading-section">
                    <span className="subheading">
                      {presets.pages.home.about.titlePreface}
                    </span>
                    <h2
                      className="mb-4"
                      style={{ fontSize: '34px', textTransform: 'capitalize' }}
                    >
                      {presets.pages.home.about.title}
                    </h2>
                    {
                      remark()
                        .use(remark2react)
                        .processSync(presets.pages.home.about.body).contents
                    }
                  </div>
                </BottomFade>
              </div>
              <div className="row">
                {presets.pages.home.about.panels.map((panel, index) => (
                  <div key={index} className="col-md-6">
                    <BottomFade>
                      <div className="media block-6 services d-block">
                        {/* <div className="icon">
                          <span className="flaticon-analysis" />
                        </div> */}
                        <div className="media-body">
                          <h3 className="heading mb-3">{panel.title}</h3>
                          {
                            remark()
                              .use(remark2react)
                              .processSync(panel.body).contents
                          }
                        </div>
                      </div>
                    </BottomFade>
                  </div>
                ))}
              </div>
              <BottomFade>
                <div className="counter-wrap d-flex mt-md-3">
                  <div className="text p-4 pr-5 bg-primary">
                    <p className="mb-0">
                      <CountUp
                        className="number"
                        end={presets.pages.home.about.counter.number}
                        duration={2}
                      />
                      <span>{presets.pages.home.about.counter.caption}</span>
                    </p>
                  </div>
                </div>
              </BottomFade>
            </div>
          </div>
        </div>
      </section>

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
            tagline={presets.pages.home.skills.sliders.tagline}
            title={presets.pages.home.skills.sliders.first.title}
            subtitle={presets.pages.home.skills.sliders.first.subtitle}
          />
          <Row>
            {presets.pages.home.skills.sliders.first.content.map(
              (slider, index) => (
                <Slider
                  value={slider.value}
                  label={
                    remark()
                      .use(remark2react)
                      .processSync(slider.label).contents
                  }
                  key={index} />
              )
            )}
          </Row>
          <SectionTitle
            className="py-5"
            tagline={presets.pages.home.skills.sliders.tagline}
            title={presets.pages.home.skills.sliders.second.title}
            subtitle={presets.pages.home.skills.sliders.second.subtitle}
          />
          <Row>
            {presets.pages.home.skills.sliders.second.content.map(
              (slider, index) => (
                <Slider value={slider.value} label={slider.label} key={index} />
              )
            )}
          </Row>
          <SectionTitle
            className="py-5 mt-5"
            tagline={presets.pages.home.skills.details.tagline}
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
        // Banner section #2 (External link)
      }
      <Banner
        external={presets.pages.home.linkBanner.external}
        text={presets.pages.home.linkBanner.text}
        button={{
          label: presets.pages.home.linkBanner.buttonLabel,
          link: presets.pages.home.linkBanner.buttonLink,
        }}
      />

      {
        // Project section
      }
      <Section className="ftco-project" id="projects-section">
        <Container>
          <SectionTitle
            className="pb-5"
            tagline={presets.pages.home.projects.tagline}
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
              <div className="row" style={{ height: '100%' }}>
                <div className="col-md-12" style={{ height: '30%' }}>
                  <BottomFade>
                    <div
                      className="project img d-flex justify-content-center align-items-center"
                      style={{
                        height: '100%',
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
                <div className="col-md-12" style={{ height: '60%' }}>
                  <BottomFade>
                    <div
                      className="project img d-flex justify-content-center align-items-center"
                      style={{
                        height: '100%',
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
        // Banner section #3 (Contact Banner)
      }
      <Banner
        external={presets.pages.home.contactBanner.external}
        text={presets.pages.home.contactBanner.text}
        button={{
          label: presets.pages.home.contactBanner.buttonLabel,
          link: presets.pages.home.contactBanner.buttonLink,
        }}
      />

      {
        // Blog section
      }
      <Section className="bg-light" id="blog-section">
        <div className="container">
          <div className="row justify-content-center mb-5 pb-5">
            <BottomFade>
              <div className="col-md-7 heading-section text-center">
                <span className="subheading">Blog</span>
                <h2 className="mb-4">{presets.pages.home.blog.title}</h2>
                <p>{presets.pages.home.blog.subtitle}</p>
              </div>
            </BottomFade>
          </div>
          <div className="row d-flex">
            {edges
              .map(edge => edge.node)
              .map((post) => (
                <BottomFade key={post.id}>
                  <div className="col-md-4 d-flex">
                    <div className="blog-entry justify-content-end">
                      <Link
                        href={post.fields.slug}
                        className="block-20"
                        style={{
                          backgroundImage: `url('${getBlogImage(post)}')`,
                          backgroundPosition: 'left',
                        }}
                      // data-stellar-background-ratio="0.5"
                      />
                      <div className="text mt-3 float-right d-block">
                        <div className="d-flex align-items-center mb-3 meta">
                          <p className="mb-0">
                            <span className="mr-2">{post.frontmatter.date}</span>
                          </p>
                        </div>
                        <h3 className="heading">
                          <Link href={post.fields.slug}>
                            {post.frontmatter.title}
                          </Link>
                        </h3>
                        <p>
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </div>
                </BottomFade>
              ))}
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
    </HomeLayout>
  );
};

export const postQuery = graphql`
  query RecentBlogPostQuery {
    allMarkdownRemark(
      limit: 3
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {published: {eq: true}}
        fileAbsolutePath: {regex: "/pages\/blog\/post\//"}
      }
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          html
          frontmatter {
            title
            image
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
