define(["jquery","underscore","Backbone","collections/creditcard/manageBeneAddOtpResultCollections","text!views/creditcard/manageBeneAddOtpResult.tpl"],function(e,t,n,i,r){var c=new EncryptedLocalStorage("secret"),s=n.View.extend({el:"#mobcontent",events:{},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(){var t=c.get("custno"),n=this,r=function(e){n.resultPageSuccess()},s=function(e){n.errorresponse()};n.collection=new i([],{}),timestamp=(new Date).getTime(),n.collection.fetch({data:e.param({userid:t}),dataType:"json",type:"POST",cache:!1,success:function(e){"00000"==ackStatus?r(e):s(e)},error:s})},resultPageSuccess:function(){e(this.el).html(t.template(r)).i18n(),hideSpinner()},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});