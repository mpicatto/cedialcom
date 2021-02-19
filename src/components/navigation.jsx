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
              {/* <li>
                <a href="#features" className="page-scroll">
                  Features
                </a>
              </li> */}
              <li>
                <a href="#about" className="page-scroll">
                  ACERCA NUESTRO
                </a>
              </li>
              {/* <li>
                <a href="#services" className="page-scroll">
                  SERVICIOS
                </a>
              </li> */}
              <li>
                <a href="#portfolio" className="page-scroll">
                  SERVICIOS
                </a>
              </li>
              <li>
                <a href="#novedades" className="page-scroll">
                  NOVEDADES
                </a>
              </li>
              <li>
                <a href="#team" className="page-scroll">
                  NUESTRO EQUIPO
                </a>
              </li>
              <li>
                <a href="#contact" className="page-scroll">
                  CONTACTO
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
