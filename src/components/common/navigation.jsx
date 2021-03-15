import React, { Component } from "react";

export class Navigation extends Component {
  render() {
    return (
      <nav id="menu" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              CEDIALCOM L.V. S.A.
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">

              <li>
                <a href="/" className="page-scroll">
                  PRINCIPAL
                </a>
              </li>

              <li>
                <a href="/ecografia" className="page-scroll">
                  ECOGRAFIA
                </a>
              </li>
              <li>
                <a href="/radiografia" className="page-scroll">
                  RADIOGRAFIA
                </a>
              </li>
              <li>
                <a href="/tomografia" className="page-scroll">
                  TOMOGRAFIA
                </a>
              </li>
              <li>
                <a href="/mamografia" className="page-scroll">
                  MAMOGRAFIA
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
