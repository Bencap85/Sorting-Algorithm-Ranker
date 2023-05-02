import './App.css'
import { state, useState, useEffect } from 'react'
import Results from './Results'
import Data from './Data'

export default function Body({ arrayProp, 
                               insertionSortObjectProp, 
                               mergeSortObjectProp,
                               quickSortObjectProp,
                               selectionSortObjectProp,
                               bubbleSortObjectProp,
                               handleRandomDataClick,
                               handleSortClick,
                               handleSortedDataClick,
                               showMostEffecientProp,
                                      handleSortedInReverseOrderDataClick
                                                    }) {

  
  return(
    <div className='body'>
      <Results insertionSortObjectProp={insertionSortObjectProp}
               mergeSortObjectProp={mergeSortObjectProp}
               quickSortObjectProp ={quickSortObjectProp}
               selectionSortObjectProp={selectionSortObjectProp}
               bubbleSortObjectProp={bubbleSortObjectProp}
               showMostEffecientProp={showMostEffecientProp}
        />
      <Data arrayProp={arrayProp}
            handleRandomDataClick={handleRandomDataClick}
            /* handleSortClick={handleSortClick} */
            handleSortedDataClick={handleSortedDataClick}
                                 handleSortedInReverseOrderDataClick={handleSortedInReverseOrderDataClick}/>
    </div>
  )
}