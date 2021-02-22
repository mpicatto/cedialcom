import React from "react";
import Data from './team/data/team.json'
import './common/list.css'
 const Team = () => {

    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="col-md-8 col-md-offset-2 section-title">
            <h2>Nuestro Equipo</h2>
            <p>Un grupo con excelencia técnica y calidez humana, trabajando para brindarle la mejor atención.  </p>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-3">
            <a style={{textDecoration:'none'}} href="/socios">
              <div className="about-text">
              <h3>{Data.team1.title}</h3>
              <div className="list-style">
                    <div >
                        <ul>
                            {Data ? Data.team1.team.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : 'loading'}
                        </ul>
                    </div>
                    <div >
                        <ul>
                            {Data ? Data.team1.team1.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : null}
                        </ul>
                    </div>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xs-12 col-md-3">
            <a style={{textDecoration:'none'}} href="/medicos">
              <div className="about-text">
              <h3>{Data.team2.title}</h3>
              <div className="list-style">
                    <div >
                        <ul>
                            {Data ? Data.team2.team.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : 'loading'}
                        </ul>
                    </div>
                    <div >
                        <ul>
                            {Data ? Data.team2.team1.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : null}
                        </ul>
                    </div>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xs-12 col-md-3">
            <a style={{textDecoration:'none'}} href="/tecnicos">
              <div className="about-text">
              <h3>{Data.team3.title}</h3>
              <div className="list-style">
                    <div >
                        <ul>
                            {Data ? Data.team3.team.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : 'loading'}
                        </ul>
                    </div>
                    <div >
                        <ul>
                            {Data ? Data.team3.team1.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : null}
                        </ul>
                    </div>
                </div>
              </div>
              </a>
            </div>
            <div className="col-xs-12 col-md-3">
            <a style={{textDecoration:'none'}} href="/administrativos">
              <div className="about-text">
              <h3>{Data.team4.title}</h3>
              <div className="list-style">
                    <div >
                        <ul>
                            {Data ? Data.team4.team.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : 'loading'}
                        </ul>
                    </div>
                    <div >
                        <ul>
                            {Data ? Data.team4.team1.map((d, i) => <li  key={`${d}-${i}`}>{d.name}</li>) : null}
                        </ul>
                    </div>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  
}

export default Team;
