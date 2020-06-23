/**
  * Classe para criar personagens a partir de uma imagem com sprites com o mesmo padrão de tamanho e, alinhamento de linhas e colunas.
  * @param {*} img é a imagem que conterá todos os sprites da personagem.
  * @param {*} larg é a largura da personagem na janela em específico.
  * @param {*} alt é a altura da personagem na janela em específico.
  * @param {*} lin é a quantidade de linhas do sprite.
  * @param {*} col é a quantidade de colunas do sprite.
  * @_ IMPLEMENTAR:
  * @param {*} axa é para informar com true ou false se a imagem tem a mesma quantidade de sprites em linhas e colunas no formato AxA.
  * @param {*} linInc é uma lista com listas das linhas que não estão no padrão de quantidade e suas respectivas quantidades de sprites. Ex.: se uma imagem com o padrão de 4x4 possui a última linha com apenas 3 sprites, adiciona-se como parâmetro -> [ [4, 3] ] (linha 4, com apenas 3 sprites).
  */
class Personagem {
  constructor ( img, larg, alt, lin, col, axa=true, linInc=[] ) {
    this.img = img;
    this.largSprite = 220;
    this.altSprite = 270;
    this.matriz = ( () => {
      let matriz = [];
      for (let y = 0; y < lin; y++) { // Linhas
        for (let x = 0; x < col; x++) { // Colunas
          matriz.push( [x*this.largSprite, y*this.altSprite] );
        }
      }
      return matriz;
      // [
      //   [0,   0], [220,   0], [440,   0], [660,   0],
      //   [0, 270], [220, 270], [440, 270], [660, 270],
      //   [0, 540], [220, 540], [440, 540], [660, 540],
      //   [0, 810], [220, 810], [440, 810], [660, 810]
      // ];
    })();
    this.frameAtual = 0;
    this.larg = larg;
    this.alt = alt;

  }
  
  
  // Exibe a imagem da personagem:
  exibe () {
    // Carrega uma imagem. Parâmetros: 
    // 1. Imagem,
    // 2. posicionar imagem no Canvas no eixo X,
    // 3. e no eixo Y,
    // 4. a imagem com largura X,
    // 5. e altura Y,
    // Para sprites:
    // 6. pegar a parte da imagem que começa na largura X,
    // 7. e altura de Y,
    // 8. do sprit a largura X,
    // 9. e a altura Y.
    image( this.img,
          width / 5,
          height - this.alt,
          this.larg,
          this.alt,
          this.matriz[this.frameAtual][0],
          this.matriz[this.frameAtual][1],
          this.largSprite,
          this.altSprite );
    
    this.anima();
  }
  
  anima () {
    this.frameAtual++;
    
    if ( this.frameAtual >= this.matriz.length ) {
      this.frameAtual = 0;
    }
  }
}