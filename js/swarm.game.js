(function() {
$script.ready(['swarm'], function() {

    SWARM.Game = function(){ return this };
    SWARM.Game.prototype = {
         pcm:       null
        ,director:  null
        ,scene:     null
        ,root:      null
        ,mousePos:  null

        ,init: function(director) {
            this.mousePos = new CAAT.Point(director.canvas.width/2, director.canvas.height/2);
            this.director = director;
            this.scene = director.createScene();
            this.root = new CAAT.ActorContainer()
                .setBounds(0, 0, director.canvas.width, director.canvas.height);
            this.scene.addChild(this.root);

            // Collision
            this.pcm = new CAAT.modules.CircleManager.PackedCircleManager();
            this.pcm.setBounds(0, 0, director.width, director.height);
            this.pcm.setNumberOfCollisionPasses(2);
            this.pcm.setNumberOfTargetingPasses(1);

            this.director.addScene(this.scene);


            // Events
            var me = this;
            this.root.mouseMove = function(evt){ me.onMouseMove(evt); };
            this.scene.onRenderEnd = function(evt){ me.update(); };

            return this;
        }

        ,start: function() {
        }

        ,update: function() {
            this.pcm.pushAllCirclesTowardTarget();
            this.pcm.handleCollisions();
        }

        ,onMouseMove: function(evt) {
            this.mousePos.set(evt.x, evt.y);
        }
    };

});
}());

