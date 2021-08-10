var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

var values = []
var i = 0;  //variable for bubble sort 
var j = 0;  //variable for bubble sort
var isSorting = false;

function setup() {
    var myCanvas = createCanvas(1000,500);
    myCanvas.parent("animation")
    fillValue(values);
    drawValue(values,j);
  }
  
  function draw() {
    background(255);
    bubbleSortByFrame(values);
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

  // function bubbleSortByFrame(values){
  //   if( i < values.length && isSorting){
  //     if(values[j] > values[j+1]){
  //       swap(values,j,j+1);
  //     }
  //     j++;
  //     if ( j >= values.length-i-1){
  //       j = 0;
  //       i ++;
  //     }
  //   }
  // }

  // function swap(arr,a,b){
  //   let temp = arr[a];
  //   arr[a] = arr[b];
  //   arr[b] = temp;
  // }

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
