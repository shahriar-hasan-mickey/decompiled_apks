window.FlashCanvasOptions=window.FlashCanvasOptions||{},webshims.$.extend(FlashCanvasOptions,{swfPath:webshims.cfg.basePath+"FlashCanvasPro/"}),window.ActiveXObject&&!window.CanvasRenderingContext2D&&function(l,k,q){function O(t){this.code=t,this.message=ga[t]}function w(t,i,s){if(!s)for(var s=[],e=0,h=t*i*4;h>e;++e)s[e]=0;this.width=t,this.height=i,this.data=s}function ha(t){this.width=t}function x(t){this.id=t.F++}function o(t){this.J=t,this.id=t.F++}function A(t,i){this.canvas=t,this.z=i,this.e=i.id.slice(8),this.G(),this.F=0,this.j=this.D="",this.d=0}function B(){if("complete"===k.readyState){k.detachEvent(P,B);for(var t=k.getElementsByTagName(r),i=0,s=t.length;s>i;++i)C.initElement(t[i])}}function Q(){var t=event.srcElement,i=t.parentNode;t.blur(),i.focus()}function D(){2&event.button&&event.srcElement.parentNode.setCapture()}function E(){2&event.button&&event.srcElement.parentNode.releaseCapture()}function R(){var t=event.propertyName;if("width"===t||"height"===t){var i=event.srcElement,s=i[t],e=parseInt(s,10);(isNaN(e)||0>e)&&(e="width"===t?300:150),s===e?(i.style[t]=e+"px",i.getContext("2d").K(i.width,i.height)):i[t]=e}}function S(){l.detachEvent(T,S);for(var t in m){var i,s=m[t],e=s.firstChild;for(i in e)"function"==typeof e[i]&&(e[i]=g);for(i in s)"function"==typeof s[i]&&(s[i]=g);e.detachEvent(U,Q),e.detachEvent(F,D),s.detachEvent(G,E),s.detachEvent(V,R)}l[W]=g,l[X]=g,l[Y]=g,l[H]=g,l[Z]=g}function ia(t){return t.toLowerCase()}function i(t){throw new O(t)}function $(t){var i=parseInt(t.width,10),s=parseInt(t.height,10);(isNaN(i)||0>i)&&(i=300),(isNaN(s)||0>s)&&(s=150),t.width=i,t.height=s}function I(t,i){for(var s in m){var e=m[s].getContext("2d");e.g.push(e.a.length+2),e.a.push(y,t,i)}}var g=null,r="canvas",W="CanvasRenderingContext2D",X="CanvasGradient",Y="CanvasPattern",H="FlashCanvas",Z="G_vmlCanvasManager",U="onfocus",F="onmousedown",G="onmouseup",V="onpropertychange",P="onreadystatechange",T="onunload",n;try{n=new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").match(/[\d,]+/)[0].replace(/,/g,".")}catch(ka){n=0}var j=l[H+"Options"]||{},J=function(){var t=k.getElementsByTagName("script"),t=t[t.length-1];return k.documentMode>=8?t.src:t.getAttribute("src",4)}().replace(/[^\/]+$/,""),t=j.swfPath||J;t+=parseInt(n)>9?"flash10canvas.swf":"flash9canvas.swf";var y="4",s={},u={},aa={},K={},p={},ba={},v={},m={},z={},J="autoinit"in j?j.autoinit:1,L="turbo"in j?j.turbo:1,M=j.delay||0,ca=j.disableContextMenu||0,da=j.imageCacheSize||100,N=j.usePolicyFile||0,ea=j.proxy||"proxy.php",fa=j.save||"save.php";"10.1.53.64"===n&&(L=0,M=30),A.prototype={save:function(){this.h(15),this.I.push([this.m,this.n,this.w,this.l,this.q,this.o,this.p,this.r,this.u,this.v,this.s,this.t,this.j,this.A,this.B]),this.a.push("B")},restore:function(){var t=this.I;t.length&&(t=t.pop(),this.globalAlpha=t[0],this.globalCompositeOperation=t[1],this.strokeStyle=t[2],this.fillStyle=t[3],this.lineWidth=t[4],this.lineCap=t[5],this.lineJoin=t[6],this.miterLimit=t[7],this.shadowOffsetX=t[8],this.shadowOffsetY=t[9],this.shadowBlur=t[10],this.shadowColor=t[11],this.font=t[12],this.textAlign=t[13],this.textBaseline=t[14]),this.a.push("C")},scale:function(t,i){this.a.push("D",t,i)},rotate:function(t){this.a.push("E",t)},translate:function(t,i){this.a.push("F",t,i)},transform:function(t,i,s,e,h,n){this.a.push("G",t,i,s,e,h,n)},setTransform:function(t,i,s,e,h,n){this.a.push("H",t,i,s,e,h,n)},createLinearGradient:function(t,s,e,h){return!(isFinite(t)&&isFinite(s)&&isFinite(e)&&isFinite(h)||!i(9)),this.a.push("M",t,s,e,h),new o(this)},createRadialGradient:function(t,s,e,h,n,a){return!(isFinite(t)&&isFinite(s)&&isFinite(e)&&isFinite(h)&&isFinite(n)&&isFinite(a)||!i(9)),(0>e||0>a)&&i(1),this.a.push("N",t,s,e,h,n,a),new o(this)},createPattern:function(t,e){t||i(17);var h,n,a,o=t.tagName,c=this.e;if(o)if(o=o.toLowerCase(),"img"===o)h=t.getAttribute("src",2);else if(o===r)n=this.C(t),a=t!==this.canvas;else{if("video"===o)return;i(17)}else t.src?h=t.src:i(17);return"repeat"===e||"no-repeat"===e||"repeat-x"===e||"repeat-y"===e||""===e||e===g||i(12),n||(n=u[c][h],(a=n===q)&&(n=this.k(h))),this.a.push("O",n,e),a&&s[c]&&(this.f(),++p[c]),new x(this)},clearRect:function(t,i,s,e){this.a.push("X",t,i,s,e),this.b||this.c(),this.d=0},fillRect:function(t,i,s,e){this.h(1),this.a.push("Y",t,i,s,e),this.b||this.c(),this.d=0},strokeRect:function(t,i,s,e){this.h(6),this.a.push("Z",t,i,s,e),this.b||this.c(),this.d=0},beginPath:function(){this.a.push("a")},closePath:function(){this.a.push("b")},moveTo:function(t,i){this.a.push("c",t,i)},lineTo:function(t,i){this.a.push("d",t,i)},quadraticCurveTo:function(t,i,s,e){this.a.push("e",t,i,s,e)},bezierCurveTo:function(t,i,s,e,h,n){this.a.push("f",t,i,s,e,h,n)},arcTo:function(t,s,e,h,n){0>n&&isFinite(n)&&i(1),this.a.push("g",t,s,e,h,n)},rect:function(t,i,s,e){this.a.push("h",t,i,s,e)},arc:function(t,s,e,h,n,a){0>e&&isFinite(e)&&i(1),this.a.push("i",t,s,e,h,n,a?1:0)},fill:function(){this.h(1),this.a.push("j"),this.b||this.c(),this.d=0},stroke:function(){this.h(6),this.a.push("k"),this.b||this.c(),this.d=0},clip:function(){this.a.push("l")},isPointInPath:function(t,i){return this.a.push("m",t,i),"true"===this.f()},fillText:function(t,i,s,e){this.h(9),this.g.push(this.a.length+1),this.a.push("r",t,i,s,e===q?1/0:e),this.b||this.c(),this.d=0},strokeText:function(t,i,s,e){this.h(10),this.g.push(this.a.length+1),this.a.push("s",t,i,s,e===q?1/0:e),this.b||this.c(),this.d=0},measureText:function(t){var i=z[this.e];try{i.style.font=this.font}catch(s){}return i.innerText=(""+t).replace(/[ \n\f\r]/g,"	"),new ha(i.offsetWidth)},drawImage:function(t,e,h,n,a,o,c,l,f){t||i(17);var d,g,v,m=t.tagName,w=arguments.length,b=this.e;if(m)if(m=m.toLowerCase(),"img"===m)d=t.getAttribute("src",2);else if(m===r)g=this.C(t),v=t!==this.canvas;else{if("video"===m)return;i(17)}else t.src?d=t.src:i(17);if(g||(g=u[b][d],(v=g===q)&&(g=this.k(d))),this.h(0),3===w)this.a.push("u",w,g,e,h);else if(5===w)this.a.push("u",w,g,e,h,n,a);else{if(9!==w)return;(0===n||0===a)&&i(1),this.a.push("u",w,g,e,h,n,a,o,c,l,f)}v&&s[b]?(this.f(),++p[b]):this.b||this.c(),this.d=0},createImageData:function(t,s){var e=Math.ceil;return 2===arguments.length?((!isFinite(t)||!isFinite(s))&&i(9),(0===t||0===s)&&i(1)):(t instanceof w||i(9),s=t.height,t=t.width),t=e(0>t?-t:t),s=e(0>s?-s:s),new w(t,s)},getImageData:function(a,b,c,d){return!(isFinite(a)&&isFinite(b)&&isFinite(c)&&isFinite(d)||!i(9)),(0===c||0===d)&&i(1),this.a.push("w",a,b,c,d),a=this.f(),c="object"==typeof JSON?JSON.parse(a):k.documentMode?eval(a):a.slice(1,-1).split(","),a=c.shift(),b=c.shift(),new w(a,b,c)},putImageData:function(t,s,e,h,n,a,o){t instanceof w||i(17),(!isFinite(s)||!isFinite(e))&&i(9);var r=arguments.length,c=t.width,l=t.height,u=t.data;3===r?this.a.push("x",r,c,l,u.toString(),s,e):7===r&&(!(isFinite(h)&&isFinite(n)&&isFinite(a)&&isFinite(o)||!i(9)),this.a.push("x",r,c,l,u.toString(),s,e,h,n,a,o)),this.b||this.c(),this.d=0},loadFont:function(t,i,e){var h=this.e;(i||e)&&(v[h][t]=[t,i,e]),this.g.push(this.a.length+1),this.a.push("6",t),s[h]?(this.f(),++p[h]):this.b||this.c()},loadImage:function(t,i,e){var h,n=t.tagName,a=this.e;n?"img"===n.toLowerCase()&&(h=t.getAttribute("src",2)):t.src&&(h=t.src),h&&u[a][h]===q&&(n=this.k(h),(i||e)&&(v[a][n]=[t,i,e]),this.a.push("u",1,n),s[a]&&(this.f(),++p[a]))},G:function(){this.globalAlpha=this.m=1,this.globalCompositeOperation=this.n="source-over",this.fillStyle=this.l=this.strokeStyle=this.w="#000000",this.lineWidth=this.q=1,this.lineCap=this.o="butt",this.lineJoin=this.p="miter",this.miterLimit=this.r=10,this.shadowBlur=this.s=this.shadowOffsetY=this.v=this.shadowOffsetX=this.u=0,this.shadowColor=this.t="rgba(0, 0, 0, 0.0)",this.font=this.j="10px sans-serif",this.textAlign=this.A="start",this.textBaseline=this.B="alphabetic",this.a=[],this.I=[],this.i=[],this.g=[],this.b=g,this.H=1},h:function(t){var i,s=this.a;this.m!==this.globalAlpha&&s.push("I",this.m=this.globalAlpha),this.n!==this.globalCompositeOperation&&s.push("J",this.n=this.globalCompositeOperation),this.u!==this.shadowOffsetX&&s.push("T",this.u=this.shadowOffsetX),this.v!==this.shadowOffsetY&&s.push("U",this.v=this.shadowOffsetY),this.s!==this.shadowBlur&&s.push("V",this.s=this.shadowBlur),this.t!==this.shadowColor&&(i=this.t=this.shadowColor,(""+i).indexOf("%")>0&&this.i.push(s.length+1),s.push("W",i)),1&t&&this.l!==this.fillStyle&&(i=this.l=this.fillStyle,"string"==typeof i?(i.indexOf("%")>0&&this.i.push(s.length+1),s.push("L",i)):(i instanceof o||i instanceof x)&&s.push("L",i.id)),2&t&&this.w!==this.strokeStyle&&(i=this.w=this.strokeStyle,"string"==typeof i?(i.indexOf("%")>0&&this.i.push(s.length+1),s.push("K",i)):(i instanceof o||i instanceof x)&&s.push("K",i.id)),4&t&&(this.q!==this.lineWidth&&s.push("P",this.q=this.lineWidth),this.o!==this.lineCap&&s.push("Q",this.o=this.lineCap),this.p!==this.lineJoin&&s.push("R",this.p=this.lineJoin),this.r!==this.miterLimit&&s.push("S",this.r=this.miterLimit)),8&t&&(this.j!==this.font&&(t=z[this.e].offsetHeight,this.g.push(s.length+2),s.push("o",t,this.j=this.font)),this.A!==this.textAlign&&s.push("p",this.A=this.textAlign),this.B!==this.textBaseline&&s.push("q",this.B=this.textBaseline),this.D!==this.canvas.currentStyle.direction&&s.push("1",this.D=this.canvas.currentStyle.direction))},c:function(){var t=this;t.b=setTimeout(function(){p[t.e]?t.c():(t.b=g,t.f(L))},M)},L:function(){clearTimeout(this.b),this.b=g},f:function(t){var i,s,e,h=this.i,n=this.g,a=this.a,o=this.z;if(a.length){if(this.b&&this.L(),t){for(i=0,s=h.length;s>i;++i)e=h[i],a[e]=encodeURI(a[e]);for(i=0,s=n.length;s>i;++i)e=n[i],a[e]=encodeURIComponent(a[e])}else for(i=0,s=n.length;s>i;++i)e=n[i],a[e]=(""+a[e]).replace(/&/g,"&amp;").replace(/</g,"&lt;");if(i=a.join(""),this.a=[],this.i=[],this.g=[],!t)return o.CallFunction('<invoke name="executeCommand" returntype="javascript"><arguments><string>'+i+"</string></arguments></invoke>");o.flashvars="c="+i,o.width=o.clientWidth+this.H,this.H^=-2}},K:function(t,i){this.f(),this.G(),t>0&&(this.z.width=t),i>0&&(this.z.height=i),this.a.push("2",t,i),this.b||this.c(),this.d=0},C:function(t){var s=t.getContext("2d").e,e=r+":"+s;return(0===t.width||0===t.height)&&i(11),s===this.e||(t=m[s].getContext("2d"),t.d)||(s=++ba[s],e+=":"+s,t.a.push("3",s),t.b||t.c(),t.d=1),e},k:function(t){var i=this.e,s=u[i],e=aa[i],h=s[t]=K[i]++;return h>=da-1&&(K[i]=0),h in e&&delete s[e[h]],this.g.push(this.a.length+2),this.a.push("5",h,t),e[h]=t,h}},o.prototype={addColorStop:function(t,s){(isNaN(t)||0>t||t>1)&&i(1);var e=this.J,h=this.id;(""+s).indexOf("%")>0&&e.i.push(e.a.length+3),e.a.push("y",h,t,s)}},O.prototype=Error();var ga={1:"INDEX_SIZE_ERR",9:"NOT_SUPPORTED_ERR",11:"INVALID_STATE_ERR",12:"SYNTAX_ERR",17:"TYPE_MISMATCH_ERR",18:"SECURITY_ERR"},C={initElement:function(i){if(i.getContext)return i;var e=Math.random().toString(36).slice(2)||"0",h="external"+e;s[e]=0,u[e]={},aa[e]=[],K[e]=0,p[e]=1,ba[e]=0,v[e]=[],$(i),i.innerHTML='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="'+location.protocol+'//fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="100%" height="100%" id="'+h+'"><param name="allowScriptAccess" value="always"><param name="flashvars" value="id='+h+'"><param name="wmode" value="transparent"></object><span style="margin:0;padding:0;border:0;display:inline-block;position:static;height:1em;overflow:visible;white-space:nowrap"></span>',m[e]=i;var n=i.firstChild;z[e]=i.lastChild;var a=k.body.contains;if(a(i))n.movie=t;else var o=setInterval(function(){a(i)&&(clearInterval(o),n.movie=t)},0);"BackCompat"!==k.compatMode&&l.XMLHttpRequest||(z[e].style.overflow="hidden");var r=new A(i,n);return i.getContext=function(t){return"2d"===t?r:g},i.toDataURL=function(t,s){return 0===i.width||0===i.height?"data:,":("image/jpeg"===(""+t).replace(/[A-Z]+/g,ia)?r.a.push("A",t,"number"==typeof s?s:""):r.a.push("A",t),r.f().slice(1,-1))},n.attachEvent(U,Q),ca&&(n.attachEvent(F,D),i.attachEvent(G,E)),N&&r.a.push(y,"usePolicyFile",N),e=r.a.length,r.g.push(e+2,e+5),r.a.push(y,"proxy",ea,y,"save",fa),i},saveImage:function(t,i){t.firstChild.saveImage(i)},setOptions:function(t){for(var i in t){var s=t[i];switch(i){case"turbo":L=s;break;case"delay":M=s;break;case"disableContextMenu":ca=s;var e=void 0;for(e in m){var h=m[e],n=s?"attachEvent":"detachEvent";h.firstChild[n](F,D),h[n](G,E)}break;case"imageCacheSize":da=s;break;case"usePolicyFile":I(i,N=s?1:0);break;case"proxy":I(i,ea=s);break;case"save":I(i,fa=s)}}},trigger:function(t,i){m[t].fireEvent("on"+i)},unlock:function(t,i,e){var h,n,a;p[t]&&--p[t],i===q?(h=m[t],i=h.firstChild,$(h),n=h.width,e=h.height,h.style.width=n+"px",h.style.height=e+"px",n>0&&(i.width=n),e>0&&(i.height=e),i.resize(n,e),h.attachEvent(V,R),s[t]=1,"function"==typeof h.onload&&setTimeout(function(){h.onload()},0)):(a=v[t][i])&&(n=a[0],e=a[1+e],delete v[t][i],"function"==typeof e&&e.call(n))}};k.createElement(r),k.createStyleSheet().cssText=r+"{display:inline-block;overflow:hidden;width:300px;height:150px}",J&&("complete"===k.readyState?B():k.attachEvent(P,B)),l.attachEvent(T,S),0===t.indexOf(location.protocol+"//"+location.host+"/")&&(n=new ActiveXObject("Microsoft.XMLHTTP"),n.open("GET",t,!1),n.send(g)),l[W]=A,l[X]=o,l[Y]=x,l[H]=C,l[Z]={init:function(){},init_:function(){},initElement:C.initElement}}(window,document),function(t){webshims.addReady(function(i,s){i==t&&window.G_vmlCanvasManager&&G_vmlCanvasManager.init_&&G_vmlCanvasManager.init_(t),webshims.$("canvas",i).add(s.filter("canvas")).each(function(){var t=this.getContext;!t&&window.G_vmlCanvasManager&&G_vmlCanvasManager.initElement(this)})}),webshims.isReady("canvas",!0)}(document);