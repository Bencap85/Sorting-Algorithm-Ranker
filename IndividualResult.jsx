import './App.css'
import { state, useState, useEffect } from 'react'

export default function IndividualResult({ algorithm, 
                                           steps,
                                           indexInRanking,
                                           showMostEffecientProp
                                         }) {

  
  return(
    <div className={(indexInRanking === 0 &&
                      showMostEffecientProp === true)? 'most-effecient': 'individual-result'}>
      <h1>{algorithm}</h1>
      <p>Steps: {steps}</p>
    </div>
    
  )
}