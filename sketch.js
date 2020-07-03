function setup() {
  createCanvas( canvasWidth, canvasHeight ); // canvasWidth, windowHeight );
  frameRate( 30 );
  music01.loop();

  initialScenario = new InitialScenario( initialScenarioImg, 0, 0, canvasWidth, canvasHeight, initialScenarioFont );
  initialScenario.createInitialScenarioButton();
  
  game = new Game();
  game.setup();

  scenarios = {
    initialScenario,
    game,
  }
}


function keyPressed () {
  game.keyPressed( key );
}


function draw() {
  scenarios[ currentScenario ].draw();
}
