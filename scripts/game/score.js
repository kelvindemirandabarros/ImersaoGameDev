/**
 * Classe para contabilizar pontuações no jogo.
 * @property {number} points é a pontuação do jogo.
 */
class Score {
    constructor () {
        this.points = 0;
    }

    show () {
        // Alinha o texto para o lado.
        textAlign( RIGHT );
        // Define a cor para o texto.
        fill( '#fff' );
        // Define o tamanho do texto.
        textSize( 50 );
        // Mostra um texto na tela.
        // 1. O texto que será mostrado.
        // 2. A posição X na tela.
        // 3. A posição Y na tela.
        text( parseInt( this.points ), width - 30, 50 );
    }

    addPoints () {
        this.points += 0.2;
    }
}
