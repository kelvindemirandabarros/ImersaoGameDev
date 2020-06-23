/**
  * Classe para criar um cenário móvel.
  */
class Cenario {
  constructor (img, vel) {
    this.img = img;
    this.vel = vel;
    this.x1 = 0;
    this.x2 = width;
  }
  
  exibe () {
    // Carrega uma imagem. Parâmetros: 
    // 1. Imagem,
    // 2. posicionar no Canvas no eixo X,
    // 3. e no eixo Y,
    // 4. a imagem com tamanho X
    image( this.img, this.x1, 0, width, height );
    image( this.img, this.x2 + 5, 0, width, height );
  }
  
  move () {
    this.x1 -= this.vel;
    this.x2 -= this.vel;
    
    if ( this.x1 < - width ) {
      this.x1 = width;
    }
    if ( this.x2 < - width ) {
      this.x2 = width;
    }
  }
}
