function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }

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

    // if(isSorting){
    //   for(let i = 0; i<values.length; i++){
    //     for(let j = 0; j<values.length-i-1; j++){
    //       if(values[j] > values[j+1]){
    //         swap(values,j,j+1);
    //       }
    //     }
    //   }
    // }
  }

  function selectionSort(values){
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


//   function selectionSort(arr,  n)
// {
//     var i, j, min_idx;
 
//     // One by one move boundary of unsorted subarray
//     for (i = 0; i < n-1; i++)
//     {
//         // Find the minimum element in unsorted array
//         min_idx = i;
//         for (j = i + 1; j < n; j++)
//         if (arr[j] < arr[min_idx])
//             min_idx = j;
 
//         // Swap the found minimum element with the first element
//         swap(arr,min_idx, i);
//     }
// }
