//---------------------libraries---------------------
import React from 'react'
import {Route} from 'react-router-dom';
//---------------------Components------------------------
import Landing from './components/index'
import Ecografias from './components/servicios/ecografias'
import Radiografias from './components/servicios/radiografias'
import Tomografias from './components/servicios/tomografias'
import Mamografias from './components/servicios/mamografias'
import Socios from './components/team/socios'
import Medicos from './components/team/medicos'
import Tecnicos from './components/team/tecnicos'
import Administrativos from './components/team/administrativos'


const App = () => (
  <div>
    <Route exact path='/' component={Landing} />
    <Route exact path='/ecografia' component={Ecografias} />
    <Route exact path='/radiografia' component={Radiografias} />
    <Route exact path='/tomografia' component={Tomografias} />
    <Route exact path='/mamografia' component={Mamografias} />
    <Route exact path='/socios' component={Socios} />
    <Route exact path='/medicos' component={Medicos} />
    <Route exact path='/tecnicos' component={Tecnicos} />
    <Route exact path='/administrativos' component={Administrativos} />
  </div>
)

export default App;
