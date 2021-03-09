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
                <a href="/#team" className="page-scroll">
                  PRINCIPAL
                </a>
              </li>

              <li>
                <a href="/socios#header" className="page-scroll">
                  Socios 
                </a>
              </li>
              <li>
                <a href="/medicos#header" className="page-scroll">
                   Médicos
                </a>
              </li>
              <li>
                <a href="/tecnicos#header" className="page-scroll">
                  Técnicos
                </a>
              </li>
              <li>
                <a href="/administrativos#header" className="page-scroll">
                  Administrativos
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
