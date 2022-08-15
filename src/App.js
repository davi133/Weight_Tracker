
import React from 'react';

import WeightCard from './WeighCard';

import WeightReg from './model/WeightReg';



function App() {
  return (
    <>
      <WeightCard info={WeightReg(50, "HOJE")} />
      
    </>
  );
}

export default App;
