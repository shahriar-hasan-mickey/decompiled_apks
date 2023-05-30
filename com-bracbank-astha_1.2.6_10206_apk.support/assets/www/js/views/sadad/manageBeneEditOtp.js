define(["jquery","underscore","Backbone","text!views/creditcard/manageBeneEditOtp.tpl","text!views/creditcard/manageBeneEditOtpResult.tpl","collections/creditcard/manageBeneEditOtpCollections","collections/creditcard/manageBeneEditOtpResultCollections","models/validation/activateCreditCardValidationModel"],function(e,t,i,n,r,c,o,a){var s=new EncryptedLocalStorage("secret"),l=i.View.extend({el:"#mobcontent",events:{"click #submitOTP":"submitOTP"},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(t,i){var n=s.get("custno"),r=this,o=function(e){r.activateccotp(t,i)},a=function(e){r.errorresponse()};r.collection=new c([],{}),timestamp=(new Date).getTime(),showSpinner(),r.collection.fetch({data:e.param({custno:n,language:"EN",servicetype:"00"}),dataType:"json",type:"POST",cache:!1,success:function(e){"00000"==ackStatus?o(e):a(e)},error:a})},activateccotp:function(i,r){return hideSpinner(),e(this.el).html(t.template(n,{name:i,no:r})).i18n(),e(this.el).trigger("create"),this},submitOTP:function(){var t=s.get("device.platform");"Android"==t&&"true"==s.get("isOtpReceived")&&stopSMSListening(),this.model=new a({url:"json/"}),this.$(".alert").hide(),i.Validation.bind(this);var n=this.$("form").serializeObject();if(this.model.set(n,{validate:!0})){this.model.clear(),i.Validation.unbind(this);var r=e("#txnotp").val(),o=this,l=function(e){o.OtpSuccess()},d=function(e){o.errorresponse()};o.collection=new c([],{}),timestamp=(new Date).getTime(),showSpinner(),o.collection.fetch({data:e.param({refno:r,opttype:"OTP"}),dataType:"json",type:"POST",cache:!1,success:function(e){"00000"==ackStatus?l(e):d(e)},error:d})}else this.$(".alert-error").fadeIn(),hideSpinner()},OtpSuccess:function(){hideSpinner(),i.history.navigate("#/manageBeneEditOtpResult")},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});