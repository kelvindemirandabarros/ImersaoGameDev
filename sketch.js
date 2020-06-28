function setup() {
  // Cria um Canvas com largura X, e altura Y.
  createCanvas( windowWidth, windowHeight );

  // // Faz com que a música toque uma única vez:
  // // music01.play();
  // // Faz com que a música comece a tocar e repita assim que acabar.
  // music01.loop();

  // Define a quantidade de frames por segundo (padrão é ??):
  frameRate( 30 );

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
