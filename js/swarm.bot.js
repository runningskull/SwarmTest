(function() { 
$script.ready(['_'
              ,'swarm'
              ,'swarm-collider'
              ,'swarm-targeter'
              ,'swarm-mover'], function() {

    SWARM.Bot = SWARM.klass();
    var proto = SWARM.Bot.prototype;

    // Mixins
    _.extend(proto, SWARM.Collider);
    _.extend(proto, SWARM.Targeter);
    _.extend(proto, SWARM.Mover);

    proto.init = function(container, options) {
        options = _.extend({
             position:  [20,20]
            ,radius:    100
            ,fill:      '#ff0000'
        }, options);
        options.collRadius = options.collRadius || options.radius;

        this.container = container;

        this.actor = new CAAT.ShapeActor()
            .setShape(CAAT.ShapeActor.prototype.SHAPE_CIRCLE)
            .setLocation(options.position[0], options.position[1])
            .setSize(options.radius*2, options.radius*2)
            .setFillStyle(options.fill)
        ;
    
        this.initCollider(this.actor);
        this.initMover();
        this.initTargeter([]);
    };

});
}());

