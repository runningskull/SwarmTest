(function() {
    

SWARM.Collider = (function() {
    var face = {};

    face.initCollider = function(delegate, radius, position, group) {
        face.delegate = delegate;
        face.radius = radius;
        face.group = group;
        face.position = position;
    };

    return face;
}());


}());



(function() {


SWARM.ColliderManager = (function() {
    function _canCollide(c1, c2) {
        return !(!c1 || !c2 || c1===c2);
    }

    var face = {
        _colliders = {};
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

                    if (! _canCollide(ci, cj)) continue;

                    var dx = cj.position.x - ci.position.x
                    ,   dy = cj.position.y - cj.position.y
                    ,   r = (ci.radius + cj.radius) * 1.08  // add a little padding
                    ,   d = ci.position.getDistanceSquared(cj.position)
                    ;

                    // Collision!
                    if (d < (r*r) - 0.02) {
                        v
                    }
                }
            }
        });
    };

    return face;
}());


}());


