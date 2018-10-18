var loadState = {
    preload: function () {

        var loadingLabel = game.add.text(80, 150 , "Loading....",{font:"30px Courier",fill:"#ffffff"});
        
        game.load.spritesheet("player", 'assets/polar_bear.png', 50,42 , -1, 2 , 4 );
        game.load.tilemap('map', 'assets/tilmap_1.json', null, Phaser.Tilemap.TILED_JSON);



       /* game.load.image("win" , "assets/win.png");*/
        game.load.image('sky', 'assets/sky.png');
        game.load.image('cloud', 'assets/clouds.png');
        game.load.image('ice2', 'assets/Sans titre-2.png');
        game.load.image('ice1', 'assets/Sans titre-1.png');
        game.load.image('ice', 'assets/glace.png');
        game.load.image('ice3', 'assets/glace_small4.png');
        game.load.image('midground', 'assets/midground.png');
        game.load.image('ground1', 'assets/18.png');
        game.load.image('wave', 'assets/17.png');
    },

    create: function () {
        game.state.start("menu");
    }
};