import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h2 >
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h2>
                  <h3>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </h3> 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
