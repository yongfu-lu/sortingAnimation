async function swap(arr, a, b) {
  await sleep(sleepTime);
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function swap2(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}


//quick sort
async function quickSort(arr, start, end) {
  if(isSorting){
    if (start >= end) {
      return;
    }

    let index = await partition(arr, start, end);
    states[index] = -1;

    
    await quickSort(arr, start, index - 1);
    await quickSort(arr, index + 1, end);
  }
}

async function partition(arr, start, end) {
  let pivotIndex = start;
  let pivotValue = arr[end];
  states[pivotIndex] = 0;

  for (let i = start; i < end; i++) {
    if(isSorting){
      if (arr[i] < pivotValue) {
        await swap(arr, i, pivotIndex);
        states[pivotIndex] = -1;
        pivotIndex++;
        states[pivotIndex] = 0;
      }
    }
  }
  await swap(arr, pivotIndex, end);

  return pivotIndex;
}


//bubble sort
async function bubbleSort(arr) {
  var i, j;
  for (i = 0; i < arr.length - 1; i++) {
    for (j = 0; j < arr.length - i - 1; j++) {
      if (!isSorting) break;
      states[j] = 0;
      if (arr[j] > arr[j + 1]) {
        await swap(arr, j, j + 1);
      }
      states[j] = -1;
    }
  }
}


//merge sort 
async function merge(arr, l, m, r)
{
  await sleep(sleepTime);
	var n1 = m - l + 1;
	var n2 = r - m;

	// Create temp arrays
	var L = new Array(n1);
	var R = new Array(n2);

	// Copy data to temp arrays L[] and R[]
	for (var i = 0; i < n1; i++){
		L[i] = arr[l + i];
  }
	for (var j = 0; j < n2; j++){
		R[j] = arr[m + 1 + j];
  }

	var i = 0;
	var j = 0;
	var k = l;

	while (i < n1 && j < n2) {
    if(!isSorting) break;
      await sleep(sleepTime);
      states[l+1] = 0;
      states[j+m+1] = 0;
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        states[l+i] = -1;
        i++;
      }
      else {
        arr[k] = R[j];
        states[j+m+1] = -1;
        j++;
      }
      k++;
    
	}
  states[l+1] = -1;
  states[j+m+1] = -1;

  await sleep(sleepTime);
	while (i < n1) {
    if(!isSorting) break;
      states[l+i] = 0;
      arr[k] = L[i];
      states[l+i] = -1;
      i++;
      k++;
    
	}
  states[l+1] = -1;
  states[j+m+1] = -1;

  await sleep(sleepTime);
	while (j < n2) {
    if(!isSorting) break;
      states[j+m+1] = 0;
      arr[k] = R[j];
      states[j+m+1] = -1;
      j++;
      k++;
    
	}
}

async function mergeSort(arr,l, r){
	if(l>=r){
		return;//returns recursively
	}
  if(isSorting){
    var m =l+ parseInt((r-l)/2);

    await mergeSort(arr,l,m);
    await mergeSort(arr,m+1,r);
    await merge(arr,l,m,r);
  }
}


// //selection sort
async function selectionSort(arr)
{
    var i, j, min_idx;

    for (i = 0; i < arr.length-1; i++)
    {
        min_idx = i;
        for (j = i + 1; j < arr.length; j++){
          if(isSorting){
            states[j] = 0;
            if (arr[j] < arr[min_idx]){
                min_idx = j;
            }
            await sleep(sleepTime);
          }
          states[j] = -1;
        }
        if(isSorting)
           await swap(arr,min_idx, i);
    }
}
