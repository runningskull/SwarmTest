(function() {

SWARM.Collider = (function() {
    var face = {};

    // TODO: this is hard-coded to be a circle
    face.initCollider = function(delegate, options) {
        options = _.extend({
             radius:    delegate.radius
            ,position:  delegate.position
            ,fixed:     false
            ,group:     'default'
        }, options);

        this.collider = options;
        this.collider.delegate = delegate;
    };

    return face;
}());

}());




(function() {

SWARM.ColliderManager = (function() {
    function _canCollide(c1, c2) {
        return !(!c1 || !c2 || c1===c2);
    }

    function _collide(c1, c2) {
        var dx = cj.position.x - ci.position.x
        ,   dy = cj.position.y - cj.position.y
        ,   r = (ci.radius + cj.radius) * 1.08  // add a little padding
        ,   d = ci.position.getDistanceSquared(cj.position)
        ;

        // Collision!
        if (d < (r*r) - 0.02) {
            v.x = dx;
            v.y = dy;
            v.normalize();

            var invForce = (r - Math.sqrt(d)) * 0.5;
            v.multiply(invForce);

            if (!! (!ci.fixed ^ !cj.fixed))
                v.multiply(2.2);

            (!cj.fixed) && cj.position.translatePoint(v);
            (!ci.fixed) && ci.position.subtract(v);

            return true;
        }
    
        return false;
    }

    var face = {
        _colliders: {}
    };

    face.addCollider = function(obj, group) {
        group = group || 'default';
        face._colliders[group] = face._colliders[group] || [];
        face._colliders[group].push(obj);
    };

    face.updateColliders = function() {
        var v = new CAAT.Point(0,0,0);

        _.each(face._colliders, function(val, key, lst) {
            for (var i=0; i<val.length; i++) {
                var ci = val[i];

                for (var j=0; j<val.length; j++) {
                    var cj = val[j];

                    _canCollide(ci, cj) && _collide(ci, cj);
                }
            }
        });
    };

    return face;
}());

}());


