import './App.css'
import { mergeSort, quickSort } from './Algorithms'
import { state, useState, useEffect } from 'react'



export default function TopBar({ arrayProp, handleSortClick }) {

  useEffect(() => {
  console.log("TopBar rendered");
}, []);
  
  return(
    <div className="top-bar">
   
      <div className="title-wrapper">
        <h1>Algorithm Ranker</h1>
      </div>
      <div className='sort-button-wrapper'>
        <button className='sort-button' onClick={handleSortClick}>Sort</button>
      </div>
    </div>
  )
}