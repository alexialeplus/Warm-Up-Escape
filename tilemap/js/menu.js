var menuState = {
	preload: function() {

		this.load.image('background', 'assets/menu_background.jpg');
		this.load.image('logo', 'assets/logo.png');
		this.load.spritesheet('button', 'assets/bouton.png', 180, 400);
	},

    create: function () {

    	this.add.image('0', '0', 'background');
    	this.add.image(this.world.centerX - 230, this.world.centerY - 300, 'logo');
    	this.add.button(this.world.centerX - 100, this.world.centerY + 100, 'button', this.start);
    },

    start: function () {
        game.state.start("story");
    }
};