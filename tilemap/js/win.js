var winState = {

    create: function () {
        var winLabel = game.add.text(80, 150 , "You won!",{font:"30px Courier",fill:"#ffffff"});
        var restartLabel = game.add.text(80, 350 , "press R to restart!",{font:"30px Courier",fill:"#ffffff"});

        var rkey = game.input.keyboard.addKey(Phaser.keyboard.R);

        rkey.onDown.addOnce(this.restart , this)
    },

    restart : function () {
        game.state.start("menu");
    }
};