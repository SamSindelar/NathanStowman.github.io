//ASCENT TO THE HEAVENS!



// STAGE
  var stage;

// STUFFS


 

  function load() { init(); }

  function init() {
      //stage set up
      stage = new createjs.Stage("canvas");
      stage.update();

      //creating background
      var img = new Image();
      img.onload = ImageLoad(img);
      img.src = 'image/background.png';
      

      //create the ticker
      createjs.Ticker.setFPS(25);
      createjs.Ticker.addEventListener('tick', tick);

      //music

  }

//stage generation and important music intensive things





//this needs to line up with the music
  function tick(e) {
      stage.update();
  }
  function ImageLoad(pic) {
      var toBeAdded = new createjs.Bitmap(pic);
      stage.addChild(toBeAdded);

  }

//character methods and funcitons



//random generation of platforms methods

//
