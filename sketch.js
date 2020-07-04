function setup() {
  createCanvas( canvasWidth, canvasHeight ); // canvasWidth, windowHeight );
  frameRate( 30 );
  // music01.loop();

  initialScenario = new InitialScenario( initialScenarioImg, 0, 0, canvasWidth, canvasHeight, gameTextFont );
  initialScenario.createInitialScenarioButton();
  
  game = new Game();
  game.setup();

  finalScenario = new FinalScenario ( scenarioImg, finalScenarioImg, canvasWidth, canvasHeight, gameTextFont );

  scenarios = {
    initialScenario,
    game,
    finalScenario,
  }
}


function keyPressed () {
  game.keyPressed( key );
}


function draw() {
  scenarios[ currentScenario ].draw();
}
