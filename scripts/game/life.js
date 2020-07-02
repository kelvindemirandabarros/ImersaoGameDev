/**
 * Classe para contabilizar as vidas de um ser. / Class to count the lifes of a being.
 * @param {image} lifeImg
 * @param {number} maxLives
 * @param {number} initLives
 * @param {number} width
 * @param {number} height
 */
class Life {
    constructor ( lifeImg, maxLives, initLives, width, height  ) {
        this.lifeImg = lifeImg;
        this.maxLives = maxLives;
        this.initLives = initLives; // 
        this.nLives = initLives; // Número de vidas que podem mudar durante o jogo.
        this.width = width;
        this.height = height;
        this.initialX = 20;
        this.y = 20; // Alterar para ser dinâmico(?)
    }

    draw () {
        for ( let nLives = 0; nLives < this.nLives; nLives++ ) {
            const margin = nLives * 10 + 10;
            const position = this.initialX * ( nLives + 1 );

            image( this.lifeImg, position + margin, this.y, this.width, this.height );
        }
    }

    earnLife () {
        if ( this.nLives < this.maxLives ) this.nLives++;
    }

    losesLife () {
        this.nLives--;
    }
}
