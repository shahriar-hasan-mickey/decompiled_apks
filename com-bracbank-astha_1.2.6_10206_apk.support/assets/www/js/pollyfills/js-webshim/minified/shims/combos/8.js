var swfmini=function(){function e(){if(!y){y=!0;for(var e=g.length,t=0;e>t;t++)g[t]()}}function t(e){y?e():g[g.length]=e}function a(){h&&n()}function n(){var e=m.getElementsByTagName("body")[0],t=i(l);t.setAttribute("type",p);var a=e.appendChild(t);if(a){var n=0;!function(){if(typeof a.GetVariable!=s){var i=a.GetVariable("$version");i&&(i=i.split(" ")[1].split(","),w.pv=[parseInt(i[0],10),parseInt(i[1],10),parseInt(i[2],10)])}else if(10>n)return n++,void setTimeout(arguments.callee,10);e.removeChild(t),a=null}()}}function i(e){return m.createElement(e)}function r(e){var t=w.pv,a=e.split(".");return a[0]=parseInt(a[0],10),a[1]=parseInt(a[1],10)||0,a[2]=parseInt(a[2],10)||0,t[0]>a[0]||t[0]==a[0]&&t[1]>a[1]||t[0]==a[0]&&t[1]==a[1]&&t[2]>=a[2]?!0:!1}var o=function(){u.error("This method was removed from swfmini")},s="undefined",l="object",u=window.webshims,d="Shockwave Flash",c="ShockwaveFlash.ShockwaveFlash",p="application/x-shockwave-flash",f=window,m=document,v=navigator,h=!1,g=[a],y=!1,b=!0,w=function(){var e=typeof m.getElementById!=s&&typeof m.getElementsByTagName!=s&&typeof m.createElement!=s,t=v.userAgent.toLowerCase(),a=v.platform.toLowerCase(),n=/win/.test(a?a:t),i=/mac/.test(a?a:t),r=/webkit/.test(t)?parseFloat(t.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,o=!1,u=[0,0,0],g=null;if(typeof v.plugins!=s&&typeof v.plugins[d]==l)g=v.plugins[d].description,!g||typeof v.mimeTypes!=s&&v.mimeTypes[p]&&!v.mimeTypes[p].enabledPlugin||(h=!0,o=!1,g=g.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),u[0]=parseInt(g.replace(/^(.*)\..*$/,"$1"),10),u[1]=parseInt(g.replace(/^.*\.(.*)\s.*$/,"$1"),10),u[2]=/[a-zA-Z]/.test(g)?parseInt(g.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof f.ActiveXObject!=s)try{var y=new ActiveXObject(c);y&&(g=y.GetVariable("$version"),g&&(o=!0,g=g.split(" ")[1].split(","),u=[parseInt(g[0],10),parseInt(g[1],10),parseInt(g[2],10)]))}catch(b){}return{w3:e,pv:u,wk:r,ie:o,win:n,mac:i}}();u.ready("DOM",e),u.loader.addModule("swfmini-embed",{d:["swfmini"]});var x=r("9.0.0")?function(){return u.loader.loadList(["swfmini-embed"]),!0}:u.$.noop;return u.support.mediaelement?u.ready("WINDOWLOAD",x):x(),{registerObject:o,getObjectById:o,embedSWF:function(e,t,a,n,i,r,o,s,l,d){var c=arguments;x()?u.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,c)}):d&&d({success:!1,id:t})},switchOffAutoHideShow:function(){b=!1},ua:w,getFlashPlayerVersion:function(){return{major:w.pv[0],minor:w.pv[1],release:w.pv[2]}},hasFlashPlayerVersion:r,createSWF:function(e,t,a){return w.w3?createSWF(e,t,a):void 0},showExpressInstall:o,removeSWF:o,createCSS:o,addDomLoadEvent:t,addLoadEvent:o,expressInstallCallback:o}}();webshims.isReady("swfmini",!0),function(e){"use strict";var t=window.webshims;if(!t.defineProperties){var a="defineProperty",n=Object.prototype.hasOwnProperty,i=["configurable","enumerable","writable"],r=function(e){for(var t=0;3>t;t++)void 0!==e[i[t]]||"writable"===i[t]&&void 0===e.value||(e[i[t]]=!0)},o=function(e){if(e)for(var t in e)n.call(e,t)&&r(e[t])};Object.create&&(t.objectCreate=function(t,a,n){o(a);var i=Object.create(t,a);return n&&(i.options=e.extend(!0,{},i.options||{},n),n=i.options),i._create&&e.isFunction(i._create)&&i._create(n),i}),Object[a]&&(t[a]=function(e,t,n){return r(n),Object[a](e,t,n)}),Object.defineProperties&&(t.defineProperties=function(e,t){return o(t),Object.defineProperties(e,t)}),t.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,t.getPrototypeOf=Object.getPrototypeOf}}(window.webshims.$),webshims.register("dom-extend",function(e,t,a,n,i){"use strict";function r(a,n,i){var r=e.clone(a,n,!1);return e(r.querySelectorAll("."+t.shadowClass)).detach(),i?(y++,e(r.querySelectorAll("[id]")).prop("id",function(e,t){return t+y})):e(r.querySelectorAll('audio[id^="ID-"], video[id^="ID-"], label[id^="ID-"]')).removeAttr("id"),r}var o=!("hrefNormalized"in e.support)||e.support.hrefNormalized,s=Object.prototype.hasOwnProperty;if(t.assumeARIA=!0,("text"==e('<input type="email" />').attr("type")||""===e("<form />").attr("novalidate")||"required"in e("<input />")[0].attributes)&&t.error("IE browser modes are busted in IE10+. Make sure to run IE in edge mode (X-UA-Compatible). Please test your HTML/CSS/JS with a real IE version or at least IETester or similar tools. "),!t.cfg.no$Switch){var l=function(){!a.jQuery||a.$&&a.jQuery!=a.$||a.jQuery.webshims||(t.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),a.$&&(a.$=t.$),a.jQuery=t.$)};l(),setTimeout(l,90),t.ready("DOM",l),e(l),t.ready("WINDOWLOAD",l)}var u=/\s*,\s*/,d={},c={},p={},f={},m={},v={},h=e.fn.val,g=function(t,a,n,i,r){return r?h.call(e(t)):h.call(e(t),n)};e.widget||e.pluginFactory&&e.pluginFactory.mixin||!function(){e.cleanData,e.cleanData=function(t){return function(a){var n,i,r;for(r=0;null!=(i=a[r]);r++)try{n=e._data(i,"events"),n&&n.remove&&e(i).triggerHandler("remove")}catch(o){}t(a)}}(e.cleanData)}(),e.fn.val=function(t){var a=this[0];if(arguments.length&&null==t&&(t=""),!arguments.length)return a&&1===a.nodeType?e.prop(a,"value",t,"val",!0):h.call(this);if(e.isArray(t))return h.apply(this,arguments);var n=e.isFunction(t);return this.each(function(r){if(a=this,1===a.nodeType)if(n){var o=t.call(a,r,e.prop(a,"value",i,"val",!0));null==o&&(o=""),e.prop(a,"value",o,"val")}else e.prop(a,"value",t,"val")})},e.fn.onTrigger=function(e,t){return this.on(e,t).each(t)},e.fn.onWSOff=function(t,a,i,r){return r||(r=n),e(r)[i?"onTrigger":"on"](t,a),this.on("remove",function(n){n.originalEvent||e(r).off(t,a)}),this};var y=0,b="_webshims"+Math.round(1e3*Math.random()),w=function(t,a,n){if(t=t.jquery?t[0]:t,!t)return n||{};var r=e.data(t,b);return n!==i&&(r||(r=e.data(t,b,{})),a&&(r[a]=n)),a?r&&r[a]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(t){e.fn[t.name]=function(){var a=[];return this.each(function(){var n=w(this,"shadowData"),i=n&&n[t.prop]||this;-1==e.inArray(i,a)&&a.push(i)}),this.pushStack(a)}}),e.fn.clonePolyfill=function(t,a){return t=t||!1,this.map(function(){var i=r(this,t,a);return setTimeout(function(){e.contains(n.body,i)&&e(i).updatePolyfill()}),i})},t.cfg.extendNative||t.cfg.noTriggerOverride||!function(t){e.event.trigger=function(a,n,i,r){if(!p[a]||r||!i||1!==i.nodeType)return t.apply(this,arguments);var o,l,u,d=i[a],c=e.prop(i,a),f=c&&d!=c;return f&&(u="__ws"+a,l=a in i&&s.call(i,a),i[a]=c,i[u]=d),o=t.apply(this,arguments),f&&(l?i[a]=d:delete i[a],delete i[u]),o}}(e.event.trigger),["removeAttr","prop","attr"].forEach(function(a){d[a]=e[a],e[a]=function(t,n,r,o,s){var l="val"==o,u=l?g:d[a];if(!t||!c[n]||1!==t.nodeType||!l&&o&&"attr"==a&&e.attrFn[n])return u(t,n,r,o,s);var p,m,h,y=(t.nodeName||"").toLowerCase(),b=f[y],w="attr"!=a||r!==!1&&null!==r?a:"removeAttr";if(b||(b=f["*"]),b&&(b=b[n]),b&&(p=b[w]),p){if("value"==n&&(m=p.isVal,p.isVal=l),"removeAttr"===w)return p.value.call(t);if(r===i)return p.get?p.get.call(t):p.value;p.set&&("attr"==a&&r===!0&&(r=n),h=p.set.call(t,r)),"value"==n&&(p.isVal=m)}else h=u(t,n,r,o,s);if((r!==i||"removeAttr"===w)&&v[y]&&v[y][n]){var x;x="removeAttr"==w?!1:"prop"==w?!!r:!0,v[y][n].forEach(function(e){(!e.only||(e.only="prop"==a)||"attr"==e.only&&"prop"!=a)&&e.call(t,r,x,l?"val":w,a)})}return h},m[a]=function(e,n,r){f[e]||(f[e]={}),f[e][n]||(f[e][n]={});var o=f[e][n][a],s=function(e,t,i){var o;return t&&t[e]?t[e]:i&&i[e]?i[e]:"prop"==a&&"value"==n?function(e){var t=this;return r.isVal?g(t,n,e,!1,0===arguments.length):d[a](t,n,e)}:"prop"==a&&"value"==e&&r.value.apply?(o="__ws"+n,p[n]=!0,function(){var e=this[o]||d[a](this,n);return e&&e.apply&&(e=e.apply(this,arguments)),e}):function(e){return d[a](this,n,e)}};f[e][n][a]=r,r.value===i&&(r.set||(r.set=r.writeable?s("set",r,o):t.cfg.useStrict&&"prop"==n?function(){throw n+" is readonly on "+e}:function(){t.info(n+" is readonly on "+e)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(e){r[e]&&(r["_sup"+e]=s(e,o))})}});var x=function(){var e=t.getPrototypeOf(n.createElement("foobar")),a=t.support.advancedObjectProperties&&t.support.objectAccessor;return function(i,r,o){var l,u;if(!(a&&(l=n.createElement(i))&&(u=t.getPrototypeOf(l))&&e!==u)||l[r]&&s.call(l,r))o._supvalue=function(){var e=w(this,"propValue");return e&&e[r]&&e[r].apply?e[r].apply(this,arguments):e&&e[r]},E.extendValue(i,r,o.value);else{var d=l[r];o._supvalue=function(){return d&&d.apply?d.apply(this,arguments):d},u[r]=o.value}o.value._supvalue=o._supvalue}}(),E=function(){var a={};t.addReady(function(n,i){var r={},o=function(t){r[t]||(r[t]=e(n.getElementsByTagName(t)),i[0]&&e.nodeName(i[0],t)&&(r[t]=r[t].add(i)))};e.each(a,function(e,a){return o(e),a&&a.forEach?void a.forEach(function(t){r[e].each(t)}):void t.warn("Error: with "+e+"-property. methods: "+a)}),r=null});var i,r=e([]),o=function(t,r){a[t]?a[t].push(r):a[t]=[r],e.isDOMReady&&(i||e(n.getElementsByTagName(t))).each(r)};return{createTmpCache:function(t){return e.isDOMReady&&(i=i||e(n.getElementsByTagName(t))),i||r},flushTmpCache:function(){i=null},content:function(t,a){o(t,function(){var t=e.attr(this,a);null!=t&&e.attr(this,a,t)})},createElement:function(e,t){o(e,t)},extendValue:function(t,a,n){o(t,function(){e(this).each(function(){var e=w(this,"propValue",{});e[a]=this[a],this[a]=n})})}}}(),T=function(e,t){e.defaultValue===i&&(e.defaultValue=""),e.removeAttr||(e.removeAttr={value:function(){e[t||"prop"].set.call(this,e.defaultValue),e.removeAttr._supvalue.call(this)}}),e.attr||(e.attr={})};e.extend(t,{xProps:c,getID:function(){var t=(new Date).getTime();return function(a){a=e(a);var n=a.prop("id");return n||(t++,n="ID-"+t,a.eq(0).prop("id",n)),n}}(),domPrefixes:["webkit","moz","ms","o","ws"],prefixed:function(e,a){var n,i,r=!1;if(a[e]&&(r=e),!r)for(e=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<t.domPrefixes.length;n++)if(i=t.domPrefixes[n]+e,i in a){r=i;break}return r},shadowClass:"wsshadow-"+Date.now(),implement:function(a,n){var i=w(a,"implemented")||w(a,"implemented",{});return i[n]?(t.warn(n+" already implemented for element #"+a.id),!1):(i[n]=!0,!e(a).hasClass("ws-nopolyfill"))},extendUNDEFProp:function(t,a){e.each(a,function(e,a){e in t||(t[e]=a)})},getOptions:function(){var a=/\-([a-z])/g,n={},i={},r=function(e,t){return t.toLowerCase()},o=function(e,t){return t.toUpperCase()};return function(s,l,u,d){i[l]?l=i[l]:(i[l]=l.replace(a,o),l=i[l]);var c,p=w(s,"cfg"+l),f={};if(p)return p;if(p=e(s).data(),p&&"string"==typeof p[l]){if(d)return w(s,"cfg"+l,p[l]);t.error("data-"+l+" attribute has to be a valid JSON, was: "+p[l])}u?Array.isArray(u)?u.unshift(!0,{}):u=[!0,{},u]:u=[!0,{}],p&&"object"==typeof p[l]&&u.push(p[l]),n[l]||(n[l]=new RegExp("^"+l+"([A-Z])"));for(c in p)n[l].test(c)&&(f[c.replace(n[l],r)]=p[c]);return u.push(f),w(s,"cfg"+l,e.extend.apply(e,u))}}(),createPropDefault:T,data:w,moveToFirstEvent:function(t,a,n){var i,r=(e._data(t,"events")||{})[a];r&&r.length>1&&(i=r.pop(),n||(n="bind"),"bind"==n&&r.delegateCount?r.splice(r.delegateCount,0,i):r.unshift(i)),t=null},addShadowDom:function(){var i,r,o,s=e(a),l={init:!1,runs:0,test:function(){var e=l.getHeight(),t=l.getWidth();e!=l.height||t!=l.width?(l.height=e,l.width=t,l.handler({type:"docresize"}),l.runs++,l.runs<9&&setTimeout(l.test,90)):l.runs=0},handler:function(){var t,u=function(){e(n).triggerHandler("updateshadowdom",[t])},d=function(){if(t&&"resize"==t.type){var e=s.width(),n=s.width();if(n==r&&e==o)return;r=n,o=e}t&&"docresize"!=t.type&&(l.height=l.getHeight(),l.width=l.getWidth()),a.requestAnimationFrame?requestAnimationFrame(u):setTimeout(u,0)};return function(e){clearTimeout(i),t=e,i=setTimeout(d,"resize"!=e.type||a.requestAnimationFrame?9:50)}}(),_create:function(){e.each({Height:"getHeight",Width:"getWidth"},function(e,t){var a=n.body,i=n.documentElement;l[t]=function(){return Math.max(a["scroll"+e],i["scroll"+e],a["offset"+e],i["offset"+e],i["client"+e])}})},start:function(){!this.init&&n.body&&(this.init=!0,this._create(),this.height=l.getHeight(),this.width=l.getWidth(),setInterval(this.test,999),e(this.test),null==e.support.boxSizing&&e(function(){e.support.boxSizing&&l.handler({type:"boxsizing"})}),t.ready("WINDOWLOAD",this.test),e(n).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel playerdimensionchange",this.handler),e(a).on("resize",this.handler))}};return t.docObserve=function(){t.ready("DOM",function(){l.start()})},function(a,n,i){if(a&&n){i=i||{},a.jquery&&(a=a[0]),n.jquery&&(n=n[0]);var r=e.data(a,b)||e.data(a,b,{}),o=e.data(n,b)||e.data(n,b,{}),s={};i.shadowFocusElement?i.shadowFocusElement&&(i.shadowFocusElement.jquery&&(i.shadowFocusElement=i.shadowFocusElement[0]),s=e.data(i.shadowFocusElement,b)||e.data(i.shadowFocusElement,b,s)):i.shadowFocusElement=n,e(a).on("remove",function(t){t.originalEvent||setTimeout(function(){e(n).remove()},4)}),r.hasShadow=n,s.nativeElement=o.nativeElement=a,s.shadowData=o.shadowData=r.shadowData={nativeElement:a,shadowElement:n,shadowFocusElement:i.shadowFocusElement},i.shadowChilds&&i.shadowChilds.each(function(){w(this,"shadowData",o.shadowData)}),i.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=i.data),i=null}t.docObserve()}}(),propTypes:{standard:function(e){T(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,""+t)},get:function(){return e.attr.get.call(this)||e.defaultValue}})},"boolean":function(e){T(e),e.prop||(e.prop={set:function(t){t?e.attr.set.call(this,""):e.removeAttr.value.call(this)},get:function(){return null!=e.attr.get.call(this)}})},src:function(){var t=n.createElement("a");return t.style.display="none",function(a,n){T(a),a.prop||(a.prop={set:function(e){a.attr.set.call(this,e)},get:function(){var a,i=this.getAttribute(n);if(null==i)return"";if(t.setAttribute("href",i+""),!o){try{e(t).insertAfter(this),a=t.getAttribute("href",4)}catch(r){a=t.getAttribute("href",4)}e(t).detach()}return a||t.href}})}}(),enumarated:function(e){T(e),e.prop||(e.prop={set:function(t){e.attr.set.call(this,t)},get:function(){var t=(e.attr.get.call(this)||"").toLowerCase();return t&&-1!=e.limitedTo.indexOf(t)||(t=e.defaultValue),t}})}},reflectProperties:function(a,n){"string"==typeof n&&(n=n.split(u)),n.forEach(function(n){t.defineNodeNamesProperty(a,n,{prop:{set:function(t){e.attr(this,n,t)},get:function(){return e.attr(this,n)||""}}})})},defineNodeNameProperty:function(a,n,i){return c[n]=!0,i.reflect&&(i.propType&&!t.propTypes[i.propType]?t.error("could not finde propType "+i.propType):t.propTypes[i.propType||"standard"](i,n)),["prop","attr","removeAttr"].forEach(function(r){var o=i[r];o&&(o="prop"===r?e.extend({writeable:!0},o):e.extend({},o,{writeable:!0}),m[r](a,n,o),"*"!=a&&t.cfg.extendNative&&"prop"==r&&o.value&&e.isFunction(o.value)&&x(a,n,o),i[r]=o)}),i.initAttr&&E.content(a,n),i},defineNodeNameProperties:function(e,a,n,i){for(var r in a)!i&&a[r].initAttr&&E.createTmpCache(e),n&&(a[r][n]||(a[r][n]={},["value","set","get"].forEach(function(e){e in a[r]&&(a[r][n][e]=a[r][e],delete a[r][e])}))),a[r]=t.defineNodeNameProperty(e,r,a[r]);return i||E.flushTmpCache(),a},createElement:function(a,n,i){var r;return e.isFunction(n)&&(n={after:n}),E.createTmpCache(a),n.before&&E.createElement(a,n.before),i&&(r=t.defineNodeNameProperties(a,i,!1,!0)),n.after&&E.createElement(a,n.after),E.flushTmpCache(),r},onNodeNamesPropertyModify:function(t,a,n,i){"string"==typeof t&&(t=t.split(u)),e.isFunction(n)&&(n={set:n}),t.forEach(function(e){v[e]||(v[e]={}),"string"==typeof a&&(a=a.split(u)),n.initAttr&&E.createTmpCache(e),a.forEach(function(t){v[e][t]||(v[e][t]=[],c[t]=!0),n.set&&(i&&(n.set.only=i),v[e][t].push(n.set)),n.initAttr&&E.content(e,t)}),E.flushTmpCache()})},defineNodeNamesBooleanProperty:function(a,n,r){r||(r={}),e.isFunction(r)&&(r.set=r),t.defineNodeNamesProperty(a,n,{attr:{set:function(e){r.useContentAttribute?t.contentAttr(this,n,e):this.setAttribute(n,e),r.set&&r.set.call(this,!0)},get:function(){var e=r.useContentAttribute?t.contentAttr(this,n):this.getAttribute(n);return null==e?i:n}},removeAttr:{value:function(){this.removeAttribute(n),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(e,t,a){if(e.nodeName){var n;return a===i?(n=e.attributes[t]||{},a=n.specified?n.value:null,null==a?i:a):void("boolean"==typeof a?a?e.setAttribute(t,t):e.removeAttribute(t):e.setAttribute(t,a))}},activeLang:function(){var a=[],n=[],i={},r=function(n,r,s){r._isLoading=!0,i[n]?i[n].push(r):(i[n]=[r],t.loader.loadScript(n,function(){s==a.join()&&e.each(i[n],function(e,t){o(t)}),delete i[n]}))},o=function(t){var n=t.__active,i=function(e,n){return t._isLoading=!1,t[n]||-1!=t.availableLangs.indexOf(n)?(t[n]?(t.__active=t[n],t.__activeName=n):r(t.langSrc+n,t,a.join()),!1):void 0};e.each(a,i),t.__active||(t.__active=t[""],t.__activeName=""),n!=t.__active&&e(t).trigger("change")};return function(e){var t;if("string"==typeof e)a[0]!=e&&(a=[e],t=a[0].split("-")[0],t&&t!=e&&a.push(t),n.forEach(o));else if("object"==typeof e)return e.__active||(n.push(e),o(e)),e.__active;return a[0]}}()}),e.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(e,a){t[e]=function(e,n,i,r){"string"==typeof e&&(e=e.split(u));var o={};return e.forEach(function(e){o[e]=t[a](e,n,i,r)}),o}}),t.isReady("webshimLocalization",!0),function(){if(!("content"in n.createElement("template")||(e(function(){var a=e("main").attr({role:"main"});a.length>1?t.error("only one main element allowed in document"):a.is("article *, section *")&&t.error("main not allowed inside of article/section elements")}),"hidden"in n.createElement("a")))){t.defineNodeNamesBooleanProperty(["*"],"hidden");var a={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},i=function(e,t){var a=e.getAttribute("role");a||e.setAttribute("role",t)};e.webshims.addReady(function(t,r){if(e.each(a,function(a,n){for(var o=e(a,t).add(r.filter(a)),s=0,l=o.length;l>s;s++)i(o[s],n)}),t===n){var o=n.getElementsByTagName("header")[0],s=n.getElementsByTagName("footer"),l=s.length;if(o&&!e(o).closest("section, article")[0]&&i(o,"banner"),!l)return;var u=s[l-1];e(u).closest("section, article")[0]||i(u,"contentinfo")}})}}()}),webshims.register("form-core",function(e,t,a,n,i,r){"use strict";t.capturingEventPrevented=function(t){if(!t._isPolyfilled){var a=t.isDefaultPrevented,n=t.preventDefault;t.preventDefault=function(){return clearTimeout(e.data(t.target,t.type+"DefaultPrevented")),e.data(t.target,t.type+"DefaultPrevented",setTimeout(function(){e.removeData(t.target,t.type+"DefaultPrevented")},30)),n.apply(this,arguments)},t.isDefaultPrevented=function(){return!(!a.apply(this,arguments)&&!e.data(t.target,t.type+"DefaultPrevented"))},t._isPolyfilled=!0}};var o=t.modules,s=t.support,l=function(t){return(e.prop(t,"validity")||{valid:1}).valid},u=function(){var a=["form-validation"];e(n).off(".lazyloadvalidation"),r.lazyCustomMessages&&(r.customMessages=!0,a.push("form-message")),t._getAutoEnhance(r.customDatalist)&&(r.fD=!0,a.push("form-datalist")),r.addValidators&&a.push("form-validators"),t.reTest(a)},d=function(){var a,i,o=e.expr[":"],u=/^(?:form|fieldset)$/i,d=function(t){var a=!1;return e(t).jProp("elements").each(function(){return!u.test(this.nodeName||"")&&(a=o.invalid(this))?!1:void 0}),a};if(e.extend(o,{"valid-element":function(t){return u.test(t.nodeName||"")?!d(t):!(!e.prop(t,"willValidate")||!l(t))},"invalid-element":function(t){return u.test(t.nodeName||"")?d(t):!(!e.prop(t,"willValidate")||l(t))},"required-element":function(t){return!(!e.prop(t,"willValidate")||!e.prop(t,"required"))},"user-error":function(t){return e.prop(t,"willValidate")&&e(t).getShadowElement().hasClass(r.iVal.errorClass||"user-error")},"optional-element":function(t){return!(!e.prop(t,"willValidate")||e.prop(t,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(t){o[t]=e.expr[":"][t+"-element"]}),s.fieldsetdisabled&&!e('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled")&&(a=e.find.matches,i={":disabled":1,":enabled":1},e.find.matches=function(e,t){return i[e]?a.call(this,"*"+e,t):a.apply(this,arguments)},e.extend(o,{enabled:function(t){return"disabled"in t&&t.disabled===!1&&!e.find.matchesSelector(t,"fieldset[disabled] *")},disabled:function(t){return t.disabled===!0||"disabled"in t&&e.find.matchesSelector(t,"fieldset[disabled] *")}})),"unknown"==typeof n.activeElement){var c=o.focus;o.focus=function(){try{return c.apply(this,arguments)}catch(e){t.error(e)}return!1}}},c={noAutoCallback:!0,options:r},p=t.loader.addModule,f=function(e,a,n){u(),t.ready("form-validation",function(){e[a].apply(e,n)})},m="transitionDelay"in n.documentElement.style?"":" no-transition",v=t.cfg.wspopover;p("form-validation",e.extend({d:["form-message"]},c)),p("form-validators",e.extend({},c)),s.formvalidation&&!t.bugs.bustedValidity&&t.capturingEvents(["invalid"],!0),e.expr.filters?d():t.ready("sizzle",d),t.triggerInlineForm=function(t,a){e(t).trigger(a)},v.position||v.position===!1||(v.position={at:"left bottom",my:"left top",collision:"fit flip"}),t.wsPopover={id:0,_create:function(){this.options=e.extend(!0,{},v,this.options),this.id=t.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=e('<div class="ws-popover'+m+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=e(".ws-po-box",this.element),this.lastElement=e([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(e){this.contentElement.html(e)},bindElement:function(){var e=this,t=function(){e.stopBlur=!1};this.preventBlur=function(){e.stopBlur=!0,clearTimeout(e.timers.stopBlur),e.timers.stopBlur=setTimeout(t,9)},this.element.on({mousedown:this.preventBlur})},show:function(){f(this,"show",arguments)}},t.validityAlert={showFor:function(){f(this,"showFor",arguments)}},t.getContentValidationMessage=function(a,n,i){var r;t.errorbox&&t.errorbox.initIvalContentMessage&&t.errorbox.initIvalContentMessage(a);var o=(t.getOptions&&t.errorbox?t.getOptions(a,"errormessage",!1,!0):e(a).data("errormessage"))||a.getAttribute("x-moz-errormessage")||"";return i&&o[i]?o=o[i]:o&&(n=n||e.prop(a,"validity")||{valid:1},n.valid&&(o="")),"object"==typeof o&&(n=n||e.prop(a,"validity")||{valid:1},n.customError&&(r=e.data(a,"customMismatchedRule"))&&o[r]&&"string"==typeof o[r]?o=o[r]:n.valid||(e.each(n,function(e,t){return t&&"valid"!=e&&o[e]?(o=o[e],!1):void 0}),"object"==typeof o&&(n.typeMismatch&&o.badInput&&(o=o.badInput),n.badInput&&o.typeMismatch&&(o=o.typeMismatch)))),"object"==typeof o&&(o=o.defaultMessage),t.replaceValidationplaceholder&&(o=t.replaceValidationplaceholder(a,o)),o||""},t.refreshCustomValidityRules=e.noop,e.fn.getErrorMessage=function(a){var n="",i=this[0];return i&&(n=t.getContentValidationMessage(i,!1,a)||e.prop(i,"customValidationMessage")||e.prop(i,"validationMessage")||""),n},e.event.special.valuevalidation={setup:function(){t.error("valuevalidation was renamed to validatevalue!")}},e.event.special.validatevalue={setup:function(){var t=e(this).data()||e.data(this,{});"validatevalue"in t||(t.validatevalue=!0)}},e(n).on("focusin.lazyloadvalidation mousedown.lazyloadvalidation touchstart.lazyloadvalidation",function(e){"form"in e.target&&u()}),t.ready("WINDOWLOAD",u),o["form-number-date-ui"].loaded&&!r.customMessages&&(o["form-number-date-api"].test()||s.inputtypes.range&&s.inputtypes.color)&&t.isReady("form-number-date-ui",!0),t.ready("DOM",function(){n.querySelector(".ws-custom-file")&&t.reTest(["form-validation"])}),r.addValidators&&r.fastValidators&&t.reTest(["form-validators","form-validation"]),"complete"==n.readyState&&t.isReady("WINDOWLOAD",!0)}),webshims.register("form-message",function(e,t,a,n,i,r){"use strict";r.lazyCustomMessages&&(r.customMessages=!0);var o=t.validityMessages,s=r.customMessages?["customValidationMessage"]:[];o.en=e.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",tooShort:"Please enter at least {%minlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},o.en||o["en-US"]||{}),"object"==typeof o.en.valueMissing&&["select","radio"].forEach(function(e){o.en.valueMissing[e]=o.en.valueMissing[e]||"Please select an option."}),"object"==typeof o.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeUnderflow[e]=o.en.rangeUnderflow[e]||"Value must be at or after {%min}."}),"object"==typeof o.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.en.rangeOverflow[e]=o.en.rangeOverflow[e]||"Value must be at or before {%max}."}),o["en-US"]||(o["en-US"]=e.extend(!0,{},o.en)),o["en-GB"]||(o["en-GB"]=e.extend(!0,{},o.en)),o["en-AU"]||(o["en-AU"]=e.extend(!0,{},o.en)),o[""]=o[""]||o["en-US"],o.de=e.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zulässig.",email:"{%value} ist keine gültige E-Mail-Adresse.",url:"{%value} ist kein(e) gültige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zulässigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen können."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen können."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zulässig. Hier sind nur bestimmte Werte zulässig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",tooShort:"Der eingegebene Text ist zu kurz! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%minlength} das Minimum.",patternMismatch:"{%value} hat für dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das Kästchen."}},o.de||{}),"object"==typeof o.de.valueMissing&&["select","radio"].forEach(function(e){o.de.valueMissing[e]=o.de.valueMissing[e]||"Bitte wählen Sie eine Option aus."}),"object"==typeof o.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeUnderflow[e]=o.de.rangeUnderflow[e]||"{%value} ist zu früh. {%min} ist die früheste Zeit, die Sie benutzen können."}),"object"==typeof o.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(e){o.de.rangeOverflow[e]=o.de.rangeOverflow[e]||"{%value} ist zu spät. {%max} ist die späteste Zeit, die Sie benutzen können."});var l=o[""],u=function(t,a){return t&&"string"!=typeof t&&(t=t[e.prop(a,"type")]||t[(a.nodeName||"").toLowerCase()]||t.defaultMessage),t||""},d=/</g,c=/>/g,p={value:1,min:1,max:1},f=function(){var n,i={number:function(e){var t=1*e;return t.toLocaleString&&!isNaN(t)&&(e=t.toLocaleString()||e),e}},r=function(t,a,n){var r,o;return p[n]&&(r=e.prop(a,"type"),o=e(a).getShadowElement().data("wsWidget"+r),o&&o.formatValue?t=o.formatValue(t,!1):i[r]&&(t=i[r](t))),t};return[{n:"date",f:"toLocaleDateString"},{n:"time",f:"toLocaleTimeString"},{n:"datetime-local",f:"toLocaleString"}].forEach(function(e){i[e.n]=function(t){var a=new Date(t);return a&&a[e.f]&&(t=a[e.f]()||t),t}}),a.Intl&&Intl.DateTimeFormat&&(n=new Intl.DateTimeFormat(navigator.browserLanguage||navigator.language,{year:"numeric",month:"2-digit"}).format(new Date),n&&n.format&&(i.month=function(e){var t=new Date(e);return t&&(e=n.format(t)||e),e})),t.format={},["date","number","month","time","datetime-local"].forEach(function(e){t.format[e]=function(a,n){return n&&n.nodeType?r(a,n,e):("number"==e&&n&&n.toFixed&&(a=1*a,(!n.fixOnlyFloat||a%1)&&(a=a.toFixed(n.toFixed))),t._format&&t._format[e]?t._format[e](a,n):i[e](a))}}),r}();t.replaceValidationplaceholder=function(a,n,i){var r=e.prop(a,"title");return n&&("patternMismatch"!=i||r||t.error("no title for patternMismatch provided. Always add a title attribute."),r&&(r='<span class="ws-titlevalue">'+r.replace(d,"&lt;").replace(c,"&gt;")+"</span>"),-1!=n.indexOf("{%title}")?n=n.replace("{%title}",r):r&&(n=n+" "+r)),n&&-1!=n.indexOf("{%")&&["value","min","max","maxlength","minlength","label"].forEach(function(t){if(-1!==n.indexOf("{%"+t)){var i=("label"==t?e.trim(e('label[for="'+a.id+'"]',a.form).text()).replace(/\*$|:$/,""):e.prop(a,t)||e.attr(a,t)||"")||"";i=""+i,i=f(i,a,t),n=n.replace("{%"+t+"}",i.replace(d,"&lt;").replace(c,"&gt;")),"value"==t&&(n=n.replace("{%valueLen}",i.length))}}),n},t.createValidationMessage=function(a,n){var i=u(l[n],a);return i||"badInput"!=n||(i=u(l.typeMismatch,a)),i||"typeMismatch"!=n||(i=u(l.badInput,a)),i||(i=u(o[""][n],a)||(e.prop(a,"validationMessage")||"").replace(d,"&lt;").replace(c,"&gt;"),"customError"!=n&&t.info("could not find errormessage for: "+n+" / "+e.prop(a,"type")+". in language: "+t.activeLang())),i=t.replaceValidationplaceholder(a,i,n),i||""},(!t.support.formvalidation||t.bugs.bustedValidity)&&s.push("validationMessage"),l=t.activeLang(o),e(o).on("change",function(){l=o.__active}),s.forEach(function(a){t.defineNodeNamesProperty(["fieldset","output","button"],a,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(n){var i=t.defineNodeNameProperty(n,a,{prop:{get:function(){var a=this,n="";if(!e.prop(a,"willValidate"))return n;var r=e.prop(a,"validity")||{valid:1};return r.valid?n:(n=t.getContentValidationMessage(a,r))?n:r.customError&&a.nodeName&&(n=t.support.formvalidation&&!t.bugs.bustedValidity&&i.prop._supget?i.prop._supget.call(a):t.data(a,"customvalidationMessage"))?n:(e.each(r,function(e,i){return"valid"!=e&&i?(n=t.createValidationMessage(a,e),n?!1:void 0):void 0}),n||"")},writeable:!1}})})})}),function(e){"use strict";var t=e.support,a=t.mediaelement,n=!1,i=e.bugs,r="mediaelement-jaris",o=function(){e.ready(r,function(){e.mediaelement.createSWF||(e.mediaelement.loadSwf=!0,e.reTest([r],a))})},s=e.cfg,l=s.mediaelement,u=-1!=navigator.userAgent.indexOf("MSIE");if(!l)return void e.error("mediaelement wasn't implemented but loaded");if(a){var d=document.createElement("video");t.videoBuffered="buffered"in d,t.mediaDefaultMuted="defaultMuted"in d,n="loop"in d,t.mediaLoop=n,e.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!t.videoBuffered||!n||!t.mediaDefaultMuted&&u&&"ActiveXObject"in window)&&(e.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),e.loader.loadList(["mediaelement-native-fix"]))}t.track&&!i.track&&!function(){if(!i.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(e){i.track=!0}}}(),window.CanvasRenderingContext2D&&CanvasRenderingContext2D.prototype&&(CanvasRenderingContext2D.prototype.wsImageComplete=function(e){
e.call(this,this)}),e.register("mediaelement-core",function(e,i,s,l,u,d){var c=swfmini.hasFlashPlayerVersion("11.3"),p=i.mediaelement,f=!1;p.parseRtmp=function(e){var t,a,n,r=e.src.split("://"),o=r[1].split("/");for(e.server=r[0]+"://"+o[0]+"/",e.streamId=[],t=1,a=o.length;a>t;t++)n||-1===o[t].indexOf(":")||(o[t]=o[t].split(":")[1],n=!0),n?e.streamId.push(o[t]):e.server+=o[t]+"/";e.streamId.length||i.error("Could not parse rtmp url"),e.streamId=e.streamId.join("/")};var m=function(t,a){t=e(t);var n,i={src:t.attr("src")||"",elem:t,srcProp:t.prop("src")};return i.src?(n=t.attr("data-server"),null!=n&&(i.server=n),n=t.attr("type")||t.attr("data-type"),n?(i.type=n,i.container=e.trim(n.split(";")[0])):(a||(a=t[0].nodeName.toLowerCase(),"source"==a&&(a=(t.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),i.server?(i.type=a+"/rtmp",i.container=a+"/rtmp"):(n=p.getTypeForSrc(i.src,a,i),n&&(i.type=n,i.container=n))),n=t.attr("media"),n&&(i.media=n),("audio/rtmp"==i.type||"video/rtmp"==i.type)&&(i.server?i.streamId=i.src:p.parseRtmp(i)),i):i},v=!c&&"postMessage"in s&&a,h=function(){h.loaded||(h.loaded=!0,d.noAutoTrack||i.ready("WINDOWLOAD",function(){y(),i.loader.loadList(["track-ui"])}))},g=function(){var t;return function(){!t&&v&&(t=!0,f&&i.loader.loadScript("https://www.youtube.com/player_api"),e(function(){i._polyfill(["mediaelement-yt"])}))}}(),y=function(){c?o():g()};i.addPolyfill("mediaelement-yt",{test:!v,d:["dom-support"]}),p.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},p.mimeTypes.source=e.extend({},p.mimeTypes.audio,p.mimeTypes.video),p.getTypeForSrc=function(t,a){if(-1!=t.indexOf("youtube.com/watch?")||-1!=t.indexOf("youtube.com/v/"))return"video/youtube";if(!t.indexOf("mediastream:")||!t.indexOf("blob:http"))return"usermedia";if(!t.indexOf("webshimstream"))return"jarisplayer/stream";if(!t.indexOf("rtmp"))return a+"/rtmp";t=t.split("?")[0].split("#")[0].split("."),t=t[t.length-1];var n;return e.each(p.mimeTypes[a],function(e,a){return-1!==a.indexOf(t)?(n=e,!1):void 0}),n},p.srces=function(t){var a=[];t=e(t);var n=t[0].nodeName.toLowerCase(),i=m(t,n);return i.src?a.push(i):e("source",t).each(function(){i=m(this,n),i.src&&a.push(i)}),a},p.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","jarisplayer/stream","video/youtube","video/rtmp","audio/rtmp"],p.canThirdPlaySrces=function(t,a){var n="";return(c||v)&&(t=e(t),a=a||p.srces(t),e.each(a,function(e,t){return t.container&&t.src&&(c&&-1!=p.swfMimeTypes.indexOf(t.container)||v&&"video/youtube"==t.container)?(n=t,!1):void 0})),n};var b={};p.canNativePlaySrces=function(t,n){var i="";if(a){t=e(t);var r=(t[0].nodeName||"").toLowerCase(),o=(b[r]||{prop:{_supvalue:!1}}).prop._supvalue||t[0].canPlayType;if(!o)return i;n=n||p.srces(t),e.each(n,function(e,a){return"usermedia"==a.type||a.type&&o.call(t[0],a.type)?(i=a,!1):void 0})}return i};var w=/^\s*application\/octet\-stream\s*$/i,x=function(){var t=w.test(e.attr(this,"type")||"");return t&&e(this).removeAttr("type"),t};p.setError=function(t,a){if(e("source",t).filter(x).length){i.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{e(t).mediaLoad()}catch(n){}}else a||(a="can't play sources"),e(t).pause().data("mediaerror",a),i.error("mediaelementError: "+a+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){e(t).data("mediaerror")&&e(t).addClass("media-error").trigger("mediaerror")},1)};var E=function(){var t,a=c?r:"mediaelement-yt";return function(n,r,o){i.ready(a,function(){p.createSWF&&e(n).parent()[0]?p.createSWF(n,r,o):t||(t=!0,y(),E(n,r,o))}),t||!v||p.createSWF||(f=!0,g())}}(),T={"native":function(e,t,a){a&&"third"==a.isActive&&p.setActive(e,"html5",a)},third:E},M=function(e,t,a){var n,i,r=[{test:"canNativePlaySrces",activate:"native"},{test:"canThirdPlaySrces",activate:"third"}];for((d.preferFlash||t&&"third"==t.isActive)&&r.reverse(),n=0;2>n;n++)if(i=p[r[n].test](e,a)){T[r[n].activate](e,i,t);break}i||(p.setError(e,!1),t&&"third"==t.isActive&&p.setActive(e,"html5",t))},P=/^(?:embed|object|datalist|picture)$/i,A=function(t,a){var n=i.data(t,"mediaelementBase")||i.data(t,"mediaelementBase",{}),r=p.srces(t),o=t.parentNode;clearTimeout(n.loadTimer),e(t).removeClass("media-error"),e.data(t,"mediaerror",!1),r.length&&o&&1==o.nodeType&&!P.test(o.nodeName||"")&&(a=a||i.data(t,"mediaelement"),p.sortMedia&&r.sort(p.sortMedia),M(t,a,r))};p.selectSource=A,e(l).on("ended",function(t){var a=i.data(t.target,"mediaelement");(!n||a&&"html5"!=a.isActive||e.prop(t.target,"loop"))&&setTimeout(function(){!e.prop(t.target,"paused")&&e.prop(t.target,"loop")&&e(t.target).prop("currentTime",0).play()})});var N=!1,S=function(){var r=function(){i.implement(this,"mediaelement")&&(A(this),t.mediaDefaultMuted||null==e.attr(this,"muted")||e.prop(this,"muted",!0))};i.ready("dom-support",function(){N=!0,n||i.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(t){var n;n=i.defineNodeNameProperty(t,"load",{prop:{value:function(){var t=i.data(this,"mediaelement");A(this,t),!a||t&&"html5"!=t.isActive||!n.prop._supvalue||n.prop._supvalue.apply(this,arguments),!h.loaded&&this.querySelector("track")&&h(),e(this).triggerHandler("wsmediareload")}}}),b[t]=i.defineNodeNameProperty(t,"canPlayType",{prop:{value:function(n){var i="";return a&&b[t].prop._supvalue&&(i=b[t].prop._supvalue.call(this,n),"no"==i&&(i="")),!i&&c&&(n=e.trim((n||"").split(";")[0]),-1!=p.swfMimeTypes.indexOf(n)&&(i="maybe")),!i&&v&&"video/youtube"==n&&(i="maybe"),i}}})}),i.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var e=this,t=i.data(e,"mediaelementBase")||i.data(e,"mediaelementBase",{});clearTimeout(t.loadTimer),t.loadTimer=setTimeout(function(){A(e),e=null},9)}}),i.addReady(function(t,a){var n=e("video, audio",t).add(a.filter("video, audio")).each(r);!h.loaded&&e("track",n).length&&h(),n=null})}),a&&!N&&i.addReady(function(t,a){N||e("video, audio",t).add(a.filter("video, audio")).each(function(){return p.canNativePlaySrces(this)?void 0:(f=!0,y(),N=!0,!1)})})};p.loadDebugger=function(){i.ready("dom-support",function(){i.loader.loadScript("mediaelement-debug")})},{noCombo:1,media:1}[i.cfg.debug]&&e(l).on("mediaerror",function(){p.loadDebugger()}),a?(i.isReady("mediaelement-core",!0),S(),i.ready("WINDOWLOAD mediaelement",y)):i.ready(r,S),i.ready("track",h),"complete"==l.readyState&&i.isReady("WINDOWLOAD",!0)})}(webshims);