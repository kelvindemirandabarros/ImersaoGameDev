/**
 * Classe para animar a personagem. / Class to animate the character.
 * @param {image} img é a imagem do ser. / It is the being image.
 * @param {sound} jumpSound é o som do pulo da personagem. / It is the character jump sound.
 * @param {sound} hurtSound
 * @param {number} x é a posição X do ser na tela. / It is the X position of the being on Canvas.
 * @param {number} yVariation é a variação da posição Y do ser, que pode ser o chão ou o voo. / It is the variation of the Y position of the being, which can be the ground or the flight.
 * @param {number} y é a posição Y do ser na tela. / It is the Y position of the being on Canvas.
 * @param {number} width é a largura do ser na tela. / It is the width of the being on Canvas.
 * @param {number} height é a altura do ser na tela. / It is the height of the being on Canvas.
 * @param {number} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {number} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {number} spriteWidth é a largura de cada sprite na imagem do ser. / It is the width of each sprite in the image of the being.
 * @param {number} spriteHeight é a altura de cada sprite na imagem do ser. / It is the height of each sprite in the image of the being.
 * @param {array} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. / It is the list with lists of lines that are out of the quantity standard.
 * @_
 * @property {number} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Character extends Animation {
  constructor ( img, jumpSound, hurtSound, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines=[] ) {
    super( img, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines );
  
    this.jumpSound = jumpSound;
    this.hurtSound = hurtSound;

    this.originalX = this.x;
    this.originalY = this.y;
    this.originalWidth = this.width;
    this.originalHeight = this.height;

    this.gravity = 5;
    
    this.jumps = 0;
    this.jumpSpeed = 0;
    this.jumpDistance = -50;
    // this.fallSpeed = 0;
    // this.fallDistance = 0;
    
    this.keys = {
      ArrowUp: this.jump.bind(this)
    }

    this.invulnerable = false;
  }

  jump () {
    if ( this.jumps < 2 ) {
      this.jumpSpeed = this.jumpDistance;
      this.jumpSound.play();
      this.jumps++;
    }
  }

  hurt () {
    this.hurtSound.play();
  }

  applyGravity () {
    if ( this.jumpSpeed < 0 ) {
      this.y += this.jumpSpeed;
      this.jumpSpeed += this.gravity;

    } else if ( this.y < this.originalY ) {
      this.y += this.jumpSpeed;
      this.jumpSpeed += this.gravity;

    } else {
      this.jumpSpeed = 0;
    }
    
    if ( this.y > this.originalY ) {
      this.y = this.originalY;
      this.jumps = 0;

    } else if ( this.y === this.originalY ) {
      this.jumps = 0;
    }
  }

  makeInvulnerable () {
    this.invulnerable = true;
    setTimeout( () => {
      this.invulnerable = false;
    }, 1750 );
  }

  colliding ( enemy ) {
    if ( this.invulnerable ) return false;
    
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
