/**
 * Classe para animar os seres. / Class to animate the beings.
 * @param {image} img é a imagem do ser. / It is the being image.
 * @param {number} x é a posição X do ser na tela. / It is the X position of the being on Canvas.
 * @param {number} yVariation é a variação da posição Y do ser, que pode ser o chão ou o voo. / It is the variation of the Y position of the being, which can be the ground or the flight.
 * @param {number} y é a posição Y do ser na tela. / It is the Y position of the being on Canvas.
 * @param {number} width é a largura do ser na tela. / It is the width of the being on Canvas.
 * @param {number} height é a altura do ser na tela. / It is the height of the being on Canvas.
 * @param {number} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {number} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {number} spriteWidth é a largura de cada sprite na imagem do ser. / It is the width of each sprite in the image of the being.
 * @param {number} spriteHeight é a altura de cada sprite na imagem do ser. / It is the height of each sprite in the image of the being.
 * @param {array} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. Dentro do array principal, coloca-se um array o número da linha e a quant. de sprites na linha.  Por exemplo, uma imagem com 3x3 sprites, mas a última linha tem apenas um sprite, coloca-se [[3,1]]. Para uma imagem com 3x3 mas a segunda linha tem 2 sprites e a terceira também 2, coloca-se [[2,2], [3,2]]. Padrão é vazio.
 * // It is the list with lists of lines that are out of the quantity standard. Default is empty.
 * @_
 * @property {number} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Animation {
    constructor ( img, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines=[] ) {
        this.img = img;
        this.floor = floor;
        this.x = x;
        this.yVariation = yVariation;
        this.y = y - yVariation;
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;

        // Faz o array dos sprites com base nas largura e altura padrões de cada sprite.
        this.spritesArray = ( () => {
            let spritesArray = [];
            let units;
            let found;
            for (let y = 0; y < lin; y++) { // Linhas
                if ( difLines.length !== 0 ) {
                    found = difLines.findIndex( line => line[0] === y + 1 );
                    // Significa que a linha não tem a quantidade padrão de sprites.
                    // if ( found !== -1 ) {
                    //     units = difLines[ found ][1]; 
                    // } else {
                    //     units = col;
                    // }
                    units = ( found !== -1 ) ? difLines[ found ][1] : col; 
                } else {
                    units = col;
                }
                
                for ( let x = 0; x < units; x++ ) { // Colunas
                    spritesArray.push( [ x * spriteWidth, y * spriteHeight ] );
                }
            }
            return spritesArray;
        })();

        this.currentFrame = 0;
    }

    // Exibe a imagem da personagem:
    show () {
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
                this.x,
                this.y,
                this.width,
                this.height,
                this.spritesArray[ this.currentFrame ][0],
                this.spritesArray[ this.currentFrame ][1],
                this.spriteWidth,
                this.spriteHeight );

        this.animate();
    }

    // Altera o sprite escolhido. / Changes the chosen sprite.
    animate () {
        this.currentFrame++;
        
        if ( this.currentFrame >= this.spritesArray.length ) {
          this.currentFrame = 0;
        }
    }
}
