/**
 * Classe para criar o cenário inicial do jogo (Menu).
 * @param {image} img é a imagem do cenário. / It is the scenario image.
 * @param {number} x é a posição X inicial do cenário na tela. / It is the X position of the scenario on Canvas.
 * @param {number} y é a posição Y do cenário na tela. / It is the Y position of the scenario on Canvas.
 * @param {number} width é a largura do cenário na tela. / It is the width of the scenario on Canvas.
 * @param {number} height é a altura do cenário na tela. / It is the height of the scenario on Canvas.
 * @param {button} button é o botão html5 que o cenário inicial terá. / It is the button that the initial scenario will have.
 */
class InitialScenario {
    constructor ( img, x, y, width, height, button ) {
        //
        this.img = img;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.button = button;
    }

    _showInitialSceneImg () {
        image( this.img, this.x, this.y, this.width, this.height );
    }

    _showTexts () {
        textFont( initialScenarioFont );
        textAlign( CENTER );
        textSize( parseInt( width / 9 ) );
        text( 'As aventuras de ', width / 2, height / 3 );

        textSize( parseInt( width / 9 ) * 1.5 );
        text( 'Hipsta', width / 2, height / 5 * 3 );
    }

    _button () {
        // Altera a altura do botão, mas dá pra colocar os valores através de parâmetros!!
        this.button.y = height / 7 * 5;
        this.button.draw();
    }

    draw() {
        this._showInitialSceneImg();
        this._showTexts();
        this._button();
    }
}
