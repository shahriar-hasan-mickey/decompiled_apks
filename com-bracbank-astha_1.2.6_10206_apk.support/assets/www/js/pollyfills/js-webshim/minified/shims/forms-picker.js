!function(e){!function(){function t(t){var s=t||window.event,o=r.call(arguments,1),l=0,u=0,c=0,p=0;return t=e.event.fix(s),t.type="mousewheel","detail"in s&&(c=-1*s.detail),"wheelDelta"in s&&(c=s.wheelDelta),"wheelDeltaY"in s&&(c=s.wheelDeltaY),"wheelDeltaX"in s&&(u=-1*s.wheelDeltaX),"axis"in s&&s.axis===s.HORIZONTAL_AXIS&&(u=-1*c,c=0),l=0===c?u:c,"deltaY"in s&&(c=-1*s.deltaY,l=c),"deltaX"in s&&(u=s.deltaX,0===c&&(l=-1*u)),0!==c||0!==u?(p=Math.max(Math.abs(c),Math.abs(u)),(!a||a>p)&&(a=p),l=Math[l>=1?"floor":"ceil"](l/a),u=Math[u>=1?"floor":"ceil"](u/a),c=Math[c>=1?"floor":"ceil"](c/a),t.deltaX=u,t.deltaY=c,t.deltaFactor=a,o.unshift(t,l,u,c),i&&clearTimeout(i),i=setTimeout(n,200),(e.event.dispatch||e.event.handle).apply(this,o)):void 0}function n(){a=null}if(!e.event.special.mousewheel){var i,a,s=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],o="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],r=Array.prototype.slice;if(e.event.fixHooks)for(var l=s.length;l;)e.event.fixHooks[s[--l]]=e.event.mouseHooks;e.event.special.mousewheel={version:"3.1.6",setup:function(){if(this.addEventListener)for(var e=o.length;e;)this.addEventListener(o[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=o.length;e;)this.removeEventListener(o[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.on("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.off("mousewheel",e)}})}}(),function(){function t(){this===a.elem&&(a.pos=[-260,-260],a.elem=!1,s=3)}if(!e.event.special.mwheelIntent){var n,i,a={pos:[-260,-260]},s=3,o=document,r=o.documentElement,l=o.body;l||e(function(){l=o.body}),e.event.special.mwheelIntent={setup:function(){var n=e(this).on("mousewheel",e.event.special.mwheelIntent.handler);return this!==o&&this!==r&&this!==l&&n.on("mouseleave",t),n=null,!0},teardown:function(){return e(this).off("mousewheel",e.event.special.mwheelIntent.handler).off("mouseleave",t),!0},handler:function(t){var o=[t.clientX,t.clientY];return this===a.elem||Math.abs(a.pos[0]-o[0])>s||Math.abs(a.pos[1]-o[1])>s?(a.elem=this,a.pos=o,s=250,clearTimeout(i),i=setTimeout(function(){s=10},200),clearTimeout(n),n=setTimeout(function(){s=3},1500),t=e.extend({},t,{type:"mwheelIntent"}),(e.event.dispatch||e.event.handle).apply(this,arguments)):void 0}},e.fn.extend({mwheelIntent:function(e){return e?this.on("mwheelIntent",e):this.trigger("mwheelIntent")},unmwheelIntent:function(e){return this.off("mwheelIntent",e)}}),e(function(){l=o.body,e(o).on("mwheelIntent.mwheelIntentDefault",e.noop)})}}(),function(){if(!e.event.special.mousepress){var t=function(e,t){var n=e.data("mousepresstimer");n&&clearTimeout(n),t&&e.off("mouseup.mousepressext mouseleave.mousepressext"),e=null};e.event.special.mousepress={setup:function(){e(this).on("mousedown.mousepressext",function(n){var i=e(this),a=function(s){var o=0;t(i),i.data("mousepresstimer",setInterval(function(){e.event.special.mousepress.handler(i[0],n),o++,o>3&&s>45&&a(s-40)},s))},s=e(n.target).trigger("mousepressstart",[n]);t(i),i.data("mousepresstimer",setTimeout(function(){a(180)},200)),i.on("mouseup.mousepressext mouseleave.mousepressext",function(e){t(i,!0),s.trigger("mousepressend",[e]),i=null,s=null})})},teardown:function(){t(e(this).off(".mousepressext"),!0)},handler:function(t,n){return e.event.dispatch.call(t,{type:"mousepress",target:n.target,pageX:n.pageX,pageY:n.pageY})}}}}()}(webshims.$),webshims.register("forms-picker",function(e,t,n,i,a,s){"use strict";var o=t.picker,r=o._actions,l=s,u=function(e){var t=[e.getFullYear(),l.addZero(e.getMonth()+1),l.addZero(e.getDate())];return t.month=t[0]+"-"+t[1],t.date=t[0]+"-"+t[1]+"-"+t[2],t.time=l.addZero(e.getHours())+":"+l.addZero(e.getMinutes()),t["datetime-local"]=t.date+"T"+t.time,t},c=u(new Date),p=function(t){t=e(t||this.activeButton),this.activeButton.attr({tabindex:"-1","aria-selected":"false"}),this.activeButton=t.attr({tabindex:"0","aria-selected":"true"}),this.index=this.buttons.index(this.activeButton[0]),clearTimeout(this.timer),o._genericSetFocus.apply(this,arguments)},d=function(){var t;this.popover.navedInitFocus&&(t=this.popover.navedInitFocus.sel||this.popover.navedInitFocus,this.activeButton&&this.activeButton[0]||!this.buttons[t]?t&&(this.activeButton=e(t,this.element)):this.activeButton=this.buttons[t](),!this.activeButton[0]&&this.popover.navedInitFocus.alt&&(this.activeButton=this.buttons[this.popover.navedInitFocus.alt]())),this.activeButton&&this.activeButton[0]||(this.activeButton=this.buttons.filter(".checked-value")),this.activeButton[0]||(this.activeButton=this.buttons.filter(".this-value")),this.activeButton[0]||(this.activeButton=this.buttons.eq(0)),this.setFocus(this.activeButton,this.opts.noFocus)},h=t.formcfg,v=h.__active||h[""],m=function(e){e.stopImmediatePropagation()},f=s.steps,g=function(t,n,i){var a=v.date,s=[];return i||(i=""),e.each({monthNames:"monthname",monthDigits:"month-digit",monthNamesShort:"monthname-short"},function(e,o){var r=[i+a[e][t]];n&&(r.push(n),a.showMonthAfterYear&&r.reverse()),s.push('<span class="'+o+'">'+r.join(" ")+"</span>")}),s.join("")},b="inputMode"in i.createElement("input")||!/ipad|iphone/i.test(navigator.userAgent),w={_addBindings:function(){var t,n=this,i=this.options,a=function(){var t={};return{init:function(i,a,s){t[i]||(t[i]={fn:s},e(n.orig).on(i,function(){t[i].val=e.prop(n.orig,"value")})),t[i].val=a},call:function(e,i){t[e]&&t[e].val!=i&&(clearTimeout(t[e].timer),t[e].val=i,t[e].fn(i,n))}}}(),s=function(){a.init("input",e.prop(n.orig,"value"),n.options.input),a.init("change",e.prop(n.orig,"value"),n.options.change)},o={},r=function(i){return r.prevent?(i.preventDefault(),e(t||n.element.getShadowFocusElement()).trigger("focus"),m(i),!0):void 0};!function(){var t,s=function(i){var s;clearTimeout(t),s=n.parseValue(),"color"==n.type&&n.inputElements.val(s),e.prop(n.orig,"value",s),a.call("input",s),i&&"wsupdatevalue"==i.type||a.call("change",s)},o=function(n){clearTimeout(t),e(n.target).trigger("wswidgetfocusin")},r=function(n){clearTimeout(t),t=setTimeout(s,0),e(n.target).trigger("wswidgetfocusout"),"ws__change"==n.type&&(m(n),i.splitInput||s())};n.element.on("wsupdatevalue",s),n.inputElements.add(n.buttonWrapper).add(n.element).on({ws__focusin:o,"ws__blur ws__focusout ws__change":r}),setTimeout(function(){n.popover&&(n.popover.element.on("wspopoverhide",r),n.popover.element.children().on({focusin:o,focusout:r}))},0)}();var l=!1,u={},c=i.splitInput?this.inputElements.filter(".ws-spin"):this.inputElements.eq(0),p={ws__blur:function(e){r(e)||i.disabled||i.readonly||r.prevent||(t=!1),m(e)},ws__focus:function(){t||(s(),t=this)},keypress:function(e){if(!e.isDefaultPrevented()){var t,i=!0,a=e.keyCode;e.ctrlKey||e.metaKey||!v[n.type+"Signs"]?i=!1:(t=String.fromCharCode(null==e.charCode?a:e.charCode),i=!(" ">t||(v[n.type+"Signs"]+"0123456789").indexOf(t)>-1)),i&&e.preventDefault()}},ws__input:"color"!=this.type&&this.isValid?function(){var e,t="number"!=n.type||i.nogrouping?199:99,a=function(){var e=n.parseValue(!0);e&&n.isValid(e)&&n.setInput(e,!0)};return function(){clearTimeout(e),e=setTimeout(a,t)}}():e.noop,"ws__input keydown keypress":function(){var t,n=!1,a=function(){n===!0?(n="semi",t=setTimeout(a,250)):n=!1},s=function(){n=!0,clearTimeout(t),t=setTimeout(a,300)},o=function(){var e=this;setTimeout(function(){e.focus(),e.select&&e.select()},4),s()};return function(t){if(i.splitInput&&i.jumpInputs)if("ws__input"==t.type){if(e.prop(this,"value").length===e.prop(this,"maxLength"))try{e(this).next().next("input, select").each(o)}catch(a){}}else t.shiftKey||t.crtlKey||9!=t.keyCode||n!==!0&&(!n||e.prop(this,"value"))||t.preventDefault()}}()},d=function(){return i.disabled||t||n.element.getShadowFocusElement().trigger("focus"),r.set(),!1};r.set=function(){var e,t=function(){r.prevent=!1};return function(){clearTimeout(e),r.prevent=!0,setTimeout(t,9)}}(),i.splitInput&&b&&null==i.jumpInputs&&(i.jumpInputs=!0),this.buttonWrapper.on("mousedown",d),this.setInput=function(e,t){n.value(e,!1,t),a.call("input",e)},this.setChange=function(e){n.setInput(e),a.call("change",e)},this.inputElements.on(p),f[this.type]&&(["stepUp","stepDown"].forEach(function(e){o[e]=function(s){if(!i.disabled&&!i.readonly){t||d();var o=!1;if(s||(s=1),i.stepfactor&&(s*=i.stepfactor),s>0&&!isNaN(n.minAsNumber)&&(isNaN(n.valueAsNumber)||n.valueAsNumber<n.minAsNumber)&&n.elemHelper.prop("valueAsNumber")<=n.minAsNumber?o=n.asValue(n.minAsNumber):0>s&&!isNaN(n.maxAsNumber)&&(isNaN(n.valueAsNumber)||n.valueAsNumber>n.minAsNumber)&&n.elemHelper.prop("valueAsNumber")<=n.maxAsNumber&&(o=n.asValue(n.maxAsNumber)),o===!1)try{n.elemHelper[e](s),o=n.elemHelper.prop("value")}catch(r){!i.value&&n.maxAsNumber>=n.minAsNumber&&(o=i.defValue)}return o!==!1&&i.value!=o&&(n.value(o),i.toFixed&&"number"==i.type&&(n.element[0].value=n.toFixed(n.element[0].value,!0)),a.call("input",o)),o}}}),i.noSpinbtn||(u.mwheelIntent=function(e,n){n&&t&&!i.disabled&&(o[n>0?"stepUp":"stepDown"](),e.preventDefault())},u.keydown=function(t){if(!(i.list||t.isDefaultPrevented()||t.altKey&&40==t.keyCode||e.attr(this,"list"))){var n=!0,a=t.keyCode;38==a?o.stepUp():40==a?o.stepDown():n=!1,n&&t.preventDefault()}},c.on(u)),e(this.buttonWrapper).on("mousepressstart mousepressend",".step-up, .step-down",function(t){var n="removeClass";"mousepressstart"!=t.type||l||(n="addClass"),e(this)[n]("mousepress-ui")}).on("mousedown mousepress",".step-up",function(t){"mousedown"==t.type&&(l=i.disabled||i.readOnly||e.find.matchesSelector(n.orig,":disabled")),l||o.stepUp()}).on("mousedown mousepress",".step-down",function(){l||i.disabled||i.readOnly||o.stepDown()}),s())},_getSelectionEnd:function(e){var t,n;return(t=this.element[0].value)&&this.element.is(":focus")&&(n=this.element.prop("selectionEnd"))<t.length?("number"==this.type&&(t=t.substr(0,n).split(v.numberFormat[","]),e=e.substr(0,n).split(v.numberFormat[","]),t.length<e.length?n++:t.length>e.length&&n--),n):void 0},initDataList:function(){var t,n=this,i=function(){e(n.orig).jProp("list").off("updateDatalist",i).on("updateDatalist",i),clearTimeout(t),t=setTimeout(function(){n.list&&n.list()},9)};e(this.orig).onTrigger("listdatalistchange",i)},getOptions:function(){var t={},n=e(this.orig).jProp("list");return n.find("option").each(function(){t[e.prop(this,"value")]=e.prop(this,"label")}),[t,n.data("label")]}};e.extend(e.fn.wsBaseWidget.wsProto,w),e.extend(e.fn.spinbtnUI.wsProto,w),e(h).on("change",function(){v=h.__active}),t.ListBox=function(t,n,i){this.element=e("ul",t),this.popover=n,this.opts=i||{},this.buttons=e("button:not(:disabled)",this.element),this.ons(this),this._initialFocus()},t.ListBox.prototype={setFocus:p,_initialFocus:d,prev:function(){var e=this.index-1;0>e?this.opts.prev&&(this.popover.navedInitFocus="last",this.popover.actionFn(this.opts.prev),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(e))},next:function(){var e=this.index+1;e>=this.buttons.length?this.opts.next&&(this.popover.navedInitFocus="first",this.popover.actionFn(this.opts.next),this.popover.navedInitFocus=!1):this.setFocus(this.buttons.eq(e))},ons:function(e){this.element.on({keydown:function(t){var n,i=t.keyCode;return t.ctrlKey?void 0:(36==i||33==i?(e.setFocus(e.buttons.eq(0)),n=!0):34==i||35==i?(e.setFocus(e.buttons.eq(e.buttons.length-1)),n=!0):38==i||37==i?(e.prev(),n=!0):(40==i||39==i)&&(e.next(),n=!0),n?!1:void 0)}})}},t.Grid=function(t,n,i){this.element=e("tbody",t),this.popover=n,this.opts=i||{},this.buttons=e("button:not(:disabled):not(.othermonth)",this.element),this.ons(this),this._initialFocus(),this.popover.openedByFocus&&(this.popover.activeElement=this.activeButton)},t.Grid.prototype={setFocus:p,_initialFocus:d,first:function(){this.setFocus(this.buttons.eq(0))},last:function(){this.setFocus(this.buttons.eq(this.buttons.length-1))},upPage:function(){e(".ws-picker-header > button:not(:disabled)",this.popover.element).trigger("click")},downPage:function(){this.activeButton.filter(':not([data-action="changeInput"])').trigger("click")},ons:function(e){this.element.on({keydown:function(t){var n,i,a=t.keyCode;return t.shiftKey?void 0:(i=t.ctrlKey||t.altKey,i&&40==a?n="downPage":i&&38==a?n="upPage":33==a||i&&37==a?n="prevPage":34==a||i&&39==a?n="nextPage":36==t.keyCode||33==t.keyCode?n="first":35==t.keyCode?n="last":38==t.keyCode?n="up":37==t.keyCode?n="prev":40==t.keyCode?n="down":39==t.keyCode&&(n="next"),n?(e[n](),!1):void 0)}})}},e.each({prevPage:{get:"last",action:"prev"},nextPage:{get:"first",action:"next"}},function(e,n){t.Grid.prototype[e]=function(){this.opts[n.action]&&(this.popover.navedInitFocus={sel:'button[data-id="'+this.activeButton.attr("data-id")+'"]:not(:disabled,.othermonth)',alt:n.get},this.popover.actionFn(this.opts[n.action]),this.popover.navedInitFocus=!1)}}),e.each({up:{traverse:"prevAll",get:"last",action:"prev",reverse:!0},down:{traverse:"nextAll",get:"first",action:"next"}},function(n,i){t.Grid.prototype[n]=function(){var t=this.activeButton.closest("td").prop("cellIndex"),n="td:nth-child("+(t+1)+") button:not(:disabled,.othermonth)",a=this.activeButton.closest("tr")[i.traverse]();i.reverse&&(a=e(a.get().reverse())),a=a.find(n)[i.get](),a[0]?this.setFocus(a.eq(0)):this.opts[i.action]&&(this.popover.navedInitFocus=n+":"+i.get,this.popover.actionFn(this.opts[i.action]),this.popover.navedInitFocus=!1)}}),e.each({prev:{traverse:"prevAll",get:"last",reverse:!0},next:{traverse:"nextAll",get:"first"}},function(n,i){t.Grid.prototype[n]=function(){var t="button:not(:disabled,.othermonth)",a=this.activeButton.closest("td")[i.traverse]("td");i.reverse&&(a=e(a.get().reverse())),a=a.find(t)[i.get](),a[0]||(a=this.activeButton.closest("tr")[i.traverse]("tr"),i.reverse&&(a=e(a.get().reverse())),a=a.find(t)[i.get]()),a[0]?this.setFocus(a.eq(0)):this.opts[n]&&(this.popover.navedInitFocus=i.get,this.popover.actionFn(this.opts[n]),this.popover.navedInitFocus=!1)}}),o.getWeek=function(e){var t,n=new Date(e.getTime());return n.setDate(n.getDate()+4-(n.getDay()||7)),t=n.getTime(),n.setMonth(0),n.setDate(1),Math.floor(Math.round((t-n)/864e5)/7)+1},o.getYearList=function(t,n){var i,a,s,r,l,u,p,d,h,v,m=n.options,f=m.size,g=m.max.split("-"),b=m.min.split("-"),w=m.cols||4,y=m.value.split("-"),x=0,D=0,I="",k=0,T=n.orig&&"validatevalue"in e.data(n.orig);for(n.options.useDecadeBase||(!g[0]&&b[0]?n.options.useDecadeBase="min":g[0]&&!b[0]&&(n.options.useDecadeBase="max")),"max"==n.options.useDecadeBase&&g[0]?x=11-g[0]%12:"min"==n.options.useDecadeBase&&b[0]&&(x=0-b[0]%12),t=1*t[0],v=t-(t+x)%(12*f),i=0;f>i;i++){for(i?v+=12:u=o.isInRange([v-1],g,b)?{"data-action":"setYearList",value:v-1}:!1,I+='<div class="year-list picker-list ws-index-'+i+'"><div class="ws-picker-header"><select data-action="setYearList" class="decade-select">'+o.createYearSelect(t,g,b,"",{start:v,step:12*f,label:v+" – "+(v+11)}).join("")+'</select><button disabled="disabled"><span>'+v+" – "+(v+11)+"</span></button></div>",l=[],a=0;12>a;a++)s=v+a,h=[],!o.isInRange([s],g,b)||T&&e(n.orig).triggerHandler("validatevalue",[{value:s,valueAsDate:null,isPartial:[s]}])?r=' disabled=""':(r="",D++),s==c[0]&&h.push("this-value"),y[0]==s&&h.push("checked-value"),d=h.length?' class="'+h.join(" ")+'"':"",!a||a%w||(k++,l.push('</tr><tr class="ws-row-'+k+'">')),l.push('<td class="ws-item-'+a+'" role="presentation"><button  data-id="year-'+a+'" type="button"'+r+d+' data-action="setMonthList" value="'+s+'" tabindex="-1" role="gridcell">'+s+"</button></td>");i==f-1&&(p=o.isInRange([s+1],g,b)?{"data-action":"setYearList",value:s+1}:!1),I+='<div class="picker-grid"><table role="grid" aria-label="'+v+" – "+(v+11)+'"><tbody><tr class="ws-row-0">'+l.join("")+"</tr></tbody></table></div></div>"}return{enabled:D,main:I,next:p,prev:u,type:"Grid"}},o.getMonthList=function(t,n){var i,a,s,r,l,u,p,d,h,m,f=n.options,b=f.size,w=f.maxS,y=f.minS,x=f.cols||4,D=f.value.split("-"),I=0,k=0,T="",F="month"==n.type?"changeInput":"setDayList",M=n.orig&&"validatevalue"in e.data(n.orig),_="changeInput"!=F;for(t=t[0]-Math.floor((b-1)/2),i=0;b>i;i++){for(i?t++:p=o.isInRange([t-1],w,y)?{"data-action":"setMonthList",value:t-1}:!1,i==b-1&&(d=o.isInRange([t+1],w,y)?{"data-action":"setMonthList",value:t+1}:!1),u=[],l=o.isInRange([t,"01"],w,y)||o.isInRange([t,"12"],w,y)?"":' disabled=""',f.minView>=1&&(l=' disabled=""'),T+='<div class="month-list picker-list ws-index-'+i+'"><div class="ws-picker-header">',T+='<select data-action="setMonthList" class="year-select">'+o.createYearSelect(t,w,y).join("")+'</select> <button data-action="setYearList"'+l+' value="'+t+'" tabindex="-1"><span>'+t+"</span></button>",T+="</div>",a=0;12>a;a++)r=v.date.monthkeys[a+1],s=g(a),m=[],!o.isInRange([t,r],w,y)||M&&e(n.orig).triggerHandler("validatevalue",[{value:t+"-"+r,valueAsDate:n.asDate(t+"-"+r),isPartial:_&&[t,r]}])?l=' disabled=""':(l="",I++),t==c[0]&&c[1]==r&&m.push("this-value"),D[0]==t&&D[1]==r&&m.push("checked-value"),h=m.length?' class="'+m.join(" ")+'"':"",!a||a%x||(k++,u.push('</tr><tr class="ws-row-'+k+'">')),u.push('<td class="ws-item-'+a+'" role="presentation"><button data-id="month-'+a+'" type="button"'+l+h+' data-action="'+F+'" value="'+t+"-"+r+'" tabindex="-1" role="gridcell" aria-label="'+v.date.monthNames[a]+'">'+s+"</button></td>");T+='<div class="picker-grid"><table role="grid" aria-label="'+t+'"><tbody><tr class="ws-row-0">'+u.join("")+"</tr></tbody></table></div></div>"}return{enabled:I,main:T,prev:p,next:d,type:"Grid"}},o.getDayList=function(t,n){var i,a,s,r,l,p,d,h,m,f,b,w,y,x,D,I,k,T,F,M,_,E=n.options,N=E.size,L=E.maxS,B=E.minS,A=E.value.split("T")[0].split("-"),S=v.date,C=[],P=new Date(t[0],t[1]-1,1),V="datetime-local"==n.type?"setTimeList":"changeInput",j=n.orig&&"validatevalue"in e.data(n.orig),Y="changeInput"!=V;for(P.setMonth(P.getMonth()-Math.floor((N-1)/2)),h=[1*t[0]+1,t[1]],h=o.isInRange(h,L,B)?{"data-action":"setDayList",value:h.join("-")}:!1,m=[1*t[0]-1,t[1]],m=o.isInRange(m,L,B)?{"data-action":"setDayList",value:m.join("-")}:!1,i=0;N>i;i++){for(P.setDate(1),y=P.getMonth(),w=0,i||(M=new Date(P.getTime()),M.setDate(-1),I=u(M),p=o.isInRange(I,L,B)?{"data-action":"setDayList",value:I[0]+"-"+I[1]}:!1),I=u(P),C.push('<div class="day-list picker-list ws-index-'+i+'"><div class="ws-picker-header">'),k=['<select data-action="setDayList" class="month-select" tabindex="0">'+o.createMonthSelect(I,L,B).join("")+"</select>",'<select data-action="setDayList" class="year-select" tabindex="0">'+o.createYearSelect(I[0],L,B,"-"+I[1]).join("")+"</select>"],v.date.showMonthAfterYear&&k.reverse(),C.push(k.join(" ")),T=[S.monthNames[1*I[1]-1],I[0]],S.showMonthAfterYear&&T.reverse(),C.push('<button data-action="setMonthList"'+(E.minView>=2?' disabled="" ':"")+' value="'+I.date+'" tabindex="-1">'+g(1*I[1]-1,I[0])+"</button>"),C.push('</div><div class="picker-grid"><table role="grid" aria-label="'+T.join(" ")+'"><thead><tr>'),C.push('<th class="week-header ws-week">'+S.weekHeader+"</th>"),s=S.firstDay;s<S.dayNamesMin.length;s++)C.push('<th class="day-'+s+'"><abbr title="'+S.dayNames[s]+'">'+S.dayNamesMin[s]+"</abbr></th>");for(s=S.firstDay;s--;)C.push('<th class="day-'+s+'"><abbr title="'+S.dayNames[s]+'">'+S.dayNamesMin[s]+"</abbr></th>");for(C.push('</tr></thead><tbody><tr class="ws-row-0">'),b=o.getWeek(P),C.push('<td class="week-cell ws-week" role="gridcell" aria-disabled="true">'+b+"</td>"),a=0;99>a;a++){if(f=a&&!(a%7),x=P.getMonth(),D=y!=x,r=P.getDay(),_=[],f&&D&&w>=5){C.push("</tr>");break}f&&(w++,C.push('</tr><tr class="ws-row-'+w+(D?" other-month-row":"")+'">'),b++,b>52&&(b=o.getWeek(P)),C.push('<td class="week-cell ws-week" role="gridcell" aria-disabled="true">'+b+"</td>")),a||r!=v.date.firstDay&&(l=r-v.date.firstDay,0>l&&(l+=7),P.setDate(P.getDate()-l),r=P.getDay(),x=P.getMonth(),D=y!=x),I=u(P),F='<td role="presentation" class="day-'+r+'"><button data-id="day-'+P.getDate()+'" role="gridcell" data-action="'+V+'" value="'+I.join("-")+'" type="button"',_.push(D?"othermonth":"day-"+P.getDate()),I[0]==c[0]&&c[1]==I[1]&&c[2]==I[2]&&_.push("this-value"),A[0]==I[0]&&I[1]==A[1]&&I[2]==A[2]&&_.push("checked-value"),_.length&&(F+=' class="'+_.join(" ")+'"'),(!o.isInRange(I,L,B)||j&&e(n.orig).triggerHandler("validatevalue",[{value:I.join("-"),valueAsDate:P,isPartial:Y&&I}]))&&(F+=' disabled=""'),C.push(F+' tabindex="-1">'+P.getDate()+"</button></td>"),P.setDate(P.getDate()+1)}C.push("</tbody></table></div></div>"),i==N-1&&(I=u(P),I[2]=1,d=o.isInRange(I,L,B)?{"data-action":"setDayList",value:I.date}:!1)}return{enabled:9,main:C.join(""),prev:p,next:d,yearPrev:m,yearNext:h,type:"Grid"}},o.getTimeList=function(n,i){var a,s,o,r,u,c='<div class="time-list picker-list ws-index-0">',p=0,d=0,h=23,m={min:e.prop(i.orig,"min"),max:e.prop(i.orig,"max"),step:e.prop(i.orig,"step")},f=i.orig&&"validatevalue"in e.data(i.orig),b="";for("time"==i.type?a='<button type="button" disabled="">'+e.trim(e(i.orig).jProp("labels").text()||"").replace(/[\:\*]/g,"")+"</button>":(s=n[2].split("T"),n[2]=s[0],s[1]&&(n[3]=s[1]),b=' aria-label="'+n[2]+". "+v.date.monthNames[1*n[1]-1]+" "+n[0]+'"',a=g(1*n[1]-1,n[0],n[2]+". "),a='<button tabindex="-1" data-action="setDayList" value="'+n[0]+"-"+n[1]+"-"+n[2]+'" type="button">'+a+"</button>",u=n[0]+"-"+n[1]+"-"+n[2]+"T"),c+='<div class="ws-picker-header">'+a+"</div>",c+='<div class="picker-grid"><table role="grid"'+b+"><tbody><tr>";h>=p;p++)o=l.addZero(""+p)+":00",r=u?u+o:o,!p||p%4||(d++,c+='</tr><tr class="ws-row-'+d+'">'),c+='<td role="presentation"><button role="gridcell" data-action="changeInput" value="'+r+'" type="button" tabindex="-1"',(!i.isValid(r,m)||f&&e(i.orig).triggerHandler("validatevalue",[{value:r,valueAsDate:i.asDate(r),partial:!1}]))&&(c+=' disabled=""'),n==o&&(c+=' class="checked-value"'),c+=">"+t._format.time(o)+"</button></td>";return c+="</tr></tbody></table></div></div>",{enabled:9,main:c,prev:!1,next:!1,type:"Grid"}},o.isInRange=function(e,t,n){var i,a=!0;for(i=0;i<e.length;i++){if(n[i]&&n[i]>e[i]){a=!1;break}if(!n[i]||n[i]!=e[i])break}if(a)for(i=0;i<e.length;i++){if(t[i]&&t[i]<e[i]){a=!1;break}if(!t[i]||t[i]!=e[i])break}return a},o.createMonthSelect=function(e,t,n,i){i||(i=v.date.monthNames);for(var a,s=0,r=[],u=e[1]-1;s<i.length;s++)a=u==s?' selected=""':"",(a||o.isInRange([e[0],s+1],t,n))&&r.push('<option value="'+e[0]+"-"+l.addZero(s+1)+'"'+a+">"+i[s]+"</option>");return r},function(){var n=function(e){return"get"+e+"List"},i=function(e){return"set"+e+"List"},a={date:"Day",week:"Day",month:"Month","datetime-local":"Time",time:"Time"},s=function(e,t,n){e[n]?t[n+"Element"].attr(e[n]).prop({disabled:!1}).prop(e[n]):t[n+"Element"].removeAttr("data-action").prop({disabled:!0})};e.each({setYearList:["Year","Month","Day","Time"],setMonthList:["Month","Day","Time"],setDayList:["Day","Time"],setTimeList:["Time"]},function(l,u){var c=u.map(n),p=u.map(i);r[l]=function(n,i,r,l){n=""+n;var d=r.options,h=n.split("-");l||(l=0),e.each(c,function(n,c){if(n>=l){var v=o[c](h,r);if(h.length<2||v.enabled>1||v.prev||v.next||a[r.type]===u[n])return i.element.attr({"data-currentview":p[n]}).addClass("ws-size-"+d.size).data("pickercontent",{data:r,content:v,values:h}),i.bodyElement.html(v.main),s(v,i,"prev"),s(v,i,"next"),s(v,i,"yearPrev"),s(v,i,"yearNext"),e(d.orig).trigger("pickerchange"),t[v.type]&&new t[v.type](i.bodyElement.children(),i,v),i.element.filter('[data-vertical="bottom"]').triggerHandler("pospopover"),!1}})}})}(),o.showPickerContent=function(e,t){var n=e.options,i=e._popoverinit;e._popoverinit=!0,i||(o.commonInit(e,t),o.commonDateInit(e,t)),t.element.triggerHandler("updatepickercontent"),!i||n.restartView?r.setYearList(n.defValue||n.value,t,e,n.startView):r[t.element.attr("data-currentview")||"setYearList"](n.defValue||n.value,t,e,0),e._popoverinit=!0},o.commonDateInit=function(n,a){if(!n._commonDateInit){n._commonDateInit=!0;var s=n.options,l=function(){return e(this).hasClass("othermonth")&&"pointer"!=e(this).css("cursor")||a.actionFn({"data-action":e.attr(this,"data-action"),value:e(this).val()||e.attr(this,"value")}),!1},u=(new Date).getTime(),p=function(i){var s=[],r="",l="";i.options=n.getOptions()||{},e("div.ws-options",a.contentElement).remove(),e.each(i.options[0],function(e,t){var a=o.isInRange(e.split("-"),i.maxS,i.minS)?"":' disabled="" ';t&&(t=' <span class="ws-label">'+t+"</span>"),s.push('<li role="presentation"><button value="'+e+'" '+a+' data-action="changeInput" tabindex="-1"  role="option"><span class="ws-value">'+n.formatValue(e,!1)+"</span>"+t+"</button></li>")}),s.length&&(u++,i.options[1]&&(l="datalist-"+u,r='<h5 id="'+l+'">'+i.options[1]+"</h5>",l=' aria-labelledbyid="'+l+'" '),new t.ListBox(e('<div class="ws-options">'+r+'<ul role="listbox" '+l+">"+s.join("")+"</div>").insertAfter(a.bodyElement)[0],a,{noFocus:!0}))},d=function(){var i;a.isDirty&&(a.isDirty=!1,i=s.max.split("T"),s.maxS=i[0].split("-"),i[1]&&s.maxS.push(i[1]),i=s.min.split("T"),s.minS=i[0].split("-"),i[1]&&s.minS.push(i[1]),e("button",a.buttonRow).each(function(){var i;e(this).hasClass("ws-empty")?(i=v.date.clear,i||(i=h[""].date.clear||"clear",t.warn("could not get clear text from form cfg"))):e(this).hasClass("ws-current")&&(i=(v[n.type]||{}).currentText,i||(i=(h[""][[n.type]]||{}).currentText||(v.date||{}).currentText||"current",t.warn("could not get currentText from form cfg for "+n.type)),c[n.type]&&"time"!=n.type&&e.prop(this,"disabled",!o.isInRange(c[n.type].split("-"),s.maxS,s.minS)||!!e(n.orig).triggerHandler("validatevalue",[{value:c[n.type],valueAsDate:new Date,isPartial:!1}]))),i&&e(this).text(i).attr({"aria-label":i})}),a.nextElement.attr({"aria-label":v.date.nextText}),a.prevElement.attr({"aria-label":v.date.prevText}),a.yearNextElement.attr({"aria-label":v.date.nextText}),a.yearPrevElement.attr({"aria-label":v.date.prevText}),a.contentElement.attr({dir:v.date.isRTL?"rtl":"ltr",lang:t.formcfg.__activeName}),p(s,s.maxS,s.minS),a.isVisible&&o.showPickerContent(n,a)),e("button.ws-empty",a.buttonRow).prop("disabled",e.prop(n.orig,"required")),a.isDirty=!1};"time"==n.type&&(s.minView=3,s.startView=3),s.minView||(s.minView=0),s.startView<s.minView&&(s.startView=s.minView,t.warn("wrong config for minView/startView.")),s.size||(s.size=1),a.actionFn=function(i){var o;r[i["data-action"]]?("changeInput"==i["data-action"]&&s.inlinePicker&&s.updateOnInput&&(n._handledValue=!0,s.size>1&&(o=e('button[value="'+i.value+'"]',a.bodyElement),o.filter(":not(.othermonth)").length?(e("button.checked-value",a.bodyElement).removeClass("checked-value"),o.addClass("checked-value").trigger("focus"),s.updateOnInput=!1):o=!1)),r[i["data-action"]](i.value,a,n,0),n._handledValue&&(delete n._handledValue,o&&(s.updateOnInput=!0))):t.warn("no action for "+i["data-action"])},a.contentElement.html('<div class="prev-controls ws-picker-controls"><button class="ws-super-prev ws-year-btn" tabindex="0" type="button"></button><button class="ws-prev" tabindex="0" type="button"></button></div> <div class="next-controls ws-picker-controls"><button class="ws-next" tabindex="0" type="button"></button><button class="ws-super-next ws-year-btn" tabindex="0" type="button"></button></div><div class="ws-picker-body"></div><div class="ws-button-row"><button type="button" class="ws-current" data-action="changeInput" value="'+c[n.type]+'" tabindex="0"></button> <button type="button" data-action="changeInput" value="" class="ws-empty" tabindex="0"></button></div>'),a.nextElement=e("button.ws-next",a.contentElement),a.prevElement=e("button.ws-prev",a.contentElement),a.yearNextElement=e("button.ws-super-next",a.contentElement),a.yearPrevElement=e("button.ws-super-prev",a.contentElement),a.bodyElement=e("div.ws-picker-body",a.contentElement),a.buttonRow=e("div.ws-button-row",a.contentElement),a.element.on("updatepickercontent",d),a.contentElement.wsTouchClick("button[data-action]",l).on("change","select[data-action]",l),e(s.orig).on("input",function(){var e;s.updateOnInput&&a.isVisible&&s.value&&(e=a.element.attr("data-currentview"))&&r[e](n.options.value,a,n,0)}),e(i).onTrigger("wslocalechange",n._propertyChange),null==s.updateOnInput&&(s.inlinePicker||s.noChangeDismiss)&&(s.updateOnInput=!0),s.inlinePicker&&(a.element.attr("data-class",e.prop(n.orig,"className")),a.element.attr("data-id",e.prop(n.orig,"id"))),e(s.orig).trigger("pickercreated")}}});