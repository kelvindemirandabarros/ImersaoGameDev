function preload() {
    shell = loadJSON( 'shell/shell.json' );

    initialScenarioImg = loadImage( 'imgs/scenario/initialScenarioImg.png' );
    initialScenarioFont = loadFont( 'fonts/initialScenarioFont.otf' );

    scenarioImg = loadImage( 'imgs/scenario/forest.png' );

    characterImg = loadImage( 'imgs/character/running.png' );
    jumpSound = loadSound( 'sounds/jump.mp3' );
    charLifeImg = loadImage( 'imgs/assets/life.png' );

    dropetImg = loadImage( 'imgs/enemies/dropet.png' );
    flyingDropetImg = loadImage( 'imgs/enemies/flying-dropet.png' );
    trollImg = loadImage( 'imgs/enemies/troll.png' );

    // music01 = loadSound( 'sounds/music01.mp3' );
    
    gameOverImg = loadImage( 'imgs/assets/game-over.png' );
}
