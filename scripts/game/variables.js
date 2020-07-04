// Configurações do jogo: / Game configurations:
let shell;

let canvasWidth = 800;
let canvasHeight = 800;

let gameTextFont;

// Cenários: / Scenarios:
let scenarios;

// Cena inicial (Menu)
let initialScenario;
let initialScenarioImg;

// Cenário da floresta e suas dependências: / Forest scenario and its dependencies:
let scenario;
let scenarioImg;

let floorHeight;

let game;

// Personagem e suas dependências.
// Character and its dependencies. 
let characterImg;
let charHeight;
let charWidth;
let character;

// Para fazer o tamanho dos 
let smallestAxis;

let charPercentage;

let charSize;
// Conterá o multiplicador proporcional de largura e altura.
// It will contain the proportional multiplier of width and height.
let multPixels;

let charLifeImg;
let charLife;

// Inimigos: / Enemies:
const enemies = [];
let enemiesLeft;

let dropet;
let dropetImg;

let flyingDropet;
let flyingDropetImg;

let troll;
let trollImg;

// Sons: / Sounds:
let jumpSound;
let hurtSound01;
let music01;

// Derrota: / Game Over:
let gameOverImg;
let restartGameButton;

// Vitória: / Win game:
let finalScenario;

//
let currentScenario = 'initialScenario';// 'finalScenario'; // Trocar para 'initialScenario'.
