import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
        <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt=""/> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>Acerca Nuestro</h2>
                <p>{this.props.data ? this.props.data.paragraph : 'loading...'}</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 " style={{paddingTop:"15px"}}>
          <h3>Porque elegirnos?</h3>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
              <div className="list-style">
                    <div >
                        <ul>
                            {this.props.data ? this.props.data.Why.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
              <div className="list-style">
                    <div >
                        <ul>
                            {this.props.data ? this.props.data.Why2.map((d, i) => <li  key={`${d}-${i}`}>{d}</li>) : 'loading'}
                        </ul>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default about
