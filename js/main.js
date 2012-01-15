(function() {
$script.ready(['swarm-game'], function() {

var wrapper = document.getElementById('game')
,   director = new CAAT.Director().initialize(640, 480, wrapper)

,   game = new SWARM.Game().init(director)
;

game.start();
director.loop(60);

});
}());


