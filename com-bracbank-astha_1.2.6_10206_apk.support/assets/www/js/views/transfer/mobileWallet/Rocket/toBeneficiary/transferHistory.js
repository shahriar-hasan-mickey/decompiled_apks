define(["jquery","underscore","Backbone","routers/wealthrouter","routers/transferrouter","text!views/transfer/mobileWallet/Rocket/toBeneficiary/transferHistory.tpl","views/errors/exception"],function(e,t,r,n,i,s,o){var c=(new EncryptedLocalStorage("secret"),r.View.extend({el:"#container",events:{},initialize:function(){new n,new i},render:function(){hideSpinner(),e("html").removeClass(),e("html").addClass("app"),this.$el.html(t.template(s))},errorresponse:function(){hideSpinner(),r.history.navigate("#/exception")},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return c});