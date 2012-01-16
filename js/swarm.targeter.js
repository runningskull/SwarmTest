(function() {

SWARM.Targeter = (function() {
    var face = {};

    // <targets> should be a list
    face.initTargeter = function(targets, options) {
        options = _.extend({
            weight: 1
        }, options);

        this.targeter = options;
        this.targeter.targets = targets;
    };

    return face;
}());

}());

