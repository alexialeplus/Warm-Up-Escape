var playState = {
    create: function () {

        var ice1 = [
            [-50, 560 , 0]
        ];

        var ice2 = [
            [140, 550 , [1.5,1]],
            [340, 550 , [0,5,1]],
            [530, 550 , [1,5,1]],
            [750, 530 , [2, 2]]
        ];

        game.physics.startSystem(Phaser.Physics.ARCADE);

        this.keyboard= game.input.keyboard;

        this.map = game.add.tilemap('map');
        // backgrounds

        game.add.tileSprite(0, 0, 3200, 570, "sky");
        game.add.tileSprite(0, 0, 3200, 480, "cloud");
        game.add.tileSprite(100, 300, 940, 300, 'midground');
        game.add.tileSprite(2000, 300, 940, 300, 'midground');



        this.ground = game.add.tileSprite(0, 570, 3200, 38, 'ground1');
        game.physics.enable(this.ground ,Phaser.Physics.ARCADE);
        this.ground.enableBody = true;
        this.ground.physicsType = Phaser.SPRITE;
         this.ground.body.immovable = true;


        this.glace = game.add.group();
        this.glace.enableBody = true;

        var test = this.glace.create(-50, 560, 'ice3');
        test.body.immovable = true;


        //
        test = this.glace.create(170, 550, 'ice2');
        test.body.immovable = true;
        test = this.glace.create(340, 550, 'ice2');
        test.scale.setTo(0.5, 1);
        test.body.immovable = true;

        test = this.glace.create(530, 550, 'ice2');
        test.scale.setTo(1.5, 1);
        test.body.immovable = true;

        test = this.glace.create(750, 530, 'ice2');
        test.scale.setTo(2, 2);
        test.body.immovable = true;

        test = this.glace.create(1020, 560, 'ice2');
        test.body.immovable = true;

        test = this.glace.create(1070, 560, 'ice2');
        test.body.immovable = true;


        test = this.glace.create(1070, 540, 'ice2');
        test.body.immovable = true;


        test = this.glace.create(1170, 550, 'ice2');
        test.body.immovable = true;
        test = this.glace.create(1340, 550, 'ice2');
        test.scale.setTo(0.5, 1);
        test.body.immovable = true;

        test = this.glace.create(1530, 550, 'ice2');
        test.scale.setTo(1.5, 1);
        test.body.immovable = true;

        test = this.glace.create(1750, 530, 'ice2');
        test.scale.setTo(2, 2);
        test.body.immovable = true;

        test = this.glace.create(2020, 560, 'ice2');
        test.body.immovable = true;

        test = this.glace.create(2070, 560, 'ice2');
        test.body.immovable = true;

        test = this.glace.create(2230, 530, 'ice2');
        test.scale.setTo(2, 2);
        test.body.immovable = true;

        test = this.glace.create(2530, 550, 'ice2');
        test.scale.setTo(1.5, 1);
        test.body.immovable = true;

        test = this.glace.create(2750, 530, 'ice2');
        test.scale.setTo(2, 2);
        test.body.immovable = true;

        test = this.glace.create(2070, 540, 'ice2');
        test.body.immovable = true;

        test = this.glace.create(3020, 560, 'ice2');
        test.body.immovable = true;



        this.layer = this.map.createLayer('Calque de Tile 1');
        this.layer.resizeWorld();


        // this.cloud = game.add.sprite

        this.player = game.add.sprite(30, game.world.height - 150,'player');
        game.physics.enable(this.player ,Phaser.Physics.ARCADE);
        this.player.body.gravity.y = 750;
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left', [5,6,7], 8, true);
        this.player.animations.add('right', [10, 11 , 12 ], 8, true);
        this.cursors = game.input.keyboard.createCursorKeys();
        game.camera.follow(this.player);

    },
    update: function () {


        /*this.clouds.tilePosition.x-= 0.2;
        this.ground.tilePosition.x-= 0.3;*/

        var hitPlatform = game.physics.arcade.collide(this.player, this.glace);
       // var hitwater = game.physics.arcade.collide(this.player, this.ground);

        this.player.body.velocity.x = 0;

        if (this.cursors.left.isDown)
        {
            this.player.body.velocity.x = -150;

            this.player.animations.play('left');
        }
        else if (this.cursors.right.isDown) {
            this.player.body.velocity.x = 150;

            this.player.animations.play('right');
            // console.log(this.player.world);
        } else {
            //  Stand still
            this.player.animations.stop();

            this.player.frame = 4;
        }

        //  Allow the player to jump if they are touching the ground.
        //if (this.cursors.up.isDown && this.player.body.touching.down &&(hitPlatform ||hitwater)) {
        if (this.cursors.up.isDown && this.player.body.touching.down &&(hitPlatform )) {
            this.player.body.velocity.y = -300;
        }
    }
};