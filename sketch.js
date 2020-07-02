function setup() {
  createCanvas( 1000, 1000 ); // windowWidth, windowHeight );
  frameRate( 30 );
  music01.loop();

  initialScenarioButton = new Button( 'Iniciar', width/2, height/2, 'botao-tela-inicial' );
  initialScenario = new InitialScenario( initialScenarioImg, 0, 0, windowWidth, windowHeight, 
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
