/**
  * Classe para criar um cenário móvel. / Class to create a scenario.
  * @param {image} img é a imagem do cenário. / It is the scenario image.
  * @param {number} speed é a velocidade com que o cenário se mexe. / It is the speed in which the scenario moves.
  * @param {number} posX1 é a posição do eixo X da imagem 1 no Canvas.
  * @param {number} posX2 é a posição do eixo X da imagem 2 no Canvas.
  */
class Scenario {
  constructor ( img, speed, /*posX1, posX2*/ ) {
    this.img = img;
    this.speed = speed;
    this.x1 = 0; //posX1;
    this.x2 = width; //posX2;
  }
  
  // Mostra o cenário na tela. 
  show () {
    // Carrega uma imagem. Parâmetros: / Loads a image. Parameters:
    // 1. Imagem / Image
    // 2. Posição X no Canvas / Position X on Canvas
    // 3. Posição Y no Canvas / Position Y on Canvas
    // 4. Tamanho da largura da imagem / Image width size
    // 5. Tamanho da altura da imagem / Image width size
    image( this.img, this.x1, 0, width, height );
    image( this.img, this.x2, 0, width, height );
  }
  
  // Faz o cenário se movimentar. / Moves the scenario.
  moves () {
    this.x1 -= this.speed;
    this.x2 -= this.speed;
    
    if ( this.x1 < - width ) {
      this.x1 = width;
    }
    if ( this.x2 < - width ) {
      this.x2 = width;
    }
  }
}
