define(["jquery","underscore","Backbone","collections/bills/getBillerCollections","text!views/manageBillers/viewBillers.tpl"],function(e,t,r,i,l){var n=new EncryptedLocalStorage("secret"),s=r.View.extend({el:"#container",events:{"click #addBillerBtn_Manage":"gotoAddBillerPage","click .selectBiller":"getSelectedBillerInfo"},initialize:function(){},render:function(){var t=this;if("false"==n.get("isGetBeneficiaryList")){showSpinner();var r=function(r){hideSpinner(),e("html").removeClass().addClass("app"),n.set("isGetBeneficiaryList","true"),t.loadViewBillerTemplate()},l=function(e){t.errorresponse()};t.collection=new i,t.collection.fetch({data:e.param({access_token:n.get("access_token"),categoryId:n.get("selectedBillerListId"),billerType:n.get("selectedBillerListName")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?r(e):l(e)},error:l})}else e("html").removeClass().addClass("app"),t.loadViewBillerTemplate()},loadViewBillerTemplate:function(){this.$el.html(t.template(l))},gotoAddBillerPage:function(e){e.stopImmediatePropagation(),n.set("isGetBeneficiaryList","true"),n.set("isBillPayOneOffSuccess","false"),r.history.navigate("#/addbiller")},getSelectedBillerInfo:function(t){var i=e(t.currentTarget).attr("id");n.set("selectedBillerId",i);var l=e(t.currentTarget).attr("code");n.set("selectedBillercode",l);var s=e(t.currentTarget).attr("data");n.set("selectedBillerInd",s);var a=e(t.currentTarget).val();n.set("selectedBillerNumber",a);var c=e(t.currentTarget).attr("shortName");n.set("selectedBillerShortName",c),r.history.navigate("#/selectbiller")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});