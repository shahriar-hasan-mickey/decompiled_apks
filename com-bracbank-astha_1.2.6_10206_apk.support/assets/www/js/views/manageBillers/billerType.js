define(["jquery","underscore","Backbone","collections/bills/fetchBillerCollections","text!views/manageBillers/billerType.tpl"],function(e,t,n,i,l){var a=new EncryptedLocalStorage("secret"),r=n.View.extend({el:"#container",events:{"click #manageBillerTypeNextBtn":"loadManageBillersViewPage"},initialize:function(){},render:function(){var t=this;showSpinner();var n=function(n){hideSpinner(),e("html").removeClass().addClass("app"),t.loadManageBillerTypeTemplate()},l=function(e){t.errorresponse()};t.collection=new i,t.collection.fetch({data:e.param({access_token:a.get("access_token"),type:"MENU",billId:null,newversion:"Y"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?n(e):l(e)},error:l})},loadManageBillerTypeTemplate:function(){a.set("isTransfer","false"),this.$el.html(t.template(l))},loadManageBillersViewPage:function(t){t.stopImmediatePropagation();var i=e("input[name='choice']:checked").attr("id"),l=e("input[name='choice']:checked").val(),r=e("input[name='choice']:checked").attr("dataval");a.set("selectedBillerTypeId",i),a.set("selectedBillerTypeName",l),a.set("selectedBillerDateLabel",r),n.history.navigate("#/viewbillerlist")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return r});