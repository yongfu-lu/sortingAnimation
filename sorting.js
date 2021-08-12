async function swap(arr,a,b){
    await sleep(20);
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

  function sleep(ms){
    return new Promise (resolve => setTimeout(resolve,ms));
  }

  //bubble sort
  function bubbleSortByFrame(values){
    if( i < values.length && isSorting){
      if(values[j] > values[j+1]){
        swap(values,j,j+1);
      }
      j++;
      if ( j >= values.length-i-1){
        j = 0;
        i ++;
      }
    }
  }

  //selection sort
  function selectionSortByFrame(values){
    if(isSorting && i<values.length){
        if(j < values.length){
          if(values[j] < values[min_idx]){
            min_idx = j;
          }
          j++;
        }
        
        if( j >= values.length){
          swap(values,min_idx,i);
          i++;
          j=i+1;
          min_idx = i;
        }
    }
  }



  //quick sort
  async function quickSort(arr, start,end){
    if(start >= end){
      return;
    }

    let index = await partition(arr,start,end);
    states[index] = -1;

    await quickSort(arr,start,index-1);
    await quickSort(arr, index+1, end);
  }

  async function partition(arr, start,end){
    let pivotIndex = start;
    let pivotValue = arr[end];
    states[pivotIndex] = 0;

    for(let i = start; i<end; i++){
      if(arr[i] < pivotValue){
        await swap(arr,i,pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
    await swap(arr,pivotIndex,end);

    return pivotIndex;
  }

