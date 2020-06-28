function preload() {
    // 'loadImage' carrega uma imagem.
    // 'loadFont' carrega uma fonte de texto.
    // 'loadSound' carrega um som.

    initialScenarioImg = loadImage( 'imgs/scenario/initialScenarioImg.png' );
    initialScenarioFont = loadFont( 'fonts/initialScenarioFont.otf' );

    scenarioImg = loadImage( 'imgs/scenario/forest.png' );

    characterImg = loadImage( 'imgs/character/running.png' );
    jumpSound = loadSound( 'sounds/jump.mp3' );

    dropetImg = loadImage( 'imgs/enemies/dropet.png' );
    flyingDropetImg = loadImage( 'imgs/enemies/flying-dropet.png' );
    trollImg = loadImage( 'imgs/enemies/troll.png' );

    // music01 = loadSound( 'sounds/music01.mp3' );
    
    gameOverImg = loadImage( 'imgs/assets/game-over.png' );
}
