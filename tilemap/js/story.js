var storyState = {

	preload: function() {

		this.load.image('part1', 'assets/stories/story1.png');
		this.load.image('part2', 'assets/stories/story2.png');
		this.load.image('part3', 'assets/stories/story3.png');
	},

	create: function () {

		var allParts = [['170', '70', 'part1'], ['170', '70', 'part2'], ['170', '70', 'part3']];	
    	var index = 0;
    	this.index = index;
    	this.allParts = allParts;

    	this.next();

    	var spaceBar = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	spaceBar.onDown.add(this.next, this);
    },

    next: function () {
 		if (this.index < 3 ) {
 			var part = this.allParts[this.index];

    		this.add.image(part[0], part[1], part[2]);
    		game.add.text(this.world.centerX - 100, this.world.centerY + 220, "Press space bar to continue...",{font:"12px Courier",fill:"#ffffff"});
    		this.index += 1;
 		}
 		else {
 			game.state.start("selectLevel");
 		}

    },
};