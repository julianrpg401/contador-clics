import React from "react";
import './contador.css';

function Contador({ numClics }){
  return(
    <div className='contador'>
      {numClics}
    </div>
  );
}

export { Contador };