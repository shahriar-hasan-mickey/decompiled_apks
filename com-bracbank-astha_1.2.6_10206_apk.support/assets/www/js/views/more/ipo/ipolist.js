define(["jquery","underscore","Backbone","text!views/more/ipo/ipolist.tpl","routers/iporouter","views/more/ipo/ipolist"],function(e,t,i,n,r,o){var o=(new EncryptedLocalStorage("secret"),i.View.extend({el:"#container",events:{},initialize:function(){new r},render:function(){var e=t.template(n);this.$("#mobcontent").html(e).trigger("refresh")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return o});