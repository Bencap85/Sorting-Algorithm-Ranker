import './App.css'
import TopBar from './TopBar'
import Results from './Results'
import Data from './Data'
import Body from './Body'
import { state, useState, useEffect } from 'react'
import { insertionSort,
         mergeSort,
         quickSort,
         selectionSort,
         bubbleSort } from './Algorithms.js'

const getRandomIntFrom = function(min, max) {
    let num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }

 const getNewArray = function() {
    let newArray = [];
    for(let i = 0; i < 100; i++) {
      let num = getRandomIntFrom(5, 500);
      newArray.push(num);
    }
   console.log("array size : " + newArray.length);
    return newArray;
  }
const getArrayInReverseOrder = function(arrayParam) {
  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }
  
  let startingIndex = 1;
  let gapIndex;
  let indexToLeftOfGap;
  let tempValue;

    for(startingIndex; startingIndex < array.length; startingIndex++) {
      
        gapIndex = startingIndex;
        tempValue = array[gapIndex];
        indexToLeftOfGap = gapIndex - 1;
        
        while(array[indexToLeftOfGap] < tempValue) {
          array[gapIndex] = array[indexToLeftOfGap];
          gapIndex = gapIndex - 1;
          indexToLeftOfGap = indexToLeftOfGap - 1;
        }
        array[gapIndex] = tempValue;
    
    }
  return array;
}



export default function App() {
  const [array, setArray] = useState(getNewArray());
  const [insertionSortObject, setInsertionSortObject] = useState({name: 'Insertion Sort', sortedArray: [], steps: 0});
  const [mergeSortObject, setMergeSortObject] = useState({name: "Merge Sort", sortedArray: [], steps: 0});
  const [quickSortObject, setQuickSortObject] = useState({name: 'Quick Sort', sortedArray: [], steps: 0});
  const [selectionSortObject, setSelectionSortObject] = useState({name: 'Selection Sort', sortedArray: [], steps: 0});
  const [bubbleSortObject, setBubbleSortObject] = useState({name: 'Bubble Sort', sortedArray: [], steps: 0});
  const [reset, setReset] = useState(false);
  const [showMostEffecient, setShowMostEffecient] = useState(false);

  if(reset) {
    setInsertionSortObject({name: 'Insertion Sort', sortedArray: [], steps: 0});
    setMergeSortObject({name: "Merge Sort", sortedArray: [], steps: 0})
    setQuickSortObject({name: 'Quick Sort', sortedArray: [], steps: 0})
    setSelectionSortObject({name: 'Selection Sort', sortedArray: [], steps: 0});
    setBubbleSortObject({name: 'Bubble Sort', sortedArray: [], steps: 0});
    setShowMostEffecient(false);
    setReset(false);
  }

  
  return (
    <>
      <TopBar arrayProp={array}
              handleSortClick={() => {
                let unSortedArray = array;
                let insertionObj = insertionSort(unSortedArray);
                let mergeObj = mergeSort(unSortedArray);
                let quickObj = quickSort(unSortedArray);
                let selectionObj = selectionSort(unSortedArray);
                let bubbleObj = bubbleSort(unSortedArray);
                setInsertionSortObject(insertionObj);
                setMergeSortObject(mergeObj);
                setQuickSortObject(quickObj);
                setSelectionSortObject(selectionObj);
                setBubbleSortObject(bubbleObj);
                setArray(insertionObj.sortedArray);
                setShowMostEffecient(true);
              }}/>
      <Body arrayProp={array}
            insertionSortObjectProp={insertionSortObject}
            mergeSortObjectProp={mergeSortObject}
            quickSortObjectProp={quickSortObject}
            selectionSortObjectProp={selectionSortObject}
            bubbleSortObjectProp={bubbleSortObject}
            showMostEffecientProp={showMostEffecient}
            handleRandomDataClick={() => {
                setArray(getNewArray());
                setReset(true);
              }}
             
              handleSortedDataClick={() => {
                let tempObj = insertionSort(array);
                setArray(tempObj.sortedArray);
                setReset(true);
              }}
              handleSortedInReverseOrderDataClick={() => {
                setArray(getArrayInReverseOrder(array));
                setReset(true);
              }}
        />
      
    </>
  )
  
}
