!function(e,t){"function"==typeof define&&define.amd?define(["underscore","backbone","hammer"],function(n,r){t(e,n,r)}):t(e,e._,e.Backbone)}(this,function(e,t,n){var r=n.$;if(!r.fn.hammer)throw new Error("Hammer jQuery plugin not loaded.");var i=/^(\S+)\s*(.*)$/,m=["hammerEvents","hammerOptions"],a=n.View,s=a.prototype.delegateEvents,h=a.prototype.undelegateEvents;n.View=a.extend({constructor:function(e){return e=e||{},t.extend(this,t.pick(e,m)),a.apply(this,arguments)},_hammered:!1,undelegateEvents:function(){return this.undelegateHammerEvents(),h.apply(this,arguments)},undelegateHammerEvents:function(){return this._hammered&&this.hammer().off(".hammerEvents"+this.cid),this},delegateEvents:function(){return s.apply(this,arguments),this.delegateHammerEvents(),this},delegateHammerEvents:function(e){var r=t.defaults(t.result(this,"hammerOptions")||{},n.hammerOptions);if(!e&&!(e=t.result(this,"hammerEvents")))return this;this.undelegateHammerEvents();for(var m in e){var a=e[m];if(t.isFunction(a)||(a=this[e[m]]),a){var s=m.match(i),h=s[1],u=s[2];h+=".hammerEvents"+this.cid,a=t.bind(a,this),""===u?this.hammer(r).on(h,a):this.hammer(r).on(h,u,a)}}return this},hammer:function(e){return this._hammered=!0,this.$el.hammer(e)}})});