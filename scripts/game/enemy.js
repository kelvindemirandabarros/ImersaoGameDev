/**
 * Classe para criar os inimigos. / Class to create the enemies.
 */
/**
 * Classe para criar os inimigos. / Class to create the enemies.
 * @param {*} img é a imagem do inimigo. / It is the enemy image.
 * @param {*} x é a posição X do inimigo na tela. / It is the X position of the enemy on Canvas.
 * @param {*} y é a posição Y do inimigo na tela. / It is the Y position of the enemy on Canvas.
 * @param {*} width é a largura do inimigo na tela. / It is the width of the enemy on Canvas.
 * @param {*} height é a altura do inimigo na tela. / It is the height of the enemy on Canvas.
 * @param {*} col é o número de colunas de sprites na imagem. / It is the number of sprite columns in the image.
 * @param {*} lin é o número de linhas de sprites na imagem. / It is the number of sprite lines in the image.
 * @param {*} spriteWidth é a largura de cada sprite na imagem do inimigo. / It is the width of each sprite in the image of the enemy.
 * @param {*} spriteHeight é a altura de cada sprite na imagem do inimigo. / It is the height of each sprite in the image of the enemy.
 * @param {*} speed é a velocidade do inimigo na tela. / It is the enemy speed on screen.
 * @param {*} difLines é a lista com listas das linhas que estão fora do padrão de quantidade. Padrão é vazio. / It is the list with lists of lines that are out of the quantity standard. Default is empty.
 * @_
 * @property {*} currentFrame é o índice para escolher um sprite do spritesArray. / It is the index to choose a sprite from spritesArray.
 */
class Enemy extends Animation {
    constructor ( img, x, y, width, height, col, lin, spriteWidth, spriteHeight, speed, difLines=[] ) {
        super( img, x, y, width, height, col, lin, spriteWidth, spriteHeight, difLines )

        this.speed = speed;
    }

    moves () {
        this.x -= this.speed;

        if ( this.x < - this.width ) this.x = width;
    }
}
