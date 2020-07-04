/**
 * Classe para criar o cenário inicial do jogo (Menu).
 * @param {image} img é a imagem do cenário. / It is the scenario image.
 * @param {number} x é a posição X inicial do cenário na tela. / It is the X position of the scenario on Canvas.
 * @param {number} y é a posição Y do cenário na tela. / It is the Y position of the scenario on Canvas.
 * @param {number} width é a largura do cenário na tela. / It is the width of the scenario on Canvas.
 * @param {number} height é a altura do cenário na tela. / It is the height of the scenario on Canvas.
 * @param {font} gameTextFont é a fonte de texto que o cenário inicial terá. / It is the text font that the initial scenario will have.
 */
class InitialScenario {
    constructor ( img, x, y, width, height, gameTextFont ) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.gameTextFont = gameTextFont;

        this.text1 = 'As aventuras de ';
        this.text2 = 'Hipsta';
        this.text3 = 'Pule (com a seta pra cima) 20 monstros\npara chegar em casa!'
        this.button;
    }

    createInitialScenarioButton () {
        this.button = new InitialScenarioButton(
            'Iniciar',
            ( this.width / 2 ) - 80,
            ( this.height / 4 ) * 3 - 35,
            'botao-tela-inicial'
        );
    }

    _showInitialSceneImg () {
        image( this.img, this.x, this.y, this.width, this.height );
    }

    _showTexts () {
        textFont( this.gameTextFont );

        textSize( 32 );
        text( this.text3, 400, 700 );

        textAlign( CENTER );

        textSize( parseInt( this.width / 9 ) );
        text( this.text1, this.width / 2, this.height / 3 );

        textSize( parseInt( this.width / 9 ) * 1.5 );
        text( this.text2, this.width / 2, this.height / 5 * 3 );
    }

    _button () {
        this.button.draw();
    }

    draw() {
        this._showInitialSceneImg();
        this._showTexts();
        this._button();
    }
}
