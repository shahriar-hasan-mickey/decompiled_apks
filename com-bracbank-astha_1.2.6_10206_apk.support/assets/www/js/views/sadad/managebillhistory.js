define(["jquery","underscore","Backbone","collections/sadad/managehistoryBillPayCollections","text!views/sadad/managebillhistory.tpl","text!views/sadad/managebills.tpl"],function(e,t,i,n,r,a){var o=new EncryptedLocalStorage("secret"),s=i.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #back":"back"},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(){o.set("currentPage","");var t=this;showSpinner();var i=function(e){t.historyBillpay()},r=function(e){t.errorresponse()};t.collection=new n;var a=e("#Scrbeno").val();t.collection.fetch({data:e.param({biller:a}),dataType:"json",type:"POST",timeout:parseInt(o.get("sadadcalltimeout")),cache:!1,success:function(e){"0000"==ackStatus?i(e):r(e)},error:r})},historyBillpay:function(){hideSpinner();var t=e("#shortName").val(),n=e("#Scrbeno").val(),r=e("#description").val();o.set("billerHistnickname",t),o.set("histscrbeno",n),o.set("billerHistname",r),i.history.navigate("#/duebillpayhistory")},historyBill:function(){return hideSpinner(),this.$("#mobcontent").html(t.template(managehistorybillTemplate)).i18n(),this},back:function(){hideSpinner(),i.history.navigate("#/managebills")},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});