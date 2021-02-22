import React, { Component } from "react";
import {Link} from 'react-router-dom';

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
                <Link to="/#portfolio" className="page-scroll">
                  PRINCIPAL
                </Link>
              </li>

              <li>
                <Link to="/ecografias#menu" className="page-scroll">
                  ECOGRAFIAS
                </Link>
              </li>
              <li>
                <Link to="/radiografias#header" className="page-scroll">
                  RADIOGRAFIAS
                </Link>
              </li>
              <li>
                <Link to="/tomografias#header" className="page-scroll">
                  TOMOGRAFIAS
                </Link>
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
