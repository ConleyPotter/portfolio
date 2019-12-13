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
  Button,
  NavItem,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

class DemoFooter extends React.Component {
  render() {
    return (
      <>
        <footer className="footer">
          <Container>
            <Row>
              <Col md="4">
                <h1 className="title">BLK• React</h1>
              </Col>
              <Col md="4" xs="6">
                <Nav>
                  <NavItem>
                    <a href="https://angel.co/conley-potter">
                      AngelList
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="https://www.linkedin.com/in/conley-potter/">
                      LinkedIn
                    </a>
                  </NavItem>
                  <NavItem>
                    <a href="https://github.com/ConleyPotter">
                      GitHub
                    </a>
                  </NavItem>
                </Nav>
              </Col>
              <Col md="4">
                <h3 className="title">Follow Me:</h3>
                <div className="btn-wrapper profile text-left">
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple"
                    color="default"
                    href="https://twitter.com/creativetim"
                    id="tooltip39661217"
                    target="_blank"
                  >
                    <a href="https://github.com/ConleyPotter">
                      <i className="fab fa-github" />
                    </a>
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip39661217">
                    Follow Me
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://www.linkedin.com/in/conley-potter/"
                    id="tooltip206037619"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip206037619">
                    Connect with me!
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-neutral btn-round btn-simple ml-1"
                    color="default"
                    href="https://angel.co/conley-potter"
                    id="tooltip750293512"
                    target="_blank"
                  >
                    <i className="fab fa-angellist" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip750293512">
                    Connect with me!
                  </UncontrolledTooltip>
                </div>
              </Col>
            </Row>
          </Container>
        </footer>
      </>
    );
  }
}

export default DemoFooter;
