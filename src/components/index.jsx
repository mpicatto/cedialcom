//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from './navigation';
import Header from './common/header';
import About from './about';
import Gallery from './gallery';
import Testimonials from './testimonials';
import Team from './Team';
import Contact from './common/contact';
import JsonData from './../data/data.json';

const App = () =>  {

    const data = JsonData

    return (
      <div>
        <Navigation />
        <Header data={data.Header} />
        <About data={data.About} />
        <Gallery />
        <Testimonials data={data.Testimonials} />
        <Team />
        <Contact data={data.Contact} />
      </div>
    )
  
}

export default App;