define(["jquery","underscore","Backbone","collections/wealth/carddetailsCollections","text!views/accounts/creditcard/creditcarddetailsstmtview.tpl","views/errors/exception"],function(e,t,r,n,i,c){var o=new EncryptedLocalStorage("secret"),s=r.View.extend({el:"#container",events:{},initialize:function(){},render:function(t){var r=this;e("html").removeClass("primarybg hasBoth").addClass("app state");var r=this;showSpinner();var i=function(e){hideSpinner(),r.gotoCreditCardStatement()};r.collection=new n;var c=function(e){r.errorresponse()};r.collection.fetch({data:e.param({access_token:o.get("access_token"),newversion:"Y",acctCategory:"CREDITCARD",acctid:o.get("ccardId")}),dataType:"json",type:"POST",cache:!1,success:function(e){if("0000"==ackStatus){var t=o.get("errorcode");"9999"==t?c(e):i(e)}else c(e)},error:c})},gotoCreditCardStatement:function(){this.$el.html(t.template(i))},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});