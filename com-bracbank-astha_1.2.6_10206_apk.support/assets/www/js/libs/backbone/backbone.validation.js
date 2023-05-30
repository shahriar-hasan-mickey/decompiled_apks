Backbone.Validation=function(t){"use strict";var e={forceUpdate:!1,selector:"name",labelFormatter:"sentenceCase",valid:Function.prototype,invalid:Function.prototype},n={formatLabel:function(t,n){return o[e.labelFormatter](t,n)},format:function(){var t=Array.prototype.slice.call(arguments),e=t.shift();return e.replace(/\{(\d+)\}/g,function(e,n){return"undefined"!=typeof t[n]?t[n]:e})}},u=function(e,n,i){return n=n||{},i=i||"",t.each(e,function(t,a){e.hasOwnProperty(a)&&(t&&"object"==typeof t&&!(t instanceof Array||t instanceof Date||t instanceof RegExp||t instanceof Backbone.Model||t instanceof Backbone.Collection)?u(t,n,i+a+"."):n[i+a]=t)}),n},i=function(){var i=function(e){return t.reduce(t.keys(e.validation||{}),function(t,e){return t[e]=void 0,t},{})},F=function(e,n){var u=e.validation?e.validation[n]||{}:{};return(t.isFunction(u)||t.isString(u))&&(u={fn:u}),t.isArray(u)||(u=[u]),t.reduce(u,function(e,n){return t.each(t.without(t.keys(n),"msg"),function(t){e.push({fn:d[t],val:n[t],msg:n.msg})}),e},[])},r=function(e,u,i,a){return t.reduce(F(e,u),function(F,r){var o=t.extend({},n,d),s=r.fn.call(o,i,u,r.val,e,a);return s===!1||F===!1?!1:s&&!F?r.msg||s:F},"")},o=function(e,n){var i,a={},F=!0,o=t.clone(n),d=u(n);return t.each(d,function(t,n){i=r(e,n,t,o),i&&(a[n]=i,F=!1)}),{invalidAttrs:a,isValid:F}},s=function(e,n){return{preValidate:function(e,n){return r(this,e,n,t.extend({},this.attributes))},isValid:function(e){var n=u(this.attributes);return t.isString(e)?!r(this,e,n[e],t.extend({},this.attributes)):t.isArray(e)?t.reduce(e,function(e,u){return e&&!r(this,u,n[u],t.extend({},this.attributes))},!0,this):(e===!0&&this.validate(),this.validation?this._isValid:!0)},validate:function(a,F){var r=this,d=!a,s=t.extend({},n,F),c=i(r),l=t.extend({},c,r.attributes,a),f=u(a||l),h=o(r,l);return r._isValid=h.isValid,t.each(c,function(t,n){var u=h.invalidAttrs.hasOwnProperty(n);u||s.valid(e,n,s.selector)}),t.each(c,function(t,n){var u=h.invalidAttrs.hasOwnProperty(n),i=f.hasOwnProperty(n);u&&(i||d)&&s.invalid(e,n,h.invalidAttrs[n],s.selector)}),t.defer(function(){r.trigger("validated",r._isValid,r,h.invalidAttrs),r.trigger("validated:"+(r._isValid?"valid":"invalid"),r,h.invalidAttrs)}),!s.forceUpdate&&t.intersection(t.keys(h.invalidAttrs),t.keys(f)).length>0?h.invalidAttrs:void 0}}},c=function(e,n,u){t.extend(n,s(e,u))},l=function(t){delete t.validate,delete t.preValidate,delete t.isValid},f=function(t){c(this.view,t,this.options)},h=function(t){l(t)};return{version:"0.8.1",configure:function(n){t.extend(e,n)},bind:function(n,u){var i=n.model,F=n.collection;if(u=t.extend({},e,a,u),"undefined"==typeof i&&"undefined"==typeof F)throw"Before you execute the binding your view must have a model or a collection.\nmore information.";i?c(n,i,u):F&&(F.each(function(t){c(n,t,u)}),F.bind("add",f,{view:n,options:u}),F.bind("remove",h))},unbind:function(t){var e=t.model,n=t.collection;e&&l(t.model),n&&(n.each(function(t){l(t)}),n.unbind("add",f),n.unbind("remove",h))},mixin:s(null,e)}}(),a=i.callbacks={valid:function(t,e,n){t.$("["+n+'~="'+e+'"]').removeClass("invalid").removeAttr("data-error")},invalid:function(t,e,n,u){t.$("["+u+'~="'+e+'"]').addClass("invalid").attr("data-error",n)}},F=i.patterns={digits:/^\d+$/,number:/^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/,email:/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i,url:/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i},r=i.messages={required:"{0} is required",acceptance:"{0} must be accepted",min:"{0} must be greater than or equal to {1}",max:"{0} must be less than or equal to {1}",range:"{0} must be between {1} and {2}",length:"{0} must be {1} characters",minLength:"{0} must be at least {1} characters",maxLength:"{0} must be at most {1} characters",rangeLength:"{0} must be between {1} and {2} characters",oneOf:"{0} must be one of: {1}",equalTo:"{0} must be the same as {1}",pattern:"{0} must be a valid {1}"},o=i.labelFormatters={none:function(t){return t},sentenceCase:function(t){return t.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return 0===e?t.toUpperCase():" "+t.toLowerCase()}).replace(/_/g," ")},label:function(t,e){return e.labels&&e.labels[t]||o.sentenceCase(t,e)}},d=i.validators=function(){var e=String.prototype.trim?function(t){return null===t?"":String.prototype.trim.call(t)}:function(t){var e=/^\s+/,n=/\s+$/;return null===t?"":t.toString().replace(e,"").replace(n,"")},n=function(e){return t.isNumber(e)||t.isString(e)&&e.match(F.number)},u=function(n){return!(t.isNull(n)||t.isUndefined(n)||t.isString(n)&&""===e(n)||t.isArray(n)&&t.isEmpty(n))};return{fn:function(e,n,u,i,a){return t.isString(u)&&(u=i[u]),u.call(i,e,n,a)},required:function(e,n,i,a,F){var o=t.isFunction(i)?i.call(a,e,n,F):i;return o||u(e)?o&&!u(e)?this.format(r.required,this.formatLabel(n,a)):void 0:!1},acceptance:function(e,n,u,i){return"true"===e||t.isBoolean(e)&&e!==!1?void 0:this.format(r.acceptance,this.formatLabel(n,i))},min:function(t,e,u,i){return!n(t)||u>t?this.format(r.min,this.formatLabel(e,i),u):void 0},max:function(t,e,u,i){return!n(t)||t>u?this.format(r.max,this.formatLabel(e,i),u):void 0},range:function(t,e,u,i){return!n(t)||t<u[0]||t>u[1]?this.format(r.range,this.formatLabel(e,i),u[0],u[1]):void 0},length:function(t,n,i,a){return u(t)&&e(t).length===i?void 0:this.format(r.length,this.formatLabel(n,a),i)},minLength:function(t,n,i,a){return!u(t)||e(t).length<i?this.format(r.minLength,this.formatLabel(n,a),i):void 0},maxLength:function(t,n,i,a){return!u(t)||e(t).length>i?this.format(r.maxLength,this.formatLabel(n,a),i):void 0},rangeLength:function(t,n,i,a){return!u(t)||e(t).length<i[0]||e(t).length>i[1]?this.format(r.rangeLength,this.formatLabel(n,a),i[0],i[1]):void 0},oneOf:function(e,n,u,i){return t.include(u,e)?void 0:this.format(r.oneOf,this.formatLabel(n,i),u.join(", "))},equalTo:function(t,e,n,u,i){return t!==i[n]?this.format(r.equalTo,this.formatLabel(e,u),this.formatLabel(n,u)):void 0},pattern:function(t,e,n,i){return u(t)&&t.toString().match(F[n]||n)?void 0:this.format(r.pattern,this.formatLabel(e,i),n)}}}();return i}(_);