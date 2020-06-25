/**
 * Classe para animar os seres. / Class to animate the beings.
 * @param {*} img é a imagem do ser. / It is the being image.
 * @param {*} x é a posição X do ser na tela. / It is the X position of the being on Canvas.
 * @param {*} y é a posição Y do ser na tela. / It is the Y position of the being on Canvas.
 * @param {*} width é a largura do ser na tela. / It is the width of the being on Canvas.
 * @param {*} height é a altura do ser na tela. / It is the height of the being on Canvas.
 * @param {*} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {*} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {*} spriteWidth é a largura de cada sprite na imagem do ser. / It is the width of each sprite in the image of the being.
 * @param {*} spriteHeight é a altura de cada sprite na imagem do ser. / It is the height of each sprite in the image of the being.
 * @param {*} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. Padrão é vazio. / It is the list with lists of lines that are out of the quantity standard. Default is empty.
 * @_
 * @property {*} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Animation {
    constructor ( img, x, y, width, height, col, lin, spriteWidth, spriteHeight, difLines=[] ) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.spriteWidth = spriteWidth;
        this.spriteHeight = spriteHeight;

        this.spritesArray = ( () => {
            let spritesArray = [];
            let units;
            for (let y = 0; y < lin; y++) { // Linhas
                if ( difLines.length !== 0 ) {
                    let found = difLines.findIndex( line => line[0] === y );
                    // Significa que a linha não tem a quantidade padrão de sprites.
                    if ( found !== -1 ) {
                        units = difLines[ found ][1]; 
                    } else {
                        units = col;
                    }
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
