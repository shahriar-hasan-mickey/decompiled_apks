!function(t,e){t.widget("sustainablepace.mobipick",t.mobile.widget,{options:{date:null,dateFormat:"yyyy-MM-dd",dateFormatMonth:"yyyy-MM",dateFormatYear:"yyyy",locale:"en",intlStdDate:!0,buttonTheme:"b",popup:{dismissible:!1,history:!1,overlayTheme:"a",positionTo:"window",theme:"a",transition:"none"}},_picker:t([]),widgetEventPrefix:"mobipick",destroy:function(){this._close(),this.element.off("tap click"),this._picker.popup("destroy"),t.Widget.prototype.destroy.call(this)},_create:function(){this._initOptions(),this._createView(),this.element.on("tap click",t.proxy(this.open,this))},_initOptions:function(){var t=this.element.val()||this.options.date,e=this.element.attr("min")||this.options.minDate,i=this.element.attr("max")||this.options.maxDate;t&&this._setOption("date",t),i&&this._setOption("maxDate",i),e&&this._setOption("minDate",e),this._setOption("locale",this.options.locale)},_init:function(){null!==this._getDate()&&this.updateDateInput()},open:function(t){t&&(t.stopPropagation(),t.preventDefault());var e=this._getDate();this._isXDate(e)||(e=new XDate),this._setOption("date",this._fitDate(e)),this._setOption("originalDate",this._getDate()),this._showView(),this._updateView(),this._bindEvents()},_bindEvents:function(){var e=this,i=this._picker,a=t.proxy(this._confirmDate,this),n=t.proxy(this._cancelDate,this),o=t.proxy(this._cancelDateOnEsc,this);i.find(".mobipick-set").off().on("tap",a),i.find(".mobipick-cancel").off().on("tap",n),t(document).off("keyup",o).on("keyup",o);var s={".mobipick-prev-day":"_prevDay",".mobipick-prev-month":"_prevMonth",".mobipick-prev-year":"_prevYear",".mobipick-next-day":"_nextDay",".mobipick-next-month":"_nextMonth",".mobipick-next-year":"_nextYear"};for(var r in s)!function(){var a=e[s[r]];i.find(r).off().on("tap",t.proxy(function(){return e._handleDate(a)},e))}()},_close:function(){this._hideView()},_handleDate:function(t){return this._setOption("date",this._fitDate(t.apply(this))),!1},_confirmDate:function(){var t=!0,e=this._getDate().diffDays(this.options.originalDate),i=0!==e||""===this.element.val();return this.options.close&&"function"==typeof this.options.close&&(t=this.options.close.call()!==!1),t&&i?(this._setOption("originalDate",this._getDate()),this.updateDateInput(),this.element.trigger("change")):this._setOption("date",this.options.originalDate),this._close(),!1},_cancelDate:function(){return this._setOption("date",this.options.originalDate),this._close(),!1},_cancelDateOnEsc:function(t){27===t.keyCode&&this._cancelDate()},_setOption:function(e,i){switch(e){case"date":var a=this._sanitizeDate(i);this.options[e]=a?a.toDate():a;break;case"originalDate":this.options[e]=this._sanitizeDate(i).toDate();break;case"maxDate":this.options[e]=this._sanitizeMaxDate(i).toDate();break;case"minDate":this.options[e]=this._sanitizeMinDate(i).toDate();break;case"intlStdDate":this.options[e]=!!i;break;case"locale":this.options[e]=this._isValidLocale(i)?i:"en";break;default:return t.Widget.prototype._setOption.apply(this,arguments)}this._updateView()},_sanitizeDate:function(t){if(null===t)return null;var e=t;if("string"==typeof e&&(e=new XDate(e)),this._isXDate(e)&&(e=e.toDate()),!this._isDate(e))throw"Parameter 'date' must be a Date.";return new XDate(e.getFullYear(),e.getMonth(),e.getDate())},_sanitizeMinDate:function(t){var e=this._sanitizeDate(t);if(this._isAfterMaxDate(e))throw"Min date must be before max date.";return e},_sanitizeMaxDate:function(t){var e=this._sanitizeDate(t);if(this._isBeforeMinDate(e))throw"Max date must be after min date.";return e},_getDateFormat:function(){switch(this.options.accuracy){case"month":return"dateFormatMonth";case"year":return"dateFormatYear";default:return"dateFormat"}},dateString:function(){var t=this._getDateFormat(),e=this._getDate();return e?e.toString(this.options[t]):""},localeString:function(){var t=this.options.locale,e=this._getDateFormat(),i=this._getDate();return i?i.toString(this._isValidLocale(t)?XDate.locales[t][e]:this.options[e]):""},_fitDate:function(t){return this._isAfterMaxDate(t)?this._getMaxDate():this._isBeforeMinDate(t)?this._getMinDate():t},_isAfterMaxDate:function(t){var e=this._getMaxDate();return this._isXDate(e)&&t.diffDays(e)<0},_isBeforeMinDate:function(t){var e=this._getMinDate();return this._isXDate(e)&&e.diffDays(t)<0},_isValidLocale:function(t){return"string"==typeof t&&XDate.locales&&XDate.locales[t]},_isDate:function(t){return"object"==typeof t&&null!==t&&t.constructor===Date},_isXDate:function(t){return"object"==typeof t&&null!==t&&t.constructor===XDate},_getMaxDate:function(){var t=this.options.maxDate;return this._isDate(t)?new XDate(t):null},_getMinDate:function(){var t=this.options.minDate;return this._isDate(t)?new XDate(t):null},_getDate:function(){var t=this.options.date;return this._isDate(t)?new XDate(t):null},_prevDay:function(){return this._addDay(-1)},_nextDay:function(){return this._addDay(1)},_prevMonth:function(){return this._addMonth(-1)},_nextMonth:function(){return this._addMonth(1)},_prevYear:function(){return this._addYear(-1)},_nextYear:function(){return this._addYear(1)},_addYear:function(t){return this._getDate().addYears(t,!0)},_addMonth:function(t){var e=this._getDate(),i=e.getMonth(),a=(12+i+t)%12;return e.setMonth(a,!0)},_addDay:function(t){var e=this._getDate(),i=XDate.getDaysInMonth(e.getFullYear(),e.getMonth());return e.setDate((e.getDate()-1+i+t)%i+1)},_markup:"<div class='mobipick-main'><div class='mobipick-date-formatted'>Date</div><ul class='mobipick-groups'><li><ul><li><a class='mobipick-next-day'>+</a></li><li><input type='number' minlength='2' maxlength='2' class='mobipick-input mobipick-day' onkeydown='return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9)  || (event.keyCode>34 && event.keyCode<40)  || (event.keyCode==46) )'/></li><li><a class='mobipick-prev-day'>-</a></li></ul></li><li><ul><li><a class='mobipick-next-month'>+</a></li><li><input  type='number' minlength='2' maxlength='2' class='mobipick-input mobipick-month' onkeydown='return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9)  || (event.keyCode>34 && event.keyCode<40)  || (event.keyCode==46) )' /></li><li><a class='mobipick-prev-month'>-</a></li></ul></li><li><ul><li><a class='mobipick-next-year'>+</a></li><li><input type='number' minlength='4' maxlength='4' class='mobipick-input mobipick-year' onkeydown='return ( event.ctrlKey || event.altKey || (47<event.keyCode && event.keyCode<58 && event.shiftKey==false) || (95<event.keyCode && event.keyCode<106) || (event.keyCode==8) || (event.keyCode==9)  || (event.keyCode>34 && event.keyCode<40)  || (event.keyCode==46) )' /></li><li><a class='mobipick-prev-year'>-</a></li></ul></li></ul><ul class='mobipick-buttons'><li><a class='mobipick-set'>Set</a></li><li><a class='mobipick-cancel'>Cancel</a></li></ul></div>",_applyTheme:function(){var t=this._picker,e={bottom:"ul.mobipick-groups ul > li:first-child > a",top:"ul.mobipick-groups ul > li:last-child > a"};for(var i in e)t.find(e[i]).addClass("ui-corner-all").css("border-"+i+"-left-radius","0").css("border-"+i+"-right-radius","0");t.addClass("ui-body-"+this.options.popup.theme+" ui-corner-all"),t.find("a").attr("href","#").addClass("ui-body-"+this.options.buttonTheme),t.find("ul.mobipick-buttons a").addClass("ui-corner-all"),t.find("input").attr("readonly","readonly").addClass("ui-shadow-inset")},_createView:function(){this.element.attr("readonly","readonly"),this._picker=t(this._markup).popup(this.options.popup),t.data(this.element,"mobipick",this),this._applyTheme()},_updateView:function(){var t=this._getDate(),e=this._picker;this._isXDate(t)&&(e.find(".mobipick-day").val(t.toString("dd")),e.find(".mobipick-month").val(t.toString("MM")),e.find(".mobipick-year").val(t.toString("yyyy")),e.find(".mobipick-date-formatted").text(this.localeString()));var i={};this._isValidLocale(this.options.locale)&&(XDate.defaultLocale=this.options.locale,i=XDate.locales[this.options.locale]),e.find(".mobipick-set").text(i.ok||"Set"),e.find(".mobipick-cancel").text(i.cancel||"Cancel");var a=e.find(".mobipick-groups > li").removeClass("mobipick-hide").addClass("mobipick-inline-block");"month"===this.options.accuracy?e.css("max-width","280px").find(".mobipick-groups > li:first-child").addClass("mobipick-hide").removeClass("mobipick-inline-block"):"year"===this.options.accuracy?e.css("max-width","200px").find(".mobipick-groups > li:last-child").siblings().addClass("mobipick-hide").removeClass("mobipick-inline-block"):e.css("max-width","300px");var n=a.filter(":visible").size(),o=(100-2*n)/n+"%";a.css("width",o)},_showView:function(){this._picker.show().popup("open").focus()},_hideView:function(){this._picker.popup("close")},updateDateInput:function(){this.element.val(this.options.intlStdDate?this.dateString():this.localeString())}})}(jQuery);