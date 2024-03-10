// player
//var Player = {
//    playerName: 'Player1',
//    playerPoints: 0,
//    playerLevel: 1
//};

function Player(PName, PPoints, PLevel) {
    this.playerName = PName;
    this.playerPoints = PPoints;
    this.playerLevel = PLevel;
}

//game

//var Game = {
//    gamePlayerName = 'Player1',
//    gameNumElements = 50,
//    gameLevel = 1,
//    gameNumPic = 0
//}

function Game(playerName, numElements, level, numPic) {
    this.gamePlayerName = playerName;
    this.gameNumElements = numElements;
    this.gameLevel = level;
    this.gameNumPic = numPic;
}

//Champion

//var Champion = {
//    championName = 'Player1',
//    championPoints = 0
//}

function Champion(CName, CPoints) {
    this.championName = CName;
    this.championPoints = CPoints;
}
