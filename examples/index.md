# Demo

---

## Normal usage

````javascript
var SeeditCaptcha = require('seedit-captcha');
var captcha = new SeeditCaptcha({
	type: "silian"
});
captcha.getToken(function(data){
	console.log(data);
}, function(data){
	console.log(data);
});

captcha.getSrc(function(data){
	console.log(data);
}, function(data){
	console.log(data);
});
````
