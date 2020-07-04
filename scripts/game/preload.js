function preload() {
    shell = loadJSON( 'shell/shell.json' );

    gameTextFont = loadFont( 'fonts/gameTextFont.otf' );

    // Cenários: / Scenarios:
    initialScenarioImg = loadImage( 'imgs/scenario/initialScenario.png' );

    scenarioImg = loadImage( 'imgs/scenario/forest.png' );

    finalScenarioImg = loadImage( 'imgs/scenario/castle.png' );

    // Personagem: / Character:
    characterImg = loadImage( 'imgs/character/running.png' );
    jumpSound = loadSound( 'sounds/jump.mp3' );
    hurtSound01 = loadSound( 'sounds/hurt01.mp3' );
    charLifeImg = loadImage( 'imgs/assets/life.png' );

    // Inimigos: / Enemies:
    dropetImg = loadImage( 'imgs/enemies/dropet.png' );
    flyingDropetImg = loadImage( 'imgs/enemies/flying-dropet.png' );
    trollImg = loadImage( 'imgs/enemies/troll.png' );

    // Outros sons: / Other sounds:
    music01 = loadSound( 'sounds/music01.mp3' );
    
    // Fim de jogo: / Game Over:
    gameOverImg = loadImage( 'imgs/assets/game-over.png' );
    gameOverMsgImg = loadImage( 'imgs/assets/game-over-message.png' );
}
