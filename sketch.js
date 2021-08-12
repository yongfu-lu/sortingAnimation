var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var currentAlgorithm = "bubblesort";
var values = []
var i = 0;  //variable for bubble sort 
var j = 0;  //variable for bubble sort
var min_idx = i;

var isSorting = false;

function setup() {
    var myCanvas = createCanvas(1000,500);
    myCanvas.parent("animation")
    updateAlgorithm();
    drawValue(values,j);
    //frameRate(30);
  }
  
  function draw() {
    background(255);
    sorting();
    stroke(0);
    drawValue(values,j);
  }


  function fillValue(values){
      for (let i = 0; i < width/10; i++){
          values[i] = floor(random(height));
      }
  }

  function drawValue(values, currentIndex){
    for(let i = 0; i < values.length; i++){
        if (i == currentIndex){
          fill(200,0,200);
        }
        else fill(255);

        rect(i*10,height-values[i],10,values[i]);
    }
  }

  function startSorting(){
      isSorting = true;
  }

  function pauseSorting(){
    isSorting = false;
  }

  function resetData(){
    i=0;
    j=0;
    isSorting=false;
    fillValue(values);
  }

  function updateAlgorithm(){
    resetData();
    currentAlgorithm = document.getElementById("algorithms").value;
    var description = getDescription(currentAlgorithm);
    document.getElementById("description").innerHTML = description;
    
  }

  // call sorting function based on the current algorithm users choce.
  function sorting(){
      if(currentAlgorithm == "bubblesort"){
        bubbleSortByFrame(values);
      }
      else{
        selectionSort(values);
      }
  }

  function getDescription(algorithm){
      var description;
      if(algorithm == "bubblesort"){
        description = "Algorithm: Bubble Sort. Time Complexity O(n^2). Space Complexity O(1)."
      }
      else{
        description = "Algorithm: Selection Sort. Time Complexity O(n^2). Space Complexity O(1)."
      }

      return description;
  }