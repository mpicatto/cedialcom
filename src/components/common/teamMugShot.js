import React from "react";
import './teamMugShot.css'

const Team = (props) => {
  
    return (
      <div >
        <div >
          <div id="mugshots" >
            {props.data
              ? props.data.map((d, i) => (
                  <div  key={`${d.name}-${i}`} className="col-md-3 col-sm-6">
                    <div  >
                      {" "}
                      <img src={d.img} alt="..." className="team-img" />
                      <div className="caption">
                        <h4>{d.name}</h4>
                        <p>{d.job}</p>
                      </div>
                    </div>
                  </div>
                ))
              : "loading"}
          </div>
        </div>
      </div>
    );
}

export default Team;