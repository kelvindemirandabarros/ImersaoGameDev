/**
 * 
 * @param scenarioImg
 * @param finalScenarioImg
 * @param width
 * @param height
 * @param gameTextFont
 */
class FinalScenario {
    constructor ( scenarioImg, finalScenarioImg, width, height, gameTextFont ) {
        this.scenarioImg = scenarioImg;
        this.finalScenarioImg = finalScenarioImg;
        this.width = width;
        this.height = height;
        this.gameTextFont = gameTextFont;

        this.x1;
        this.x2;
        this.xFinalScenario;
        this.y = 0;
        this.speed = 5;

        this.text1 = `Parabéns, você conseguiu ajudar\n a Hipster a chegar\n em casa segura!`;
    }

    getCurrentScenariosPositions () {
        this.x1 = scenario.x1;
        this.x2 = scenario.x2;
        this.xFinalScenario = scenario.x2 + this.width;
    }

    moves () {
        this.x1 -= this.speed;
        this.x2 -= this.speed;
        this.xFinalScenario -= this.speed;
    }

    draw () {
        if ( this.xFinalScenario > this.width ) {
            if ( character.y < character.originalY ) character.applyGravity();
            image( this.scenarioImg, this.x1, this.y, this.width, this.height );
            image( this.scenarioImg, this.x2, this.y, this.width, this.height );
            this.moves();
        } else if ( this.xFinalScenario > 0 ) {
            if ( character.y < character.originalY ) character.applyGravity();
            image( this.scenarioImg, this.x2, this.y, this.width, this.height );
            image( this.finalScenarioImg, this.xFinalScenario, this.y, this.width, this.height );
            this.moves();
        } else if ( this.xFinalScenario < 1 && character.x < 300 ) {
            image( this.finalScenarioImg, this.xFinalScenario, this.y, this.width, this.height );
            character.x += 9;
            character.y -= ( character.y * 0.00025 );
            character.width -= ( character.width * 0.004 );
            character.height -= ( character.height * 0.004 );
        } else if ( character.x < 365 ) {
            image( this.finalScenarioImg, this.xFinalScenario, this.y, this.width, this.height );
            character.x += 0.35; //( character.x );
            character.y -= ( character.y * 0.0003 );
            character.width -= ( character.width * 0.015 );
            character.height -= ( character.height * 0.015 );
        } else {
            image( this.finalScenarioImg, this.xFinalScenario, this.y, this.width, this.height );
            textFont( this.gameTextFont );
            textAlign( CENTER );
            textSize( parseInt( this.width / 22 ) );
            fill( 255, 255, 0 );
            text( this.text1, ( this.width / 2 ) + 100, 75 );
            noLoop();
            restartGameButton = new RestartGameButton(
                'Reiniciar',
                ( canvasWidth / 2 ) - 80,
                ( canvasHeight / 4 ) * 3 - /*35*/ 350,
                'botao-tela-inicial'
            );
            restartGameButton.draw();
        }
        character.show();
    }
}
