var Config = require('seedit-config');
var API = require('seedit-api');
var bAPI = API.scope('bbs');

var seeditCaptcha = function(option){
	option = !!option && Object.prototype.toString.call(option) === '[object Object]' ? option : {};
	this.option = option;
	return this;
}
seeditCaptcha.prototype.getToken = function(cb_success, cb_error){
	var _this = this;
	bAPI.get('misc/token', this.option, function(data){
		_this.token = data.data.token;
		cb_success && cb_success(data);
	},function(data){
		cb_error && cb_error();
	});
	return this;
}
seeditCaptcha.prototype.getSrc = function(cb_success, cb_error){
	var _this = this;
	this.getToken(function(data){
		_this.token;
		cb_success && cb_success(Config.getSiteUrl('bbs') + '/restful/misc/captcha.json?token=' + data.data.token);
	}, function(){
		cb_error && cb_error();
	});
	return this;
}
module.exports = seeditCaptcha;
