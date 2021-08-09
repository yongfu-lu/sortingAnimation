let width = window.innerWidth;
let height = window.innerHeight;

let nums = []

function setup() {
    createCanvas(width,height);
    fillValue(nums);
  }
  
  function draw() {
    background(255);
    drawValue(nums);
  }

  function fillValue(nums){
      for (let i = 0; i < width; i++){
          nums[i] = floor(random(height));
      }
  }

  function drawValue(nums){
    for(let w = 0; w <nums.length; w++){
        line(w,height-nums[w],w,height)
    }
  }
