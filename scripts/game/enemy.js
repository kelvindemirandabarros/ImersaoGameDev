/**
 * Classe para criar os inimigos. / Class to create the enemies.
 */
/**
 * Classe para criar os inimigos. / Class to create the enemies.
 * @param {image} img é a imagem do inimigo. / It is the enemy image.
 * @param {number} x é a posição X do inimigo na tela. / It is the X position of the enemy on Canvas.
 * @param {number} yVariation é a variação da posição Y do ser, que pode ser o chão ou o voo. / It is the variation of the Y position of the being, which can be the ground or the flight.
 * @param {number} y é a posição Y do inimigo na tela. / It is the Y position of the enemy on Canvas.
 * @param {number} width é a largura do inimigo na tela. / It is the width of the enemy on Canvas.
 * @param {number} height é a altura do inimigo na tela. / It is the height of the enemy on Canvas.
 * @param {number} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {number} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {number} spriteWidth é a largura de cada sprite na imagem do inimigo. / It is the width of each sprite in the image of the enemy.
 * @param {number} spriteHeight é a altura de cada sprite na imagem do inimigo. / It is the height of each sprite in the image of the enemy.
 * @param {number} speed é a velocidade do inimigo na tela. / It is the enemy speed on screen.
 * @param {array} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. Padrão é vazio. / It is the list with lists of lines that are out of the quantity standard. Default is empty.
 * @_
 * @property {number} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Enemy extends Animation {
    constructor ( img, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, speed, difLines=[] ) {
        super( img, x, yVariation, y, width, height, col, lin, spriteWidth, spriteHeight, difLines );

        this.speed = speed;
        this.x = x;
    }

    // Faz o inimigo se mover na tela.
    moves () {
        this.x -= this.speed;
    }

    // Faz o inimigo retornar para o ponto inicial após passar completamente da tela.
    goesToStartPoint () {
        this.x = canvasWidth;
    }
}
