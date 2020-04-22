import cn from "classnames";
import * as align from "Constants/alignments";
import { Row, Col } from "reactstrap";
import React, { Component } from "react";
import Navbar from "./Navbar/Navbar";
import Badges from "./Badges";
import BUIDLHub from "Components/BUIDLHub";
import Footer from "Components/Footer";
import Header from "./Header";

import poapLogo from "Assets/images/POAPLogo.svg";
import BugText from "Components/BugText";

import { ToastContainer } from "react-toastify";

export default class Main extends Component {
  render() {
    let padding = cn("px-3", "px-md-5", "py-3");
    return (
      <div
        className={cn(
          "main-landing",
          align.full,
          align.topLeft,
          align.noMarginPad
        )}
      >
        <ToastContainer />
        <Row
          className={cn(
            "d-flex",
            "flex-row",
            "justify-items-start",
            "align-items-start",
            align.full,
            align.noMarginPad
          )}
        >
          <Col
            xs="12"
            className={cn(
              align.allCenter,
              align.noMarginPad,
              "header-container"
            )}
          >
            <Col xs="3" className={cn(align.topCenter, align.noMarginPad)}>
              <div
                className={cn(
                  "header-logo",
                  align.allCenter,
                  align.noMarginPad
                )}
              >
                <img src={poapLogo} width="150" alt="logo" />
              </div>
            </Col>
            <Col xs="6" className={cn(align.topCenter, align.noMarginPad)}>
              <div
                className={cn(align.full, align.topCenter, align.noMarginPad)}
              >
                <Row
                  className={cn(align.full, align.noMarginPad, align.topCenter)}
                >
                  <Col
                    xs="12"
                    className={cn(align.topCenter, align.noMarginPad)}
                  >
                    <Header />
                  </Col>
                </Row>
              </div>
            </Col>
            <Col xs="3" className={cn(align.allCenter, align.noMarginPad)} />
          </Col>
          <Col
            xs="12"
            className={cn(align.allCenter, align.noMarginPad, "mb-0")}
          >
            <Row
              className={cn(
                align.full,
                align.noMarginPad,
                align.allCenter,
                "mt-2"
              )}
            >
              <Col xs="3" className={cn(align.allCenter, align.noMarginPad)} />
              <Col xs="6" className={cn(align.topCenter, align.noMarginPad)}>
                <span className={cn("yourbadges")}>
                  Click on a badge to get access.
                </span>
              </Col>
              <Col xs="3" className={cn(align.topCenter, align.noMarginPad)}>
                <Row
                  className={cn(align.full, align.noMarginPad, align.topLeft)}
                >
                  <Col
                    xs="12"
                    className={cn(align.rightCenter, align.noMarginPad)}
                  >
                    <BUIDLHub {...this.props} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
          <Col
            xs="12"
            className={cn(align.allCenter, align.noMarginPad, "mt-0")}
          >
            <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
              <Col xs="3" className={cn(align.allCenter, align.noMarginPad)} />
              <Col xs="6" className={cn(align.topCenter, align.noMarginPad)}>
                <Badges {...this.props} />
              </Col>
              <Col xs="3" className={cn(align.topCenter, align.noMarginPad)} />
            </Row>
          </Col>
          <Row className={cn(align.full, align.noMarginPad, align.allCenter)}>
            <Col xs="12" className={cn(align.allCenter, align.noMarginPad)}>
              <BugText />
            </Col>
          </Row>
        </Row>
      </div>
    );
  }
}
