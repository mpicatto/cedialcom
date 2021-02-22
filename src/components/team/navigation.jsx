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
                <Link to="/socios#header" className="page-scroll">
                  Socios 
                </Link>
              </li>
              <li>
                <Link to="/medicos#header" className="page-scroll">
                   Médicos
                </Link>
              </li>
              <li>
                <Link to="/tecnicos#header" className="page-scroll">
                  Técnicos
                </Link>
              </li>
              <li>
                <Link to="/administrativos#header" className="page-scroll">
                  Administrativos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
