define(["jquery","underscore","Backbone","text!views/transfer/ManageBeneficiaries/walletViewBeneficiary.tpl","collections/manageBeneficiaries/getBeneficiariesCollection"],function(e,t,n,a,i){var r=new EncryptedLocalStorage("secret"),l=n.View.extend({el:"#container",events:{"click .selectWalletBene":"gotoSelectWalletBenePage","click #walletAddBeneBtn":"gotoWalletAddBeneficiaryPage"},initialize:function(){},update:function(){var t=this,n=r.get("isGetBeneficiaryList");if("false"==n){var a=function(n){hideSpinner(),r.set("isGetBeneficiaryList","true"),e("html").removeClass().addClass("app"),t.loadupdateTemp()},l=function(e){t.errorresponse()};showSpinner(),t.collection=new i,t.collection.fetch({data:e.param({access_token:r.get("access_token"),trSubTypeId:"MW"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?a(e):l(e)},error:l})}else e("html").removeClass().addClass("app"),t.loadupdateTemp()},loadupdateTemp:function(){var e=r.get("mobileWalletInsttructionList"),n=e.filter(function(e){return e.imAccountType.toUpperCase()==r.get("walletType").toUpperCase()});r.set("selectedWalletBeneDTO",n),this.$el.html(t.template(a))},gotoSelectWalletBenePage:function(t){t.stopImmediatePropagation();var a=e(t.currentTarget).val();r.set("selectedWalletBeneId",a);var i=e(t.currentTarget).attr("id");r.set("selectedWalletBeneInd",i);var l=e(t.currentTarget).attr("shortName");r.set("selectedWalletBeneShortName",l);var c=e(t.currentTarget).attr("accNum");r.set("selectedWalletBeneAccNum",c),n.history.navigate("#/walletselectbene")},gotoWalletAddBeneficiaryPage:function(e){e.stopImmediatePropagation(),r.set("walletToAccNum",null),r.set("isGetBeneficiaryList","true"),n.history.navigate("#/addwalletbene")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});