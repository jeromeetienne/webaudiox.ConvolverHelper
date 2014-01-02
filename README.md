webaudiox.ConvolverHelper
========================

webaudiox.ConvolverHelper is a [webaudiox](https://github.com/jeromeetienne/webaudiox)
extension which provide basic convolvers.

Show Don't Tell
===============
* [examples/ConvolverDemo.html](http://erichlof.github.io/webaudiox.ConvolverHelper/examples/ConvolverDemo.html)
\[[view source](https://github.com/erichlof/webaudiox.ConvolverHelper/blob/master/examples/ConvolverDemo.html)\] :
It shows this feature, and that one which is coded like that.
* [examples/requirejs.html](http://erichlof.github.io/webaudiox.ConvolverHelper/examples/requirejs.html)
\[[view source](https://github.com/erichlof/webaudiox.ConvolverHelper/blob/master/examples/requirejs.html)\] :
It does that this way, and it is cool in that case.

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
