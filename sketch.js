// Instância da classe Scenario, e suas dependências.
// Scenario class instance, and its dependencies.
let scenario;
let scenarioImg;

// Tamanho do chão no cenário.
let floorSize;

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

const enemies = [];
// Inimigos e suas imagens: / Enemies and their images:
let dropet;
let dropetImg;

let fryingDropet;
let flyingDropetImg;

let troll;
let trollImg;


let score;

let gameOverImg;

function preload() {
  // Carrega uma imagem.
  scenarioImg = loadImage( 'imgs/scenario/forest.png' );

  characterImg = loadImage( 'imgs/character/running.png' );

  dropetImg = loadImage( 'imgs/enemies/dropet.png' );
  flyingDropetImg = loadImage( 'imgs/enemies/flying-dropet.png' );
  trollImg = loadImage( 'imgs/enemies/troll.png' );

  // const music01 = loadSound( 'sounds/music01.mp3' );
  jumpSound = loadSound( 'sounds/jump.mp3' );

  gameOverImg = loadImage( 'imgs/assets/game-over.png' );
}

function setup() {
  // Cria um Canvas com largura X, e altura Y.
  createCanvas( windowWidth, windowHeight );

  // Cria o cenário.
  scenario = new Scenario( scenarioImg, 2/*, 0, height*/ );

  score = new Score();

  floorSize = 30;

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
  
  character = new Character( characterImg, jumpSound, windowWidth / 5, floorSize, windowHeight - charHeight, charWidth, charHeight, 4, 4, 220, 270 );

  // Inimigos: / Enemies:
  dropet = new Enemy( dropetImg, width - 52.5, floorSize, height - 50, 52.5, 50, 4, 7, 105, 100, 5, 100 );

  flyingDropet = new Enemy( flyingDropetImg, width, height - (height * 0.6), height - 50, 100, 75, 3, 6, 200, 150, 5, 100, [[6,1]] );

  troll = new Enemy( trollImg, width, 0, height - 200, 200, 200, 5, 6, 400, 400, 5, 0, [[6,3]] );

  enemies.push( dropet );
  enemies.push( flyingDropet );
  enemies.push( troll );
  
  // // Faz com que a música toque uma única vez:
  // // music01.play();
  // // Faz com que a música comece a tocar e repita assim que acabar.
  // music01.loop();

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
  scenario.show();
  // Movimenta o cenário:
  scenario.moves();

  score.show();

  // Desenha retângulos em volta dos seres para analisar a caixa de colisão:
  // noFill();
  // rect( character.x, character.y, character.width, character.height );
  // rect( dropet.x, dropet.y, dropet.width, dropet.height );
  // rect( flyingDropet.x, flyingDropet.y, flyingDropet.width, flyingDropet.height );
  // rect( troll.x, troll.y, troll.width, troll.height );
  
  // Exibe o personagem:
  character.show();
  // Aplica gravidade na personagem.
  character.applyGravity();

  // Exibe os inimigos e os move. / Shows the enemies and moves them.
  // dropet.show();
  // dropet.moves();
  // flyingDropet.show();
  // flyingDropet.moves();
  // troll.show();
  // troll.moves();
  // if ( character.colliding( dropet ) ) {
  //   // console.log( 'Colidiu!' );
  //   // Interrompe o loop do draw(). / Stops the draw() loop.
  //   // noLoop();
  // }
  enemies.forEach( enemy => {
    enemy.show();
    enemy.moves();
    if ( character.colliding( enemy ) ) {
      // console.log( 'Colidiu!' );
      // Interrompe o loop do draw(). / Stops the draw() loop.
      // noLoop();
      image( gameOverImg, (width / 2) - 200, height / 3 );
    }
  });

  score.addPoints();
}
