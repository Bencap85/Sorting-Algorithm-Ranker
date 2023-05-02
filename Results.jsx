import './App.css'
import { state, useState, useEffect } from 'react'
import IndividualResult from './IndividualResult'

export default function Results({ insertionSortObjectProp, 
                                  mergeSortObjectProp,
                                  quickSortObjectProp,
                                  selectionSortObjectProp,
                                  bubbleSortObjectProp,
                                  showMostEffecientProp
}) {

  
  let ranking = [insertionSortObjectProp,
                 mergeSortObjectProp,
                 quickSortObjectProp, 
                 selectionSortObjectProp,
                 bubbleSortObjectProp];

  sort(ranking);

  function sort(array) {
    array.sort((a, b) => {
      return a.steps - b.steps;
    })
  }
  

  let index = 0;
  return(
    <div className='results-wrapper'>
      <div className='results-header'>
        <h2>{showMostEffecientProp? 'Most effecient:': "Algorithms:"}</h2>
      </div>
      <div className='results'>

        {ranking.map(result => (
        <IndividualResult algorithm={result.name}
                          steps={result.steps}
                          indexInRanking={index++}
                          showMostEffecientProp={showMostEffecientProp}
          />
        ))
        }
        
      </div>
    </div>
  )
}