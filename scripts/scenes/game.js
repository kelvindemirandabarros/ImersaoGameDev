/**
 * Classe para configurar toda a parte jogável e criar o cenário da primeira fase.
 */
class Game {
    constructor () {
        // this.currentEnemy = 0;
        this.map = shell.map;
        this.index = 0; // índice do inimigo no this.map
        this.enemy;
    }

    setup () {
        scenario = new Scenario( scenarioImg, 2, 0, canvasWidth );

        score = new Score();

        floorSize = 30;

        // A personagem terá um tamanho proporcional ao menor tamanho entre a largura e a altura.

        charPercentage = 20; // 20%
        
        smallestAxis = ( canvasWidth <= canvasHeight ) ? canvasWidth : canvasHeight;
        charSize = parseInt( canvasWidth / 100 ) * charPercentage;
        multPixels = charSize / ( ( canvasWidth <= canvasHeight ) ? 220 : 270 );

        charWidth = 220 * multPixels;
        charHeight = 270 * multPixels;
        
        character = new Character( characterImg, jumpSound, 0, floorSize, /*canvasHeight - charHeight, charWidth, charHeight,*/ canvasHeight - 135, 110, 135, 4, 4, 220, 270 );
        charLife = new Life( charLifeImg, shell.config.maxLives, shell.config.startLives, 25, 25 );

        // Inimigos: / Enemies:
        dropet = new Enemy( dropetImg, canvasWidth - 52.5, floorSize, canvasHeight - 50, 52.5, 50, 4, 7, 105, 100, 15 );

        flyingDropet = new Enemy( flyingDropetImg, canvasWidth, canvasHeight - (canvasHeight * 0.6), canvasHeight - 50, 100, 75, 3, 6, 200, 150, 15, [[6,1]] );

        troll = new Enemy( trollImg, canvasWidth, 0, canvasHeight - 200, 200, 200, 5, 6, 400, 400, 15, [[6,3]] );

        enemies.push( dropet );
        enemies.push( flyingDropet );
        enemies.push( troll );
    }

    keyPressed ( key ) {
        if ( character.keys[ key ] ) {
            character.keys[ key ]();
        }
    }

    draw () {
        scenario.show();
        scenario.moves();

        score.show();

        // Desenha retângulos em volta dos seres para analisar a caixa de colisão:
        noFill();
        rect( character.x, character.y, character.width, character.height );
        // rect( dropet.x, dropet.y, dropet.width, dropet.height );
        // rect( flyingDropet.x, flyingDropet.y, flyingDropet.width, flyingDropet.height );
        // rect( troll.x, troll.y, troll.width, troll.height );
        
        charLife.draw();

        // Exibe o personagem:
        character.show();
        // Aplica gravidade na personagem.
        character.applyGravity();

        // enemies.forEach( enemy => {
            // enemy.show();
            // enemy.moves();
            // if ( character.colliding( enemy ) ) {
            //   // console.log( 'Colidiu!' );
            //   // Interrompe o loop do draw(). / Stops the draw() loop.
            //   // noLoop();
            //   image( gameOverImg, (canvasWidth / 2) - 200, canvasHeight / 3 );
            // }
        // });
        
        const currentLine = this.map[ this.index ];

        // const enemy = enemies[ this.currentEnemy ];
        this.enemy = enemies[ currentLine.enemy ];
        this.enemy.speed = currentLine.speed; // parseInt( random( 15, 30 ) );

        const enemyCrossedScreen = this.enemy.x < - this.enemy.width;

        this.enemy.show();
        this.enemy.moves();

        if ( enemyCrossedScreen ) {
            this.enemy.goesToStartPoint();

            // this.currentEnemy = ( this.currentEnemy >= 2 ) ? 0 : this.currentEnemy + 1;
            this.index = ( this.index >= this.map.length - 1 ) ? 0 : this.index + 1;

            // if ( this.currentEnemy > 2 ) this.currentEnemy = 0;
        }

        if ( character.colliding( this.enemy ) ) {
            charLife.losesLife();
            character.makeInvulnerable();
            if ( charLife.nLives <= 0 ) {
                image( gameOverImg, (canvasWidth / 2) - 200, /*canvasHeight / 5*/ 50 );
                image( gameOverMsgImg, 150, 300
                    /*
                    character.x + character.width + 10,
                    character.y - 310
                    */
                );
                noLoop();
                restartGameButton = new RestartGameButton(
                    'Reiniciar',
                    ( canvasWidth / 2 ) - 80,
                    ( canvasHeight / 4 ) * 3 - /*35*/ 160,
                    'botao-tela-inicial'
                );
                restartGameButton.draw();
            }
        }

        score.addPoints();
    }
}
