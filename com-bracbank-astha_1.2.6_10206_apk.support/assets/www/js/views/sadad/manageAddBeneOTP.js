define(["jquery","underscore","Backbone","collections/common/otpValidateCollections","collections/common/otpGenerateCollections","text!views/creditcard/manageAddBeneOTP.tpl","models/validation/OTPValidationModel"],function(e,t,n,i,o,s,a){var c=new EncryptedLocalStorage("secret"),l=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click .smsotp":"OTPOption1","click .softToken":"OTPOption2","click #submit":"ownsubmitotp","click #resend":"OTPOption"},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(e,t){showSpinner(),this.editmanagebillcompile(e,t)},editmanagebillcompile:function(e,n){return hideSpinner(),this.$("#mobcontent").html(t.template(s,{name:e,no:n})).i18n(),this},OTPOption1:function(t){e(".smsotp_block").show(),e("#hidotp").val("otp"),e(".softTock").hide(),e(".smsotp").addClass("active"),e(".softToken").removeClass("active"),document.getElementById("softTockId").style.display="none",document.getElementById("smsDivId").style.display="inline",this.OTPOption(),t.preventDefault()},OTPOption2:function(){e(".smsotp_block").hide(),e("#hidotp").val("softotp"),e(".softTock").show(),e(".softToken").addClass("active"),e(".smsotp").removeClass("active"),e("#hiddotpvalue").val("Y"),document.getElementById("softTockId").style.display="inline"},OTPOption:function(){showSpinner();var t=this,n=function(e){t.errorresponse()};t.collection=new o([],{}),timestamp=(new Date).getTime(),"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR");var i=c.get("custno"),s="9004",a="";t.collection.fetch({data:e.param({servicetype:s,language:language,custno:i,ipaddress:a,requestid:timestamp}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(t){"0000"==ackStatus?(e("#hiddotpvalue").val("Y"),document.getElementById("smsDivId").style.display="inline",hideSpinner()):n(t)},error:n})},editbillOTP:function(n){hideSpinner();var i=e("#firstName").val(),o=e("#scrbeno").val();return this.$("#mobcontent").html(t.template(editmanagebillOTPTemplate,{nickname:n,firstName:i,scrbeno:o})).i18n(),this},ownsubmitotp:function(){var t=c.get("device.platform");"Android"==t&&"true"==c.get("isOtpReceived")&&stopSMSListening(),this.model=new a({url:"json/"}),this.$(".alert").hide(),n.Validation.bind(this);var o=this.$("form").serializeObject();if(this.model.set(o,{validate:!0})){showSpinner(),this.model.clear(),n.Validation.unbind(this);var s=this,l=function(e){s.SuccessPage()},r=function(e){s.errorresponse()};s.collection=new i([],{});var d=(new Date).getTime(),p="SMS",u="0",m=e("#otp").val(),h=c.get("custno");s.collection.fetch({data:e.param({opttype:p,refno:u,activationno:m,customerno:h,requestid:d}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?l(e):r(e)},error:r})}else this.$(".alert-error").fadeIn(),hideSpinner()},SuccessPage:function(){hideSpinner(),n.history.navigate("#/manageBeneAddOtpResult")},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});