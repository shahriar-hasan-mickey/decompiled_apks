define(["jquery","underscore","Backbone","routers/wealthrouter","routers/transferrouter","models/validation/transfer/withinAccountrepeatTransferValidationModel","models/validation/transfer/withinAccountTransferValidationModel","models/validation/transfer/ownAccountTransferrepeatValidationModel","text!views/transfer/mobileWallet/Rocket/toBeneficiary/initiateTransfer.tpl","views/errors/exception"],function($,_,Backbone,wealthRouter,transferRouter,withinAccountrepeatTransferValidationModel,withinAccountTransferValidationModel,ownAccountTransferrepeatValidationModel,initiateTransferTemplate,exception){var els=new EncryptedLocalStorage("secret"),bKashselectBene=Backbone.View.extend({el:"#container",events:{"click #transHistory":"viewTransferHistory","click #cancel":"goBackToViewBeneficiary","click #confirm":"submitPay","click #paynow":"paynowshow","click #paylater":"paylatershow","click #schpay":"payschshow"},initialize:function(){new wealthRouter,new transferRouter},render:function(){hideSpinner(),$("html").removeClass(),$("html").addClass("app"),this.$el.html(_.template(initiateTransferTemplate)),$("#schPay").hide(),$("#payLater").hide()},viewTransferHistory:function(){Backbone.history.navigate("#/rockettranshistory")},goBackToViewBeneficiary:function(){Backbone.history.navigate("#/rocketviewbeneficiarys")},submitPay:function(){var e=els.get("paynowtrans"),t=els.get("paylatertrans"),a=els.get("payscheduletrans");"Y"==e?this.paynow():"Y"==t?this.paylaterview():"Y"==a&&this.payschview()},paynowshow:function(){els.set("paynowtrans","Y"),els.set("payscheduletrans","N"),els.set("paylatertrans","N"),$("#payLater").hide(),$("#schPay").hide()},paynow:function(){$("#error_amount").html("");var that=this;this.model=new withinAccountrepeatTransferValidationModel({url:"json/"}),Backbone.Validation.bind(this);var data=this.$("form").serializeObject();if(this.model.set(data,{validate:!0})){this.model.clear(),Backbone.Validation.unbind(this);var paymentAmount=$("#paymentAmount").val();if(eval(paymentAmount)<1)return $("#error_amount").html($.i18n.t("validation.sadad.amtgreaterthanzero")),!1;that.gotoVerifyTransaction()}else this.$(".has-error").fadeIn(),event.preventDefault()},paylatershow:function(){$("#payDate").val(""),els.set("paylatertrans","Y"),els.set("paynowtrans","N"),els.set("payscheduletrans","N");$("#payLater").show(),$("#schPay").hide()},paylaterview:function(){$("#error_amount").html(""),$("#errgreaterdate").html("");var that=this;this.model=new withinAccountTransferValidationModel({url:"json/"}),Backbone.Validation.bind(this);var data=this.$("form").serializeObject();if(this.model.set(data,{validate:!0})){this.model.clear(),Backbone.Validation.unbind(this);var paymentAmount=$("#paymentAmount").val(),payDate=$("#payDate").val();if(eval(paymentAmount)<1)return $("#error_amount").html($.i18n.t("validation.sadad.amtgreaterthanzero")),!1;that.gotoVerifyTransaction()}else this.$(".has-error").fadeIn(),event.preventDefault()},payschshow:function(){$("#startDate").val(""),els.set("payscheduletrans","Y"),els.set("paylatertrans","N"),els.set("paynowtrans","N");$("#payLater").hide(),$("#schPay").show()},payschview:function(){$("#error_amount").html("");var that=this;this.model=new ownAccountTransferrepeatValidationModel({url:"json/"}),Backbone.Validation.bind(this);var data=this.$("form").serializeObject();if(this.model.set(data,{validate:!0})){this.model.clear(),Backbone.Validation.unbind(this);var paymentAmount=$("#paymentAmount").val();if(eval(paymentAmount)<1)return $("#error_amount").html($.i18n.t("validation.sadad.amtgreaterthanzero")),!1;that.gotoVerifyTransaction()}else this.$(".has-error").fadeIn(),event.preventDefault()},gotoVerifyTransaction:function(){Backbone.history.navigate("#/rockettobeneverifytransfer")},errorresponse:function(){hideSpinner(),Backbone.history.navigate("#/exception")},disposeView:function(e){return Backbone.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return bKashselectBene});