import React from "react";
import {connect} from 'react-redux';
import {setData} from './../actions/modals'
import ServiceData from './servicios/data/ecografias.json'
export function Gallery(props) {

  const styles = {
    gallery:{
      display:"flex",
      flexDirection: "row",
      justifyContent:"center"
    }
  }

  const setModal = () => {
    let data = {subtitle:ServiceData.Text2.subtitle,imgArray:ServiceData.Text2.imgArray}
    props.setData(data)      
  }
    return (
      <div id="portfolio" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>SERVICIOS</h2>
            <p>
              Realizamos una gran variedad de estudios para cuidar de su salud.
            </p>
          </div>
          <div style={styles.gallery}>
            <div className="portfolio-items">
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/ecografias"
                      title="Ecografías"
                      data-lightbox-gallery="gallery1"
                      onClick={()=>setModal()}
                    >
                      <div className="hover-text">
                        <h4>Ecografías</h4>
                      </div>
                      <img
                        src="img/portfolio/01-small.jpg"
                        className="img-responsive"
                        alt="Ecografías"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/radiografias"
                      title="Radiografías"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Radiografías</h4>
                      </div>
                      <img
                        src="img/portfolio/02-small.jpg"
                        className="img-responsive"
                        alt="Radiografías"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-md-4 col-lg-4">
                <div className="portfolio-item">
                  <div className="hover-bg">
                    {" "}
                    <a
                      href="/tomografias"
                      title="Tomografías"
                      data-lightbox-gallery="gallery1"
                    >
                      <div className="hover-text">
                        <h4>Tomografías</h4>
                      </div>
                      <img
                        src="img/portfolio/03-small.jpg"
                        className="img-responsive"
                        alt="Tomografías"
                      />{" "}
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

const mapDispatchToProps = dispatch => {
  return {
      setData:(data)=>dispatch(setData(data)),
    }
}

export default connect(null,mapDispatchToProps)(Gallery)

