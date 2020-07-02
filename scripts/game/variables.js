let shell;

let scenarios;
let currentScenario = 'initialScenario'; // REALIZANDO TESTES! Retornar para 'initialScenario'.

// Cena inicial (Menu)
let initialScenario;
let initialScenarioImg;
let initialScenarioFont;
let initialScenarioButton;

// Instância da classe Scenario, e suas dependências.
// Scenario class instance, and its dependencies.
let scenario;
let scenarioImg;

// Tamanho do chão no cenário.
let floorSize;

// Instância da classe Character, e suas dependências.
// Character class instance, and its dependencies. 
let characterImg;
let charHeight;
let charWidth;
let character;

// Conterá o valor do menor entre a largura e a altura do Canvas.
// It will contain the value of the smallest between the width and the height of the Canvas.
let smallestAxis;
// Porcentagem do tamanho da personagem em relação ao menor entre a largura e a altura do Canvas.
// 
let charPercentage;
// Guardará o valor proporcional da personagem em relação ao menor entre a largura e a altura do Canvas.
// 
let charSize;
// Conterá o multiplicador proporcional de largura e altura.
// It will contain the proportional multiplier of width and height.
let multPixels;

let charLifeImg;
let charLife;


const enemies = [];
// Inimigos e suas imagens: / Enemies and their images:
let dropet;
let dropetImg;

let flyingDropet;
let flyingDropetImg;

let troll;
let trollImg;

let music01;

// Pontuação.
let score;

// Image do fim de jogo.
let gameOverImg;

let game;
