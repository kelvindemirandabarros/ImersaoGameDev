let imgCenario;
// Receberá uma nova instância de classe.
let cenario; 

// Receberá uma nova instância de classe.
let personagem;
// Receberá a imagem com os sprites da personagem.
let imgPersonagem;
// Altura da Personagem.
let altPers;
// Largura da Personagem.
let largPers;

// Será o menor valor entre a largura e a altura do Canvas.
let menorPixels;
// Será o multiplicador proporcional de largura e altura.
let multPixels;
// Guardará o valor de 20% do menor entre a largura e a altura do Canvas.
let porcentagemTamanho;

let musica;

function preload() {
  // Carrega uma imagem.
  imgCenario = loadImage( 'imagens/cenario/floresta.png' );
  imgPersonagem = loadImage( 'imagens/personagem/correndo.png' );
  
  // A personagem terá um tamanho proporcional ao menor tamanho entre a largura e a altura.
  menor = ( windowWidth <= windowHeight ) ? windowWidth : windowHeight;
  if ( windowWidth <= windowHeight ) {
    porcentagemTamanho = parseInt( windowWidth / 10 ) * 2.5; // 25%
    multPixels = porcentagemTamanho / 220;
  } else {
    porcentagemTamanho = parseInt( windowWidth / 10 ) * 2.5; // 25%
    multPixels = porcentagemTamanho / 270;
  }
  largPers = 220 * multPixels;
  altPers = 270 * multPixels;
  
  musica = loadSound( 'sons/trilha_jogo.mp3' );
}

function setup() {
  // Cria um Canvas com largura X, e altura Y.
  createCanvas( windowWidth, windowHeight );
  
  // Cria uma nova instância do cenário.
  cenario = new Cenario( imgCenario, 2 );
  
  personagem = new Personagem( imgPersonagem, largPers, altPers, 4, 4 );
  
  
  
  
  
  // Define a quantidade de frames por segundo (padrão é ??):
  frameRate( 30 );

  // Faz com que a música toque uma única vez:
  // musica.play();
  // Faz com que a música comece a tocar e repita assim que acabar.
  musica.loop();
}

function draw() {
  // Define um background. Parâmetros:
  // 1. Imagem,
  // 2. posiciona no Canvas no eixo X,
  // 3. e no eixo Y,
  // 4. com largura máxima X,
  // 5. e altura máxima Y.
  // background( imgCenario );
  
  
  // Exibe o cenário:
  cenario.exibe();
  // Movimenta o cenário:
  cenario.move();
  
  // Exibe o personagem:
  personagem.exibe();
}
