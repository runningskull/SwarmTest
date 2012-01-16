(function() {
$script.ready(['caat', 'swarm'], function() {

    SWARM.Game = SWARM.klass();
    var proto = SWARM.Game.prototype;
    proto.init = function(director) {
        this.mousePos = new CAAT.Point(director.canvas.width/2, director.canvas.height/2);
        this.director = director;
        this.scene = director.createScene();
        this.root = new CAAT.ActorContainer()
            .setBounds(0, 0, director.canvas.width, director.canvas.height);

        this.scene.addChild(this.root);
        this.director.addScene(this.scene);

        // events
        var me = this;
        this.root.mouseMove = _.bind(this.onMouseMove, this);
        this.scene.onRenderEnd = _.bind(this.update, this);

        return this;
    }

    proto.start: function() {
    }

    proto.update: function() {
    }

    ,onMouseMove: function(evt) {
        this.mousePos.set(evt.x, evt.y);
    }

});
}());

