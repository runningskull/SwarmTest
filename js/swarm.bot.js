(function() { 
$script.ready(['swarm-collider'], function() {    // requires Collider

    SWARM.Bot = SWARM.klass();
    var proto = SWARM.Bot.prototype;

    // Mixins
    //_.extend(proto, SWARM.Collider);

    proto.init = function(container, pcm, options) {
        options = _.extend({
             position:  [20,20]
            ,radius:    100
            ,fill:      '#ff0000'
            ,target:    new CAAT.Point(320, 240)
        }, options);
        options.collRadius = options.collRadius || options.radius;

        this.container = container;
        this.pcm = pcm;
        this.target = options.target;

        this.actor = new CAAT.ShapeActor()
            .setShape(CAAT.ShapeActor.prototype.SHAPE_CIRCLE)
            .setLocation(options.position[0], options.position[1])
            .setSize(options.radius*2, options.radius*2)
            .setFillStyle(options.fill)
        ;

    };

    //SWARM.Bot = function(actorContainer, packedCircleManager){
        //this.container = actorContainer;
        //this.pcm = packedCircleManager;
        //return this;
    //};

    //SWARM.Bot.prototype = {
         //actor:     null
        //,collide:   null

        //,create: function(pos, size, fill, target, collideSize) {
            //collideSize = collideSize || size;

            //this.actor = new CAAT.ShapeActor()
                //.setShape(CAAT.ShapeActor.prototype.SHAPE_CIRCLE)
                //.setLocation(pos[0], pos[1])
                //.setSize(size*2, size*2)
                //.setFillStyle(fill)
            //;
    
            //this.collide = new CAAT.modules.CircleManager.PackedCircle()
                //.setDelegate(this.actor)
                //.setRadius(collideSize)
                //.setCollisionMask(1)
                //.setCollisionGroup(1)
                //.setTargetPosition(target)
                //.setTargetChaseSpeed(0.02)
            //;
    
            //this.collide.mouseEnabled = false;

            //this.pcm.addCircle(this.collide);
            //this.container.addChild(this.actor);

            //return this;
        //}
    //};

});
}());

