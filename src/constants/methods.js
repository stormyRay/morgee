import $ from "jquery";
import {MAN_NORMAL, MAN_LOOSE, WOMAN_LOOSE, WOMAN_NORMAL} from "./texts";
import {GET_WECHAT_OPENID, AUTHENTICATE_WECHAT_OPENID} from "./path";

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

//wechat user auth interface
export const wechatAuthorize = function(){
	var wechatOpenid = window.locaStorage.getItem("wechatOpenid")
	if(!wechatOpenid){
		var urlCode = getParameterByName(code);
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
	const appid = "wxfacdd63743cbcc18";
	const authUrl = "https://open.weixin.qq.com/connect/oauth2/authorize?" +
					"appid=" + appid +
					"&redirect_uri=" + encodeURIComponent(location.href) +
					"&response_type=code" + 
					"&scope=snsapi_userinfo" + 
					"#wechat_redirect";
	location.href = authUrl;
}

const getOpenidByCode = function(code){
	$.ajax({
		url: GET_WECHAT_OPENID + "?code=" + code,
		success: function(response){
			var json = response;//TO DO
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