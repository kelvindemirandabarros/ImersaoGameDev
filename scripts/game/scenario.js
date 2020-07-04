/**
  * Classe para criar um cenário móvel. / Class to create a scenario.
  * @param {image} img é a imagem do cenário. / It is the scenario image.
  * @param {number} speed é a velocidade com que o cenário se mexe. / It is the speed in which the scenario moves.
  * @param {number} posX1 é a posição do eixo X da imagem 1 no Canvas.
  * @param {number} posX2 é a posição do eixo X da imagem 2 no Canvas.
  */
class Scenario {
  constructor ( img, speed, posX1=0, posX2=canvasWidth ) {
    this.img = img;
    this.speed = speed;
    this.x1 = posX1;
    this.x2 = posX2;
  }
  
  show () {
    image( this.img, this.x1, 0, canvasWidth, canvasHeight );
    image( this.img, this.x2, 0, canvasWidth, canvasHeight );
  }
  
  moves () {
    this.x1 -= this.speed;
    this.x2 -= this.speed;
    
    if ( this.x1 < - canvasWidth ) {
      this.x1 = canvasWidth;
    }
    if ( this.x2 < - canvasWidth ) {
      this.x2 = canvasWidth;
    }
  }
}
