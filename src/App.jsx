//---------------------libraries---------------------
import React from 'react'
import {Route} from 'react-router-dom';
//---------------------Components------------------------
import Landing from './components/index'
import Ecografias from './components/servicios/ecografias'
import Radiografias from './components/servicios/radiografias'
import Tomografias from './components/servicios/tomografias'
import Socios from './components/team/socios'
import Medicos from './components/team/medicos'
import Tecnicos from './components/team/tecnicos'
import Administrativos from './components/team/administrativos'


const App = () => (
  <div>
    <Route exact path='/' component={Landing} />
    <Route exact path='/ecografias' component={Ecografias} />
    <Route exact path='/radiografias' component={Radiografias} />
    <Route exact path='/tomografias' component={Tomografias} />
    <Route exact path='/socios' component={Socios} />
    <Route exact path='/medicos' component={Medicos} />
    <Route exact path='/tecnicos' component={Tecnicos} />
    <Route exact path='/administrativos' component={Administrativos} />
  </div>
)

export default App;
