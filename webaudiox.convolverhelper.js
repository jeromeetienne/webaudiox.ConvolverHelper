// @namespace defined WebAudiox name space
var WebAudiox = WebAudiox || {};

/**
 * Helper to create different convolution reverbs
 * 
 * @param  {AudioContext} context   the WebAudio API context
 * @param  {[type]} convolver   the convolver node to update
 */
WebAudiox.ConvolverHelper = function(context,convolver){
	
	var convolver	= context.createConvolver();

	/**
	 * Web Audio API node for the convolver
	 * @type {ConvolverNode}
	 */
	this.node	= convolver

	/**
	 * test if the sound is loaded or not
	 * @return {Boolean} true if the sound is loaded, false otherwise
	 */
	this.isLoaded	= function(){
		return convolver.buffer !== null ? true : false
	}
	/**
	 * Load a given url pointing to a sound
	 * @param  {String} url     the url to load
	 * @param  {Funtion} onLoad  the function called when the sound is loaded, optional
	 * @param  {Function} onError the funciton called when the sound produced an error
	 */
	this.loadUrl	= function(url, onLoad, onError){
		loadSoundWebAudio(url, function(buffer) {
			convolver.buffer = buffer;
			onLoad	&& onLoad()
		}, onError);		
	}

	/**
	 * load a preset among the ones in WebAudiox.ConvolverHelper.presets
	 * @param  {String} name    the name of the preset
	 * @param  {[type]} onLoad  [description]
	 * @param  {[type]} onError [description]
	 * @return {[type]}         [description]
	 */
	this.loadPreset	= function(name, onLoad, onError){
		console.assert( WebAudiox.ConvolverHelper.presets[name] !== undefined )
		var baseName	= WebAudiox.ConvolverHelper.presets[name]
		var url		= WebAudiox.ConvolverHelper.baseUrl + baseName;
		this.loadUrl(url, onLoad, onError)
	}
	
	/**
	 * internal function to load a sound
	 * @param  {String} url     the url to load
	 * @param  {Funtion} onLoad  the function called when the sound is loaded, optional
	 * @param  {Function} onError the funciton called when the sound produced an error
	 */
	function loadSoundWebAudio(url, onLoad, onError){
		onLoad	= onLoad	|| function(){}
		onError	= onError	|| function(){}
		var request = new XMLHttpRequest();
		request.open('GET', url, true);
		request.responseType = 'arraybuffer';
		request.onload = function() {
			context.decodeAudioData(request.response, onLoad, onError);
		}
		request.send();
	}
};

/**
 * base Url for all the assets
 * @type {String}
 */
WebAudiox.ConvolverHelper.baseUrl	= '../';

/**
 * all the presett
 * @type {Object}
 */
WebAudiox.ConvolverHelper.presets	= {
	'oldPhone'	: 'sounds/filter-telephone.wav',
	'smallRoom'	: 'sounds/cinema-hallway.wav',
	'mediumRoom'	: 'sounds/medium-room2.wav',
	'largeRoom'	: 'sounds/s2_r4_bd.wav',
	'hugeWarehouse'	: 'sounds/diffusor2.wav',
	'muffler'	: 'sounds/muffler.wav',
	'springBack'	: 'sounds/feedback-spring.wav',
	'stereoSpreader': 'sounds/spreader55-75ms.wav',
	'bigEcho'	: 'sounds/echo-chamber.wav',
};
