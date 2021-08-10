var width = window.innerWidth;
var height = window.innerHeight;

var values = []
var i = 0;
var j = 0;

function setup() {
    createCanvas(800,500);
    fillValue(values);
  }
  
  function draw() {
    background(255);
    bubbleSortByFrame(values);
    stroke(0);
    drawValue(values,j);
  }

  function fillValue(values){
      for (let i = 0; i < 60; i++){
          values[i] = floor(random(height));
      }
  }

  function drawValue(values, currentIndex){
    for(let i = 0; i < values.length; i++){
        if (i == currentIndex){
          fill(200,0,200);
        }
        else fill(255);

        rect(i*10+100,height-values[i],10,values[i]);
        //line(i, height, i, height-values[i]);
    }
  }

  function bubbleSortByFrame(values){
    if( i < values.length){
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

  function swap(arr,a,b){
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
  }
