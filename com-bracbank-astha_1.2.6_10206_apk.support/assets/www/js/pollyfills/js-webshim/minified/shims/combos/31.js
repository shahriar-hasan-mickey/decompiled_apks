!function(t){"use strict";var e=window.webshims;if(!e.defineProperties){var i="defineProperty",a=Object.prototype.hasOwnProperty,n=["configurable","enumerable","writable"],r=function(t){for(var e=0;3>e;e++)void 0!==t[n[e]]||"writable"===n[e]&&void 0===t.value||(t[n[e]]=!0)},o=function(t){if(t)for(var e in t)a.call(t,e)&&r(t[e])};Object.create&&(e.objectCreate=function(e,i,a){o(i);var n=Object.create(e,i);return a&&(n.options=t.extend(!0,{},n.options||{},a),a=n.options),n._create&&t.isFunction(n._create)&&n._create(a),n}),Object[i]&&(e[i]=function(t,e,a){return r(a),Object[i](t,e,a)}),Object.defineProperties&&(e.defineProperties=function(t,e){return o(e),Object.defineProperties(t,e)}),e.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,e.getPrototypeOf=Object.getPrototypeOf}}(window.webshims.$),webshims.register("dom-extend",function(t,e,i,a,n){"use strict";function r(i,a,n){var r=t.clone(i,a,!1);return t(r.querySelectorAll("."+e.shadowClass)).detach(),n?(y++,t(r.querySelectorAll("[id]")).prop("id",function(t,e){return e+y})):t(r.querySelectorAll('audio[id^="ID-"], video[id^="ID-"], label[id^="ID-"]')).removeAttr("id"),r}var o=!("hrefNormalized"in t.support)||t.support.hrefNormalized,s=Object.prototype.hasOwnProperty;if(e.assumeARIA=!0,("text"==t('<input type="email" />').attr("type")||""===t("<form />").attr("novalidate")||"required"in t("<input />")[0].attributes)&&e.error("IE browser modes are busted in IE10+. Make sure to run IE in edge mode (X-UA-Compatible). Please test your HTML/CSS/JS with a real IE version or at least IETester or similar tools. "),!e.cfg.no$Switch){var l=function(){!i.jQuery||i.$&&i.jQuery!=i.$||i.jQuery.webshims||(e.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),i.$&&(i.$=e.$),i.jQuery=e.$)};l(),setTimeout(l,90),e.ready("DOM",l),t(l),e.ready("WINDOWLOAD",l)}var u=/\s*,\s*/,d={},c={},p={},f={},h={},m={},v=t.fn.val,g=function(e,i,a,n,r){return r?v.call(t(e)):v.call(t(e),a)};t.widget||t.pluginFactory&&t.pluginFactory.mixin||!function(){t.cleanData,t.cleanData=function(e){return function(i){var a,n,r;for(r=0;null!=(n=i[r]);r++)try{a=t._data(n,"events"),a&&a.remove&&t(n).triggerHandler("remove")}catch(o){}e(i)}}(t.cleanData)}(),t.fn.val=function(e){var i=this[0];if(arguments.length&&null==e&&(e=""),!arguments.length)return i&&1===i.nodeType?t.prop(i,"value",e,"val",!0):v.call(this);if(t.isArray(e))return v.apply(this,arguments);var a=t.isFunction(e);return this.each(function(r){if(i=this,1===i.nodeType)if(a){var o=e.call(i,r,t.prop(i,"value",n,"val",!0));null==o&&(o=""),t.prop(i,"value",o,"val")}else t.prop(i,"value",e,"val")})},t.fn.onTrigger=function(t,e){return this.on(t,e).each(e)},t.fn.onWSOff=function(e,i,n,r){return r||(r=a),t(r)[n?"onTrigger":"on"](e,i),this.on("remove",function(a){a.originalEvent||t(r).off(e,i)}),this};var y=0,b="_webshims"+Math.round(1e3*Math.random()),w=function(e,i,a){if(e=e.jquery?e[0]:e,!e)return a||{};var r=t.data(e,b);return a!==n&&(r||(r=t.data(e,b,{})),i&&(r[i]=a)),i?r&&r[i]:r};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(e){t.fn[e.name]=function(){var i=[];return this.each(function(){var a=w(this,"shadowData"),n=a&&a[e.prop]||this;-1==t.inArray(n,i)&&i.push(n)}),this.pushStack(i)}}),t.fn.clonePolyfill=function(e,i){return e=e||!1,this.map(function(){var n=r(this,e,i);return setTimeout(function(){t.contains(a.body,n)&&t(n).updatePolyfill()}),n})},e.cfg.extendNative||e.cfg.noTriggerOverride||!function(e){t.event.trigger=function(i,a,n,r){if(!p[i]||r||!n||1!==n.nodeType)return e.apply(this,arguments);var o,l,u,d=n[i],c=t.prop(n,i),f=c&&d!=c;return f&&(u="__ws"+i,l=i in n&&s.call(n,i),n[i]=c,n[u]=d),o=e.apply(this,arguments),f&&(l?n[i]=d:delete n[i],delete n[u]),o}}(t.event.trigger),["removeAttr","prop","attr"].forEach(function(i){d[i]=t[i],t[i]=function(e,a,r,o,s){var l="val"==o,u=l?g:d[i];if(!e||!c[a]||1!==e.nodeType||!l&&o&&"attr"==i&&t.attrFn[a])return u(e,a,r,o,s);var p,h,v,y=(e.nodeName||"").toLowerCase(),b=f[y],w="attr"!=i||r!==!1&&null!==r?i:"removeAttr";if(b||(b=f["*"]),b&&(b=b[a]),b&&(p=b[w]),p){if("value"==a&&(h=p.isVal,p.isVal=l),"removeAttr"===w)return p.value.call(e);if(r===n)return p.get?p.get.call(e):p.value;p.set&&("attr"==i&&r===!0&&(r=a),v=p.set.call(e,r)),"value"==a&&(p.isVal=h)}else v=u(e,a,r,o,s);if((r!==n||"removeAttr"===w)&&m[y]&&m[y][a]){var A;A="removeAttr"==w?!1:"prop"==w?!!r:!0,m[y][a].forEach(function(t){(!t.only||(t.only="prop"==i)||"attr"==t.only&&"prop"!=i)&&t.call(e,r,A,l?"val":w,i)})}return v},h[i]=function(t,a,r){f[t]||(f[t]={}),f[t][a]||(f[t][a]={});var o=f[t][a][i],s=function(t,e,n){var o;return e&&e[t]?e[t]:n&&n[t]?n[t]:"prop"==i&&"value"==a?function(t){var e=this;return r.isVal?g(e,a,t,!1,0===arguments.length):d[i](e,a,t)}:"prop"==i&&"value"==t&&r.value.apply?(o="__ws"+a,p[a]=!0,function(){var t=this[o]||d[i](this,a);return t&&t.apply&&(t=t.apply(this,arguments)),t}):function(t){return d[i](this,a,t)}};f[t][a][i]=r,r.value===n&&(r.set||(r.set=r.writeable?s("set",r,o):e.cfg.useStrict&&"prop"==a?function(){throw a+" is readonly on "+t}:function(){e.info(a+" is readonly on "+t)}),r.get||(r.get=s("get",r,o))),["value","get","set"].forEach(function(t){r[t]&&(r["_sup"+t]=s(t,o))})}});var A=function(){var t=e.getPrototypeOf(a.createElement("foobar")),i=e.support.advancedObjectProperties&&e.support.objectAccessor;return function(n,r,o){var l,u;if(!(i&&(l=a.createElement(n))&&(u=e.getPrototypeOf(l))&&t!==u)||l[r]&&s.call(l,r))o._supvalue=function(){var t=w(this,"propValue");return t&&t[r]&&t[r].apply?t[r].apply(this,arguments):t&&t[r]},E.extendValue(n,r,o.value);else{var d=l[r];o._supvalue=function(){return d&&d.apply?d.apply(this,arguments):d},u[r]=o.value}o.value._supvalue=o._supvalue}}(),E=function(){var i={};e.addReady(function(a,n){var r={},o=function(e){r[e]||(r[e]=t(a.getElementsByTagName(e)),n[0]&&t.nodeName(n[0],e)&&(r[e]=r[e].add(n)))};t.each(i,function(t,i){return o(t),i&&i.forEach?void i.forEach(function(e){r[t].each(e)}):void e.warn("Error: with "+t+"-property. methods: "+i)}),r=null});var n,r=t([]),o=function(e,r){i[e]?i[e].push(r):i[e]=[r],t.isDOMReady&&(n||t(a.getElementsByTagName(e))).each(r)};return{createTmpCache:function(e){return t.isDOMReady&&(n=n||t(a.getElementsByTagName(e))),n||r},flushTmpCache:function(){n=null},content:function(e,i){o(e,function(){var e=t.attr(this,i);null!=e&&t.attr(this,i,e)})},createElement:function(t,e){o(t,e)},extendValue:function(e,i,a){o(e,function(){t(this).each(function(){var t=w(this,"propValue",{});t[i]=this[i],this[i]=a})})}}}(),N=function(t,e){t.defaultValue===n&&(t.defaultValue=""),t.removeAttr||(t.removeAttr={value:function(){t[e||"prop"].set.call(this,t.defaultValue),t.removeAttr._supvalue.call(this)}}),t.attr||(t.attr={})};t.extend(e,{xProps:c,getID:function(){var e=(new Date).getTime();return function(i){i=t(i);var a=i.prop("id");return a||(e++,a="ID-"+e,i.eq(0).prop("id",a)),a}}(),domPrefixes:["webkit","moz","ms","o","ws"],prefixed:function(t,i){var a,n,r=!1;if(i[t]&&(r=t),!r)for(t=t.charAt(0).toUpperCase()+t.slice(1),a=0;a<e.domPrefixes.length;a++)if(n=e.domPrefixes[a]+t,n in i){r=n;break}return r},shadowClass:"wsshadow-"+Date.now(),implement:function(i,a){var n=w(i,"implemented")||w(i,"implemented",{});return n[a]?(e.warn(a+" already implemented for element #"+i.id),!1):(n[a]=!0,!t(i).hasClass("ws-nopolyfill"))},extendUNDEFProp:function(e,i){t.each(i,function(t,i){t in e||(e[t]=i)})},getOptions:function(){var i=/\-([a-z])/g,a={},n={},r=function(t,e){return e.toLowerCase()},o=function(t,e){return e.toUpperCase()};return function(s,l,u,d){n[l]?l=n[l]:(n[l]=l.replace(i,o),l=n[l]);var c,p=w(s,"cfg"+l),f={};if(p)return p;if(p=t(s).data(),p&&"string"==typeof p[l]){if(d)return w(s,"cfg"+l,p[l]);e.error("data-"+l+" attribute has to be a valid JSON, was: "+p[l])}u?Array.isArray(u)?u.unshift(!0,{}):u=[!0,{},u]:u=[!0,{}],p&&"object"==typeof p[l]&&u.push(p[l]),a[l]||(a[l]=new RegExp("^"+l+"([A-Z])"));for(c in p)a[l].test(c)&&(f[c.replace(a[l],r)]=p[c]);return u.push(f),w(s,"cfg"+l,t.extend.apply(t,u))}}(),createPropDefault:N,data:w,moveToFirstEvent:function(e,i,a){var n,r=(t._data(e,"events")||{})[i];r&&r.length>1&&(n=r.pop(),a||(a="bind"),"bind"==a&&r.delegateCount?r.splice(r.delegateCount,0,n):r.unshift(n)),e=null},addShadowDom:function(){var n,r,o,s=t(i),l={init:!1,runs:0,test:function(){var t=l.getHeight(),e=l.getWidth();t!=l.height||e!=l.width?(l.height=t,l.width=e,l.handler({type:"docresize"}),l.runs++,l.runs<9&&setTimeout(l.test,90)):l.runs=0},handler:function(){var e,u=function(){t(a).triggerHandler("updateshadowdom",[e])},d=function(){if(e&&"resize"==e.type){var t=s.width(),a=s.width();if(a==r&&t==o)return;r=a,o=t}e&&"docresize"!=e.type&&(l.height=l.getHeight(),l.width=l.getWidth()),i.requestAnimationFrame?requestAnimationFrame(u):setTimeout(u,0)};return function(t){clearTimeout(n),e=t,n=setTimeout(d,"resize"!=t.type||i.requestAnimationFrame?9:50)}}(),_create:function(){t.each({Height:"getHeight",Width:"getWidth"},function(t,e){var i=a.body,n=a.documentElement;l[e]=function(){return Math.max(i["scroll"+t],n["scroll"+t],i["offset"+t],n["offset"+t],n["client"+t])}})},start:function(){!this.init&&a.body&&(this.init=!0,this._create(),this.height=l.getHeight(),this.width=l.getWidth(),setInterval(this.test,999),t(this.test),null==t.support.boxSizing&&t(function(){t.support.boxSizing&&l.handler({type:"boxsizing"})}),e.ready("WINDOWLOAD",this.test),t(a).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel playerdimensionchange",this.handler),t(i).on("resize",this.handler))}};return e.docObserve=function(){e.ready("DOM",function(){l.start()})},function(i,a,n){if(i&&a){n=n||{},i.jquery&&(i=i[0]),a.jquery&&(a=a[0]);var r=t.data(i,b)||t.data(i,b,{}),o=t.data(a,b)||t.data(a,b,{}),s={};n.shadowFocusElement?n.shadowFocusElement&&(n.shadowFocusElement.jquery&&(n.shadowFocusElement=n.shadowFocusElement[0]),s=t.data(n.shadowFocusElement,b)||t.data(n.shadowFocusElement,b,s)):n.shadowFocusElement=a,t(i).on("remove",function(e){e.originalEvent||setTimeout(function(){t(a).remove()},4)}),r.hasShadow=a,s.nativeElement=o.nativeElement=i,s.shadowData=o.shadowData=r.shadowData={nativeElement:i,shadowElement:a,shadowFocusElement:n.shadowFocusElement},n.shadowChilds&&n.shadowChilds.each(function(){w(this,"shadowData",o.shadowData)}),n.data&&(s.shadowData.data=o.shadowData.data=r.shadowData.data=n.data),n=null}e.docObserve()}}(),propTypes:{standard:function(t){N(t),t.prop||(t.prop={set:function(e){t.attr.set.call(this,""+e)},get:function(){return t.attr.get.call(this)||t.defaultValue}})},"boolean":function(t){N(t),t.prop||(t.prop={set:function(e){e?t.attr.set.call(this,""):t.removeAttr.value.call(this)},get:function(){return null!=t.attr.get.call(this)}})},src:function(){var e=a.createElement("a");return e.style.display="none",function(i,a){N(i),i.prop||(i.prop={set:function(t){i.attr.set.call(this,t)},get:function(){var i,n=this.getAttribute(a);if(null==n)return"";if(e.setAttribute("href",n+""),!o){try{t(e).insertAfter(this),i=e.getAttribute("href",4)}catch(r){i=e.getAttribute("href",4)}t(e).detach()}return i||e.href}})}}(),enumarated:function(t){N(t),t.prop||(t.prop={set:function(e){t.attr.set.call(this,e)},get:function(){var e=(t.attr.get.call(this)||"").toLowerCase();return e&&-1!=t.limitedTo.indexOf(e)||(e=t.defaultValue),e}})}},reflectProperties:function(i,a){"string"==typeof a&&(a=a.split(u)),a.forEach(function(a){e.defineNodeNamesProperty(i,a,{prop:{set:function(e){t.attr(this,a,e)},get:function(){return t.attr(this,a)||""}}})})},defineNodeNameProperty:function(i,a,n){return c[a]=!0,n.reflect&&(n.propType&&!e.propTypes[n.propType]?e.error("could not finde propType "+n.propType):e.propTypes[n.propType||"standard"](n,a)),["prop","attr","removeAttr"].forEach(function(r){var o=n[r];o&&(o="prop"===r?t.extend({writeable:!0},o):t.extend({},o,{writeable:!0}),h[r](i,a,o),"*"!=i&&e.cfg.extendNative&&"prop"==r&&o.value&&t.isFunction(o.value)&&A(i,a,o),n[r]=o)}),n.initAttr&&E.content(i,a),n},defineNodeNameProperties:function(t,i,a,n){for(var r in i)!n&&i[r].initAttr&&E.createTmpCache(t),a&&(i[r][a]||(i[r][a]={},["value","set","get"].forEach(function(t){t in i[r]&&(i[r][a][t]=i[r][t],delete i[r][t])}))),i[r]=e.defineNodeNameProperty(t,r,i[r]);return n||E.flushTmpCache(),i},createElement:function(i,a,n){var r;return t.isFunction(a)&&(a={after:a}),E.createTmpCache(i),a.before&&E.createElement(i,a.before),n&&(r=e.defineNodeNameProperties(i,n,!1,!0)),a.after&&E.createElement(i,a.after),E.flushTmpCache(),r},onNodeNamesPropertyModify:function(e,i,a,n){"string"==typeof e&&(e=e.split(u)),t.isFunction(a)&&(a={set:a}),e.forEach(function(t){m[t]||(m[t]={}),"string"==typeof i&&(i=i.split(u)),a.initAttr&&E.createTmpCache(t),i.forEach(function(e){m[t][e]||(m[t][e]=[],c[e]=!0),a.set&&(n&&(a.set.only=n),m[t][e].push(a.set)),a.initAttr&&E.content(t,e)}),E.flushTmpCache()})},defineNodeNamesBooleanProperty:function(i,a,r){r||(r={}),t.isFunction(r)&&(r.set=r),e.defineNodeNamesProperty(i,a,{attr:{set:function(t){r.useContentAttribute?e.contentAttr(this,a,t):this.setAttribute(a,t),r.set&&r.set.call(this,!0)},get:function(){var t=r.useContentAttribute?e.contentAttr(this,a):this.getAttribute(a);return null==t?n:a}},removeAttr:{value:function(){this.removeAttribute(a),r.set&&r.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:r.initAttr||!1})},contentAttr:function(t,e,i){if(t.nodeName){var a;return i===n?(a=t.attributes[e]||{},i=a.specified?a.value:null,null==i?n:i):void("boolean"==typeof i?i?t.setAttribute(e,e):t.removeAttribute(e):t.setAttribute(e,i))}},activeLang:function(){var i=[],a=[],n={},r=function(a,r,s){r._isLoading=!0,n[a]?n[a].push(r):(n[a]=[r],e.loader.loadScript(a,function(){s==i.join()&&t.each(n[a],function(t,e){o(e)}),delete n[a]}))},o=function(e){var a=e.__active,n=function(t,a){return e._isLoading=!1,e[a]||-1!=e.availableLangs.indexOf(a)?(e[a]?(e.__active=e[a],e.__activeName=a):r(e.langSrc+a,e,i.join()),!1):void 0};t.each(i,n),e.__active||(e.__active=e[""],e.__activeName=""),a!=e.__active&&t(e).trigger("change")};return function(t){var e;if("string"==typeof t)i[0]!=t&&(i=[t],e=i[0].split("-")[0],e&&e!=t&&i.push(e),a.forEach(o));else if("object"==typeof t)return t.__active||(a.push(t),o(t)),t.__active;return i[0]}}()}),t.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(t,i){e[t]=function(t,a,n,r){"string"==typeof t&&(t=t.split(u));var o={};return t.forEach(function(t){o[t]=e[i](t,a,n,r)}),o}}),e.isReady("webshimLocalization",!0),function(){if(!("content"in a.createElement("template")||(t(function(){var i=t("main").attr({role:"main"});i.length>1?e.error("only one main element allowed in document"):i.is("article *, section *")&&e.error("main not allowed inside of article/section elements")}),"hidden"in a.createElement("a")))){e.defineNodeNamesBooleanProperty(["*"],"hidden");var i={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},n=function(t,e){var i=t.getAttribute("role");i||t.setAttribute("role",e)};t.webshims.addReady(function(e,r){if(t.each(i,function(i,a){for(var o=t(i,e).add(r.filter(i)),s=0,l=o.length;l>s;s++)n(o[s],a)}),e===a){var o=a.getElementsByTagName("header")[0],s=a.getElementsByTagName("footer"),l=s.length;if(o&&!t(o).closest("section, article")[0]&&n(o,"banner"),!l)return;var u=s[l-1];t(u).closest("section, article")[0]||n(u,"contentinfo")}})}}()}),webshims.register("form-core",function(t,e,i,a,n,r){"use strict";e.capturingEventPrevented=function(e){if(!e._isPolyfilled){var i=e.isDefaultPrevented,a=e.preventDefault;e.preventDefault=function(){return clearTimeout(t.data(e.target,e.type+"DefaultPrevented")),t.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){t.removeData(e.target,e.type+"DefaultPrevented")},30)),a.apply(this,arguments)},e.isDefaultPrevented=function(){return!(!i.apply(this,arguments)&&!t.data(e.target,e.type+"DefaultPrevented"))},e._isPolyfilled=!0}};var o=e.modules,s=e.support,l=function(e){return(t.prop(e,"validity")||{valid:1}).valid},u=function(){var i=["form-validation"];t(a).off(".lazyloadvalidation"),r.lazyCustomMessages&&(r.customMessages=!0,i.push("form-message")),e._getAutoEnhance(r.customDatalist)&&(r.fD=!0,i.push("form-datalist")),r.addValidators&&i.push("form-validators"),e.reTest(i)},d=function(){var i,n,o=t.expr[":"],u=/^(?:form|fieldset)$/i,d=function(e){var i=!1;return t(e).jProp("elements").each(function(){return!u.test(this.nodeName||"")&&(i=o.invalid(this))?!1:void 0}),i};if(t.extend(o,{"valid-element":function(e){return u.test(e.nodeName||"")?!d(e):!(!t.prop(e,"willValidate")||!l(e))},"invalid-element":function(e){return u.test(e.nodeName||"")?d(e):!(!t.prop(e,"willValidate")||l(e))},"required-element":function(e){return!(!t.prop(e,"willValidate")||!t.prop(e,"required"))},"user-error":function(e){return t.prop(e,"willValidate")&&t(e).getShadowElement().hasClass(r.iVal.errorClass||"user-error")},"optional-element":function(e){return!(!t.prop(e,"willValidate")||t.prop(e,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(e){o[e]=t.expr[":"][e+"-element"]}),s.fieldsetdisabled&&!t('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled")&&(i=t.find.matches,n={":disabled":1,":enabled":1},t.find.matches=function(t,e){return n[t]?i.call(this,"*"+t,e):i.apply(this,arguments)},t.extend(o,{enabled:function(e){return"disabled"in e&&e.disabled===!1&&!t.find.matchesSelector(e,"fieldset[disabled] *")},disabled:function(e){return e.disabled===!0||"disabled"in e&&t.find.matchesSelector(e,"fieldset[disabled] *")}})),"unknown"==typeof a.activeElement){var c=o.focus;o.focus=function(){try{return c.apply(this,arguments)}catch(t){e.error(t)}return!1}}},c={noAutoCallback:!0,options:r},p=e.loader.addModule,f=function(t,i,a){u(),e.ready("form-validation",function(){t[i].apply(t,a)})},h="transitionDelay"in a.documentElement.style?"":" no-transition",m=e.cfg.wspopover;p("form-validation",t.extend({d:["form-message"]},c)),p("form-validators",t.extend({},c)),s.formvalidation&&!e.bugs.bustedValidity&&e.capturingEvents(["invalid"],!0),t.expr.filters?d():e.ready("sizzle",d),e.triggerInlineForm=function(e,i){t(e).trigger(i)},m.position||m.position===!1||(m.position={at:"left bottom",my:"left top",collision:"fit flip"}),e.wsPopover={id:0,_create:function(){this.options=t.extend(!0,{},m,this.options),this.id=e.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=t('<div class="ws-popover'+h+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=t(".ws-po-box",this.element),this.lastElement=t([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(t){this.contentElement.html(t)},bindElement:function(){var t=this,e=function(){t.stopBlur=!1};this.preventBlur=function(){t.stopBlur=!0,clearTimeout(t.timers.stopBlur),t.timers.stopBlur=setTimeout(e,9)},this.element.on({mousedown:this.preventBlur})},show:function(){f(this,"show",arguments)}},e.validityAlert={showFor:function(){f(this,"showFor",arguments)}},e.getContentValidationMessage=function(i,a,n){var r;e.errorbox&&e.errorbox.initIvalContentMessage&&e.errorbox.initIvalContentMessage(i);var o=(e.getOptions&&e.errorbox?e.getOptions(i,"errormessage",!1,!0):t(i).data("errormessage"))||i.getAttribute("x-moz-errormessage")||"";return n&&o[n]?o=o[n]:o&&(a=a||t.prop(i,"validity")||{valid:1},a.valid&&(o="")),"object"==typeof o&&(a=a||t.prop(i,"validity")||{valid:1},a.customError&&(r=t.data(i,"customMismatchedRule"))&&o[r]&&"string"==typeof o[r]?o=o[r]:a.valid||(t.each(a,function(t,e){return e&&"valid"!=t&&o[t]?(o=o[t],!1):void 0}),"object"==typeof o&&(a.typeMismatch&&o.badInput&&(o=o.badInput),a.badInput&&o.typeMismatch&&(o=o.typeMismatch)))),"object"==typeof o&&(o=o.defaultMessage),e.replaceValidationplaceholder&&(o=e.replaceValidationplaceholder(i,o)),o||""},e.refreshCustomValidityRules=t.noop,t.fn.getErrorMessage=function(i){var a="",n=this[0];return n&&(a=e.getContentValidationMessage(n,!1,i)||t.prop(n,"customValidationMessage")||t.prop(n,"validationMessage")||""),a},t.event.special.valuevalidation={setup:function(){e.error("valuevalidation was renamed to validatevalue!")}},t.event.special.validatevalue={setup:function(){var e=t(this).data()||t.data(this,{});"validatevalue"in e||(e.validatevalue=!0)}},t(a).on("focusin.lazyloadvalidation mousedown.lazyloadvalidation touchstart.lazyloadvalidation",function(t){"form"in t.target&&u()}),e.ready("WINDOWLOAD",u),o["form-number-date-ui"].loaded&&!r.customMessages&&(o["form-number-date-api"].test()||s.inputtypes.range&&s.inputtypes.color)&&e.isReady("form-number-date-ui",!0),e.ready("DOM",function(){a.querySelector(".ws-custom-file")&&e.reTest(["form-validation"])}),r.addValidators&&r.fastValidators&&e.reTest(["form-validators","form-validation"]),"complete"==a.readyState&&e.isReady("WINDOWLOAD",!0)}),webshims.register("form-datalist",function(t,e,i,a,n,r){"use strict";var o=function(t){t&&"string"==typeof t||(t="DOM"),o[t+"Loaded"]||(o[t+"Loaded"]=!0,e.ready(t,function(){e.loader.loadList(["form-datalist-lazy"])}))},s={submit:1,button:1,reset:1,hidden:1,range:1,date:1,month:1};e.modules["form-number-date-ui"].loaded&&t.extend(s,{number:1,time:1}),e.propTypes.element=function(i,n){e.createPropDefault(i,"attr"),i.prop||(i.prop={get:function(){var e=t.attr(this,n);return e&&(e=a.getElementById(e),e&&i.propNodeName&&!t.nodeName(e,i.propNodeName)&&(e=null)),e||null},writeable:!1})},function(){var l=e.cfg.forms,u=e.support.datalist;if(!u||l.customDatalist){var d=function(){var i=function(){var e;!t.data(this,"datalistWidgetData")&&(e=t.prop(this,"id"))?t('input[list="'+e+'"], input[data-wslist="'+e+'"]').eq(0).attr("list",e):t(this).triggerHandler("updateDatalist")},a={autocomplete:{attr:{get:function(){var e=this,i=t.data(e,"datalistWidget");return i?i._autocomplete:"autocomplete"in e?e.autocomplete:e.getAttribute("autocomplete")},set:function(e){var i=this,a=t.data(i,"datalistWidget");a?(a._autocomplete=e,"off"==e&&a.hideList()):"autocomplete"in i?i.autocomplete=e:i.setAttribute("autocomplete",e)}}}};u?((t("<datalist><select><option></option></select></datalist>").prop("options")||[]).length||e.defineNodeNameProperty("datalist","options",{prop:{writeable:!1,get:function(){var e=this.options||[];if(!e.length){var i=this,a=t("select",i);a[0]&&a[0].options&&a[0].options.length&&(e=a[0].options)}return e}}}),a.list={attr:{get:function(){var i=e.contentAttr(this,"list");return null!=i?(t.data(this,"datalistListAttr",i),s[t.prop(this,"type")]||s[t.attr(this,"type")]||this.removeAttribute("list")):i=t.data(this,"datalistListAttr"),null==i?n:i},set:function(i){var a=this;t.data(a,"datalistListAttr",i),s[t.prop(this,"type")]||s[t.attr(this,"type")]?a.setAttribute("list",i):(e.objectCreate(c,n,{input:a,id:i,datalist:t.prop(a,"list")}),a.setAttribute("data-wslist",i)),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}):e.defineNodeNameProperties("input",{list:{attr:{get:function(){var t=e.contentAttr(this,"list");return null==t?n:t},set:function(i){var a=this;e.contentAttr(a,"list",i),e.objectCreate(r.shadowListProto,n,{input:a,id:i,datalist:t.prop(a,"list")}),t(a).triggerHandler("listdatalistchange")}},initAttr:!0,reflect:!0,propType:"element",propNodeName:"datalist"}}),e.defineNodeNameProperties("input",a),e.addReady(function(t,e){e.filter("datalist > select, datalist, datalist > option, datalist > select > option").closest("datalist").each(i)})},c={_create:function(a){if(!s[t.prop(a.input,"type")]&&!s[t.attr(a.input,"type")]){var n=a.datalist,r=t.data(a.input,"datalistWidget"),l=this;return n&&r&&r.datalist!==n?(r.datalist=n,r.id=a.id,t(r.datalist).off("updateDatalist.datalistWidget").on("updateDatalist.datalistWidget",t.proxy(r,"_resetListCached")),void r._resetListCached()):n?void(r&&r.datalist===n||(this.datalist=n,this.id=a.id,this.hasViewableData=!0,this._autocomplete=t.attr(a.input,"autocomplete"),t.data(a.input,"datalistWidget",this),t.data(n,"datalistWidgetData",this),o("WINDOWLOAD"),e.isReady("form-datalist-lazy")?i.QUnit?l._lazyCreate(a):setTimeout(function(){l._lazyCreate(a)},9):(t(a.input).one("focus",o),e.ready("form-datalist-lazy",function(){l._destroyed||l._lazyCreate(a)})))):void(r&&r.destroy())}},destroy:function(e){var r,o=t.attr(this.input,"autocomplete");t(this.input).off(".datalistWidget").removeData("datalistWidget"),this.shadowList.remove(),t(a).off(".datalist"+this.id),t(i).off(".datalist"+this.id),this.input.form&&this.input.id&&t(this.input.form).off("submit.datalistWidget"+this.input.id),this.input.removeAttribute("aria-haspopup"),o===n?this.input.removeAttribute("autocomplete"):t(this.input).attr("autocomplete",o),e&&"beforeunload"==e.type&&(r=this.input,setTimeout(function(){t.attr(r,"list",t.attr(r,"list"))},9)),this._destroyed=!0}};e.loader.addModule("form-datalist-lazy",{noAutoCallback:!0,options:t.extend(r,{shadowListProto:c})}),r.list||(r.list={}),d()}}()});