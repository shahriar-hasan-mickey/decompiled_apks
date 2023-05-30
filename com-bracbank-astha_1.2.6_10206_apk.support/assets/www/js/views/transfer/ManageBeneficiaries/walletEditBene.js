define(["jquery","underscore","Backbone","text!views/transfer/ManageBeneficiaries/walletEditBene.tpl","models/validation/manageBeneficiaries/mobilewalletAddBeneValidationModel","collections/manageBeneficiaries/checkaddedBeneficiaryCollection"],function(e,t,i,a,r,l){var n=new EncryptedLocalStorage("secret"),o=i.View.extend({el:"#container",events:{"click #walletEditBeneSaveBtn":"loadVerifypageUI"},initialize:function(){},update:function(){n.set("isTransferPageFlag","false"),this.$el.html(t.template(a))},loadVerifypageUI:function(t){t.stopImmediatePropagation(),e("#emailError").html(""),e("#shortNameNullError").html(""),e("#remarkNullError").html("");var a=this;this.model=new r({url:"json/"}),this.$(".alert").hide(),i.Validation.bind(this);var l=this.$("form").serializeObject();if(this.model.set(l,{validate:!0})){var n=e("#walletBeneEditedshortName").val(),o=new RegExp("^[a-zA-Z0-9 ]+$"),d=n.charAt(0),s=n.charAt(n.length-1);if(!o.test(n))return void e("#shortNameNullError").html(e.i18n.t("validation.managebene.shortnamespecialchar"));if(!d.match(/^[a-zA-Z0-9\u0600-\u06FF]+$/i))return void e("#shortNameNullError").html(e.i18n.t("validation.newregistration.firstspaceind"));if(!s.match(/^[a-zA-Z0-9\u0600-\u06FF]+$/i))return void e("#shortNameNullError").html(e.i18n.t("validation.newregistration.lastspaceind"));if(n.length>20)return void e("#shortNameNullError").html(e.i18n.t("validation.managebene.shortnamelength"));var m=e("#walletEditedEmailAdd").val();if(""!==m){var c=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;if(!c.test(m))return void e("#emailError").html(e.i18n.t("validation.managebene.emailnotvalid"))}var h=e("#walletEditedMobileNum").val();if(!isNull(h)){var u=/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/;if(!u.test(h))return void e("#mobNumNullError").html(e.i18n.t("Please enter valid Mobile Number"))}var v=e("#walletEditedRemark").val();if(!isNull(v)&&!o.test(v))return void e("#remarkNullError").html(e.i18n.t("validation.managebene.remarksspecialchar"));a.gotoVerifyPage(t)}else t.preventDefault(),this.$(".alert-error").fadeIn(),hideSpinner(),i.Validation.unbind(t)},gotoVerifyPage:function(t){t.stopImmediatePropagation(),n.set("walletBeneEditedAccHolderName",e("#walletBeneEditedAccHolderName").text()),n.set("walletBeneEditedshortName",e("#walletBeneEditedshortName").val()),n.set("walletEditedRemark",e("#walletEditedRemark").val()),n.set("walletEditedMobileNum",e("#walletEditedMobileNum").val()),n.set("walletEditedEmailAdd",e("#walletEditedEmailAdd").val());var a=n.get("rocketAccNO"),r=(new Date).getTime();n.set("salttime",r);EncryptWithDynamicSalt(a,r),e("#walletBeneEditedshortName").val();i.history.navigate("#/walleteditbeneverify")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return o});