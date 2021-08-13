var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var barWidth = 20;
var currentAlgorithm = "bubblesort";
var sleepTime = 80;
var values = [];
var states = [];
var i = 0; //variable for selectionSortByframe
var j = 0; //variable for selectionSortByframe
var min_idx = i;

var isSorting = false;

function setup() {
  var myCanvas = createCanvas(1000, 500);
  myCanvas.parent("animation");
  updateAlgorithm();
  drawValue(values);
  frameRate(60);
}

function draw() {
  background(255);
  stroke(0);
  drawValue(values);
}

function fillValue(values) {
  for (let i = 0; i < width / barWidth; i++) {
    values[i] = floor(random(height));
    states[i] = -1;
  }
}

function drawValue(values) {
  for (let i = 0; i < values.length; i++) {
    if (states[i] == 0) {
      fill(255, 0, 0);
    } else {
      fill(255);
    }
    rect(i * barWidth, height - values[i], barWidth, values[i]);
  }
}

// function drawValue2(values, currentIndex) {
//   for(let i = 0; i < values.length; i++){
//       if (i == currentIndex){
//         fill(200,0,200);
//       }
//       else fill(255);

//       rect(i*10,height-values[i],10,values[i]);
//   }
// }

function startSorting() {
  if (!isSorting) {
    isSorting = true;
    if (currentAlgorithm == "bubblesort") {
      bubbleSort(values);
    } else if (currentAlgorithm == "quicksort") {
      quickSort(values, 0, values.length - 1);
    }
    else if (currentAlgorithm =="mergesort"){
      mergeSort(values,0,values.length-1);
    }
    else if (currentAlgorithm == "selectionsort"){
      selectionSort(values);
    }
  }
}

function pauseSorting() {
  isSorting = false;
}

function resetData() {
  i = 0;
  j = 0;
  isSorting = false;
  fillValue(values);
}

//update algorithm after user selected it from select tag
function updateAlgorithm() {
  resetData();
  currentAlgorithm = document.getElementById("algorithms").value;
  var description = getDescription(currentAlgorithm);
  document.getElementById("description").innerHTML = description;
}

function updateSpeed(){
    var currentSpeed = document.getElementById("speed").value;
    if(currentSpeed == "slow"){
        sleepTime = 80;
    }
    else if (currentSpeed == "normal"){
      sleepTime = 40;
    }
    else sleepTime = 20;
}

function updateInputSize(){
  var inputSize = document.getElementById("inputsize").value;
  barWidth = 1000/parseInt(inputSize);
  resetData();
  if(values.length = width/barWidth);
  
}

//return the string describe the algorithm
function getDescription(algorithm) {
  var description;
  if (algorithm == "bubblesort") {
    description =
      "Algorithm: Bubble Sort. Time Complexity O(n^2). Space Complexity O(1).";
  } else if (algorithm == "selectionsort") {
    description =
      "Algorithm: Selection Sort. Time Complexity O(n^2). Space Complexity O(1).";
  } else if (algorithm == "mergesort"){
    description = "Algorithm: Merge Sort. Time Complexity O(nlogn). Space Complexity O(n)."
  } 
  else {
    description =
      "Algorithm: Quick Sort. Time Complexity O(nlogn). Space Complexity O(1).";
  }

  return description;
}
