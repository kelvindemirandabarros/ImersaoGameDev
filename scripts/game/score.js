/**
 * Classe para contabilizar pontuações no jogo.
 * @property {number} points é a pontuação do jogo.
 */
class Score {
    constructor () {
        this.points = 0;
    }

    addPoints () {
        this.points += 0.2;
    }

    show () {
        textAlign( RIGHT );
        fill( '#fff' );
        textSize( 50 );
        text( parseInt( this.points ), canvasWidth - 30, 50 );
    }
}
