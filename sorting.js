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
  }
