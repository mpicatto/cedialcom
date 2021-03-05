//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from '../common/navigation';
import Header from '../common/header';
import Text from '../common/text';
import Contact from '../common/contact';
import JsonData from './data/tomografias.json';

const Tac = () =>  {

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
      </div>
    )
  
}

export default Tac;