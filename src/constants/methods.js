import $ from "jquery";
import {MAN_NORMAL, MAN_LOOSE, WOMAN_LOOSE, WOMAN_NORMAL} from "./texts";

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