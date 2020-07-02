function setup() {
  createCanvas( canvasWidth, canvasHeight ); // windowWidth, windowHeight );
  frameRate( 30 );
  music01.loop();

  initialScenarioButton = new Button(
    'Iniciar',
    ( canvasWidth / 2 ) - 80,
    ( canvasHeight / 4 ) * 3 - 35,
    'botao-tela-inicial'
  );
  initialScenario = new InitialScenario( initialScenarioImg, 0, 0, canvasWidth, canvasHeight, 
      initialScenarioButton );
  
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
