// @namespace defined WebAudiox name space
var WebAudiox = WebAudiox || {};

WebAudiox.ConvolverHelper.baseUrl	= '../';
/**
 * Helper to create different convolution reverbs
 * 
 * @param  {AudioContext} context   the WebAudio API context
 * @param  {[type]} convolver   the convolver node to update
 */
WebAudiox.ConvolverHelper = function(context,convolver){
	
	var baseUrl	= WebAudiox.ConvolverHelper.baseUrl;
	
	this.makeTelephoneFilter = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/filter-telephone.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};
	this.makeSmallRoom = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/cinema-hallway.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};
	this.makeMediumRoom = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/medium-room2.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};	
	this.makeLargeRoom = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/s2_r4_bd.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeHugeWarehouse = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/diffusor2.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};			
	this.makeMuffledSound = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/muffler.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeSpringBack = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/feedback-spring.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeStereoSpreader = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/spreader55-75ms.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeBigEcho = function(){
		WebAudiox.loadBuffer(context, baseUrl + '/echo-chamber.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
};
