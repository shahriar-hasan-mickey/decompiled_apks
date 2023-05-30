define(["jquery","underscore","Backbone","text!views/service/AuthorizationMode/authManagementSuccess.tpl"],function(e,i,t,n){var o=(new EncryptedLocalStorage("secret"),t.View.extend({el:"#container",events:{"click #slide_out_dashboard":"wealth","click #slide_out_upcomingpayments":"loaddatelineUI","click #slide_out_savings":"savingUI","click #slide_out_creditcard":"creditUI","click #slide_out_prepaidcard":"prepaidUI","click #slide_out_loan":"loansUI","click #slide_out_deposits":"depositsUI","click #slide_out_transfers":"transfer","click #slide_out_billpay":"billpay","click #slide_out_manage_biller":"managebillerUI","click #slide_out_managebene":"loadmanagebeneUi","click #slide_out_services":"servicesUI","click #logout":"gotoFeedbackPopup","click #slide_out_more":"gotoMore","click #slide_out_user_settings":"gotoUserSettings","click #authManagementSuccess_OKBtn":"gotoServiceRequestPage"},initialize:function(){e("div").removeClass("modal-backdrop fade in"),e("html").attr("class","primarybg hasFooter")},update:function(){this.$el.html(i.template(n))},wealth:function(){t.history.navigate("#/wealth")},transfer:function(){t.history.navigate("#/transfer")},billpay:function(){},managebillerUI:function(){t.history.navigate("#/managebillertype")},loadmanagebeneUi:function(){t.history.navigate("#/managebene")},loaddatelineUI:function(){},savingUI:function(){},subNav:function(){e("#accounts").toggle()},creditUI:function(){},prepaidUI:function(){},loansUI:function(){},depositsUI:function(){},servicesUI:function(){t.history.navigate("#/servicerequest")},gotoServiceRequestPage:function(e){e.stopImmediatePropagation(),t.history.navigate("#/servicerequest")},savingacc:function(){},gotoMore:function(){t.history.navigate("#/more")},gotoUserSettings:function(){t.history.navigate("#/usersettings")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return t.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return o});