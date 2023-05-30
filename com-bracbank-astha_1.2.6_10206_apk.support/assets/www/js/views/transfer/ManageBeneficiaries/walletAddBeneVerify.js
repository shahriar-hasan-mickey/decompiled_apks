define(["jquery","underscore","Backbone","text!views/transfer/ManageBeneficiaries/walletAddBeneVerify.tpl","collections/manageBeneficiaries/insertbeneficiaryCollection","collections/wealth/otpPostLoginGenerationCollections","collections/wealth/otpPostLoginVerificationCollections"],function(e,t,o,n,a,i,r){var l=null,s=new EncryptedLocalStorage("secret"),c=o.View.extend({el:"#container",events:{"click #walletAddOTPVerifyBtn":"gotoWalletAddSuccessPage","click #walletAddVerifyConfirmBtn":"openOTPPopUp","click #walletAddOTPCancelBtn":"revokeOTPSpinner","click #walletAddVerifyCancelBtn":"gotoPreviousPage","click #wallet_add_close_btn":"revokeOTPSpinner"},initialize:function(){e("html").removeClass().addClass("app")},update:function(){l=null,this.$el.html(t.template(n))},gotoWalletAddSuccessPage:function(t){t.stopImmediatePropagation();var o=this;e("#otpNullErrorDiv").hide();var n=e("#otp1").attr("data"),a=e("#otp2").attr("data"),i=e("#otp3").attr("data"),l=e("#otp4").attr("data"),c=e("#otp5").attr("data"),p=e("#otp6").attr("data"),d=n+""+a+i+l+c+p;if(isNull(n)||isNull(a)||isNull(i)||isNull(l)||isNull(c)||isNull(p))return e("#otpNullErrorDiv").show(),void e("#otpNullError").html(e.i18n.t("validation.newregistration.otpnotnull"));var u=function(e){o.revokeOTPSpinner(),o.gotoSuccessPage()},g=function(t){hideSpinner(),isNull(s.get("errordesc"))||(e("#otpNullErrorDiv").show(),e("#otpNullError").html(s.get("errordesc")))};showSpinner(),o.collection=new r;getDeviceId(),(new Date).getTime();o.collection.fetch({data:e.param({access_token:s.get("access_token"),transactionType:"BENE_INS",activationno:d,uniqueId:s.get("otpCode"),twoFAType:s.get("alertType")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?u(e):g(e)},error:g})},gotoSuccessPage:function(){var t=s.get("walletAccNum"),n=(new Date).getTime(),i=EncryptWithDynamicSalt(t,n),r=this,l=function(t){hideSpinner(),e("#verify").modal("hide"),r.revokeOTPSpinner(),s.set("beneSuccessFlag","true"),o.history.navigate("#/addwalletsuccessbene")},c=function(e){r.revokeOTPSpinner(),r.errorresponse()};showSpinner(),r.collection=new a,r.collection.fetch({data:e.param({access_token:s.get("access_token"),header:"MW",transfertype:"MW",salt:n,accountNo:i,beneficiaryName:s.get("walletBeneName"),nickname:s.get("walletBeneshortName"),walletid:s.get("walletId"),wallettype:s.get("walletType"),email:s.get("walletEmailAdd"),mobileNo:s.get("walletMobileNum"),remarks:s.get("walletRemark")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?l(e):c(e)},error:c})},openOTPPopUp:function(t){t.stopImmediatePropagation();var o=this;"false"==s.get("IsAuthMode")?o.gotoSuccessPage():"SMS"==s.get("alertType")||"EMAIL"==s.get("alertType")||"ESIGN"==s.get("alertType")?o.validateCard("N"):(s.set("otpCode",""),e("#verify").modal("show"),e("#otpNullError").html(""),e("#otpNullErrorDiv").hide(),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),e(".inputs").on("input",function(t){t.stopImmediatePropagation();var o=t.currentTarget.id,n=e("#"+o).val();e("#"+o).attr("data",n),e("#"+o).val(n.replace(/[^\*]/,"."))}),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""))},validateCard:function(t){var o=this,n=function(n){hideSpinner(),"Y"==t&&(e("#OTPcontainer1").slideDown("slow"),l.set(1),l.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})),e("#verify").modal("show"),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),setTimeout(function(){e("#otp1").focus()},500),e("#otpNullError").html(""),e("#otpNullErrorDiv").hide(),"ESIGN"==s.get("alertType")&&e("#challengeText").html(e.i18n.t("app.transferss.genratedTocn")+""+s.get("otpCode")),e(".inputs").on("input",function(t){t.stopImmediatePropagation();var o=t.currentTarget.id,n=e("#"+o).val();e("#"+o).attr("data",n),e("#"+o).val(n.replace(/[^\*]/,"."))}),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),("SMS"==s.get("alertType")||"EMAIL"==s.get("alertType"))&&o.invokeOTPSpinner()},a=function(e){o.errorresponse()};showSpinner(),o.collection=new i;getDeviceId(),(new Date).getTime();o.collection.fetch({data:e.param({access_token:s.get("access_token"),transactionType:"BENE_INS",resendflag:t,authMode:s.get("alertType")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?n(e):a(e)},error:a})},invokeOTPSpinner:function(){var t=this;return e("#resend_btn9").hide(),e("#OTPcontainer1").show(),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),null!=l?(l.set(1),void l.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})):(l=new ProgressBar.Circle(OTPcontainer1,{color:"#333",strokeWidth:8,trailWidth:8,easing:"linear",duration:6e4*parseInt(s.get("otpExpiryPeriod")),text:{autoStyleContainer:!1},from:{color:"#ec5f59",width:8},to:{color:"#ec5f59",width:8},step:function(t,o){o.path.setAttribute("stroke",t.color),o.path.setAttribute("stroke-width",t.width);var n=Math.round(o.value()*(60*s.get("otpExpiryPeriod")));"0"==n?(o.setText(""),e("#resend_btn9").show()):(e("#resend_btn9").hide(),o.setText(n+"s"))}}),l.text.style.fontFamily='"Raleway", Helvetica, sans-serif',l.text.style.fontSize="12px",l.text.style.fontWeight="bold",l.set(1),l.animate(0,function(){e("#OTPcontainer1").slideUp("slow")}),void e("#resend_btn9").click(function(){t.validateCard("Y")}))},gotoPreviousPage:function(e){e.stopImmediatePropagation(),o.history.navigate("#/walletselectbene")},revokeOTPSpinner:function(){null!=l&&l.stop()},errorresponse:function(){hideSpinner(),e("#verify").modal("hide"),openErrorPopup()},disposeView:function(e){return o.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});