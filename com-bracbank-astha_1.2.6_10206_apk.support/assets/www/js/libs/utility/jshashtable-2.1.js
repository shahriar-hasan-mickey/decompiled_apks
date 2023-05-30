var Hashtable=function(){function t(n){var e;if("string"==typeof n)return n;if(typeof n.hashCode==h)return e=n.hashCode(),"string"==typeof e?e:t(e);if(typeof n.toString==h)return n.toString();try{return String(n)}catch(r){return Object.prototype.toString.call(n)}}function n(t,n){return t.equals(n)}function e(t,n){return typeof n.equals==h?n.equals(t):t===n}function r(t){return function(n){if(null===n)throw new Error("null is not a valid "+t);if("undefined"==typeof n)throw new Error(t+" must not be undefined")}}function i(t,n,e,r){this[0]=t,this.entries=[],this.addEntry(n,e),null!==r&&(this.getEqualityFunction=function(){return r})}function u(t){return function(n){for(var e,r=this.entries.length,i=this.getEqualityFunction(n);r--;)if(e=this.entries[r],i(n,e[0]))switch(t){case g:return!0;case v:return e;case p:return[r,e[1]]}return!1}}function o(t){return function(n){for(var e=n.length,r=0,i=this.entries.length;i>r;++r)n[e+r]=this.entries[r][t]}}function s(t,n){for(var e,r=t.length;r--;)if(e=t[r],n===e[0])return r;return null}function l(t,n){var e=t[n];return e&&e instanceof i?e:null}function f(n,e){var r=this,u=[],o={},g=typeof n==h?n:t,v=typeof e==h?e:null;this.put=function(t,n){c(t),y(n);var e,r,s=g(t),f=null;return e=l(o,s),e?(r=e.getEntryForKey(t),r?(f=r[1],r[1]=n):e.addEntry(t,n)):(e=new i(s,t,n,v),u[u.length]=e,o[s]=e),f},this.get=function(t){c(t);var n=g(t),e=l(o,n);if(e){var r=e.getEntryForKey(t);if(r)return r[1]}return null},this.containsKey=function(t){c(t);var n=g(t),e=l(o,n);return e?e.containsKey(t):!1},this.containsValue=function(t){y(t);for(var n=u.length;n--;)if(u[n].containsValue(t))return!0;return!1},this.clear=function(){u.length=0,o={}},this.isEmpty=function(){return!u.length};var p=function(t){return function(){for(var n=[],e=u.length;e--;)u[e][t](n);return n}};this.keys=p("keys"),this.values=p("values"),this.entries=p("getEntries"),this.remove=function(t){c(t);var n,e=g(t),r=null,i=l(o,e);return i&&(r=i.removeEntryForKey(t),null!==r&&(i.entries.length||(n=s(u,e),a(u,n),delete o[e]))),r},this.size=function(){for(var t=0,n=u.length;n--;)t+=u[n].entries.length;return t},this.each=function(t){for(var n,e=r.entries(),i=e.length;i--;)n=e[i],t(n[0],n[1])},this.putAll=function(t,n){for(var e,i,u,o,s=t.entries(),l=s.length,f=typeof n==h;l--;)e=s[l],i=e[0],u=e[1],f&&(o=r.get(i))&&(u=n(i,o,u)),r.put(i,u)},this.clone=function(){var t=new f(n,e);return t.putAll(r),t}}var h="function",a=typeof Array.prototype.splice==h?function(t,n){t.splice(n,1)}:function(t,n){var e,r,i;if(n===t.length-1)t.length=n;else for(e=t.slice(n+1),t.length=n,r=0,i=e.length;i>r;++r)t[n+r]=e[r]},c=r("key"),y=r("value"),g=0,v=1,p=2;return i.prototype={getEqualityFunction:function(t){return typeof t.equals==h?n:e},getEntryForKey:u(v),getEntryAndIndexForKey:u(p),removeEntryForKey:function(t){var n=this.getEntryAndIndexForKey(t);return n?(a(this.entries,n[0]),n[1]):null},addEntry:function(t,n){this.entries[this.entries.length]=[t,n]},keys:o(0),values:o(1),getEntries:function(t){for(var n=t.length,e=0,r=this.entries.length;r>e;++e)t[n+e]=this.entries[e].slice(0)},containsKey:u(g),containsValue:function(t){for(var n=this.entries.length;n--;)if(t===this.entries[n][1])return!0;return!1}},f}();