/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Carousel,
  CarouselItem
} from "reactstrap";

// core components

import DemoFooter from "./DemoFooter.jsx";

const items1 = [
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Getsy</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              Getsy is a clone of Etsy that I developed with two collegues,
              utilizing knowledge of the Git Workflow. It's a MERN stack app,
              and I enjoyed honing in on noSQL databases, in this case MongoDB.
            </h4>
              <Button
                color="warning"
              onClick={e => window.location.href = "https://getsy-app.herokuapp.com/#/"}
              >
                Live site
              </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              id="getsy-pic"
              src={require("../assets/img/getsy-devices.png")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "0"
  },
  {
    content: (
      <Container>
        <Row>
          <Col className="mr-auto" md="5">
            <div className="space-100" />
            <CardTitle tag="h3">Middle</CardTitle>
            <h3 className="text-warning">• • •</h3>
            <h4 className="description">
              I designed and created a beautiful and functional in-browser 
              text-editor by utilizing knowledge of vanilla JavaScript (ES6) 
              DOM manipulation and CSS styling. In addition the site displays
              modals by creating a UI slice of Redux state and dispatching 
              modal actions upon clicking authentication links to increase page loading speeds.
              I made sure to eliminate all N+1 queries by utilizing mastery a
              of JBuilder, ActiveRecord, and AJAX to ensure high performance and scalability.

            </h4>
            <Button
              color="warning"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Read more
            </Button>
          </Col>
          <Col className="ml-auto" md="6">
            <img
              alt="..."
              className="d-block"
              src={require("../assets/img/tom-klein.jpg")}
            />
          </Col>
        </Row>
      </Container>
    ),
    altText: "",
    caption: "",
    src: "1"
  }
];

