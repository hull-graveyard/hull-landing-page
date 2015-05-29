!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):"object"==typeof exports?exports["Landing Page Ship"]=t():e["Landing Page Ship"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return e[r].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="/",t(0)}([/*!*********************!*\
  !*** ./src/ship.js ***!
  \*********************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var a=n(/*! ./components/styles */1),i=r(a),o=n(/*! ./components/template */2),s=r(o);!function(){var e=function(e,t){return"http://proxy.boxresizer.com/convert?resize=500x332&source="+encodeURIComponent(e)},t=function(t,n,r){var a=n.ship.settings,o=n.ship.translations.en,u=[],h=i["default"](a);u.push(h);var l={settings:a,translations:o};l.settings.logo=e(l.settings.logo),u.push(s["default"]("logo",l)),u.push(s["default"]("header",l)),u.push(s["default"]("tagline",l)),u.push(s["default"]("content",l)),u.push(s["default"]("cta",l)),u.push(s["default"]("images",l)),$(t).find(".ship-root").empty().append('<div class="content"><div class="container">'+u.join("")+"</div></div>")};Hull.onEmbed(t)}()},/*!**********************************!*\
  !*** ./src/components/styles.js ***!
  \**********************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(/*! color-js */3),i=r(a);t["default"]=function(e){var t="\n    .ship-root {\n      background: "+e.background_color+";\n      color: "+e.text_color+";\n    }\n    h1, h2, h3, h4, h5, h6{\n      color: "+e.title_color+";\n    }\n    h1 small, h2 small, h3 small, h4 small, h5 small, h6 small{\n      color: "+i["default"](e.title_color).setAlpha(.6).toCSS()+";\n    }\n    .btn{\n      -webkit-border-radius:"+e.button_border_radius+"px;\n      -moz-border-radius:"+e.button_border_radius+"px;\n      -o-border-radius:"+e.button_border_radius+"px;\n      border-radius:"+e.button_border_radius+"px;\n    }\n    .btn-main{\n      color: "+e.button_text_color+";\n      border-color: "+i["default"](e.button_background_color).darkenByRatio(.1).toCSS()+";\n      background-color: "+e.button_background_color+";\n    }\n    .content::after{\n      -webkit-filter: blur("+e.background_blur+"px);\n      -moz-filter: blur("+e.background_blur+"px);\n      -o-filter: blur("+e.background_blur+"px);\n      -ms-filter: blur("+e.background_blur+"px);\n      filter: blur("+e.background_blur+"px);\n      opacity: "+e.background_opacity+";\n      position: absolute;\n      z-index:-1;\n      top:0;\n      left:0;\n      right:0;\n      bottom:0;\n      background:url('"+e.background_image+"') repeat-x center top;\n      background-size:cover;\n    }\n  .content::after{content:''}";return"<style type='text/css'>"+t+"</style>"},e.exports=t["default"]},/*!************************************!*\
  !*** ./src/components/template.js ***!
  \************************************/
function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(/*! mustache */4),i=r(a),o={logo:'\n    {{#settings.logo}}\n      <div class="row logo_row">\n        <div class="mb-2 mt-1">\n          {{#settings.cta_link}}<a href="{{settings.cta_link}}" target="_top">{{/settings.cta_link}}\n           <img src="{{settings.logo}}" alt="" width="160" />\n          {{#settings.cta_link}}</a>{{/settings.cta_link}}\n        </div>\n      </div\n    {{/settings.logo}}\n  ',header:'\n    {{#translations.header}}\n      <div class="row">\n        <div class="col-sm-12">\n          <h1>{{{translations.header}}}</h1>\n        </div>\n      </div>\n    {{/translations.header}}\n  ',tagline:'\n    {{#translations.tagline}}\n      <div class="row">\n        <div class="col-sm-12">\n          <h3>{{{translations.tagline}}}</h3>\n        </div>\n      </div>\n    {{/translations.tagline}}\n  ',content:'\n    <div class="row">\n      <div class="col-sm-12">\n        <p>{{{translations.content}}}</p>\n      </div>\n    </div>\n  ',cta:'\n    {{#settings.cta_link}}\n      <div class="row mt-2">\n        <div class="col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">\n          <a href={{settings.cta_link}} class=\'btn btn-main btn-lg btn-block\'>\n            <span>{{{translations.call_to_action}}}</span>\n          </a>\n        </div>\n      </div>\n    {{/settings.cta_link}}\n  ',images:'\n    <div class="images pt-4 pb-4 row flex-row">\n      {{#settings.images}}\n        <div class="col-xs-2 small-ps flex-item">\n          <img src="{{.}}" class="img-responsive" />\n        </div>\n      {{/settings.images}}\n    </div>\n  '};t["default"]=function(e){var t=void 0===arguments[1]?{}:arguments[1],n=o[e];return n?i["default"].render(n,t):""},e.exports=t["default"]},/*!*****************************!*\
  !*** ./~/color-js/color.js ***!
  \*****************************/
