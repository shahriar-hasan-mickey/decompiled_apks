!function(e){var t=function(){window.asyncWebshims||(window.asyncWebshims={cfg:[],ready:[]})},n=function(){window.jQuery&&(e(jQuery),e=function(){return window.webshims})};window.webshims={setOptions:function(){t(),window.asyncWebshims.cfg.push(arguments)},ready:function(){t(),window.asyncWebshims.ready.push(arguments)},activeLang:function(e){t(),window.asyncWebshims.lang=e},polyfill:function(e){t(),window.asyncWebshims.polyfill=e},_curScript:function(){var e,t,n,i,a,r=document.currentScript;if(!r){try{throw new Error("")}catch(o){for(n=(o.sourceURL||o.stack||"").split("\n"),a=/(?:fil|htt|wid|abo|app|res)(.)+/i,t=0;t<n.length;t++)if(i=n[t].match(a)){n=i[0].replace(/[\:\s\(]+[\d\:\)\(\s]+$/,"");break}}for(e=document.scripts||document.getElementsByTagName("script"),t=0;t<e.length&&(!e[t].getAttribute("src")||(r=e[t],"interactive"!=e[t].readyState&&n!=e[t].src));t++);}return r}()},window.webshim=window.webshims,window.webshims.timer=setInterval(n,0),n(),"function"==typeof define&&define.amd&&define("polyfiller",["jquery"],e)}(function(e){"use strict";function t(e){return document.createElement(e)}var n,i,a=window.navigator,r=window.webshims,o="dom-support",s=e.event.special,c=e([]),d=window.asyncWebshims,u={},l=window.Object,f=function(e){return e+"\n//# sourceURL="+this.url},m=function(e){return y.enhanceAuto||"auto"!=e?e:!1},p={matchmedia:"matchMedia",xhr2:"filereader",promise:"es6",URL:"url"},h="capture"in t("input");clearInterval(r.timer),u.advancedObjectProperties=u.objectAccessor=u.ES5=!!("create"in l&&"seal"in l),!u.ES5||"toJSON"in Date.prototype||(u.ES5=!1),i=e.support.hrefNormalized===!1?r._curScript.getAttribute("src",4):r._curScript.src,i=i.split("?")[0].slice(0,i.lastIndexOf("/")+1)+"shims/",e.extend(r,{version:"1.15.10",cfg:{enhanceAuto:window.Audio&&(!window.matchMedia||matchMedia("(min-device-width: 721px)").matches),waitReady:!0,loadStyles:!0,wsdoc:document,wspopover:{appendTo:"auto",hideOnBlur:!0},ajax:{crossDomain:!0},loadScript:function(t,n){e.ajax(e.extend({},y.ajax,{url:t,success:n,dataType:"script",cache:!0,global:!1,dataFilter:f}))},basePath:i},support:u,bugs:{},modules:{},features:{},featureList:[],setOptions:function(t,n){"string"==typeof t&&arguments.length>1?y[t]=e.isPlainObject(n)?e.extend(!0,y[t]||{},n):n:"object"==typeof t&&e.extend(!0,y,t)},_getAutoEnhance:m,addPolyfill:function(t,n){n=n||{};var i=n.f||t;g[i]||(g[i]=[],r.featureList.push(i),y[i]={}),g[i].push(t),n.options=e.extend(y[i],n.options),S(t,n),n.methodNames&&e.each(n.methodNames,function(e,t){r.addMethodName(t)})},polyfill:function(){return function(e){return e||(e=r.featureList),"string"==typeof e&&(e=e.split(" ")),r._polyfill(e)}}(),_polyfill:function(t){var i,a,r=[];n.run||(i=-1!==e.inArray("forms-ext",t),n(),a=i&&!x["form-number-date-ui"].test()||!h&&-1!==e.inArray("mediacapture",t),i&&-1==e.inArray("forms",t)&&t.push("forms"),y.loadStyles&&k.loadCSS("styles/shim"+(a?"-ext":"")+".css")),y.waitReady&&(e.readyWait++,v(t,function(){e.ready(!0)})),e.each(t,function(e,t){return t=p[t]||t,g[t]?(t!==g[t][0]&&v(g[t],function(){w(t,!0)}),void(r=r.concat(g[t]))):void w(t,!0)}),A(r),e.each(t,function(e,t){var n=y[t];n&&("mediaelement"==t&&(n.replaceUI=m(n.replaceUI))&&n.plugins.unshift("mediacontrols"),n.plugins&&n.plugins.length&&A(y[t].plugins))})},reTest:function(){var t,n=function(n,i){var a=x[i],r=i+"Ready";!a||a.loaded||(a.test&&e.isFunction(a.test)?a.test([]):a.test)||(s[r]&&delete s[r],g[a.f],t.push(i))};return function(i){"string"==typeof i&&(i=i.split(" ")),t=[],e.each(i,n),A(t)}}(),isReady:function(t,n){if(t+="Ready",n){if(s[t]&&s[t].add)return!0;s[t]=e.extend(s[t]||{},{add:function(e){e.handler.call(this,t)}}),e(document).triggerHandler(t)}return!(!s[t]||!s[t].add)||!1},ready:function(t,n){var i=arguments[2];if("string"==typeof t&&(t=t.split(" ")),i||(t=e.map(e.grep(t,function(e){return!w(e)}),function(e){return e+"Ready"})),!t.length)return void n(e,r,window,document);var a=t.shift(),o=function(){v(t,n,!0)};e(document).one(a,o)},capturingEvents:function(t,n){document.addEventListener&&("string"==typeof t&&(t=[t]),e.each(t,function(t,i){var a=function(t){return t=e.event.fix(t),n&&r.capturingEventPrevented&&r.capturingEventPrevented(t),e.event.dispatch.call(this,t)};s[i]=s[i]||{},s[i].setup||s[i].teardown||e.extend(s[i],{setup:function(){this.addEventListener(i,a,!0)},teardown:function(){this.removeEventListener(i,a,!0)}})}))},register:function(t,n){var i=x[t];if(!i)return void r.error("can't find module: "+t);i.loaded=!0;var a=function(){n(e,r,window,document,void 0,i.options),w(t,!0)};i.d&&i.d.length?v(i.d,a):a()},c:{},loader:{addModule:function(t,n){x[t]=n,n.name=n.name||t,n.c||(n.c=[]),e.each(n.c,function(e,n){r.c[n]||(r.c[n]=[]),r.c[n].push(t)})},loadList:function(){var t=[],n=function(n,i){"string"==typeof i&&(i=[i]),e.merge(t,i),k.loadScript(n,!1,i)},i=function(n,i){if(w(n)||-1!=e.inArray(n,t))return!0;var a,r=x[n];return r?(a=r.test&&e.isFunction(r.test)?r.test(i):r.test,a?(w(n,!0),!0):!1):!0},a=function(t,n){if(t.d&&t.d.length){var a=function(t,a){i(a,n)||-1!=e.inArray(a,n)||n.push(a)};e.each(t.d,function(t,n){x[n]?x[n].loaded||a(t,n):g[n]&&(e.each(g[n],a),v(g[n],function(){w(n,!0)}))}),t.noAutoCallback||(t.noAutoCallback=!0)}};return function(o){var s,c,d,u,l=[],f=function(i,a){return u=a,e.each(r.c[a],function(n,i){return-1==e.inArray(i,l)||-1!=e.inArray(i,t)?(u=!1,!1):void 0}),u?(n("combos/"+u,r.c[u]),!1):void 0};for(c=0;c<o.length;c++)s=x[o[c]],s&&!i(s.name,o)&&(s.css&&y.loadStyles&&k.loadCSS(s.css),s.loadInit&&s.loadInit(),a(s,o),s.loaded||l.push(s.name),s.loaded=!0);for(c=0,d=l.length;d>c;c++)u=!1,s=l[c],-1==e.inArray(s,t)&&("noCombo"!=y.debug&&e.each(x[s].c,f),u||n(x[s].src||s,s))}}(),makePath:function(e){return-1!=e.indexOf("//")||0===e.indexOf("/")?e:(-1==e.indexOf(".")&&(e+=".js"),y.addCacheBuster&&(e+=y.addCacheBuster),y.basePath+e)},loadCSS:function(){var t,n={};return function(i){i=this.makePath(i),n[i]||(t=t||e("link, style")[0]||e("script")[0],n[i]=1,e('<link rel="stylesheet" />').insertBefore(t).attr({href:i}))}}(),loadScript:function(){var t={};return function(n,i,a,r){if(r||(n=k.makePath(n)),!t[n]){var o=function(){i&&i(),a&&("string"==typeof a&&(a=a.split(" ")),e.each(a,function(e,t){x[t]&&(x[t].afterLoad&&x[t].afterLoad(),w(x[t].noAutoCallback?t+"FileLoaded":t,!0))}))};t[n]=1,y.loadScript(n,o,e.noop)}}}()}});var y=r.cfg,g=r.features,w=r.isReady,v=r.ready,b=r.addPolyfill,x=r.modules,k=r.loader,A=k.loadList,S=k.addModule,L=r.bugs,M=[],P={warn:1,error:1},D=e.fn,j=t("video");r.addMethodName=function(e){e=e.split(":");var t=e[1];1==e.length?(t=e[0],e=e[0]):e=e[0],D[e]=function(){return this.callProp(t,arguments)}},D.callProp=function(t,n){var i;return n||(n=[]),this.each(function(){var a=e.prop(this,t);if(a&&a.apply){if(i=a.apply(this,n),void 0!==i)return!1}else r.warn(t+" is not a method of "+this)}),void 0!==i?i:this},r.activeLang=function(){"language"in a||(a.language=a.browserLanguage||"");var t=e.attr(document.documentElement,"lang")||a.language;return v("webshimLocalization",function(){r.activeLang(t)}),function(e){if(e)if("string"==typeof e)t=e;else if("object"==typeof e){var n=arguments,i=this;v("webshimLocalization",function(){r.activeLang.apply(i,n)})}return t}}(),r.errorLog=[],e.each(["log","error","warn","info"],function(e,t){r[t]=function(e){(P[t]&&y.debug!==!1||y.debug)&&(r.errorLog.push(e),window.console&&console.log&&void 0)}}),function(){e.isDOMReady=e.isReady;var t=function(){e.isDOMReady=!0,w("DOM",!0),setTimeout(function(){w("WINDOWLOAD",!0)},9999)};n=function(){if(!n.run){if(!e.isDOMReady&&y.waitReady){var i=e.ready;e.ready=function(e){return e!==!0&&document.body&&t(),i.apply(this,arguments)},e.ready.promise=i.promise}y.readyEvt?e(document).one(y.readyEvt,t):e(t)}n.run=!0},e(window).on("load",function(){t(),setTimeout(function(){w("WINDOWLOAD",!0)},9)});var i=[],a=function(){1==this.nodeType&&r.triggerDomUpdate(this)};e.extend(r,{addReady:function(e){var t=function(t,n){r.ready("DOM",function(){e(t,n)})};i.push(t),y.wsdoc&&t(y.wsdoc,c)},triggerDomUpdate:function(t){if(!t||!t.nodeType)return void(t&&t.jquery&&t.each(function(){r.triggerDomUpdate(this)}));var n=t.nodeType;if(1==n||9==n){var a=t!==document?e(t):c;e.each(i,function(e,n){n(t,a)})}}}),D.clonePolyfill=D.clone,D.htmlPolyfill=function(t){if(!arguments.length)return e(this.clonePolyfill()).html();var n=D.html.call(this,t);return n===this&&e.isDOMReady&&this.each(a),n},D.jProp=function(){return this.pushStack(e(D.prop.apply(this,arguments)||[]))},e.each(["after","before","append","prepend","replaceWith"],function(t,n){D[n+"Polyfill"]=function(t){return t=e(t),D[n].call(this,t),e.isDOMReady&&t.each(a),this}}),e.each(["insertAfter","insertBefore","appendTo","prependTo","replaceAll"],function(t,n){D[n.replace(/[A-Z]/,function(e){return"Polyfill"+e})]=function(){return D[n].apply(this,arguments),e.isDOMReady&&r.triggerDomUpdate(this),this}}),D.updatePolyfill=function(){return e.isDOMReady&&r.triggerDomUpdate(this),this},e.each(["getNativeElement","getShadowElement","getShadowFocusElement"],function(e,t){D[t]=function(){return this.pushStack(this)}})}(),l.create&&(r.objectCreate=function(t,n,i){var a=l.create(t);return i&&(a.options=e.extend(!0,{},a.options||{},i),i=a.options),a._create&&e.isFunction(a._create)&&a._create(i),a}),S("swfmini",{test:function(){return window.swfobject&&!window.swfmini&&(window.swfmini=window.swfobject),"swfmini"in window},c:[16,7,2,8,1,12,23]}),x.swfmini.test(),S("sizzle",{test:e.expr.filters}),b("es5",{test:!(!u.ES5||!Function.prototype.bind),d:["sizzle"]}),b("dom-extend",{f:o,noAutoCallback:!0,d:["es5"],c:[16,7,2,15,30,3,8,4,9,10,25,31,34]}),t("picture"),b("picture",{test:"picturefill"in window||!!window.HTMLPictureElement||"respimage"in window,d:["matchMedia"],c:[18],loadInit:function(){w("picture",!0)}}),b("matchMedia",{test:!(!window.matchMedia||!matchMedia("all").addListener),c:[18]}),b("sticky",{test:-1!=(e(t("b")).attr("style","position: -webkit-sticky; position: sticky").css("position")||"").indexOf("sticky"),d:["es5","matchMedia"]}),b("es6",{test:!!(Math.imul&&Number.MIN_SAFE_INTEGER&&l.is&&window.Promise&&Promise.all),d:["es5"]}),b("geolocation",{test:"geolocation"in a,options:{destroyWrite:!0},c:[21]}),function(){b("canvas",{src:"excanvas",test:"getContext"in t("canvas"),options:{type:"flash"},noAutoCallback:!0,loadInit:function(){var e=this.options.type;!e||-1===e.indexOf("flash")||x.swfmini.test()&&!swfmini.hasFlashPlayerVersion("9.0.0")||(this.src="flash"==e?"FlashCanvas/flashcanvas":"FlashCanvasPro/flashcanvas")},methodNames:["getContext"],d:[o]})}();var O="getUserMedia"in a;b("usermedia-core",{f:"usermedia",test:O&&window.URL,d:["url",o]}),b("usermedia-shim",{f:"usermedia",test:!!(O||a.webkitGetUserMedia||a.mozGetUserMedia||a.msGetUserMedia),d:["url","mediaelement",o]}),b("mediacapture",{test:h,d:["swfmini","usermedia",o,"filereader","forms","canvas"]}),function(){var n,i,s="form-shim-extend",c="formvalidation",d="form-number-date-api",l=!1,f=!1,p=!1,h={},g=t("progress"),w=t("output"),v=function(){var i,r,o="1(",d=t("input");if(r=e('<fieldset><textarea required="" /></fieldset>')[0],u.inputtypes=h,e.each(["range","date","datetime-local","month","color","number"],function(e,t){d.setAttribute("type",t),h[t]=d.type==t&&(d.value=o)&&d.value!=o}),u.datalist=!!("options"in t("datalist")&&window.HTMLDataListElement),u[c]="checkValidity"in d,u.fieldsetelements="elements"in r,u.fieldsetdisabled="disabled"in r){try{r.querySelector(":invalid")&&(r.disabled=!0,i=!r.querySelector(":invalid")&&r.querySelector(":disabled"))}catch(m){}u.fieldsetdisabled=!!i}if(u[c]&&(f=!(u.fieldsetdisabled&&u.fieldsetelements&&"value"in g&&"value"in w),p=f&&/Android/i.test(a.userAgent),l=window.opera||L.bustedValidity||f||!u.datalist,!l&&h.number)){l=!0;try{d.type="number",d.value="",d.stepUp(),l="1"!=d.value}catch(y){}}return L.bustedValidity=l,n=u[c]&&!l?"form-native-extend":s,v=e.noop,!1},k=function(t){var n=!0;return t._types||(t._types=t.types.split(" ")),e.each(t._types,function(e,t){return t in h&&!h[t]?(n=!1,!1):void 0}),n};r.validationMessages=r.validityMessages={langSrc:"i18n/formcfg-",availableLangs:"ar bg ca cs el es fa fi fr he hi hu it ja lt nl no pl pt pt-BR pt-PT ru sv zh-CN zh-TW".split(" ")},r.formcfg=e.extend({},r.validationMessages),r.inputTypes={},b("form-core",{f:"forms",test:v,d:["es5"],options:{placeholderType:"value",messagePopover:{},list:{popover:{constrainWidth:!0}},iVal:{sel:".ws-validate",handleBubble:"hide",recheckDelay:400}},methodNames:["setCustomValidity","checkValidity","setSelectionRange"],c:[16,7,2,8,1,15,30,3,31]}),i=y.forms,b("form-native-extend",{f:"forms",test:function(t){return v(),!u[c]||l||-1==e.inArray(d,t||[])||x[d].test()},d:["form-core",o,"form-message"],c:[6,5,14,29]}),b(s,{f:"forms",test:function(){return v(),u[c]&&!l},d:["form-core",o,"sizzle"],c:[16,15,28]}),b(s+"2",{f:"forms",test:function(){return v(),u[c]&&!f},d:[s],c:[27]}),b("form-message",{f:"forms",test:function(e){return v(),!(i.customMessages||!u[c]||l||!x[n].test(e))},d:[o],c:[16,7,15,30,3,8,4,14,28]}),b(d,{f:"forms-ext",options:{types:"date time range number"},test:function(){v();var e=!l;return e&&(e=k(this.options)),e},methodNames:["stepUp","stepDown"],d:["forms",o],c:[6,5,17,14,28,29,33]}),S("range-ui",{options:{},noAutoCallback:!0,test:function(){return!!D.rangeUI},d:["es5"],c:[6,5,9,10,17,11]}),b("form-number-date-ui",{f:"forms-ext",test:function(){var e=this.options;return e.replaceUI=m(e.replaceUI),v(),!e.replaceUI&&p&&(e.replaceUI=!0),!e.replaceUI&&k(e)},d:["forms",o,d,"range-ui"],options:{widgets:{calculateWidth:!0,animate:!0}},c:[6,5,9,10,17,11]}),b("form-datalist",{f:"forms",test:function(){return v(),p&&(i.customDatalist=!0),u.datalist&&!i.fD},d:["form-core",o],c:[16,7,6,2,9,15,30,31,28,33]})}();var R="FileReader"in window&&"FormData"in window;return b("filereader-xhr",{f:"filereader",test:R,d:[o,"swfmini"],c:[25,27]}),b("canvas-blob",{f:"filereader",methodNames:["toBlob"],test:!(R&&!t("canvas").toBlob)}),b("details",{test:"open"in t("details"),d:[o],options:{text:"Details"},c:[21,22]}),b("url",{test:function(){var e=!1;try{e=new URL("b","http://a"),e=!(!e.searchParams||"http://a/b"!=e.href)}catch(t){}return e},d:["es5"]}),function(){r.mediaelement={};var n=t("track");if(u.mediaelement="canPlayType"in j,u.texttrackapi="addTextTrack"in j,u.track="kind"in n,t("audio"),!(L.track=!u.texttrackapi))try{L.track=!("oncuechange"in j.addTextTrack("metadata"))}catch(i){}b("mediaelement-core",{f:"mediaelement",noAutoCallback:!0,options:{jme:{},plugins:[],vars:{},params:{},attrs:{},changeSWF:e.noop},methodNames:["play","pause","canPlayType","mediaLoad:load"],d:["swfmini"],c:[16,7,2,8,1,12,13,23]}),b("mediaelement-jaris",{f:"mediaelement",d:["mediaelement-core",o],test:function(){var e=this.options;return!u.mediaelement||r.mediaelement.loadSwf?!1:(e.preferFlash&&!x.swfmini.test()&&(e.preferFlash=!1),!(e.preferFlash&&swfmini.hasFlashPlayerVersion("11.3")))},c:[21,25]}),b("track",{options:{positionDisplay:!0,override:L.track},test:function(){var e=this.options;return e.override=m(e.override),!e.override&&!L.track},d:["mediaelement",o],methodNames:["addTextTrack"],c:[21,12,13,22,34]}),S("jmebase",{src:"jme/base",c:[98,99,97]}),e.each([["mediacontrols",{c:[98,99],css:"jme/controls.css"}],["playlist",{c:[98,97]}],["alternate-media"]],function(t,n){S(n[0],e.extend({src:"jme/"+n[0],d:["jmebase"]},n[1]))}),S("track-ui",{d:["track",o]})}(),b("feature-dummy",{test:!0,loaded:!0,c:M}),r.$=e,e.webshims=r,e.webshim=webshim,r.callAsync=function(){r.callAsync=e.noop,d&&(d.cfg&&(d.cfg.length||(d.cfg=[[d.cfg]]),e.each(d.cfg,function(e,t){r.setOptions.apply(r,t)})),d.ready&&e.each(d.ready,function(e,t){r.ready.apply(r,t)}),d.lang&&r.activeLang(d.lang),"polyfill"in d&&r.polyfill(d.polyfill)),r.isReady("jquery",!0)},r.callAsync(),r});