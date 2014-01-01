// @namespace defined WebAudiox name space
var WebAudiox = WebAudiox || {};
/**
 * Helper to create different convolution reverbs
 * 
 * @param  {AudioContext} context   the WebAudio API context
 * @param  {[type]} convolver   the convolver node to update
 */
WebAudiox.ConvolverHelper = function(context,convolver){
	
	this.baseUrl = '../';
	
	this.makeTelephoneFilter = function(){
		WebAudiox.loadBuffer(context, 'impulses/filter-telephone.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};
	this.makeSmallRoom = function(){
		WebAudiox.loadBuffer(context, 'impulses/cinema-hallway.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};
	this.makeMediumRoom = function(){
		WebAudiox.loadBuffer(context, 'impulses/medium-room2.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};	
	this.makeLargeRoom = function(){
		WebAudiox.loadBuffer(context, 'impulses/s2_r4_bd.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeHugeWarehouse = function(){
		WebAudiox.loadBuffer(context, 'impulses/diffusor2.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};			
	this.makeMuffledSound = function(){
		WebAudiox.loadBuffer(context, 'impulses/muffler.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeSpringBack = function(){
		WebAudiox.loadBuffer(context, 'impulses/feedback-spring.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeStereoSpreader = function(){
		WebAudiox.loadBuffer(context, 'impulses/spreader55-75ms.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
	this.makeBigEcho = function(){
		WebAudiox.loadBuffer(context, 'impulses/echo-chamber.wav', function(buffer) {
			convolver.buffer = buffer;
		});
	};		
};
