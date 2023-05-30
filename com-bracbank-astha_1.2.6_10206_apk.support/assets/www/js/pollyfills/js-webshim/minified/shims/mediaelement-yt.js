webshims.register("mediaelement-yt",function(e,t,a,i,r){"use strict";var n=t.mediaelement,o=e.Deferred(),d=function(){a.YT||t.loader.loadScript("https://www.youtube.com/player_api"),d=e.noop},l=a.Modernizr,u=(!l||!l.videoautoplay)&&/iP(hone|od|ad)|android/i.test(navigator.userAgent);a.onYouTubePlayerAPIReady=function(){o.resolve(),d=e.noop},a.YT&&YT.Player&&a.onYouTubePlayerAPIReady();var h={paused:!0,ended:!1,currentSrc:"",duration:a.NaN,readyState:0,networkState:0,videoHeight:0,videoWidth:0,error:null,buffered:{start:function(e){return e?void t.error("buffered index size error"):0},end:function(e){return e?void t.error("buffered index size error"):0},length:0}},s=Object.keys(h),c={currentTime:0,volume:1,muted:!1},m=e.extend({isActive:"html5",activating:"html5",wasSwfReady:!1,_metadata:!1,_callMeta:!1,currentTime:0,_buffered:0,_ppFlag:r},h,c),g=function(t,a){a=e.Event(a),a.preventDefault(),e.event.trigger(a,r,t)},v=function(){var e=["_buffered","_metadata","_ppFlag","currentSrc","currentTime","duration","ended","networkState","paused","videoHeight","videoWidth","_callMeta"],t=e.length;return function(a){if(a){var i=t,r=a.networkState;for(a.readyState=0;--i;)delete a[e[i]];a.buffered.length=0,clearInterval(a._timeInterval),r&&g(a._elem,"emptied")}}}(),p=function(){var t={},r=function(a){var r,n,o;return t[a.currentSrc]?r=t[a.currentSrc]:a.videoHeight&&a.videoWidth?(t[a.currentSrc]={width:a.videoWidth,height:a.videoHeight},r=t[a.currentSrc]):(n=e.attr(a._elem,"poster"))&&(r=t[n],r||(o=i.createElement("img"),o.onload=function(){t[n]={width:this.width,height:this.height},t[n].height&&t[n].width?y(a,e.prop(a._elem,"controls")):delete t[n],o.onload=null},o.src=n,o.complete&&o.onload&&o.onload())),r||{width:300,height:"video"==a._elemNodeName?150:50}},n=function(e,t){return e.style[t]||e.currentStyle&&e.currentStyle[t]||a.getComputedStyle&&(a.getComputedStyle(e,null)||{})[t]||""},o=["minWidth","maxWidth","minHeight","maxHeight"],d=function(e,t){var a,i,r=!1;for(a=0;4>a;a++)i=n(e,o[a]),parseFloat(i,10)&&(r=!0,t[o[a]]=i);return r},l=function(t){var a,i,o=t._elem,l={width:"auto"==n(o,"width"),height:"auto"==n(o,"height")},u={width:!l.width&&e(o).width(),height:!l.height&&e(o).height()};return(l.width||l.height)&&(a=r(t),i=a.width/a.height,l.width&&l.height?(u.width=a.width,u.height=a.height):l.width?u.width=u.height*i:l.height&&(u.height=u.width/i),d(o,u)&&(t.shadowElem.css(u),l.width&&(u.width=t.shadowElem.height()*i),l.height&&(u.height=(l.width?u.width:t.shadowElem.width())/i),l.width&&l.height&&(t.shadowElem.css(u),u.height=t.shadowElem.width()/i,u.width=u.height*i,t.shadowElem.css(u),u.width=t.shadowElem.height()*i,u.height=u.width/i))),u};return l}(),y=function(e){var t,i=e.shadowElem;"third"==e.isActive&&(e&&e._ytAPI&&e._ytAPI.getPlaybackQuality&&(a.ytapi=e._ytAPI),e._elem.style.display="",t=p(e),e._elem.style.display="none",i.css(t))},f=function(e){try{e.nodeName}catch(a){return null}var i=t.data(e,"mediaelement");return i&&"third"==i.isActive?i:null},w=/vq\=(small|medium|large|hd720|hd1080|highres)/i,_=function(a){var i,r=(a.match(w)||["",""])[1].toLowerCase();return a=a.split("?"),-1!=a[0].indexOf("youtube.com/watch")&&a[1]?(a=a[1].split("&"),e.each(a,function(e,t){return t=t.split("="),"v"==t[0]?(a=t[1],i=!0,!1):void 0})):-1!=a[0].indexOf("youtube.com/v/")&&(a=a[0].split("/"),e.each(a,function(e,t){return i?(a=t,!1):void("v"==t&&(i=!0))})),i||t.error("no youtube id found: "+a),{videoId:a,suggestedQuality:r}},I=function(t){t&&(t._ppFlag===r&&e.prop(t._elem,"autoplay")||!t.paused)&&setTimeout(function(){if("third"==t.isActive&&(t._ppFlag===r||!t.paused))try{e(t._elem).play()}catch(a){}},1)},S=e.noop;!function(){var a={play:1,playing:1},r=["play","pause","playing","canplay","progress","waiting","ended","loadedmetadata","loadstart","durationchange","emptied"],n=r.map(function(e){return e+".webshimspolyfill"}).join(" "),o=function(i){var r=t.data(i.target,"mediaelement");if(r){var n=i.originalEvent&&i.originalEvent.type===i.type;n==("third"==r.activating)&&(i.stopImmediatePropagation(),a[i.type]&&r.isActive!=r.activating&&e(i.target).pause())}};(S=function(a){e(a).off(n).on(n,o),r.forEach(function(e){t.moveToFirstEvent(a,e)})})(i)}(),e(i).on("emptied",function(e){var t=f(e.target);I(t)}),n.setActive=function(a,i,r){if(r||(r=t.data(a,"mediaelement")),r&&r.isActive!=i){"html5"!=i&&"third"!=i&&t.warn("wrong type for mediaelement activating: "+i);var n=t.data(a,"shadowData");r.activating=i,e(a).pause(),r.isActive=i,"third"==i?(n.shadowElement=n.shadowFocusElement=r.shadowElem[0],e(a).addClass("yt-api-active nonnative-api-active").hide().getShadowElement().show()):(clearInterval(r._timeInterval),e(a).removeClass("yt-api-active nonnative-api-active").show().getShadowElement().hide(),n.shadowElement=n.shadowFocusElement=!1),e(a).trigger("mediaelementapichange")}};var P=function(t,a){a._ppFlag=!0,"playing"==t&&(P("play",a),a.readyState<3&&(a.readyState=3,g(a._elem,"canplay")),e(a._elem).trigger("playing")),"play"==t&&a.paused?(a.paused=!1,g(a._elem,"play")):"pause"!=t||a.paused||(a.paused=!0,g(a._elem,"pause"))},A={small:{height:240,width:320},medium:{height:360,width:640},large:{height:480,width:853},hd720:{height:720,width:1280},hd1080:{height:1080,width:1920},highres:{height:1080,width:1920}},b=function(t,a,i,r){o.done(function(){var n=function(){var a,r;i._metadata&&i._ytAPI.getVideoLoadedFraction&&(r=i._ytAPI.getVideoLoadedFraction(),a=r*i.duration,i._buffered!==a&&(i._buffered=a,i.buffered.length=1,e(t).trigger("progress")),r>.99&&(i.networkState=1),i.readyState<4&&i.currentTime&&(i._buffered-i.currentTime>9||r>.9)&&(i.readyState=4,g(i._elem,"canplaythrough")))},o=function(){if(i._ytAPI&&i._ytAPI.getCurrentTime){var a=i._ytAPI.getCurrentTime();i.currentTime!=a&&(i.currentTime=a,e(t).trigger("timeupdate")),n()}},d=function(){if("third"==i.isActive&&i._ytAPI&&i._ytAPI.getVolume){var a,r=i._ytAPI.getVolume()/100,d=i._ytAPI.isMuted();r!=i.volume&&(i.volume=r,a=!0),d!=i.muted&&(i.muted=d,a=!0),o(),n(),a&&e(t).trigger("volumechange")}},l=function(){clearInterval(i._timeInterval),i._timeInterval=setInterval(function(){var a=i._ytAPI.getCurrentTime();i.currentTime!=a&&(i.currentTime=a,e.event.trigger("timeupdate",null,t,!0))},270)};i._metatrys=0,i._ytAPI=new YT.Player(a,{height:"100%",width:"100%",allowfullscreen:"allowfullscreen",webkitallowfullscreen:"allowfullscreen",playerVars:{allowfullscreen:!0,fs:1,rel:0,showinfo:0,autohide:1,controls:e.prop(t,"controls")?1:0},videoId:r.videoId,events:{onReady:function(){I(i),setTimeout(d,9),setInterval(d,5e3)},onStateChange:function(a){if(a.target.getDuration){var n;if(!i._metadata){r.suggestedQuality&&i._ytAPI.setPlaybackQuality(r.suggestedQuality);var o=a.target.getDuration(),u=a.target.getPlaybackQuality();o&&(i._metadata=!0,i.duration=o,i.readyState<1&&(i.readyState=1),i.networkState<1&&(i.networkState=2),n=!0,A[u]||(u="medium"),i.videoHeight=A[u].height,i.videoWidth=A[u].width),o&&i._metatrys<3&&("unknown"==u||r.suggestedQuality&&u!=r.suggestedQuality)?(i._metatrys++,i._metadata=!1,n=!1):i._metatrys=0}n&&e(t).trigger("durationchange").trigger("loadedmetadata"),setTimeout(d,9),1==a.data?(P("playing",i),l()):2==a.data?(clearInterval(i._timeInterval),P("pause",i)):3==a.data?(i.readyState>2&&(i.readyState=2),i.networkState=2,e(t).trigger("waiting")):0===a.data&&(i.readyState>4&&(i.readyState=4),i.networkState=1,clearInterval(i._timeInterval),e(t).trigger("ended"))}}}}),e(t).on("updateytdata",d)})};if("matchMedia"in a){var T=!1;try{T=a.matchMedia("only all").matches}catch(E){}T&&(n.sortMedia=function(e,t){return e=!e.media||matchMedia(e.media).matches,t=!t.media||matchMedia(t.media).matches,e==t?0:e?-1:1})}n.createSWF=function(a,i,r){r||(r=t.data(a,"mediaelement"));var l="yt-"+t.getID(a),u=_(i.src),h=e.prop(a,"controls"),s={};if(d(),((s.height=e.attr(a,"height")||"")||(s.width=e.attr(a,"width")||""))&&(e(a).css(s),t.warn("width or height content attributes used. Webshims prefers the usage of CSS (computed styles or inline styles) to detect size of a video/audio. It's really more powerfull.")),r)return n.setActive(a,"third",r),r.currentSrc="",v(r),r.currentSrc=i.srcProp,h!=r._hasControls?(r.shadowElem.html('<div id="'+l+'">'),b(a,l,r,u)):o.done(function(){r._ytAPI.cueVideoById&&r._ytAPI.cueVideoById(u)}),r._hasControls=h,void g(r._elem,"loadstart");var c=e('<div class="polyfill-video polyfill-mediaelement '+t.shadowClass+'" id="wrapper-'+l+'"><div id="'+l+'"></div>').css({position:"relative",overflow:"hidden"}),p=function(){y(r)};r=t.data(a,"mediaelement",t.objectCreate(m,{shadowElem:{value:c},_elem:{value:a},_hasControls:{value:h},currentSrc:{value:i.srcProp},buffered:{value:{start:function(e){return e>=r.buffered.length?void t.error("buffered index size error"):0},end:function(e){return e>=r.buffered.length?void t.error("buffered index size error"):r._buffered},length:0}}})),t.addShadowDom(a,c),n.setActive(a,"third",r),S(a),c.insertBefore(a),y(r),b(a,l,r,u),e(a).on("updatemediaelementdimensions loadedmetadata emptied",p).onWSOff("updateshadowdom",p),g(r._elem,"loadstart")},function(){var a,i=function(t){clearTimeout(t.updateDataTimer),t.updateDataTimer=setTimeout(function(){e(t._elem).triggerHandler("updateytdata")},9)},n={},o=function(e){n[e]={get:function(){var t=f(this);return t?t[e]:a[e].prop._supget.apply(this)},writeable:!1}},d=function(e,t){o(e),delete n[e].writeable,n[e].set=t};s.forEach(o),d("currentTime",function(e){var t=f(this);return t?(e*=1,void(!isNaN(e)&&t._ytAPI&&t._ytAPI.seekTo&&(t._ytAPI.seekTo(e),i(t)))):a.currentTime.prop._supset.apply(this,arguments)}),d("muted",function(e){var t=f(this);return t?void(t._ytAPI&&t._ytAPI.mute&&(t._ytAPI[e?"mute":"unMute"](),i(t))):a.muted.prop._supset.apply(this,arguments)}),d("volume",function(e){var r=f(this);return r?(e*=100,void(!isNaN(e)&&r._ytAPI&&r._ytAPI.setVolume&&((0>e||e>100)&&t.error("volume greater or less than allowed "+e/100),r._ytAPI.setVolume(e),i(r)))):a.volume.prop._supset.apply(this,arguments)}),e.each(["play","pause"],function(e,i){var o=i+"Video";n[i]={value:function(){var e=f(this);return e?void(e._ytAPI&&e._ytAPI[o]&&(!u||e.readyState||e.networkState||e._ppFlag!==r?(e._ytAPI[o](),P(i,e)):t.warn("youtube video play needs to be directly activated by user, if you use a video overlay set pointer-events to none."))):a[i].prop._supvalue.apply(this,arguments)}}}),a=t.defineNodeNameProperties("video",n,"prop"),t.onNodeNamesPropertyModify("video","controls",function(t,a){var i=f(this);e(this)[a?"addClass":"removeClass"]("webshims-controls"),i&&i._ytAPI&&!i.readyState&&e(this).mediaLoad()})}()});