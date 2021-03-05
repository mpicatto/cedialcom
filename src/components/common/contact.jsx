import React, {useState} from "react";
import Axios from 'axios';

function Contact(props) {

  const [data,setData]=useState({
    name:'',
    email:'',
    message:''
  })

  const emailData = (e)=>{
    setData({
      ...data,
      [e.target.name]:e.target.value
    })
  }

  const sendMail = (e) =>{
    e.preventDefault();
    console.log(data)
    Axios.post('https://cedialcom-mailer.herokuapp.com/email',data)
      .then(res => {
        if (res){
           alert("El mensaje ha sido enviado con éxito.")
           setData({
            name:'',
            email:'',
            message:''
          })
          };
      })
      .catch(err => {
        if (err) alert("Error al enviar el mensaje; vuelva a intentar.");
      });

  }
  
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Contacto</h2>
                  <p>
                    Envienos su consulta.
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          name="name"
                          className="form-control"
                          placeholder="Nombre"
                          required="required"
                          value={data.name}
                          onChange={(e)=>emailData(e)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          name="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          value={data.email}
                          onChange={(e)=>emailData(e)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Mensaje"
                      required
                      value={data.message}
                      onChange={(e)=>emailData(e)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg" onClick={(e)=>sendMail(e)}>
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Información de Contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Dirección
                  </span>
                  {props.data ? props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Teléfono
                  </span>{" "}
                  {props.data ? props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {props.data ? props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={props.data ? props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.twitter : "/"}>
                        <i className="fa fa-instagram"></i>
                      </a>
                    </li>
                    <li>
                      <a href={props.data ? props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              Realizado por Mauro Picatto
            </p>
          </div>
        </div>
      </div>
    );
}

export default Contact;