function(e,t,n){if("undefined"==typeof r)var r={};r.brehaut||(r.brehaut={}),function(){"use strict";function e(e,t){e=e.toString();for(var n=[],r=0,a=Math.max(t-e.length,0);a>r;r++)n.push("0");return n.push(e),n.join("")}function t(e){return e.slice(0,1).toUpperCase()+e.slice(1)}function n(e){return e.replace(/^\s+|\s+$/g,"")}function a(e){return function(){var t=this.clone();return e.apply(t,arguments),t}}function i(e,n){function r(e){return function(){return e.apply(this[u](),arguments)}}function a(){}function i(){return new a}var o=b(c),s=[],u="to"+t(e);for(var h in n)if(n.hasOwnProperty(h)){o[h]=n[h];var l=o[h];if("_"==h.slice(0,1))continue;if(h in c||"function"!=typeof l){if("function"!=typeof l){s.push(h);var f="get"+t(h),p="set"+t(h);c[f]=r(o[f]=function(e){return function(){return this[e]}}(h)),c[p]=r(o[p]=function(e){return function(t){var n=this.clone();return n[e]=t,n}}(h))}}else c[h]=r(l)}return a.prototype=o,v[e]=i,o.clone=function(){for(var e=i(),t=0,n=s.length;n>t;t++){var r=s[t];e[r]=this[r]}return e},c[u]=function(){return i()},F.push(o),o}function o(e){return c.fromObject(e)}var s={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgrey:"#A9A9A9",darkgreen:"#006400",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",grey:"#808080",green:"#008000",greenyellow:"#ADFF2F",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgrey:"#D3D3D3",lightgreen:"#90EE90",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370D8",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#D87093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",rebeccapurple:"#663399",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},u="(?:\\+|-)?\\d+",h="(?:\\+|-)?\\d*\\.\\d+",l="(?:"+u+")|(?:"+h+")";u="("+u+")",h="("+h+")",l="("+l+")";var c,f=l+"%",p="\\s*?",d=new RegExp(["^hsl(a?)\\(",l,",",f,",",f,"(,(",l,"))?\\)$"].join(p)),m=new RegExp(["^rgb(a?)\\(",u,",",u,",",u,"(,(",l,"))?\\)$"].join(p)),g=new RegExp(["^rgb(a?)\\(",f,",",f,",",f,"(,(",l,"))?\\)$"].join(p)),F=[],v={};this.object||(this.object=function(e){function t(){}return t.prototype=e,new t});var b=this.object;c={fromObject:function(e){if(!e)return b(c);for(var t=0,n=F.length;n>t;t++){var r=F[t].fromObject(e);if(r)return r}return b(c)},toString:function(){return this.toCSS()}};var y=null;i("RGB",{red:0,green:0,blue:0,alpha:0,getLuminance:function(){return.2126*this.red+.7152*this.green+.0722*this.blue},blend:function(e,t){e=e.toRGB(),t=Math.min(Math.max(t,0),1);var n=this.clone();return n.red=n.red*(1-t)+e.red*t,n.green=n.green*(1-t)+e.green*t,n.blue=n.blue*(1-t)+e.blue*t,n.alpha=n.alpha*(1-t)+e.alpha*t,n},fromObject:function(e){return e instanceof Array?this._fromRGBArray(e):"string"==typeof e?this._fromCSS(n(e)):e.hasOwnProperty("red")&&e.hasOwnProperty("green")&&e.hasOwnProperty("blue")?this._fromRGB(e):void 0},_stringParsers:[function(e){function t(t,n){var r=e.match(t);if(!r||!!r[1]+!!r[5]===1)return null;var a=v.RGB();return a.red=Math.min(1,Math.max(0,r[2]/n)),a.green=Math.min(1,Math.max(0,r[3]/n)),a.blue=Math.min(1,Math.max(0,r[4]/n)),a.alpha=r[5]?Math.min(Math.max(parseFloat(r[6]),0),1):1,a}e=n(e);var r=t(m,255);return r?r:t(g,100)},function(e){var t=e.toLowerCase();if(t in s&&(e=s[t]),e.match(/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/)){e=e.replace(/^#/,"");var n=e.length/3,r=Math.pow(16,n)-1,a=v.RGB();return a.red=parseInt(e.slice(0,n),16)/r,a.green=parseInt(e.slice(1*n,2*n),16)/r,a.blue=parseInt(e.slice(2*n),16)/r,a.alpha=1,a}},function(e){return"transparent"===e.toLowerCase()?y:void 0}],_fromCSS:function(e){for(var t=null,n=0,r=this._stringParsers.length;r>n;n++)if(t=this._stringParsers[n](e))return t},_fromRGB:function(e){var t=v.RGB();return t.red=e.red,t.green=e.green,t.blue=e.blue,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t},_fromRGBArray:function(e){var t=v.RGB();return t.red=Math.max(0,Math.min(1,e[0]/255)),t.green=Math.max(0,Math.min(1,e[1]/255)),t.blue=Math.max(0,Math.min(1,e[2]/255)),t.alpha=void 0!==e[3]?Math.max(0,Math.min(1,e[3])):1,t},toCSSHex:function(t){t=t||2;var n=Math.pow(16,t)-1,r=["#",e(Math.round(this.red*n).toString(16).toUpperCase(),t),e(Math.round(this.green*n).toString(16).toUpperCase(),t),e(Math.round(this.blue*n).toString(16).toUpperCase(),t)];return r.join("")},toCSS:function(e){if(1===this.alpha)return this.toCSSHex(e);var t=255,n=["rgba(",Math.max(0,Math.min(t,Math.round(this.red*t))),",",Math.max(0,Math.min(t,Math.round(this.green*t))),",",Math.max(0,Math.min(t,Math.round(this.blue*t))),",",Math.max(0,Math.min(1,this.alpha)),")"];return n.join("")},toHSV:function(){var e,t,n,r=v.HSV();return e=Math.min(this.red,this.green,this.blue),t=Math.max(this.red,this.green,this.blue),r.value=t,n=t-e,0==n?r.hue=r.saturation=0:(r.saturation=n/t,this.red==t?r.hue=(this.green-this.blue)/n:this.green==t?r.hue=2+(this.blue-this.red)/n:r.hue=4+(this.red-this.green)/n,r.hue=(60*r.hue+360)%360),r.alpha=this.alpha,r},toHSL:function(){return this.toHSV().toHSL()},toRGB:function(){return this.clone()}}),y=c.fromObject({red:0,blue:0,green:0,alpha:0}),i("HSV",{hue:0,saturation:0,value:1,alpha:1,shiftHue:a(function(e){var t=(this.hue+e)%360;0>t&&(t=(360+t)%360),this.hue=t}),devalueByAmount:a(function(e){this.value=Math.min(1,Math.max(this.value-e,0))}),devalueByRatio:a(function(e){this.value=Math.min(1,Math.max(this.value*(1-e),0))}),valueByAmount:a(function(e){this.value=Math.min(1,Math.max(this.value+e,0))}),valueByRatio:a(function(e){this.value=Math.min(1,Math.max(this.value*(1+e),0))}),desaturateByAmount:a(function(e){this.saturation=Math.min(1,Math.max(this.saturation-e,0))}),desaturateByRatio:a(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1-e),0))}),saturateByAmount:a(function(e){this.saturation=Math.min(1,Math.max(this.saturation+e,0))}),saturateByRatio:a(function(e){this.saturation=Math.min(1,Math.max(this.saturation*(1+e),0))}),schemeFromDegrees:function(e){for(var t=[],n=0,r=e.length;r>n;n++){var a=this.clone();a.hue=(this.hue+e[n])%360,t.push(a)}return t},complementaryScheme:function(){return this.schemeFromDegrees([0,180])},splitComplementaryScheme:function(){return this.schemeFromDegrees([0,150,320])},splitComplementaryCWScheme:function(){return this.schemeFromDegrees([0,150,300])},splitComplementaryCCWScheme:function(){return this.schemeFromDegrees([0,60,210])},triadicScheme:function(){return this.schemeFromDegrees([0,120,240])},clashScheme:function(){return this.schemeFromDegrees([0,90,270])},tetradicScheme:function(){return this.schemeFromDegrees([0,90,180,270])},fourToneCWScheme:function(){return this.schemeFromDegrees([0,60,180,240])},fourToneCCWScheme:function(){return this.schemeFromDegrees([0,120,180,300])},fiveToneAScheme:function(){return this.schemeFromDegrees([0,115,155,205,245])},fiveToneBScheme:function(){return this.schemeFromDegrees([0,40,90,130,245])},fiveToneCScheme:function(){return this.schemeFromDegrees([0,50,90,205,320])},fiveToneDScheme:function(){return this.schemeFromDegrees([0,40,155,270,310])},fiveToneEScheme:function(){return this.schemeFromDegrees([0,115,230,270,320])},sixToneCWScheme:function(){return this.schemeFromDegrees([0,30,120,150,240,270])},sixToneCCWScheme:function(){return this.schemeFromDegrees([0,90,120,210,240,330])},neutralScheme:function(){return this.schemeFromDegrees([0,15,30,45,60,75])},analogousScheme:function(){return this.schemeFromDegrees([0,30,60,90,120,150])},fromObject:function(e){if(e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("value")){var t=v.HSV();return t.hue=e.hue,t.saturation=e.saturation,t.value=e.value,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t}return null},_normalise:function(){this.hue%=360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.value=Math.min(Math.max(0,this.value)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toRGB:function(){this._normalise();var e,t,n,r,a,i=v.RGB();if(0===this.saturation)return i.red=this.value,i.green=this.value,i.blue=this.value,i.alpha=this.alpha,i;var o=this.hue/60;switch(e=Math.floor(o),t=o-e,n=this.value*(1-this.saturation),r=this.value*(1-this.saturation*t),a=this.value*(1-this.saturation*(1-t)),e){case 0:i.red=this.value,i.green=a,i.blue=n;break;case 1:i.red=r,i.green=this.value,i.blue=n;break;case 2:i.red=n,i.green=this.value,i.blue=a;break;case 3:i.red=n,i.green=r,i.blue=this.value;break;case 4:i.red=a,i.green=n,i.blue=this.value;break;default:i.red=this.value,i.green=n,i.blue=r}return i.alpha=this.alpha,i},toHSL:function(){this._normalise();var e=v.HSL();e.hue=this.hue;var t=(2-this.saturation)*this.value,n=this.saturation*this.value;return t&&2-t&&(n/=1>=t?t:2-t),t/=2,e.saturation=n,e.lightness=t,e.alpha=this.alpha,e},toHSV:function(){return this.clone()}}),i("HSL",{hue:0,saturation:0,lightness:0,alpha:1,darkenByAmount:a(function(e){this.lightness=Math.min(1,Math.max(this.lightness-e,0))}),darkenByRatio:a(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1-e),0))}),lightenByAmount:a(function(e){this.lightness=Math.min(1,Math.max(this.lightness+e,0))}),lightenByRatio:a(function(e){this.lightness=Math.min(1,Math.max(this.lightness*(1+e),0))}),fromObject:function(e){return"string"==typeof e?this._fromCSS(e):e.hasOwnProperty("hue")&&e.hasOwnProperty("saturation")&&e.hasOwnProperty("lightness")?this._fromHSL(e):void 0},_fromCSS:function(e){var t=n(e).match(d);if(!t||!!t[1]+!!t[5]===1)return null;var r=v.HSL();return r.hue=(t[2]%360+360)%360,r.saturation=Math.max(0,Math.min(parseInt(t[3],10)/100,1)),r.lightness=Math.max(0,Math.min(parseInt(t[4],10)/100,1)),r.alpha=t[5]?Math.max(0,Math.min(1,parseFloat(t[6]))):1,r},_fromHSL:function(e){var t=v.HSL();return t.hue=e.hue,t.saturation=e.saturation,t.lightness=e.lightness,t.alpha=e.hasOwnProperty("alpha")?e.alpha:1,t},_normalise:function(){this.hue=(this.hue%360+360)%360,this.saturation=Math.min(Math.max(0,this.saturation),1),this.lightness=Math.min(Math.max(0,this.lightness)),this.alpha=Math.min(1,Math.max(0,this.alpha))},toHSL:function(){return this.clone()},toHSV:function(){this._normalise();var e=v.HSV();e.hue=this.hue;var t=2*this.lightness,n=this.saturation*(1>=t?t:2-t);return e.value=(t+n)/2,e.saturation=2*n/(t+n)||0,e.alpha=this.alpha,e},toRGB:function(){return this.toHSV().toRGB()}}),o.isValid=function(e){var t,n=o(e),r=0;for(t in n)n.hasOwnProperty(t)&&r++;return r>0},r.brehaut.Color=o}.call(r.brehaut),e.exports=r.brehaut.Color},/*!********************************!*\
  !*** ./~/mustache/mustache.js ***!
  \********************************/
function(e,t,n){var r,a,i;/*!
	 * mustache.js - Logic-less {{mustache}} templates with JavaScript
	 * http://github.com/janl/mustache.js
	 */
!function(n,o){"object"==typeof t&&t?o(t):(a=[t],r=o,i="function"==typeof r?r.apply(t,a):r,!(void 0!==i&&(e.exports=i)))}(this,function(e){function t(e){return"function"==typeof e}function n(e){return e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function r(e,t){return d.call(e,t)}function a(e){return!r(m,e)}function i(e){return String(e).replace(/[&<>"'\/]/g,function(e){return g[e]})}function o(t,r){function i(){if(x&&!k)for(;g.length;)delete m[g.pop()];else g=[];x=!1,k=!1}function o(e){if("string"==typeof e&&(e=e.split(v,2)),!p(e)||2!==e.length)throw new Error("Invalid tags: "+e);l=new RegExp(n(e[0])+"\\s*"),c=new RegExp("\\s*"+n(e[1])),f=new RegExp("\\s*"+n("}"+e[1]))}if(!t)return[];var l,c,f,d=[],m=[],g=[],x=!1,k=!1;o(r||e.tags);for(var M,C,_,D,B,S,A=new h(t);!A.eos();){if(M=A.pos,_=A.scanUntil(l))for(var E=0,j=_.length;j>E;++E)D=_.charAt(E),a(D)?g.push(m.length):k=!0,m.push(["text",D,M,M+1]),M+=1,"\n"===D&&i();if(!A.scan(l))break;if(x=!0,C=A.scan(w)||"name",A.scan(F),"="===C?(_=A.scanUntil(b),A.scan(b),A.scanUntil(c)):"{"===C?(_=A.scanUntil(f),A.scan(y),A.scanUntil(c),C="&"):_=A.scanUntil(c),!A.scan(c))throw new Error("Unclosed tag at "+A.pos);if(B=[C,_,M,A.pos],m.push(B),"#"===C||"^"===C)d.push(B);else if("/"===C){if(S=d.pop(),!S)throw new Error('Unopened section "'+_+'" at '+M);if(S[1]!==_)throw new Error('Unclosed section "'+S[1]+'" at '+M)}else"name"===C||"{"===C||"&"===C?k=!0:"="===C&&o(_)}if(S=d.pop())throw new Error('Unclosed section "'+S[1]+'" at '+A.pos);return u(s(m))}function s(e){for(var t,n,r=[],a=0,i=e.length;i>a;++a)t=e[a],t&&("text"===t[0]&&n&&"text"===n[0]?(n[1]+=t[1],n[3]=t[3]):(r.push(t),n=t));return r}function u(e){for(var t,n,r=[],a=r,i=[],o=0,s=e.length;s>o;++o)switch(t=e[o],t[0]){case"#":case"^":a.push(t),i.push(t),a=t[4]=[];break;case"/":n=i.pop(),n[5]=t[2],a=i.length>0?i[i.length-1][4]:r;break;default:a.push(t)}return r}function h(e){this.string=e,this.tail=e,this.pos=0}function l(e,t){this.view=e,this.cache={".":this.view},this.parent=t}function c(){this.cache={}}var f=Object.prototype.toString,p=Array.isArray||function(e){return"[object Array]"===f.call(e)},d=RegExp.prototype.test,m=/\S/,g={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},F=/\s*/,v=/\s+/,b=/\s*=/,y=/\s*\}/,w=/#|\^|\/|>|\{|&|=|!/;h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(e){var t=this.tail.match(e);if(!t||0!==t.index)return"";var n=t[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},h.prototype.scanUntil=function(e){var t,n=this.tail.search(e);switch(n){case-1:t=this.tail,this.tail="";break;case 0:t="";break;default:t=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=t.length,t},l.prototype.push=function(e){return new l(e,this)},l.prototype.lookup=function(e){var n,r=this.cache;if(e in r)n=r[e];else{for(var a,i,o=this,s=!1;o;){if(e.indexOf(".")>0)for(n=o.view,a=e.split("."),i=0;null!=n&&i<a.length;)i===a.length-1&&null!=n&&(s="object"==typeof n&&n.hasOwnProperty(a[i])),n=n[a[i++]];else null!=o.view&&"object"==typeof o.view&&(n=o.view[e],s=o.view.hasOwnProperty(e));if(s)break;o=o.parent}r[e]=n}return t(n)&&(n=n.call(this.view)),n},c.prototype.clearCache=function(){this.cache={}},c.prototype.parse=function(e,t){var n=this.cache,r=n[e];return null==r&&(r=n[e]=o(e,t)),r},c.prototype.render=function(e,t,n){var r=this.parse(e),a=t instanceof l?t:new l(t);return this.renderTokens(r,a,n,e)},c.prototype.renderTokens=function(e,t,n,r){for(var a,i,o,s="",u=0,h=e.length;h>u;++u)o=void 0,a=e[u],i=a[0],"#"===i?o=this._renderSection(a,t,n,r):"^"===i?o=this._renderInverted(a,t,n,r):">"===i?o=this._renderPartial(a,t,n,r):"&"===i?o=this._unescapedValue(a,t):"name"===i?o=this._escapedValue(a,t):"text"===i&&(o=this._rawValue(a)),void 0!==o&&(s+=o);return s},c.prototype._renderSection=function(e,n,r,a){function i(e){return o.render(e,n,r)}var o=this,s="",u=n.lookup(e[1]);if(u){if(p(u))for(var h=0,l=u.length;l>h;++h)s+=this.renderTokens(e[4],n.push(u[h]),r,a);else if("object"==typeof u||"string"==typeof u||"number"==typeof u)s+=this.renderTokens(e[4],n.push(u),r,a);else if(t(u)){if("string"!=typeof a)throw new Error("Cannot use higher-order sections without the original template");u=u.call(n.view,a.slice(e[3],e[5]),i),null!=u&&(s+=u)}else s+=this.renderTokens(e[4],n,r,a);return s}},c.prototype._renderInverted=function(e,t,n,r){var a=t.lookup(e[1]);return!a||p(a)&&0===a.length?this.renderTokens(e[4],t,n,r):void 0},c.prototype._renderPartial=function(e,n,r){if(r){var a=t(r)?r(e[1]):r[e[1]];return null!=a?this.renderTokens(this.parse(a),n,r,a):void 0}},c.prototype._unescapedValue=function(e,t){var n=t.lookup(e[1]);return null!=n?n:void 0},c.prototype._escapedValue=function(t,n){var r=n.lookup(t[1]);return null!=r?e.escape(r):void 0},c.prototype._rawValue=function(e){return e[1]},e.name="mustache.js",e.version="2.0.0",e.tags=["{{","}}"];var x=new c;e.clearCache=function(){return x.clearCache()},e.parse=function(e,t){return x.parse(e,t)},e.render=function(e,t,n){return x.render(e,t,n)},e.to_html=function(n,r,a,i){var o=e.render(n,r,a);return t(i)?void i(o):o},e.escape=i,e.Scanner=h,e.Context=l,e.Writer=c})}])});