define(["jquery","underscore","Backbone","text!views/transfer/aboutBinimoy.tpl"],function(e,t,n,i){var o=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",events:{},initialize:function(){},render:function(){this.$el.html(t.template(i)),e("html").removeClass().addClass("app")},gotoBinimoyMenuPage:function(e){e.stopImmediatePropagation(),n.history.navigate("#/binimoyselectpage")},gotoForgotPINInputPage:function(e){e.stopImmediatePropagation(),n.history.navigate("#/binimoyforgotpininput")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return o});