import './App.css'
import React from 'react'
import { state, useState, useEffect } from 'react'

export default function Data({ arrayProp,
                               handleRandomDataClick,
                               // handleSortClick,
                               handleSortedDataClick,
                                 handleSortedInReverseOrderDataClick}) {

  let id = -1;

  useEffect(() => {
  console.log("Data rendered");
}, []);
  
  return(
    <div className='data-section-wrapper'>
  
        <div className='data-buttons-wrapper'>
          <button onClick={handleRandomDataClick}>Random Data</button>
          <button onClick={handleSortedDataClick}>Sorted Data</button>
          <button onClick={handleSortedInReverseOrderDataClick}>Reverse Ordered Data</button>
        
        </div>
    <div className='data'>
      {arrayProp.map((num) => (
     
        id++,
                <div className="bar"
                  style={{height: `${num}px`}}
                  id={id}
                  key={id}>
                </div>
      
      ))
                    
    }
    </div>
    </div>
  )

 
}