class AboutUs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carousel1Index: 0
    };
    this.onExited = this.onExited.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }
  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.wrapper.scrollTop = 0;
    document.body.classList.add("about-us");
  }
  componentWillUnmount() {
    document.body.classList.remove("about-us");
  }
  onExiting = carousel => {
    this["carousel" + carousel + "Animating"] = true;
  };

  onExited = carousel => {
    this["carousel" + carousel + "Animating"] = false;
  };
  next = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === items.length - 1
        ? 0
        : this.state["carousel" + carousel + "Index"] + 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  previous = (carousel, items) => {
    if (this["carousel" + carousel + "Animating"]) return;
    const nextIndex =
      this.state["carousel" + carousel + "Index"] === 0
        ? items.length - 1
        : this.state["carousel" + carousel + "Index"] - 1;
    this.setState({ ["carousel" + carousel + "Index"]: nextIndex });
  };
  render() {
    return (
      <>
        <div className="wrapper" ref="wrapper">
          <div className="page-header">
            <img
              alt="..."
              className="path path3"
              src={require("../assets/img/path3.png")}
            />
            <svg className="hidden">
              {/* All deco shapes */}
              <defs>
                <path
                  d="M292,517.91s-15.55-56.18-82.16-38.13C144.29,497.54,155.58,363.16,162,313.12S224.89,15.59,387.71,4.49,515.3,133.38,499.28,174.22s-48.71,85.09,11,218.26S455,582.74,430.06,588.37,339.71,621.12,292,517.91Z"
                  id="deco2"
                />
              </defs>
            </svg>
            <div className="content-center">
              <Container>
                <Row className="align-items-center text-left">
                  <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                    <h1 className="title">
                      Hello, <br />
                      <strong className="text-warning">I'm Conley</strong>
                    </h1>
                    <p className="description">
                       I am a compassionate Software Engineer, passionate about {/* I don't know if this is the right word, too weird? */}
                       challenges that are both engaging and urgent. I look 
                       forward to finding solutions to problems aligned with my 
                       interests in Healthcare, Cloud Computing, and Journalism.
                    </p>
                  </Col>
                  <Col className="ml-auto mr-auto" lg="6" md="8" xs="12">
                    {/* SVG Illustration */}
                    <figure className="ie-non-standard-hero-shape">
                      <svg
                        className="injected-svg js-svg-injector"
                        data-img-paths={
                          "[{&quot;targetId&quot;: &quot;#imageShape1&quot;, &quot;newPath&quot;: &quot;" +
                          require("../assets/img/tokyoConley.jpg") +
                          "&quot;},{&quot;targetId&quot;: &quot;#imageShape2&quot;, &quot;newPath&quot;: &quot;" +
                          require("../assets/img/tokyoConley.jpg") +
                          "&quot;}]"
                        }
                        data-parent="#SVGNonStandardHeroShape"
                        style={{ enableBackground: "new 10 12 878.9 907" }}
                        viewBox="10 12 878.9 907"
                        x="0px"
                        y="0px"
                        xmlSpace="preserve"
                      >
                        <g>
                          <defs>
                            <path
                              d="M299.27,772.72s-24.67-76.08-131.42-51.33C62.82,745.74,81.48,563.56,92,495.71S193.94,92.18,454.77,76.46,658.58,250.62,632.75,306s-78.37,115.53,16.76,295.77-89.33,258.1-129.36,265.84S375.3,912.41,299.27,772.72Z"
                              id="firstShape"
                            />
                          </defs>
                          <clipPath id="secondShape">
                            <use
                              style={{ overflow: "visible" }}
                              xlinkHref="#firstShape"
                            />
                          </clipPath>
                          <g clipPath="url(#secondShape)">
                            <image
                              height="1000"
                              id="imageShape1"
                              style={{ overflow: "visible" }}
                              transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                              width="1000"
                              xlinkHref={require("../assets/img/tokyoConley.jpg")}
                            />
                          </g>
                        </g>
                        <g>
                          <defs>
                            <path
                              d="M741.49,643q-2.58-.31-5.17-.4c-12-.45-46.58-14.37-79.24-71.85-17.81-31.35-47.32-96.41-37.88-167.21,7.84-58.79,38.38-97.1,48.34-130.64,24.82-83.61,66.62-77.07,98-77.07,15.93,0,31.1,14.82,39.21,26.39,11.55,16.48,19.72,46.24-9.1,93.32-60.66,99.07,14.09,139.33-.93,239.68C781.72,641.8,750,644,741.49,643Z"
                              id="thirdShape"
                            />
                          </defs>
                          <clipPath id="fourthShape">
                            <use
                              style={{ overflow: "visible" }}
                              xlinkHref="#thirdShape"
                            />
                          </clipPath>
                          <g
                            clipPath="url(#fourthShape)"
                            transform="matrix(1 0 0 1 0 0)"
                          >
                            <image
                              height="1000"
                              id="imageShape2"
                              style={{ overflow: "visible" }}
                              transform="matrix(0.9488 0 0 0.9488 25 53.1187)"
                              width="1000"
                              xlinkHref={require("../assets/img/tokyoConley.jpg")}
                            />
                          </g>
                        </g>
                      </svg>
                    </figure>
                    {/* End SVG Illustration */}
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className="features-1">
            <Container>
              <Row>
                <Col className="ml-auto mr-auto" md="8">
                  <Badge color="warning">Exerience</Badge>
                  <h1 className="title">Full Stack Skill Set</h1>
                </Col>
              </Row>
              <Row>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-primary">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("../assets/img/feature-blob/info.png")}
                      />
                      <img src={require("../assets/img/react.png")} alt="React" />
                      
                    </div>
                    <h4 className="info-title">Front End</h4>
                    <p className="description">
                      I like
                      creating reusable, maintainable React components and
                      handling state with Redux.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-success">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("../assets/img/feature-blob/warning.png")}
                      />
                      <img 
                        src={require("../assets/img/aws.png")}
                        alt="AWS"
                        className="aws"
                      />
                    </div>
                    <h4 className="info-title">Infrastructure</h4>
                    <p className="description">
                      Utilizing tools such as Google Firebase and AWS S3, I have built
                      apps hosted, stored, and served on the cloud.
                    </p>
                  </div>
                </Col>
                <Col md="4">
                  <div className="info info-hover">
                    <div className="icon icon-warning">
                      <img
                        alt="..."
                        className="bg-blob"
                        src={require("../assets/img/feature-blob/success.png")}
                      />
                      <img
                        src={require("../assets/img/nodejs.png")}
                        alt="AWS"
                        className="NodeJS"
                      />
                    </div>
                    <h4 className="info-title">Backend</h4>
                    <p className="description">
                      I'm experienced using Ruby and backend JavaScript,
                      and MongoDB and PostgreSQL in terms
                      of databases.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="section about-description">
            <img
              alt="..."
              className="path path4"
              src={require("../assets/img/path4.png")}
            />
            <Carousel
              activeIndex={this.state.carousel1Index}
              next={() => this.next(1, items1)}
              previous={() => this.previous(1, items1)}
              className="carousel-team"
            >
              {items1.map((item, key) => {
                return (
                  <CarouselItem
                    onExiting={() => this.onExiting(1)}
                    onExited={() => this.onExited(1)}
                    key={key}
                  >
                    {item.content}
                  </CarouselItem>
                );
              })}
              <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  this.previous(1, items1);
                }}
                role="button"
              >
                <i className="tim-icons icon-minimal-left" />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                  e.preventDefault();
                  this.next(1, items1);
                }}
                role="button"
              >
                <i className="tim-icons icon-minimal-right" />
                <span className="sr-only">Next</span>
              </a>
            </Carousel>
          </div>
          <div className="section about-pricing">
            <Container>
              <Row className="align-items-center">
                <Col className="mx-auto" lg="5" md="10" xs="12">
                  <h1 className="title">You should be here!</h1>
                  <p className="description">
                    5,000 capacity venue, holding some of the latest technology
                    lighting with a 24 colour laser system Amnesia is one of the
                    islands most legendary clubs.
                  </p>
                  <Row>
                    <Col className="mb-3" md="12" sm="8">
                      <FormGroup>
                        <Input defaultValue="Full Name" type="text" />
                      </FormGroup>
                      <FormGroup>
                        <Input defaultValue="Your Email" type="email" />
                      </FormGroup>
                      <Button
                        className="btn-icon btn-round"
                        color="info"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                      >
                        <i className="tim-icons icon-send" />
                      </Button>
                    </Col>
                  </Row>
                </Col>
                <Col className="ml-auto" lg="6" md="12" xs="12">
                  <Row>
                    <Col md="6">
                      <Card className="card-pricing">
                        <CardHeader className="bg-info">
                          <Badge className="badge-default">Starter</Badge>
                          <CardTitle tag="h1">
                            <small>$</small>
                            22
                          </CardTitle>
                          <h5>per month</h5>
                        </CardHeader>
                        <CardBody>
                          <ul>
                            <li>
                              <i className="tim-icons icon-check-2" /> 1000 MB
                            </li>
                            <li>
                              <i className="tim-icons icon-email-85" /> 3 email
                            </li>
                            <li>
                              <i className="tim-icons icon-chart-bar-32" /> 5
                              Databases
                            </li>
                            <li>
                              <i className="tim-icons icon-alert-circle-exc" />{" "}
                              No Support
                            </li>
                          </ul>
                          <Button
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Get started
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md="6">
                      <Card className="card-pricing">
                        <CardHeader className="bg-danger">
                          <Badge className="badge-default">Pro</Badge>
                          <CardTitle tag="h1">
                            <small>$</small>
                            45
                          </CardTitle>
                          <h5>per month</h5>
                        </CardHeader>
                        <CardBody>
                          <ul>
                            <li>
                              <i className="tim-icons icon-check-2" /> 2000 MB
                            </li>
                            <li>
                              <i className="tim-icons icon-email-85" /> 100
                              email
                            </li>
                            <li>
                              <i className="tim-icons icon-chart-bar-32" /> 10
                              Databases
                            </li>
                            <li>
                              <i className="tim-icons icon-alert-circle-exc" />{" "}
                              Support
                            </li>
                          </ul>
                          <Button
                            className="mt-4"
                            color="info"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Get started
                          </Button>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </div>
          <DemoFooter />
        </div>
      </>
    );
  }
}

export default AboutUs;
