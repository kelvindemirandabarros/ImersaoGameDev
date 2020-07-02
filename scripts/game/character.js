/**
 * Classe para animar a personagem. / Class to animate the character.
 * @param {image} img é a imagem do ser. / It is the being image.
 * @param {sound} jumpSound é o som do pulo da personagem. / It is the character jump sound.
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
  constructor ( img, jumpSound, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines=[] ) {
    super( img, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines );
  
    this.jumpSound = jumpSound;

    this.originalY = this.y;

    this.gravity = 5;
    // this.y = this.originalY; // Desnecessário.
    
    this.jumps = 0;
    this.jumpSpeed = 0;
    this.jumpDistance = -50;
    this.fallSpeed = 0;
    this.fallDistance = 0;
    
    // Objeto para identificar as ações que o usuário poderá realizar com a personagem.
    // Não funciona desta forma.
    this.keys = {
      ArrowUp: this.jump.bind(this)
    }

    this.invulnerable = false;
  }

  // Faz a personagem pular.
  jump () {
    // console.log( 'Pulou!' );
    // console.log( 'Personagem2:' );
    // console.log( character );
    // console.log( this );
    if ( this.jumps < 2 ) {
      // this.y -= 50;
      this.jumpSpeed = this.jumpDistance;
      // this.jumpSpeed += - ( this.gravity * 12 );
      // this.fallDistance += this.gravity * 12;
      this.jumpSound.play();
      this.jumps++;
    }
  }

  // Aplica a gravidade.
  applyGravity () {
    this.y += this.jumpSpeed;
    this.jumpSpeed += this.gravity;
    if ( this.y > this.originalY ) {
      this.y = this.originalY;
      this.jumps = 0;
    }

    // // Aplicar novo código para a gravidade:
    // if ( this.jumpSpeed < 0 ) {
    //   // jumpSpeed é negativo!
    //   this.y += this.jumpSpeed;
    //   this.jumpSpeed += this.gravity;
    // } else if ( this.fallDistance > 0 ) {
    //   // fallDistance é positivo!

    //   // Falta terminar:
    //   this.y += this.jumpSpeed;
    //   this.jumpSpeed += this.gravity;
    // }
  }

  makeInvulnerable () {
    this.invulnerable = true;
    setTimeout( () => {
      this.invulnerable = false;
    }, 3000 );
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
