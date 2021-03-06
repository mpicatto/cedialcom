//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from './navigation';
import Header from './common/header';
import Text from './common/text'
import Contact from './contact';
import JsonData from './../data/data.json';

const App = () =>  {

    const data = JsonData

    return (
      <div>
        <Navigation />
        <Header data={data.Header} />
        <Text />
        <Contact data={data.Contact} />
      </div>
    )
  
}

export default App;