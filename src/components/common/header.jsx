import React from "react";

const Header = (props) => {
    console.log(props)
    return (
      <header id="header">
        <div className="intro" 
             style={{backgroundImage:'url('+props.data.image+')',
                     backgroundPosition:'center',
                     backgroundRepeat:'no-repeat'}}
                >
          <div className="overlay" style={{background:props.data.overlay}}>
            <div className="container">
              <div className="row">
                <div className="intro-text">
                  <h2 style={{color:props.data.titleColor}}>
                    {props.data ? props.data.title : "Loading"}
                    <span></span>
                  </h2>
                  {props.data.paragraph?<h3 style={{color:props.data.paragraphColor}}>
                    {props.data.paragraph}
                  </h3>:null} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
}

export default Header;
