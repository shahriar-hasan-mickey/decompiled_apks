define(["jquery","underscore","Backbone","routers/wealthrouter","routers/settingsRouter","text!views/userSettings/changeMpin/changeMpin.tpl"],function(e,t,n,i,o,r){var s=null,a=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",events:{"click #backBtn":"gotoPreviousPage","click #cancel":"gotoPreviousPage","click #submit":"openVerifyOtpPopUp","click #verifyOTP":"gotoPasswordChangeSuccessPopUp","click #login":"gotoLoginPage"},initialize:function(){new i,new o},render:function(){hideSpinner(),this.$el.html(t.template(r)),e("html").removeClass("primarybg hasBoth").addClass("app")},gotoPreviousPage:function(){n.history.navigate("#/usersettings")},openVerifyOtpPopUp:function(){var t=this;e("#verify").modal("show"),t.invokeOTPSpinner()},gotoPasswordChangeSuccessPopUp:function(){e("#verify").modal("hide"),e("#success").modal("show")},gotoLoginPage:function(){n.history.navigate("#/login")},invokeOTPSpinner:function(){return e(".resend_button").hide(),e("#OTPcontainer1").show(),null!=s?(s.set(1),void s.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})):(s=new ProgressBar.Circle(OTPcontainer1,{color:"#333",strokeWidth:8,trailWidth:8,easing:"linear",duration:18e4,text:{autoStyleContainer:!1},from:{color:"#ec5f59",width:8},to:{color:"#ec5f59",width:8},step:function(t,n){n.path.setAttribute("stroke",t.color),n.path.setAttribute("stroke-width",t.width);var i=Math.round(180*n.value());0===i?(n.setText(""),e(".resend_button").show()):(e(".resend_button").hide(),n.setText(i+"s"))}}),s.text.style.fontFamily='"Raleway", Helvetica, sans-serif',s.text.style.fontSize="12px",s.text.style.fontWeight="bold",s.set(1),s.animate(0,function(){e("#OTPcontainer1").slideUp("slow")}),void e(".resend_button").click(function(){e("#OTPcontainer1").slideDown("slow"),s.set(1),s.animate(0,function(){e("#OTPcontainer1").slideUp("slow")})}))},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return a});