define(["jquery","underscore","Backbone","collections/wealth/ccsummeryCollections","text!views/accounts/creditcard/creditCardType.tpl"],function(e,t,r,a,n){var i=new EncryptedLocalStorage("secret"),c=r.View.extend({el:"#container",events:{"click #backBtn":"gotoPreviousPage","click .creditcardlist":"navigateToDetailPage"},initialize:function(){},render:function(){var t=this;showSpinner();var r=function(e){hideSpinner(),t.loadTemplate()},n=function(e){t.errorresponse()};t.collection=new a,t.collection.fetch({data:e.param({newversion:"Y",access_token:i.get("access_token")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?r(e):n(e)},error:n})},loadTemplate:function(){i.set("isLeftMenu","true"),i.set("isCreditCardDetail","false"),i.set("statementType","all"),e("html").removeClass().addClass("app state"),this.$el.html(t.template(n)),this.$el.trigger("create")},navigateToDetailPage:function(t){var a=t.currentTarget.id,n=e("#"+a).attr("productCode");i.set("productCode",n);var c=e(t.currentTarget).attr("availBalance");i.set("avlBalance",c);var o=e(t.currentTarget).attr("currency");i.set("creditcardCurrency",o);var s=e(t.currentTarget).attr("cardName");i.set("cardName",s);var u=e(t.currentTarget).attr("outStandingAmount");i.set("outStandingAmount",u),r.history.navigate("#/ccsummaryview/"+a)},gotoPreviousPage:function(){r.history.navigate("#/creditcardsummary")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});