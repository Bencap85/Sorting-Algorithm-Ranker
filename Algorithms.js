//All return algorithm object of the form name, sortedArray, steps
export function insertionSort(arrayParam) {

  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }
  
  let startingIndex = 1;
  let gapIndex;
  let indexToLeftOfGap;
  let tempValue;
  let numSteps = 0;

    for(startingIndex; startingIndex < array.length; startingIndex++) {

        numSteps++;
      
        gapIndex = startingIndex;
        tempValue = array[gapIndex];
        indexToLeftOfGap = gapIndex - 1;
        
        while(array[indexToLeftOfGap] > tempValue) {
          numSteps++;
          array[gapIndex] = array[indexToLeftOfGap];
          gapIndex = gapIndex - 1;
          indexToLeftOfGap = indexToLeftOfGap - 1;
        }
        array[gapIndex] = tempValue;
    
    }
  let sortedArrayObject = {name: 'Insertion Sort', sortedArray: array, steps: numSteps};
  
  return sortedArrayObject;
}

export function mergeSort(arrayParam) {
  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }
  
  let name = "Merge Sort";
  let sortedArray = [];
  let numSteps = 0;
  
  function mergeSortAlgorithm(array) {

    numSteps++;
  
    if(array.length <= 1) {
      return array;
    }
  
    let middle = Math.floor(array.length / 2);
  
    let leftArray = mergeSortAlgorithm(array.slice(0, middle));
    let rightArray = mergeSortAlgorithm(array.slice(middle));
    
    return merge(leftArray, rightArray);
  }
  function merge(arrayOne, arrayTwo) {
    let sortedArray = [];
    numSteps++;

    while(arrayOne.length && arrayTwo.length) {
      numSteps++;
      if(arrayOne[0] < arrayTwo[0]) {
        sortedArray.push(arrayOne.shift());
      } else {
        sortedArray.push(arrayTwo.shift());
      }
      
    }
    return [...sortedArray, ...arrayOne, ...arrayTwo];
}
  
  sortedArray = mergeSortAlgorithm(array);
  let obj = {name: name, sortedArray: sortedArray, steps: numSteps};
  console.log(obj);
  return obj;
}

export function quickSort(arrayParam) {
  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }

  let numSteps = 0;

  function quickSortAlgorithm(array) {
    numSteps++;
    //base case
    if(array.length <= 1) {
      return array;
    }
    
    let pivot = array[0];
    let left = [];
    let right = [];
  
    for(let i = 1; i < array.length; i++) {
      numSteps++;
      if(array[i] < pivot) {
        left.push(array[i]);
      }
      else {
        right.push(array[i]);
      }
    }
  
    return [...quickSortAlgorithm(left), pivot, ...quickSortAlgorithm(right)];
  }
  let newArray = quickSortAlgorithm(array);
  let object = {name: "Quick Sort", sortedArray: newArray, steps: numSteps}
  return object;
}

export function selectionSort(arrayParam) {
  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }
  
  let numSteps = 0;
  
  function selectionSortAlgorithm(array) {
  
    for(let i = 0; i < array.length - 1; i++) {
      numSteps++;
      let indexOfSmallest = i;
  
      for(let j = i; j < array.length; j++) {
        numSteps++;
        if(array[j] < array[indexOfSmallest]) {
          indexOfSmallest = j;
        }
      }
      let tempValue = array[indexOfSmallest];
      array[indexOfSmallest] = array[i];
      array[i] = tempValue;
    }
    return array;
  }
  let newArray = selectionSortAlgorithm(array);
  let object = {name: "Selection Sort", sortedArray: newArray, steps: numSteps};
  return object;
}

export function bubbleSort(arrayParam) {
  let array = [];
  for(let i = 0; i < arrayParam.length; i++) {
    array[i] = arrayParam[i];
  }
  
  let numSteps = 0;
  
  function bubbleSortAlgorithm(array) {
    let madeSwap;
  
    do {
      numSteps++;
      madeSwap = false;
      for(let i = 0; i < array.length - 1; i++) {
        numSteps++;
        let first = array[i];
        let second = array[i + 1];
    
        if(first > second) {
          madeSwap = true;
          let tempValue = array[i];
          array[i] = array[i+1];
          array[i+1] = tempValue;
        }
      } 
    } while(madeSwap);
    return array;
  }
  let newArray = bubbleSortAlgorithm(array);
  let object = {name: "Bubble Sort", sortedArray: newArray, steps: numSteps};
  return object;
}

