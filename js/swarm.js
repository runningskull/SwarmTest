(function() { 

    window.SWARM = window.SWARM || {};

    SWARM.klass = function() {
        // makeClass - By John Resig (MIT Licensed)
        return function(args){
            if ( this instanceof arguments.callee ) {
                if ( typeof this.init == "function" )
                    this.init.apply( this, args.callee ? args : arguments );
            } else
                return new arguments.callee( arguments );
        };
    };

}());



