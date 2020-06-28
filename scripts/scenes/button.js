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
        // Define uma função ao apertar o botão.
        this.button.mousePressed( () => this._changeScenario() );
    }

    _changeScenario () {
        currentScenario = 'game';
        this.button.remove();
    }

    draw () {
        // Exibe o botão.
        this.button.position( this.x, this.y );
        // Sem parâmetros centraliza o elemento no centro da tela.
        this.button.center( 'horizontal' );
    }
}
