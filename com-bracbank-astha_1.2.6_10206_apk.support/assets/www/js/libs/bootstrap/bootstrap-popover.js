!function(t){"use strict";var o=function(t,o){this.init("popover",t,o)};o.prototype=t.extend({},t.fn.tooltip.Constructor.prototype,{constructor:o,setContent:function(){var t=this.tip(),o=this.getTitle(),e=this.getContent();t.find(".popover-title")[this.isHTML(o)?"html":"text"](o),t.find(".popover-content > *")[this.isHTML(e)?"html":"text"](e),t.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var t,o=this.$element,e=this.options;return t=o.attr("data-content")||("function"==typeof e.content?e.content.call(o[0]):e.content)},tip:function(){return this.$tip||(this.$tip=t(this.options.template)),this.$tip}}),t.fn.popover=function(e){return this.each(function(){var n=t(this),i=n.data("popover"),p="object"==typeof e&&e;i||n.data("popover",i=new o(this,p)),"string"==typeof e&&i[e]()})},t.fn.popover.Constructor=o,t.fn.popover.defaults=t.extend({},t.fn.tooltip.defaults,{placement:"right",content:"",template:'<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'})}(window.jQuery);