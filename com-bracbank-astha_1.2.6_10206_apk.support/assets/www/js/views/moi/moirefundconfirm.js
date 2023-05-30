define(["jquery","underscore","Backbone","text!views/moi/moipaymentsconfirm.tpl","collections/moi/moiPaymentsCollections","collections/moi/moiPaymentsTrafficCollections","collections/common/otpGenerateCollections","collections/common/otpValidateCollections","models/validation/OTPValidationModel","views/moi/moipaymentsresult","views/moi/moipaymentsfee","text!views/moi/moipaymentOTP.tpl","views/moi/moipaymentOTP"],function(e,t,i,n,o,s,a,r,c,m,l,p,u){var d=i.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #submitotp":"serviceType","click #back":"back","click #confirmsubmit":"OTPGeneration"},initialize:function(){},render:function(){this.$("#mobcontent").html(t.template(n,{})).i18n()},OTPGeneration:function(){i.history.navigate("#/moiotpgenerate")},moipayotpGenerate:function(){this.$("#mobcontent").html(t.template(p)).i18n()},serviceType:function(){this.model=new c({url:"json/"}),this.$(".alert").hide(),i.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){this.model.clear(),i.Validation.unbind(this);var n=this,o=function(e){n.resultpage()},s=function(e){n.errorresponse()};n.collection=new r([],{}),timestamp=(new Date).getTime(),showSpinner(),n.collection.fetch({data:e.param({requestid:timestamp}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?o(e):s(e)},error:s})}else this.$(".alert-error").fadeIn()},resultpage:function(){hideSpinner();var t=e("#paymentmode").text(),i=e("#no").text(),n=e("#name").text(),o=e("#txnfee").text(),s=e("#totamt").text();this.subview=this.disposeView(new m),this.subview.render(t,i,n,o,s),this.undelegateEvents()},moipayments:function(){hideSpinner(),this.$("#mobcontent").html(t.template(n,{paymentmode:paymentmode,number:no,name:name,txnfee:txnfee,totamt:totamt})).i18n()},back:function(){this.subview=this.disposeView(new l),this.subview.render()},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return d});