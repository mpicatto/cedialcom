//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from './navigation'
import Header from './../common/header'
import TeamGallery from './../common/teamMugShot'
import TeamData from './data/team.json';
import TeamHeader from './data/teamHeader.json'

const Team = () =>  {

    return (
      <div>
        <Navigation/>
        <Header data={TeamHeader.team4}/>
        <TeamGallery data={TeamData.team4.team}/>
        <TeamGallery data={TeamData.team4.team1}/>
      </div>
    )
  
}

export default Team;