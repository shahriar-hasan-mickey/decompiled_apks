define(["jquery","underscore","Backbone","text!views/login/forgotusername.tpl","collections/applanding/Registration/cardPinValidationCollections","collections/login/forgotUsernameConfirmCollections","collections/applanding/Registration/otpGenerationCollections","collections/applanding/Registration/otpVerificationCollections","collections/applanding/Registration/getAuthModeCollections"],function(t,e,r,o,a,n,i,l,s){var c=null,u=new EncryptedLocalStorage("secret"),m=r.View.extend({el:"#container",events:{"click #home_btn":"backToHome","click #validate_btn":"gotoNextPage","click #forgot_user_next_btn":"showOTPOrEmail","click #verifyOTP":"gotoVerifySuccessPopUp","click #otp_success_btn":"gotoLoginPage","click #cancel_btn":"revokeOTPSpinner","click #close_btn":"revokeOTPSpinner","change .cardoptions":"changeLabel"},initialize:function(){},update:function(){c=null,this.$el.html(e.template(o)),u.set("cardType",""),t("#cardNumberDiv").show(),t("#cardPinDiv").show(),t("#accNumDiv").hide(),t("#mobNumDiv").hide(),t("#forgot_username_label").html(t.i18n.t("app.registration.enterdebitcardnum")),t("#accCardNumberLabel").html("Account Number"),t("#first,#second,#third,#fourth").removeAttr("disabled","disabled"),t(".first,.mid,.last").removeAttr("disabled","disabled"),t("#Forgot_username_alert_authmodeDiv").html("")},getAuthmode:function(){var e=this;u.set("IsAuthMode","false"),t("#Forgot_username_alert_authmodeDiv").html("");var r=function(t){hideSpinner();var r=u.get("securitySettingList");!isNull(r)&&r.length>0?u.set("IsAuthMode","true"):(u.set("alertType",null),u.set("IsAuthMode","false")),e.populateAuthMode()},o=function(t){hideSpinner(),u.set("IsAuthMode","false"),e.populateAuthMode()};showSpinner(),e.collection=new s,e.collection.fetch({data:t.param({access_token:u.get("access_token"),transactionAmount:null,tenantServiceCode:"FORGOT_USERID",ulpId:u.get("forgotUserNameUlpID")}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?r(t):o(t)},error:o})},populateAuthMode:function(){var e="",r="";t("#forgot_user_nextBtnDiv").show(),t("#forgot_user_validateBtnDiv").hide();var o=u.get("securitySettingList"),a="<label for='username'>"+t.i18n.t("app.transfer.managebeneficiary.selectauthorisationmode")+"</label>";a+="<div class='custRadio_pass'>",!isNull(o)&&o.length>0?(t("#Forgot_username_alert_authmodeDiv").html(""),t.each(o,function(o,n){"SMS"==n?(e="sms",r=t.i18n.t("app.transfer.managebeneficiary.sms")):"EMAIL"==n?(e="mail",r=t.i18n.t("app.transfer.managebeneficiary.mail")):"TOKEN"==n?(e="fScan",r=t.i18n.t("app.transfer.managebeneficiary.token")):"ESIGN"==n&&(e="esign",r=t.i18n.t("app.transfer.managebeneficiary.esign")),a+='<div class="box"><div class="radio"><label>',a+=0==o?'<input type="radio" name="forgot_username_authmode" id="optionsRadios'+o+'" value="'+n+'" checked>':'<input type="radio" name="forgot_username_authmode" id="optionsRadios'+o+'" value="'+n+'">',a+='<div class="row bg"><div class="col-xs-12 p0"><span class="menu_icon ico-xs '+e+'"></span><span class="small">'+r+"</span></div></div></label></div></div>"}),t("#Forgot_username_alert_authmodeDiv").html(a)):t("#Forgot_username_alert_authmodeDiv").html("")},changeLabel:function(e){var r=e.target.value;"DC"==r?(t("#cardNumberDiv").show(),t("#cardPinDiv").show(),t("#accNumDiv").hide(),t("#mobNumDiv").hide(),t("#Forgot_username_alert_authmodeDiv").html(""),t("#forgot_username_label").html(t.i18n.t("app.registration.enterdebitcardnum"))):"CC"==r?(t("#cardNumberDiv").show(),t("#cardPinDiv").show(),t("#accNumDiv").hide(),t("#mobNumDiv").hide(),t("#Forgot_username_alert_authmodeDiv").html(""),t("#forgot_username_label").html(t.i18n.t("app.registration.entercreditcardnum"))):"account"==r&&(t("#cardNumberDiv").hide(),t("#cardNumNullError").html(""),t("#cardPinDiv").hide(),t("#accNumDiv").show(),t("#mobNumDiv").show(),t("#Forgot_username_alert_authmodeDiv").html(""))},gotoNextPage:function(e){"object"==typeof e&&e.stopImmediatePropagation();var r=this,o=t("input[name='choice']:checked").val();"account"==o?(u.set("cardType","A"),r.validateAccNumberDetails(e)):(u.set("cardType",""),r.gotoOTPPopUp())},validateAccNumberDetails:function(e){e.stopImmediatePropagation();var r=this;isError=!1,t("#forgotUsernameAccNumError").html(""),t("#forgotUsernameMobNumError").html(""),t("#otpNullError").html(""),t("#otpNullErrorDiv").hide(),t("#usrname").html("");var o=t("#forgotUsernameAccNum").val(),n=t("#forgotUsernameMobNum").val();if(isNull(o)&&(isError=!0,t("#forgotUsernameAccNumError").html("Please enter the account number")),isNull(o)||(o.length<13&&(isError=!0,t("#forgotUsernameAccNumError").html("Account Number should be minimum of 13 characters")),o.length>16&&(isError=!0,t("#forgotUsernameAccNumError").html("Account Number should be maximum of 16 characters")),13!=o.length&&16!=o.length&&(isError=!0,t("#forgotUsernameAccNumError").html("Account Number should be either 13/16 characters"))),isNull(n)&&(isError=!0,t("#forgotUsernameMobNumError").html("Please enter the mobile number")),isNull(n)||n.length>16&&(isError=!0,t("#forgotUsernameMobNumError").html("Mobile Number should be maximum of 16 characters")),!isError){var i=(new Date).getTime();u.set("saltreg",i);var l=u.get("cardType");o=EncryptWithDynamicSalt(o,i);var s=EncryptWithDynamicSalt(n,i);u.set("enccardnum",o);var c=function(t){hideSpinner(),r.getAuthmode()},m=function(e){t("#forgotUsernameAccNum").val(""),t("#forgotUsernameMobNum").val(""),r.errorresponse()};showSpinner(),r.collection=new a;getDeviceId(),(new Date).getTime();r.collection.fetch({data:t.param({ccno:o,ccpinno:s,salt:i,cardtype:l,flag:"FU"}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?c(t):m(t)},error:m})}},gotoOTPPopUp:function(){var e=this;t("#cardNumNullError").html(""),t("#pinNullError").html(""),t("#otpNullError").html(""),t("#otpNullErrorDiv").hide(),t("#usrname").html("");var r=t("#first").val(),o=t("#second").val(),n=t("#third").val(),i=t("#fourth").val(),l=t("#mpininput").val(),s=/[0-9]/g;if(""==r||""==o||""==n||""==i)return void t("#cardNumNullError").html(t.i18n.t("validation.newregistration.cardnumnotnull"));if(r.length<t("#first").attr("maxlength")||o.length<t("#second").attr("maxlength")||n.length<t("#third").attr("maxlength")||i.length<t("#fourth").attr("maxlength"))return void t("#cardNumNullError").html(t.i18n.t("validation.newregistration.validnumerrmsg"));if(!(r.match(s)&&o.match(s)&&n.match(s)&&i.match(s)))return void t("#cardNumNullError").html(t.i18n.t("validation.newregistration.cardnumberonly"));if(l.length<4)return void t(".pincode-input-error").html(t.i18n.t("app.forgotpassword.errvalpin"));if(!l.match(s))return void t(".pincode-input-error").html(t.i18n.t("validation.newregistration.pinnumberonly"));var c=t("input[name='choice']:checked").val(),m=r+o+n+i,d=(new Date).getTime();u.set("saltreg",d),ccnum=EncryptWithDynamicSalt(m,d),ccpinnum=EncryptWithDynamicSalt(l,d),u.set("enccardnum",ccnum);var p=function(r){hideSpinner(),e.getAuthmode(),t("#first, #second, #third, #fourth").attr("disabled","disabled"),t(".first,.mid,.last").attr("disabled","disabled")},h=function(t){e.errorresponse()};showSpinner(),e.collection=new a;getDeviceId(),(new Date).getTime();e.collection.fetch({data:t.param({ccno:ccnum,ccpinno:ccpinnum,salt:d,cardtype:c,flag:"FU"}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?p(t):h(t)},error:h})},showOTPOrEmail:function(){var t=this;"false"==u.get("IsAuthMode")?t.getUsername():t.validateCard()},validateCard:function(){var e=this,r=t("input[name='forgot_username_authmode']:checked").val();u.set("authmode",r),"SMS"==r||"EMAIL"==r||"ESIGN"==r?e.validateCardPin("N"):"TOKEN"==r&&(u.set("otpCode",""),u.set("alertType",r),t("#verify").modal("show"),t("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),"TOKEN"==u.get("alertType")&&(t("#titleAuth").html(t.i18n.t("app.registration.opthelptokentext")),t("#myModalLabel").html(t.i18n.t("app.registration.otptokenheadertext")),t("#challengeText").html(""),t("#OTPcontainer1").hide(),t("#resend_btn1").hide()),t("#otpNullError").html(""),t("#otpNullErrorDiv").hide(),t(".inputs").on("input",function(e){e.stopImmediatePropagation();var r=e.currentTarget.id,o=t("#"+r).val();t("#"+r).attr("data",o),t("#"+r).val(o.replace(/[^\*]/,"."))}),t("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""))},validateCardPin:function(e){var r="",o="";t(".otp_msg_txt").html("");var a=t("input[name='forgot_username_authmode']:checked").val();u.set("alertType",a),"SMS"==a?(o=u.get("mobileNo"),r=null):"EMAIL"==a&&(o=null,r=u.get("emailID")),u.set("mobilenum",o),u.set("eMailId",r);var n=this,l=function(r){hideSpinner(),"Y"==e&&(t("#OTPcontainer1").slideDown("slow"),c.set(1),c.animate(0,function(){t("#OTPcontainer1").slideUp("slow")})),t("#verify").modal("show"),t("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),"SMS"==u.get("alertType")?(t("#titleAuth").html(t.i18n.t("app.registration.opthelptext")+" "+maskMobile(u.get("mobilenum"))),t("#myModalLabel").html(t.i18n.t("app.transferss.verfici")),t("#challengeText").html(""),t("#OTPcontainer1").show(),t("#resend_btn1").show()):"EMAIL"==u.get("alertType")?(t("#titleAuth").html(t.i18n.t("app.registration.opthelptext")+" "+maskEmailID(u.get("emailID"))),t("#myModalLabel").html(t.i18n.t("app.transferss.verfici")),t("#challengeText").html(""),t("#OTPcontainer1").show(),t("#resend_btn1").show()):"ESIGN"==u.get("alertType")&&(t("#titleAuth").html(t.i18n.t("app.registration.otphelpesigntext")),t("#myModalLabel").html(t.i18n.t("app.transferss.verfici")),t("#challengeText").html(t.i18n.t("app.transferss.genratedTocn")+" "+u.get("otpCode")),t("#OTPcontainer1").hide(),t("#resend_btn1").hide()),setTimeout(function(){t("#otp1").focus()},500),t("#otpNullError").html(""),t("#otpNullErrorDiv").hide(),t(".inputs").on("input",function(e){e.stopImmediatePropagation();var r=e.currentTarget.id,o=t("#"+r).val();t("#"+r).attr("data",o),t("#"+r).val(o.replace(/[^\*]/,"."))}),t("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),("SMS"==u.get("alertType")||"EMAIL"==u.get("alertType"))&&n.invokeOTPSpinner()},s=function(t){n.errorresponse()},m=u.get("customerIDs"),d=u.get("saltreg"),p=DEcryptWithDynamicSalt(m,d);cusId=EncryptWithDynamicSalt(p,d);var n=this;showSpinner(),n.collection=new i;getDeviceId(),(new Date).getTime();n.collection.fetch({data:t.param({salt:d,cifId:cusId,mobileNumber:u.get("mobilenum"),email:u.get("eMailId"),serviceProvider:null,resendflag:e,alerttype:u.get("alertType"),servicecode:"FORGOT_USERID"}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?l(t):s(t)},error:s})},invokeOTPSpinner:function(){var e=this;return t("#resend_btn1").hide(),t("#OTPcontainer1").show(),t("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),null!=c?(c.set(1),void c.animate(0,function(){t("#OTPcontainer1").slideUp("slow")})):(c=new ProgressBar.Circle(OTPcontainer1,{color:"#333",strokeWidth:8,trailWidth:8,easing:"linear",duration:6e4*parseInt(u.get("otpExpiryPeriod")),text:{autoStyleContainer:!1},from:{color:"#ec5f59",width:8},to:{color:"#ec5f59",width:8},step:function(e,r){r.path.setAttribute("stroke",e.color),r.path.setAttribute("stroke-width",e.width);var o=Math.round(r.value()*(60*u.get("otpExpiryPeriod")));"0"==o?(r.setText(""),t("#resend_btn1").show()):(t("#resend_btn1").hide(),r.setText(o+"s"))}}),c.text.style.fontFamily='"Raleway", Helvetica, sans-serif',c.text.style.fontSize="12px",c.text.style.fontWeight="bold",c.set(1),c.animate(0,function(){t("#OTPcontainer1").slideUp("slow")}),void t("#resend_btn1").click(function(){e.validateCardPin("Y")}))},revokeOTPSpinner:function(){null!=c&&c.stop()},gotoVerifySuccessPopUp:function(){var e="",r="";t("#otpNullError").html(""),t("#otpNullErrorDiv").hide();var o=t("#otp1").attr("data"),a=t("#otp2").attr("data"),n=t("#otp3").attr("data"),i=t("#otp4").attr("data"),s=t("#otp5").attr("data"),c=t("#otp6").attr("data");if(isNull(o)||isNull(a)||isNull(n)||isNull(i)||isNull(s)||isNull(c))return t("#otpNullErrorDiv").show(),void t("#otpNullError").html(t.i18n.t("validation.newregistration.otpnotnull"));var m=o+a+n+i+s+c,d=t("input[name='forgot_username_authmode']:checked").val();"SMS"==d?(r=u.get("mobileNo"),e=null):"EMAIL"==d&&(r=null,e=u.get("emailId"));var p=this,h=function(t){p.revokeOTPSpinner(),p.getUsername()},g=function(e){hideSpinner(),isNull(u.get("errordesc"))||(t("#otpNullErrorDiv").show(),t("#otpNullError").html(u.get("errordesc")))},v=u.get("customerIDs"),f=u.get("saltreg"),b=DEcryptWithDynamicSalt(v,f);cusId=EncryptWithDynamicSalt(b,f);var p=this;showSpinner(),p.collection=new l;getDeviceId(),(new Date).getTime();p.collection.fetch({data:t.param({activationno:m,salt:f,cifId:cusId,mobileNumber:r,email:e,serviceProvider:null,twoFAType:u.get("alertType"),servicecode:"FORGOT_USERID"}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?h(t):g(t)},error:g})},getUsername:function(){var e=this,r=function(t){e.gotoSuccessPopup()},o=function(t){e.errorresponse()};showSpinner(),e.collection=new n;var a=(getDeviceId(),(new Date).getTime()),i=u.get("customerIDs"),a=u.get("transId");DEcryptWithDynamicSalt(i,a);e.collection.fetch({data:t.param({salt:a,cifNo:i}),dataType:"json",type:"POST",cache:!1,success:function(t){"0000"==ackStatus?r(t):o(t)},error:o})},gotoSuccessPopup:function(){hideSpinner();var e=u.get("userName");t("#verify").modal("hide"),t("#success").modal("show"),t("#usrname").html(e)},backToHome:function(){r.history.navigate("#/login")},gotoLoginPage:function(){r.history.navigate("#/login")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(t){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=t,this.currentView.delegateEvents(),this.currentView}});return m});