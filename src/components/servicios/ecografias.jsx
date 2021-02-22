//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from './../common/navigation';
import Header from './../common/header';
import Text from './../common/text'
import Contact from './../common/contact';
import JsonData from './data/ecografias.json';

const Ecos = () =>  {

    const data = JsonData

    return (
      <div>
        <Navigation />
        <Header data={data.Header} />
        <Text data={data.Text1} />
        <Text data={data.Text2} />
        <Text data={data.Text3} />
        <Text data={data.Text4} />
        <Text data={data.Text5} />
        <Text data={data.Text6} />
        <Text data={data.Text7} />
        <Text data={data.Text8} />
        <Text data={data.Text9} />
        <Text data={data.Text10} />
        <Text data={data.Text11} />
        <Text data={data.Text12} />
        <Text data={data.Text13} />
        <Text data={data.Text14} />
        <Text data={data.Text15} />
        <Text data={data.Text16} />
        <Text data={data.Text17} />
        <Text data={data.Text18} />
        <Text data={data.Text19} />
        <Text data={data.Text20} />
        <Text data={data.Text21} />
        <Text data={data.Text22} />
        <Text data={data.Text23} />
        <Text data={data.Text24} />
        <Text data={data.Text25} />
        <Text data={data.Text26} />
        <Text data={data.Text27} />
        <Text data={data.Text28} />
        <Text data={data.Text29} />
        <Text data={data.Text30} />
        <Text data={data.Text31} />
        <Text data={data.Text32} />
        <Text data={data.Text21} />
      </div>
    )
  
}

export default Ecos;