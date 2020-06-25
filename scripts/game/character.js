/**
 * Classe para animar a personagem. / Class to animate the character.
 * @param {*} img é a imagem do ser. / It is the being image.
 * @param {*} x é a posição X do ser na tela. / It is the X position of the being on Canvas.
 * @param {*} y é a posição Y do ser na tela. / It is the Y position of the being on Canvas.
 * @param {*} width é a largura do ser na tela. / It is the width of the being on Canvas.
 * @param {*} height é a altura do ser na tela. / It is the height of the being on Canvas.
 * @param {*} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {*} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {*} spriteWidth é a largura de cada sprite na imagem do ser. / It is the width of each sprite in the image of the being.
 * @param {*} spriteHeight é a altura de cada sprite na imagem do ser. / It is the height of each sprite in the image of the being.
 * @param {*} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. / It is the list with lists of lines that are out of the quantity standard.
 * @_
 * @property {*} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Character extends Animation {
  constructor ( img, jumpSound, x, y, width, height, col, lin, spriteWidth, spriteHeight, difLines=[] ) {
    super( img, x, y, width, height, col, lin, spriteWidth, spriteHeight, difLines );
  
    this.jumpSound = jumpSound;
    this.originalY = y;
    
    this.gravity = 4;
    // this.y = this.originalY; // Desnecessário.
    this.jumpDistance = 0;
    this.fallSpeed = 0;
    this.fallDistance = 0;
    
    // Objeto para identificar as ações que o usuário poderá realizar com a personagem.
    // FUNCIONA NORMALMENTE NO VANILLA JS, MAS NÃO FUNCIONA NO P5.JS
    // this.keys = {
    //   ArrowUp: this.jump,
    // }
  }

  // Faz a personagem pular.
  jump () {
    // this.y -= 50;
    this.jumpDistance = - ( this.gravity * 12 );
    // this.jumpDistance += - ( this.gravity * 12 );
    // this.fallDistance += this.gravity * 12;
    this.jumpSound.play();
  }

  // Aplica a gravidade.
  applyGravity () {
    this.y += this.jumpDistance;
    this.jumpDistance += this.gravity;
    if ( this.y > this.originalY ) this.y = this.originalY;

    // // Aplicar novo código para a gravidade:
    // if ( this.jumpDistance < 0 ) {
    //   // jumpDistance é negativo!
    //   this.y += this.jumpDistance;
    //   this.jumpDistance += this.gravity;
    // } else if ( this.fallDistance > 0 ) {
    //   // fallDistance é positivo!

    //   // Falta terminar:
    //   this.y += this.jumpDistance;
    //   this.jumpDistance += this.gravity;
    // }
  }

  colliding ( enemy ) {
    // Desenha retângulos em volta dos seres para analisar a caixa de colisão:

    // noFill();
    // rect( this.x, this.y, this.width, this.height );
    // rect( enemy.x, enemy.y, enemy.width, enemy.height );

    // Diminui a caixa de colisão para ser visualmente correto com as imagens.
    const precision = .7;
    // Verifica colisão da personagem com o dropet.
    return collideRectRect(
      this.x,
      this.y,
      this.width * precision,
      this.height * precision,
      enemy.x,
      enemy.y,
      enemy.width * precision,
      enemy.height * precision
    );
  }
}
