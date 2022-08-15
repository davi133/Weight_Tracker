
import React from 'react';

import WeightCard from './WeighCard';
import WeighCardCreator from "./WeightCardCreator"

import WeightReg from './model/WeightReg';



let a = WeightReg(50,new Date());



function App() {
  return (
    <>
      <WeightCard info={WeightReg(50,"hoje")} />
      <hr></hr><hr></hr>
      

    </>
  );
}

export default App;
