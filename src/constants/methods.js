import $ from "jquery";
import { browserHistory } from "react-router";
import {appid, MAN_NORMAL, MAN_LOOSE, WOMAN_LOOSE, WOMAN_NORMAL} from "./texts";
import {GET_WECHAT_OPENID, AUTHENTICATE_WECHAT_OPENID} from "./paths";

//Mapping from category ID to its according path
export const mapCategoryPath = function(id) {
	switch(id) {
		case "image": return "/gallery/index";
		case "single_cn": return "/customize/text/single_cn";
		case "multiple_cn": return "/customize/text/multiple_cn";
		case "single_en": return "/customize/text/single_en";
		case "multiple_en": return "/customize/text/multiple_en";
		default: return "/";
	}
}

//Method for change HTML title with workaround for Wechat browser
export const changeTitle = function(title) {
	document.title = title;
	//hack for Wechat browser to change the title
	var $body = $('body');
	var $iframe = $('<iframe src="/favicon.ico" style="display:none;"></iframe>');
	$iframe.on('load',function() {
  		setTimeout(function() {
    	$iframe.off('load').remove();
		}, 0);
	}).appendTo($body);
}

//Mapping from cloth type code to cloth type Chinese word
export const clothNameMapping = function(clothType) {
	switch(clothType){
		case "man_normal": return MAN_NORMAL;
		case "man_loose": return MAN_LOOSE;
		case "woman_normal": return WOMAN_NORMAL;
		case "woman_loose": return WOMAN_LOOSE;
		default: return "NONE";
	}
}

//Get URL parameter value
export const getParameterByName = function(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

export const removeURLParameters = function(names, url){
	if(typeof names == "string"){
		return removeParameterFromURL(names, url);
	} else{
		var newUrl = url;
		for(var i = 0; i < names.length; i ++){
			newUrl = removeParameterFromURL(names[i], newUrl);
		}
		return newUrl;
	}
}

export const removeParameterFromURL = function(name, url){
	if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp(name + "(=([^&#]*)|&|#|$)[&]?");
    var newUrl = url.replace(regex, "");
    if(newUrl[newUrl.length - 1] == "&")
    	return newUrl.slice(0, newUrl.length - 1);
    else
        return newUrl;
}

//Check browser in in Wechat or not
export const isWechat = function (){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
 	} else {
		return false;
	}
}

//wechat user auth interface
export const wechatAuthorize = function(){
	if(!isWechat())
		return;
	var wechatOpenid = window.localStorage.getItem("wechatOpenid");
	if(!wechatOpenid || wechatOpenid == "undefined" || wechatOpenid == "null"){
		var urlCode = getParameterByName("code");
		if(urlCode){
			getOpenidByCode(urlCode);
		} else {
			jumpBackToAucthoriztionPage();
		}
	} else {
		authenticateOpenid(wechatOpenid);
	}
}

const jumpBackToAucthoriztionPage = function(){
	const authUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + appid +
					"&redirect_uri=" + encodeURIComponent(removeURLParameters(["code", "state"])) +
					"&response_type=code" + 
					"&scope=snsapi_userinfo" + 
					"#wechat_redirect";
	location.href = authUrl;
}

const getOpenidByCode = function(code){
	$.ajax({
		url: GET_WECHAT_OPENID + "?code=" + code,
		success: function(response){
			if(typeof response == "string")
				var json = JSON.parse(response);
			else
				var json = response;
			window.localStorage.setItem("wechatOpenid", json.openid);
		},
		error: function(){
			jumpBackToAucthoriztionPage();
		}
	});
}

const authenticateOpenid = function(openid){
	$.ajax({
		url: AUTHENTICATE_WECHAT_OPENID + "?openid=" + openid,
		success: function(response){},
		error: function(){
			jumpBackToAucthoriztionPage();
		}
	});
}

//Wechat Pay interfaces
export const lauchWechatPay = function(res){
	//Refer to http://dditblog.com/itshare_553.html
	var param = res.data;
	wx.config({
		debug: false, 
		appId: appid,
		timestamp: param.timestamp,
		nonceStr: param.noncestr,
		signature: param.signJs,
		jsApiList: ["chooseWXPay"]
	});
	wx.chooseWXPay({
		timestamp: param.timestamp,
		nonceStr: param.noncestr,
		package: "prepay_id=" + param.transNo,
		signType: "MD5",
		paySign: param.sign,
		success: function (res) {
			if(res.errMsg == "chooseWXPay:ok"){
				//alert("支付成功");
				//可以进行后台轮询。
				const path = "/order/success";
	    		browserHistory.push(path);
			}else{
				alert(res.errMsg);
			}
		},
		cancel: function(res){
            //alert(´取消支付´);
        }
    });
}