webaudiox.ConvolverHelper
========================

webaudiox.ConvolverHelper is a [webaudiox](https://github.com/jeromeetienne/webaudiox)
extension which provide basic convolvers.

Show Don't Tell
===============
* [examples/select.html](http://erichlof.github.io/webaudiox.ConvolverHelper/examples/select.html)
\[[view source](https://github.com/erichlof/webaudiox.ConvolverHelper/blob/master/examples/select.html)\] :
It shows all the convolver impulses.
* [examples/basic.html](http://erichlof.github.io/webaudiox.ConvolverHelper/examples/basic.html)
\[[view source](https://github.com/erichlof/webaudiox.ConvolverHelper/blob/master/examples/basic.html)\] :
It shows a basic usage of this extension

How To Install It
=================

You can install it via script tag

```html
<script src='webaudiox.convolverhelper.js'></script>
```

Or you can install with [bower](http://bower.io/), as you wish.

```bash
bower install webaudiox.convolverhelper
```

How To Use It
=============

Check out the source for the demos above to learn how to use this extension.

```javascript
var convolverHelper	= new webaudiox.ConvolverHelper(context, convolver);

//params - context   is the AudioContext that you created at the start of the program
//params - convolver is the Web Audio API 'convolver' node that you created just before this line
```

```javascript
// create AudioContext		
var context	= new AudioContext();
// get a sound node
var source	= getYourSourceNode()
// create ConvolverHelper
var convolverHelper	= new WebAudiox.ConvolverHelper(context)
```

after that, ```convolverHelper.node``` is the ```ConvolverNode```. 
Then connect them together 

```
// connect sound source to convolver			
source.connect(convolverHelper.node);
// then connect convolver to destination
convolverHelper.node.connect(context.destination);
```

and start play the sound

```
source.buffer = buffer;
source.loop = true;
source.start(0);	
```

For the impulses sounds, there are a bunch of presets already configured for you.
You can load them with the following

```
convolverHelper.loadPreset('smallRoom')
```

To get the list of all preset, paste this in js console

```
console.log('presets:', Object.keys(WebAudiox.ConvolverHelper.presets))
```

If you wish, you can load you own impulse sound from a direct url.

```
convolverHelper.loadUrl('http://examples.org/myimpulse.wav')
```

