var swfmini=function(){function e(){if(!h){h=!0;for(var e=g.length,t=0;e>t;t++)g[t]()}}function t(e){h?e():g[g.length]=e}function a(){y&&i()}function i(){var e=f.getElementsByTagName("body")[0],t=r(s);t.setAttribute("type",l);var a=e.appendChild(t);if(a){var i=0;!function(){if(typeof a.GetVariable!=d){var r=a.GetVariable("$version");r&&(r=r.split(" ")[1].split(","),b.pv=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)])}else if(10>i)return i++,void setTimeout(arguments.callee,10);e.removeChild(t),a=null}()}}function r(e){return f.createElement(e)}function o(e){var t=b.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}var n=function(){m.error("This method was removed from swfmini")},d="undefined",s="object",m=window.webshims,u="Shockwave Flash",p="ShockwaveFlash.ShockwaveFlash",l="application/x-shockwave-flash",c=window,f=document,v=navigator,y=!1,g=[a],h=!1,w=!0,b=function(){var e=typeof f.getElementById!=d&&typeof f.getElementsByTagName!=d&&typeof f.createElement!=d,t=v.userAgent.toLowerCase(),a=v.platform.toLowerCase(),i=/win/.test(a?a:t),r=/mac/.test(a?a:t),o=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,n=!1,m=[0,0,0],g=null;if(typeof v.plugins!=d&&typeof v.plugins[u]==s)g=v.plugins[u].description,!g||typeof v.mimeTypes!=d&&v.mimeTypes[l]&&!v.mimeTypes[l].enabledPlugin||(y=!0,n=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),m[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),m[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),m[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof c.ActiveXObject!=d)try{var h=new ActiveXObject(p);h&&(g=h.GetVariable("$version"),g&&(n=!0,g=g.split(" ")[1].split(","),m=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(w){}return{w3:e,pv:m,wk:o,ie:n,win:i,mac:r}}();m.ready("DOM",e),m.loader.addModule("swfmini-embed",{d:["swfmini"]});var T=o("9.0.0")?function(){return m.loader.loadList(["swfmini-embed"]),!0}:m.$.noop;return m.support.mediaelement?m.ready("WINDOWLOAD",T):T(),{registerObject:n,getObjectById:n,embedSWF:function(e,t,a,i,r,o,n,d,s,u){var p=arguments;T()?m.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,p)}):u&&u({success:!1,id:t})},switchOffAutoHideShow:function(){w=!1},ua:b,getFlashPlayerVersion:function(){return{major:b.pv[0],minor:b.pv[1],release:b.pv[2]}},hasFlashPlayerVersion:o,createSWF:function(e,t,a){return b.w3?createSWF(e,t,a):void 0},showExpressInstall:n,removeSWF:n,createCSS:n,addDomLoadEvent:t,addLoadEvent:n,expressInstallCallback:n}}();webshims.isReady("swfmini",!0),function(e){"use strict";var t=e.support,a=t.mediaelement,i=!1,r=e.bugs,o="mediaelement-jaris",n=function(){e.ready(o,function(){e.mediaelement.createSWF||(e.mediaelement.loadSwf=!0,e.reTest([o],a))})},d=e.cfg,s=d.mediaelement,m=-1!=navigator.userAgent.indexOf("MSIE");if(!s)return void e.error("mediaelement wasn't implemented but loaded");if(a){var u=document.createElement("video");t.videoBuffered="buffered"in u,t.mediaDefaultMuted="defaultMuted"in u,i="loop"in u,t.mediaLoop=i,e.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!t.videoBuffered||!i||!t.mediaDefaultMuted&&m&&"ActiveXObject"in window)&&(e.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),e.loader.loadList(["mediaelement-native-fix"]))}t.track&&!r.track&&!function(){if(!r.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(e){r.track=!0}}}(),window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype&&(CanvasRenderingContext2D.prototype.wsImageComplete=function(e){e.call(this,this)}),e.register("mediaelement-core",function(e,r,d,s,m,u){var p=swfmini.hasFlashPlayerVersion("11.3"),l=r.mediaelement,c=!1;l.parseRtmp=function(e){var t,a,i,o=e.src.split("://"),n=o[1].split("/");for(e.server=o[0]+"://"+n[0]+"/",e.streamId=[],t=1,a=n.length;a>t;t++)i||-1===n[t].indexOf(":")||(n[t]=n[t].split(":")[1],i=!0),i?e.streamId.push(n[t]):e.server+=n[t]+"/";e.streamId.length||r.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var f=function(t,a){t=e(t);var i,r={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return r.src?(i=t.attr("data-server"),null!=i&&(r.server=i),i=t.attr("type")||t.attr("data-type"),i?(r.type=i,r.container=e.trim(i.split(";")[0])):(a||(a=t[0].nodeName.toLowerCase(),"source"==a&&(a=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),r.server?(r.type=a+"/rtmp",r.container=a+"/rtmp"):(i=l.getTypeForSrc(r.src,a,r),i&&(r.type=i,r.container=i))),i=t.attr("media"),i&&(r.media=i),("audio/rtmp"==r.type||"video/rtmp"==r.type)&&(r.server?r.streamId=r.src:l.parseRtmp(r)),r):r},v=!p&&"postMessage"in d&&a,y=function(){y.loaded||(y.loaded=!0,u.noAutoTrack||r.ready("WINDOWLOAD",function(){h(),r.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&v&&(t=!0,c&&r.loader.loadScript("https://www.youtube.com/player_api"),e(function(){r._polyfill(["mediaelement-yt"])}))}}(),h=function(){p?n():g()};r.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),l.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},l.mimeTypes.source=e.extend({},l.mimeTypes.audio,l.mimeTypes.video),l.getTypeForSrc=function(t,a){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(!t.indexOf("mediastream:")||!t.indexOf("blob:http"))return"usermedia";if(!t.indexOf("webshimstream"))return"jarisplayer/stream";if(!t.indexOf("rtmp"))return a+"/rtmp";t=t.split("?")[0].split("#")[0].split("."),t=t[t.length-1];var i;return e.each(l.mimeTypes[a],function(e,a){return-1!==a.indexOf(t)?(i=e,!1):void 0}),i},l.srces=function(t){var a=[];t=e(t);var i=t[0].nodeName.toLowerCase(),r=f(t,i);return r.src?a.push(r):e("source",t).each(function(){r=f(this,i),r.src&&a.push(r)}),a},l.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","jarisplayer/stream","video/youtube","video/rtmp","audio/rtmp"],l.canThirdPlaySrces=function(t,a){var i="";return(p||v)&&(t=e(t),a=a||l.srces(t),e.each(a,function(e,t){return t.container&&t.src&&(p&&-1!=l.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(i=t,!1):void 0})),i};var w={};l.canNativePlaySrces=function(t,i){var r="";if(a){t=e(t);var o=(t[0].nodeName||"").toLowerCase(),n=(w[o]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!n)return r;i=i||l.srces(t),e.each(i,function(e,a){return"usermedia"==a.type||a.type&&n.call(t[0],a.type)?(r=a,!1):void 0})}return r};var b=/^\s*application\/octet\-stream\s*$/i,T=function(){var t=b.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};l.setError=function(t,a){if(e("source",t).filter(T).length){r.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(t).mediaLoad()}catch(i){}}else a||(a="can't play sources"),e(t).pause().data("mediaerror",a),r.error("mediaelementError: "+a+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){e(t).data("mediaerror")&&e(t).addClass("media-error").trigger("mediaerror")},1)};var x=function(){var t,a=p?o:"mediaelement-yt";return function(i,o,n){r.ready(a,function(){l.createSWF&&e(i).parent()[0]?l.createSWF(i,o,n):t||(t=!0,h(),x(i,o,n))}),t||!v||l.createSWF||(c=!0,g())}}(),S={"native":function(e,t,a){a&&"third"==a.isActive&&l.setActive(e,"html5",a)},third:x},C=function(e,t,a){var i,r,o=[{test:"canNativePlaySrces",activate:"native"},{test:"canThirdPlaySrces",activate:"third"}];for((u.preferFlash||t&&"third"==t.isActive)&&o.reverse(),i=0;2>i;i++)if(r=l[o[i].test](e,a)){S[o[i].activate](e,r,t);break}r||(l.setError(e,!1),t&&"third"==t.isActive&&l.setActive(e,"html5",t))},I=/^(?:embed|object|datalist|picture)$/i,O=function(t,a){var i=r.data(t,"mediaelementBase")||r.data(t,"mediaelementBase",{}),o=l.srces(t),n=t.parentNode;clearTimeout(i.loadTimer),e(t).removeClass("media-error"),e.data(t,"mediaerror",!1),o.length&&n&&1==n.nodeType&&!I.test(n.nodeName||"")&&(a=a||r.data(t,"mediaelement"),l.sortMedia&&o.sort(l.sortMedia),C(t,a,o))};l.selectSource=O,e(s).on("ended",function(t){var a=r.data(t.target,"mediaelement");(!i||a&&"html5"!=a.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()})});var N=!1,k=function(){var o=function(){r.implement(this,"mediaelement")&&(O(this),t.mediaDefaultMuted||null==e.attr(this,"muted")||e.prop(this,"muted",!0))};r.ready("dom-support",function(){N=!0,i||r.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var i;i=r.defineNodeNameProperty(t,"load",{prop:{value:function(){var t=r.data(this,"mediaelement");O(this,t),!a||t&&"html5"!=t.isActive||!i.prop._supvalue||i.prop._supvalue.apply(this,arguments),!y.loaded&&this.querySelector("track")&&y(),e(this).triggerHandler("wsmediareload")}}}),w[t]=r.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(i){var r="";return a&&w[t].prop._supvalue&&(r=w[t].prop._supvalue.call(this,i),"no"==r&&(r="")),!r&&p&&(i=e.trim((i||"").split(";")[0]),-1!=l.swfMimeTypes.indexOf(i)&&(r="maybe")),!r&&v&&"video/youtube"==i&&(r="maybe"),r}}})}),r.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=r.data(e,"mediaelementBase")||r.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){O(e),e=null},9)}}),r.addReady(function(t,a){var i=e("video, audio",t).add(a.filter("video, audio")).each(o);!y.loaded&&e("track",i).length&&y(),i=null})}),a&&!N&&r.addReady(function(t,a){N||e("video, audio",t).add(a.filter("video, audio")).each(function(){return l.canNativePlaySrces(this)?void 0:(c=!0,h(),N=!0,!1)})})};l.loadDebugger=function(){r.ready("dom-support",function(){r.loader.loadScript("mediaelement-debug")})},{noCombo:1,media:1}[r.cfg.debug]&&e(s).on("mediaerror",function(){l.loadDebugger()}),a?(r.isReady("mediaelement-core",!0),k(),r.ready("WINDOWLOAD mediaelement",h)):r.ready(o,k),r.ready("track",y),"complete"==s.readyState&&r.isReady("WINDOWLOAD",!0)})}(webshims);