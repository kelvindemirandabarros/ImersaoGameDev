/**
 * Classe para criar um botão HTML5 na tela.
 * @param {string} text é o texto que será inserido no botão.
 * @param {number} x é a posição X do botão.
 * @param {number} y é a posição Y do botão.
 * @param {string} className é a classe de estilos CSS que o botão receberá.
 * @_
 * @property {function} button.mousePressed é o método que receberá a função a ser executada quando o botão for clicado pelo mouse.
 */
class Button {
    constructor ( text, x, y, className ) {
        this.text = text;
        this.x = x;
        this.y = y;
        // Cria um botão HTML5.
        this.button = createButton( this.text );
        // Adiciona uma class de estilos CSS ao botão.
        this.button.addClass( className );
    }

    draw () {
        // Exibe o botão.
        this.button.position( this.x, this.y );
        // Sem parâmetros centraliza o elemento no centro da tela.
        // this.button.center( 'horizontal' );
    }
}


class InitialScenarioButton extends Button {
    constructor( text, x, y, className ) {
        super( text, x, y, className );
        // Define uma função ao apertar o botão.
        this.button.mousePressed( () => this._changeScenario() );
    }
    
    _changeScenario () {
        currentScenario = 'game';
        this.button.remove();
    }
}


class RestartGameButton extends Button {
    constructor( text, x, y, className ) {
        super( text, x, y, className );
        this.button.mousePressed( () => this._restartGame() );
    }

    _restartGame () {
        scenario.x1 = 0;
        scenario.x2 = canvasWidth;
        score.points = 0;
        fill( 0,0,0 );
        currentScenario = 'initialScenario';
        initialScenario.createInitialScenarioButton();
        game.enemy.goesToStartPoint();
        game.index = 0;

        this.button.remove();
        loop();
    }
}
