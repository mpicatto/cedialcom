//--------------libraries-------------------
import React from 'react'
//------------components---------------------
import Navigation from '../common/navigation';
import Header from '../common/header';
import Text from '../common/text';
import List from '../common/list'
import JsonData from './data/mamografias.json';

const Mamo = () =>  {

    const data = JsonData

    return (
      <div>
        <Navigation />
        <Header data={data.Header} />
        <Text data={data.Text1} />
        <Text data={data.Text2} />
        <Text data={data.Text3} />
        <List data={data.Text3} />
        <Text data={data.Text4} />
        <List data={data.Text4} />
        <Text data={data.Text5} />
      </div>
    )
  
}

export default Mamo;