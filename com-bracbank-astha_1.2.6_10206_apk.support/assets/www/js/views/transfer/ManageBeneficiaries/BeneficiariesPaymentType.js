define(["jquery","underscore","Backbone","collections/bills/fetchBillerCollections","text!views/transfer/ManageBeneficiaries/BeneficiariesPaymentType.tpl"],function(e,t,i,n,s){var a=new EncryptedLocalStorage("secret"),c=i.View.extend({el:"#container",events:{"click #load_benetype":"loadBeneficiaryUI"},initialize:function(){},update:function(){var i=this;showSpinner();var c=function(n){hideSpinner(),e("html").removeClass().addClass("app"),a.set("isTransfer","false"),i.$el.html(t.template(s))},r=function(e){i.errorresponse()};i.collection=new n,i.collection.fetch({data:e.param({access_token:a.get("access_token"),type:"MENU",billId:null,newversion:"Y"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?c(e):r(e)},error:r})},loadBeneficiaryUI:function(t){t.stopImmediatePropagation();var n=e("input[name='choice']:checked").attr("beneType");if("transfer"==n){var s=e("input[name='choice']:checked").val();a.set("isGetBeneficiaryList","false"),a.set("isWalletList","false"),"withinbank"==s?(a.set("isWithinOneOffSuccess","false"),i.history.navigate("#/withinselectbene")):"otherbank"==s?(a.set("btype","Other"),a.set("isOtherOneOffSuccess","false"),i.history.navigate("#/otherselectbene")):"wallet"==s&&(a.set("isWalletOneOffSuccess","false"),i.history.navigate("#/wallets"))}else if("biller"==n){var c=e("input[name='choice']:checked").attr("id"),r=e("input[name='choice']:checked").val(),l=e("input[name='choice']:checked").attr("dataval");a.set("selectedBillerTypeId",c),a.set("selectedBillerTypeName",r),a.set("selectedBillerDateLabel",l),i.history.navigate("#/viewbillerlist")}},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});