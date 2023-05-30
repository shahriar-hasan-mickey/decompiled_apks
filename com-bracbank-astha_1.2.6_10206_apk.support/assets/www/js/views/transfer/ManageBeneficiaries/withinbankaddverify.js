define(["jquery","underscore","Backbone","text!views/transfer/ManageBeneficiaries/withinbankaddverify.tpl","collections/manageBeneficiaries/insertbeneficiaryCollection","collections/wealth/otpPostLoginGenerationCollections","collections/wealth/otpPostLoginVerificationCollections"],function(e,t,n,o,i,a,r){var c=null,l=new EncryptedLocalStorage("secret"),s=n.View.extend({el:"#container",events:{"click #addBeneVerifyOTP":"loadadd_bene","click #add_benetosuc":"loadaddbenesucessUI","click #popup_cancel_btn":"revokeOTPSpinner","click #close_btn":"revokeOTPSpinner","click #add_benecancel":"loadBeneView"},initialize:function(){},update:function(){c=null,e("#container").html(t.template(o))},loadBeneView:function(e){e.stopImmediatePropagation(),"true"==l.get("isTransfer")?n.history.navigate("#/selectbeneficiary"):n.history.navigate("#/withinselectbene")},loadaddbenesucessUI:function(t){t.stopImmediatePropagation();var n=this;"false"==l.get("IsAuthMode")?n.addWithInBankBeneficiary():"SMS"==l.get("alertType")||"EMAIL"==l.get("alertType")||"ESIGN"==l.get("alertType")?n.validateCard("N"):(l.set("otpCode",""),e("#verify").modal("show"),e("#otpNullError").html(""),e("#otpNullErrorDiv").hide(),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),e(".inputs").on("input",function(t){t.stopImmediatePropagation();var n=t.currentTarget.id,o=e("#"+n).val();e("#"+n).attr("data",o),e("#"+n).val(o.replace(/[^\*]/,"."))}),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""))},validateCard:function(t){var n=this,o=function(o){hideSpinner(),"Y"==t&&(e("#OTPcontainer1").slideDown("slow"),c.set(1),c.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})),e("#verify").modal("show"),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").removeAttr("data"),setTimeout(function(){e("#otp1").focus()},500),e("#otpNullError").html(""),e("#otpNullErrorDiv").hide(),"ESIGN"==l.get("alertType")&&e("#challengeText").html(e.i18n.t("app.transferss.genratedTocn")+""+l.get("otpCode")),e(".inputs").on("input",function(t){t.stopImmediatePropagation();var n=t.currentTarget.id,o=e("#"+n).val();e("#"+n).attr("data",o),e("#"+n).val(o.replace(/[^\*]/,"."))}),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),("SMS"==l.get("alertType")||"EMAIL"==l.get("alertType"))&&n.invokeOTPSpinner()},i=function(e){n.errorresponse()};showSpinner(),n.collection=new a;getDeviceId(),(new Date).getTime();n.collection.fetch({data:e.param({access_token:l.get("access_token"),transactionType:"BENE_INS",resendflag:t,authMode:l.get("alertType")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?o(e):i(e)},error:i})},loadadd_bene:function(t){t.stopImmediatePropagation();var n=this;e("#otpNullErrorDiv").hide();var o=e("#otp1").attr("data"),i=e("#otp2").attr("data"),a=e("#otp3").attr("data"),c=e("#otp4").attr("data"),s=e("#otp5").attr("data"),p=e("#otp6").attr("data"),d=o+""+i+a+c+s+p;if(isNull(o)||isNull(i)||isNull(a)||isNull(c)||isNull(s)||isNull(p))return e("#otpNullErrorDiv").show(),void e("#otpNullError").html(e.i18n.t("validation.newregistration.otpnotnull"));var u=function(e){n.revokeOTPSpinner(),n.addWithInBankBeneficiary()},h=function(t){hideSpinner(),isNull(l.get("errordesc"))||(e("#otpNullErrorDiv").show(),e("#otpNullError").html(l.get("errordesc")))};showSpinner(),n.collection=new r;getDeviceId(),(new Date).getTime();n.collection.fetch({data:e.param({access_token:l.get("access_token"),transactionType:"BENE_INS",activationno:d,uniqueId:l.get("otpCode"),twoFAType:l.get("alertType")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?u(e):h(e)},error:h})},addWithInBankBeneficiary:function(){var t=this,o=l.get("nickname"),a=l.get("cardtype"),r=(new Date).getTime(),c=(l.get("Rval"),l.get("accountCard")),s=EncryptWithDynamicSalt(c,r),p=function(t){hideSpinner(),e("#verify").modal("hide"),l.set("beneSuccessFlag","true"),n.history.navigate("#/withinbankaddconfirm")},d=function(e){t.errorresponse()};showSpinner(),t.collection=new i,t.collection.fetch({data:e.param({access_token:l.get("access_token"),header:"Bank",transferBy:a,transfertype:"BRAC",salt:r,accountNo:s,nickname:o,beneficiaryName:l.get("benename_bene"),email:l.get("emailID")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?p(e):d(e)},error:d})},invokeOTPSpinner:function(){var t=this;return e("#resend_btn6").hide(),e("#OTPcontainer1").show(),e("#otp1, #otp2, #otp3, #otp4, #otp5, #otp6").val(""),null!=c?(c.set(1),void c.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})):(c=new ProgressBar.Circle(OTPcontainer1,{color:"#333",strokeWidth:8,trailWidth:8,easing:"linear",duration:6e4*parseInt(l.get("otpExpiryPeriod")),text:{autoStyleContainer:!1},from:{color:"#ec5f59",width:8},to:{color:"#ec5f59",width:8},step:function(t,n){n.path.setAttribute("stroke",t.color),n.path.setAttribute("stroke-width",t.width);var o=Math.round(n.value()*(60*l.get("otpExpiryPeriod")));"0"==o?(n.setText(""),e("#resend_btn6").show()):(e("#resend_btn6").hide(),n.setText(o+"s"))}}),c.text.style.fontFamily='"Raleway", Helvetica, sans-serif',c.text.style.fontSize="12px",c.text.style.fontWeight="bold",c.set(1),c.animate(0,function(){e("#OTPcontainer1").slideUp("slow")}),void e("#resend_btn6").click(function(){t.validateCard("Y")}))},revokeOTPSpinner:function(){null!=c&&c.stop()},errorresponse:function(){hideSpinner(),e("#verify").modal("hide"),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});