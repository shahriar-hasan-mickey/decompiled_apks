define(["jquery","underscore","Backbone","routers/estatementrouter","text!views/more/estatement/estatementsubscription.tpl","text!views/more/estatement/estatementsubscriptionchanges.tpl"],function(e,t,n,i,r,o){var c=new EncryptedLocalStorage("secret"),s=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #subscription":"Subscription","click #termandcondition":"termandcondition","click #compaignNav":"gobacktoComapign"},initialize:function(){},render:function(){showSpinner();this.subscriptiontemplate()},termandcondition:function(){c.get("lang_id")},gobacktoComapign:function(){n.history.navigate("#/showCampaigns/0")},subscriptiontemplate:function(){return hideSpinner(),this.$("#mobcontent").html(t.template(o)).i18n(),this},Subscription:function(){return e("#errorCheckBox").hide(),e("#iagreee").prop("checked")?void n.history.navigate("#/estatementconfirm"):(e("#errorCheckBox").show(),!1)},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});