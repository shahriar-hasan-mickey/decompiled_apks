define(["jquery","underscore","Backbone","collections/sadad/addBillsCollections","collections/common/otpGenerateCollections","collections/common/otpValidateCollections","text!views/sadad/oneTimePaymentConfirm.tpl","text!views/sadad/addbillOTPSuccess.tpl","models/validation/OTPValidationModel"],function(e,t,n,i,o,c,a,r,s){var l=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #submitOTP":"otpValidation"},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(){this.onetimeOTP()},onetimeOTP:function(){return hideSpinner(),this.$("#mobcontent").html(t.template(a,{})).i18n(),this},otpValidation:function(e){n.history.navigate("#/onetimeOTP")},OtpSuccess:function(){hideSpinner(),paymode=e("#paymode").text(),frmacc=e("#frmacc").text(),toacc=e("#toacc").text(),bcategory=e("#bcategory").text(),bcompany=e("#bcompany").text(),srvtype=e("#srvtype").text(),subno=e("#subno").text(),payamt=e("#payamt").text(),n.history.navigate("#/onetimeOTPSuccess")},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return l});