define(["jquery","underscore","Backbone","backbonevalidation","collections/common/otpGenerateCollections","collections/common/otpValidateCollections","models/validation/OTPValidationModel","models/validation/softOTPValidationModel","text!views/requests/stopcreditcardrequestOtp.tpl","collections/common/secureaccessvalidateCollections","text!views/requests/cancelchequebookrequestSEQ.tpl","collections/requests/blockDebitCardRequestPostingCollections","collections/creditcard/creditCardLimitOtpResultCollections"],function(e,t,o,s,i,n,r,c,a,l,u,d,p){var h=new EncryptedLocalStorage("secret"),m=0,v=o.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click .smsotp":"OTPOption1","click .softToken":"OTPOption2","click #submit":"submitOTP","click #validatesubmit":"secureaccessvalidate","click #resendclick":"OTPOption"},initialize:function(){},render11:function(){return hideSpinner(),this.$("#mobcontent").html(t.template(a)).i18n(),this.$("#mobcontent").undelegate("#option1","change"),this},render:function(){hideSpinner(),this.OTPOption();var e=h.get("questionBasketDetailDTO"),o=new Array,s=new Array;t.each(e,function(e,t){o[t]=e.id,s[t]=e.description}),h.set("Sec_Ques_Id",o),h.set("Sec_Ques_Des",s)},secureGate:function(){hideSpinner();var e=h.get("Sec_Ques_Id"),o=h.get("Sec_Ques_Des"),s=null==h.get("Sec_Quest_No")?"":h.get("Sec_Quest_No"),i="";if(i=Math.floor(5*Math.random())+1,5==s.length&&h.set("Sec_Quest_No",""),""==s||null==s||void 0==s)i+="";else{var n=!0;do i+="",-1!=s.indexOf(i)&&(i=Math.floor(5*Math.random())+1,n=!1);while(n)}var r=parseInt(i)-1,c=e[r],a=o[r];this.$("#mobcontent").html(t.template(u,{seq_id:c,seq_question:a})).i18n()},secureaccessvalidate:function(){hideSpinner();var t=e("#secques").val();if(""==t||void 0==t)return e("#showError").text(e.i18n.t("validation.forgotpassword.answernotnull")),e("#secError").show(),e("#errorimage").hide(),e("#secErrorlast").hide(),e("#secErrorfirst").hide(),!1;var o=t.charAt(0),s=t.charAt(t.length-1);if(!o.match(/^[a-zA-Z0-9\u0600-\u06FF]+$/i))return e("#showErrorfirst").text(e.i18n.t("app.login.firstspaceind")),e("#secErrorfirst").show(),e("#secErrorlast").hide(),!1;if(!s.match(/^[a-zA-Z0-9\u0600-\u06FF]+$/i))return e("#showErrorlast").text(e.i18n.t("app.login.lastspaceind")),e("#secErrorlast").show(),e("#secErrorfirst").hide(),!1;var i=e("#secquesid").val(),n=e("#secques").val(),r=this;getDeviceId();showSpinner();var c=function(e){r.SuccessPage()},a=function(e){r.errorresponse()};r.collection=new l;var u=(new Date).getTime(),d=EncryptWithDynamicSalt(n,u),p=h.get("ulpID")+i+n;p=null==p?"":p,checkSumEncrypt(p);var m=localStorage.getItem("FINALCHECKSUM");getDeviceId();r.collection.fetch({data:e.param({access_token:h.get("access_token"),qstnId:i,answer:d,appchecksum:m,salt:u}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?c(e):a(e)},error:a})},OTPOption1:function(t){e("#hidotp").val("otp"),e(".smsotp_block").show(),e(".softTock").hide(),document.getElementById("softTockId").style.display="none",document.getElementById("smsDivId").style.display="inline",e(".smsotp").addClass("active"),e(".softToken").removeClass("active"),this.OTPOption(),t.preventDefault()},OTPOption2:function(){e("#hidotp").val("softotp"),e(".smsotp_block").hide(),e(".softTock").show(),document.getElementById("softTockId").style.display="inline",e(".softToken").addClass("active"),e(".smsotp").removeClass("active"),e("#hiddotpvalue").val("Y")},OTPOption:function(){e("#secError").hide(),e("#submit").removeAttr("disabled"),e("#hidotp").val("otp"),e("#otp").val(""),e("#showError").text(""),showSpinner();var t=this,o=function(e){t.render11()},s=function(e){t.errorresponse()};t.collection=new i([],{}),t.collection.fetch({data:e.param({access_token:h.get("access_token"),moduletype:"SR",submoduletype:"BLK_CC"}),dataType:"json",type:"POST",timeout:parseInt(h.get("calltimeout")),cache:!1,success:function(i){"0000"==ackStatus?(e("#submit").removeAttr("disabled"),"SMS"==status?o(i):"SQ"==status?t.secureGate():t.SuccessPage()):(e("#submit").removeAttr("disabled"),s(i))},error:s})},submitOTP:function(e){this.ownsubmitotp()},ownsubmitotp:function(){e("#secError").hide(),e("#showError").text(""),this.model=new r({url:"json/"}),o.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){showSpinner(),this.model.clear(),o.Validation.unbind(this);var s=this,i=function(e){s.SuccessPage()},c=function(e){s.errorresponse()};s.collection=new n([],{});var a=e("#otp").val(),l=(new Date).getTime();a=EncryptWithDynamicSalt(a,l),s.collection.fetch({data:e.param({access_token:h.get("access_token"),transactionData1:"SMS",submoduletype:"BLK_CC",salt:l,activationno:a}),dataType:"json",type:"POST",timeout:parseInt(h.get("calltimeout")),cache:!1,success:function(t){h.get("errorcod");if("0000"==ackStatus)i(t),startTimer("submit",!1);else{hideSpinner(),m++;var s=h.get("errordesc");e("#showError").text(s),e("#secError").show(),m>2&&(m=0,o.history.navigate("#/wrongOTPExceptionpost/servicerequest"),startTimer("submit",!1))}},error:c})}else this.$(".alert-error").fadeIn()},ownsoftotp:function(){this.model=new c({url:"json/"}),o.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){showSpinner(),this.model.clear(),o.Validation.unbind(this);var s=this,i=function(e){s.SuccessPage()},r=function(e){s.errorresponse()};s.collection=new n([],{});var a=(new Date).getTime(),l="SOFTOTP";h.set("otpModule",l);var u=e("#softotp").val(),d=h.get("custno");s.collection.fetch({data:e.param({opttype:l,refno:h.get("token_serno"),activationno:u,customerno:d,requestid:a}),dataType:"json",type:"POST",timeout:parseInt(h.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?i(e):r(e)},error:r})}else this.$(".alert-error").fadeIn()},SuccessPage:function(){var t=this;timestamp=(new Date).getTime();var o=function(e){t.postingcompile()},s=function(e){t.errorresponse()};t.collection=new d([],{}),showSpinner(),timestamp=(new Date).getTime();var i="CC",n="BLK_CC",r=(h.get("stopCardNo"),h.get("primaryAccount")),c=h.get("repreason"),a=h.get("rplacecard"),l=h.get("cardtypeDesc"),u=c+i+l+n;u=null==u?"":u,checkSumEncrypt(u);var p=localStorage.getItem("FINALCHECKSUM"),m=l+h.get("appdynamicToken");m=CryptoJS.SHA512(m)+"",t.collection.fetch({data:e.param({appDynamicValue:m,appchecksum:p,access_token:h.get("access_token"),code:n,cardtype:i,accountNo:l,servicecode:n,reason:c,shadowAccountNumber:r,reissue:a}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(h.get("calltimeout")),success:function(e){"0000"==ackStatus?o(e):s(e)},error:s})},postingcompile:function(){return hideSpinner(),this.undelegateEvents(),o.history.navigate("#/stopcreditcardrequestresult"),this},SuccessPage11:function(){var t=h.get("custno"),o=h.get("valueJSON"),s=h.get("nameJSON");h.set("errbackcbook","yes");var i="ChequeBookRequest",n="002",r=getDeviceId(),c=i+""+n+r,a=CryptoJS.MD5(c);c=a+"";var l=this;showSpinner();var u=function(e){l.postingcompile()},d=function(e){l.errorresponse()};l.collection=new p([],{id:t});e("form").serialize();l.collection.fetch({data:e.param({appchecksum:c,requestid:timestamp,servicerequestname:"ChequeBookRequest",servicerequesttype:"002",name:s,value:o}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(h.get("calltimeout")),success:function(e){"0000"==ackStatus?u(e):(h.set("errbackcbook","yes"),d(e))},error:d})},cancel:function(){hideSpinner();var e=h.get("device.platform");"Android"==e&&stopSMSListening(),o.history.navigate("#/stopcreditcardconfirmrequest")},postingcompile:function(){hideSpinner(),this.undelegateEvents(),o.history.navigate("#/stopcreditcardrequestresult")},errorresponse:function(){hideSpinner(),o.history.navigate("#/exception")},disposeView:function(e){return o.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return v});