define(["jquery","underscore","Backbone","routers/creditcardrouter","text!views/creditcard/creditCardList.tpl"],function(e,t,n,i,r){var s=new EncryptedLocalStorage("secret"),c=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{},initialize:function(){new i},render:function(){s.set("currentPage","transferConfirm"),s.set("creditusageflag","Y"),s.set("sevicerequestusageflag",""),s.set("fromAddAccOpening",!1);var e=s.get("device.platform");"Android"==e&&stopSMSListening(),this.listcompile()},listcompile:function(){hideSpinner(),this.$("#mobcontent").html(t.template(r))},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});