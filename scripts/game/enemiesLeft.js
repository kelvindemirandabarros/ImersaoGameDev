/**
 * Classe para criar o contador de inimigos restantes.
 */
class EnemiesLeft {
    constructor () {
        this.number = 20;
        this.text = 'Faltam 20 inimigos';
    }

    decreasesEnemiesLeft () {
        this.number -= 1;
    }

    updatesText () {
        this.text = `Faltam ${ this.number } inimigos`;
    }

    draws () {
        textAlign( RIGHT );
        fill( '#fff' );
        textSize( 50 );
        text( this.number, canvasWidth - 30, 50 );
    }
}
