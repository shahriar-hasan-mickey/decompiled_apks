define(["jquery","underscore","Backbone","routers/approuter","routers/wealthrouter","text!views/wealth/billpay.tpl","text!views/wealth/productnotificationload.tpl","views/errors/exception"],function(e,t,r,n,i,o,a){var s=(new EncryptedLocalStorage("secret"),r.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",e3:"#ccloaddata",events:{"click #accountsback":"wealth"},initialize:function(){new i},render:function(){this.$el.html(t.template(o)),e("html").removeClass("app state primarybg hasBoth").addClass("app"),hideSpinner()},wealth:function(){r.history.navigate("#/wealth"),e("html").removeClass("app").addClass("primarybg hasBoth")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return s});