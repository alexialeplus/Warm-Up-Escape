var game = new Phaser.Game(800, 608, Phaser.AUTO, 'myGame');

game.state.add("boot" , bootState);
game.state.add("load" , loadState);
game.state.add("menu" , menuState);
game.state.add("story", storyState);
game.state.add("selectLevel", levelState);
game.state.add("play" , playState);
game.state.add("win" , winState);

game.state.start('boot');
