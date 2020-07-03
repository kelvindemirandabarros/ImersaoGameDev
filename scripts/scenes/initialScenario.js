/**
 * Classe para criar o cenário inicial do jogo (Menu).
 * @param {image} img é a imagem do cenário. / It is the scenario image.
 * @param {number} x é a posição X inicial do cenário na tela. / It is the X position of the scenario on Canvas.
 * @param {number} y é a posição Y do cenário na tela. / It is the Y position of the scenario on Canvas.
 * @param {number} width é a largura do cenário na tela. / It is the width of the scenario on Canvas.
 * @param {number} height é a altura do cenário na tela. / It is the height of the scenario on Canvas.
 * @param {font} textFont é a fonte de texto que o cenário inicial terá. / It is the text font that the initial scenario will have.
 */
class InitialScenario {
    constructor ( img, x, y, width, height, textFont ) {
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    
        this.textFont = textFont;
        this.text1 = 'As aventuras de ';
        this.text2 = 'Hipsta';
        this.button;
    }

    createInitialScenarioButton () {
        this.button = new InitialScenarioButton(
            'Iniciar',
            ( canvasWidth / 2 ) - 80,
            ( canvasHeight / 4 ) * 3 - 35,
            'botao-tela-inicial'
        );
    }

    _showInitialSceneImg () {
        image( this.img, this.x, this.y, this.width, this.height );
    }

    _showTexts () {
        textFont( this.textFont );
        textAlign( CENTER );
        textSize( parseInt( canvasWidth / 9 ) );
        text( this.text1, canvasWidth / 2, canvasHeight / 3 );

        textSize( parseInt( canvasWidth / 9 ) * 1.5 );
        text( this.text2, canvasWidth / 2, canvasHeight / 5 * 3 );
    }

    _button () {
        // Altera a altura do botão, mas dá pra colocar os valores através de parâmetros!!
        // this.button.y = canvasHeight / 7 * 5;
        this.button.draw();
    }

    draw() {
        this._showInitialSceneImg();
        this._showTexts();
        this._button();
    }
}
