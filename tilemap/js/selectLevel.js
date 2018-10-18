var levelState = {

	preload: function() {

		this.load.image('levelButton1', 'assets/level1.png');
		this.load.image('levelButton2', 'assets/level2.png');
		this.load.image('unlockLevelButton', 'assets/unlock.png');
		this.load.image('background', 'assets/levels_background.jpg');
		this.load.image('dialog', 'assets/text_level.png');
	},

	create: function() {

		this.add.image('0', '0', 'background');
		this.add.image('50', '50', 'dialog');
		this.showLevels();
	},

	//Handle levels buttons
	showLevels: function() {

		var playerLevel = localStorage.getItem('playerLevel');
		playerLevel = parseInt(playerLevel);

		//if player has already played
		if (playerLevel)
		{
			for (i = 1; i <= 2 ; i++)
			{
				if (i < playerLevel || i === playerLevel)
				{
					levelButton = game.add.button(i * 150, 400, 'levelButton' + i);
					levelButton.level = i;

					levelButton.onInputDown.add(this.playLevel, levelButton);
				}
				else
				{
					game.add.button(i * 150, 400, 'unlockLevelButton');
				}
			}
		}
		else
		{
			//Unlock only the first level
			for (i = 1; i <= 2 ; i++)
			{
				if (i === 1)
				{
					levelButton = game.add.button(i * 250, 400, 'levelButton' + i);
					levelButton.level = i;

					levelButton.onInputDown.add(this.playLevel, levelButton);
				}
				else
				{
					game.add.button(i * 250, 400, 'unlockLevelButton');
				}
			}
		}
	},

	playLevel: function() {
		if (this.level === 1) {
			localStorage.setItem('playerLevel', this.level);
			game.state.start("play");
		}
	},
};