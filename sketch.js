// Instância da classe Scenario, e suas dependências.
// Scenario class instance, and its dependencies.
let scenario;
let scenarioImg;

// Instância da classe Character, e suas dependências.
// Character class instance, and its dependencies. 
let character;
let characterImg;
let charHeight;
let charWidth;

// Conterá o valor do menor entre a largura e a altura do Canvas.
// It will contain the value of the smallest between the width and the height of the Canvas.
let smallestAxis;
// Porcentagem do tamanho da personagem em relação ao menor entre a largura e a altura do Canvas.
// 
let charPercentage;
// Guardará o valor proporcional da personagem em relação ao menor entre a largura e a altura do Canvas.
// 
let charSize;
// Conterá o multiplicador proporcional de largura e altura.
// It will contain the proportional multiplier of width and height.
let multPixels;

// // Instâncias da classe Enemy, e suas dependências.
// // Enemy class instances, and its dependencies.
// let dropet;
// let dropetImg;



let music;

function preload() {
  // Carrega uma imagem.
  scenarioImg = loadImage( 'imgs/scenario/forest.png' );

  characterImg = loadImage( 'imgs/character/running.png' );

  dropetImg = loadImage( 'imgs/enemies/dropet.png' );
  // //flyingDropetImg = loadImage( 'imgs/enemies/dropet.png' );
  // //trollImg = loadImage( 'imgs/enemies/troll.png' );

  // music = loadSound( 'sounds/game_track.mp3' );
  jumpSound = loadSound( 'sounds/jump.mp3' );
}

function setup() {
  // Cria um Canvas com largura X, e altura Y.
  createCanvas( windowWidth, windowHeight );

  // Cria o cenário.
  scenario = new Scenario( scenarioImg, 2/*, 0, height*/ );

  // A personagem terá um tamanho proporcional ao menor tamanho entre a largura e a altura.

  charPercentage = 25; // 25%

  //                APAGAR:
  // if ( windowWidth <= windowHeight ) {
  //   smallestAxis = windowWidth;
  //   charSize = parseInt( windowWidth / 100 ) * charPercentage;
  //   multPixels = charSize / 220;
  // } else {
  //   smallestAxis = windowHeight;
  //   charSize = parseInt( windowWidth / 100 ) * charPercentage;
  //   multPixels = charSize / 270;
  // }

  
  smallestAxix = ( windowWidth <= windowHeight ) ? windowWidth : windowHeight;
  charSize = parseInt( windowWidth / 100 ) * charPercentage;
  multPixels = charSize / ( ( windowWidth <= windowHeight ) ? 220 : 270 );

  charWidth = 220 * multPixels;
  charHeight = 270 * multPixels;
  
  character = new Character( characterImg, jumpSound, windowWidth / 5, windowHeight - charHeight, charWidth, charHeight, 4, 4, 220, 270 );

  dropet = new Enemy( dropetImg, width - 52.5, height - 50, 52.5, 50, 4, 7, 105, 100, 5 );
  
  // // Faz com que a música toque uma única vez:
  // // music.play();
  // // Faz com que a música comece a tocar e repita assim que acabar.
  // music.loop();

  // Define a quantidade de frames por segundo (padrão é ??):
  frameRate( 30 );
}

function keyPressed () {
  // console.log( `Tecla ${ key } pressionada!` );
  // let func = character.keys[ key ];
  // if ( character.keys[ key ] !== undefined ) {
  //   console.log( 'Character.keys :' );
  //   console.log( character.keys[ key ] );
  //   func();
  //   console.log( character.jumpSpeed );
  // }
  if ( key === 'ArrowUp' ) character.jump();
}

function draw() {
  // Define um background. Parâmetros:
  // 1. Imagem,
  // 2. posiciona no Canvas no eixo X,
  // 3. e no eixo Y,
  // 4. com largura máxima X,
  // 5. e altura máxima Y.
  // background( scenarioImg );
  
  // Exibe o cenário:
  scenario.exibe();
  // Movimenta o cenário:
  scenario.moves();
  
  // Exibe o personagem:
  character.exibe();
  // Aplica gravidade na personagem.
  character.applyGravity();

  // Exibe a gotinha. / Shows the dropet.
  dropet.exibe();
  dropet.moves();

  if ( character.colliding( dropet ) ) {
    console.log( 'Colidiu!' );
    // Interrompe o loop do draw(). / Stops the draw() loop.
    // noLoop();
  }
}
