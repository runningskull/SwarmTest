(function() {

SWARM.Mover = (function() {
    var face = {};

    face.initMover = function(options) {
        options = _.extend({
            maxSpeed:   1
        }, options);

        this.mover = options;
    };

    return face;
}());

}());

