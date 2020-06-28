/**
 * Classe para configurar toda a parte jogável e criar o cenário da primeira fase.
 */
class Game {
    constructor () {
        this.currentEnemy = 0;
    }

    setup () {
        // Cria o cenário.
        scenario = new Scenario( scenarioImg, 2/*, 0, height*/ );

        score = new Score();

        floorSize = 30;

        // A personagem terá um tamanho proporcional ao menor tamanho entre a largura e a altura.

        charPercentage = 25; // 25%

        //                APAGAR:
        // if ( windowWidth <= windowHeight ) {
        //   smallestAxis = windowWidth;
        //   charSize = parseInt( windowWidth / 100 ) * charPercentage;
        //   multPixels = charSize / 220;
        // } else {
        //   smallestAxis = windowHeight;
        //   charSize = parseInt( windowWidth / 100 ) * charPercentage;
        //   multPixels = charSize / 270;
        // }
        
        smallestAxis = ( windowWidth <= windowHeight ) ? windowWidth : windowHeight;
        charSize = parseInt( windowWidth / 100 ) * charPercentage;
        multPixels = charSize / ( ( windowWidth <= windowHeight ) ? 220 : 270 );

        charWidth = 220 * multPixels;
        charHeight = 270 * multPixels;
        
        character = new Character( characterImg, jumpSound, windowWidth / 5, floorSize, /*windowHeight - charHeight, charWidth, charHeight,*/ height - 135, 110, 135, 4, 4, 220, 270 );

        // Inimigos: / Enemies:
        dropet = new Enemy( dropetImg, width - 52.5, floorSize, height - 50, 52.5, 50, 4, 7, 105, 100, 15, 10 );

        flyingDropet = new Enemy( flyingDropetImg, width, height - (height * 0.6), height - 50, 100, 75, 3, 6, 200, 150, 15, 10, [[6,1]] );

        troll = new Enemy( trollImg, width, 0, height - 200, 200, 200, 5, 6, 400, 400, 15, 10, [[6,3]] );

        enemies.push( dropet );
        enemies.push( flyingDropet );
        enemies.push( troll );
    }

    keyPressed ( key ) {
        // Não funciona desta forma!
        // console.log( 'Personagem:' );
        // console.log( character );
        // console.log( `Tecla ${ key } pressionada!` );
        // // let funct = character.keys[ key ];
        // if ( /*character.*/keys[ key ] ) {
        //     /*character.*/keys[ key ]();
        // //   console.log( 'Funct:' );
        // //   console.log( funct );
        // //   funct();
        // }
        if ( key === 'ArrowUp' ) character.jump();
    }

    draw () {
        // Define um background. Parâmetros:
        // 1. Imagem,
        // 2. posiciona no Canvas no eixo X,
        // 3. e no eixo Y,
        // 4. com largura máxima X,
        // 5. e altura máxima Y.
        // background( scenarioImg );
        
        // Exibe o cenário:
        scenario.show();
        // Movimenta o cenário:
        scenario.moves();

        score.show();

        // Desenha retângulos em volta dos seres para analisar a caixa de colisão:
        // noFill();
        // rect( character.x, character.y, character.width, character.height );
        // rect( dropet.x, dropet.y, dropet.width, dropet.height );
        // rect( flyingDropet.x, flyingDropet.y, flyingDropet.width, flyingDropet.height );
        // rect( troll.x, troll.y, troll.width, troll.height );
        
        // Exibe o personagem:
        character.show();
        // Aplica gravidade na personagem.
        character.applyGravity();

        // Exibe os inimigos e os move. / Shows the enemies and moves them.
        // dropet.show();
        // dropet.moves();
        // flyingDropet.show();
        // flyingDropet.moves();
        // troll.show();
        // troll.moves();
        // if ( character.colliding( dropet ) ) {
        //   // console.log( 'Colidiu!' );
        //   // Interrompe o loop do draw(). / Stops the draw() loop.
        //   // noLoop();
        // }

        // enemies.forEach( enemy => {
            // enemy.show();
            // enemy.moves();
            // if ( character.colliding( enemy ) ) {
            //   // console.log( 'Colidiu!' );
            //   // Interrompe o loop do draw(). / Stops the draw() loop.
            //   // noLoop();
            //   image( gameOverImg, (width / 2) - 200, height / 3 );
            // }
        // });

        const enemy = enemies[ this.currentEnemy ];
        // Confere se o inimigo atual já saiu completamente da tela.
        const visibleEnemy = enemy.x < - enemy.width;

        enemy.show();
        enemy.moves();

        // Se o inimigo atual já saiu da tela, então troca o inimigo.
        if ( visibleEnemy ) {
            enemy.goesToStartPoint();
            this.currentEnemy = ( this.currentEnemy >= 2 ) ? 0 : this.currentEnemy + 1;
            // if ( this.currentEnemy > 2 ) this.currentEnemy = 0;
            enemy.speed = parseInt( random( 15, 30 ) );
        }

        if ( character.colliding( enemy ) ) {
            // console.log( 'Colidiu!' );
            // Interrompe o loop do draw(). / Stops the draw() loop.
            // noLoop();
            image( gameOverImg, (width / 2) - 200, height / 3 );
        }

        score.addPoints();
    }
}
