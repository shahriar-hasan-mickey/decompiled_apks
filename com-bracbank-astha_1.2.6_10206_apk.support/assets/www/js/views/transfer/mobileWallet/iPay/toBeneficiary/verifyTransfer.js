define(["jquery","underscore","Backbone","routers/wealthrouter","routers/transferrouter","text!views/transfer/mobileWallet/iPay/toBeneficiary/verifyTransfer.tpl","views/errors/exception"],function(e,t,n,i,r,o,s){var a=null,c=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",events:{"click #sendMoney":"openOTPpopUp","click #verifyBtn":"gotoSuccessPage"},initialize:function(){new i,new r},render:function(){hideSpinner(),e("html").removeClass(),e("html").addClass("app"),this.$el.html(t.template(o))},openOTPpopUp:function(){var t=this;e("#verify").modal("show"),t.invokeOTPSpinner()},gotoSuccessPage:function(){n.history.navigate("#/ipaytobenetransfering")},cancelbtn:function(){n.history.navigate("#/ipayviewbeneficiarys")},invokeOTPSpinner:function(){return null!=a?(a.set(1),void a.animate(0,function(){e("#OTPcontainer1").slideUp("slow"),e(".resend_button2").prop("disabled",!1)})):(a=new ProgressBar.Circle(OTPcontainer1,{color:"#333",strokeWidth:8,trailWidth:8,easing:"linear",duration:18e4,text:{autoStyleContainer:!1},from:{color:"#ec5f59",width:8},to:{color:"#ec5f59",width:8},step:function(e,t){t.path.setAttribute("stroke",e.color),t.path.setAttribute("stroke-width",e.width);var n=Math.round(180*t.value());0===n?t.setText(""):t.setText(n+"s")}}),a.text.style.fontFamily='"Raleway", Helvetica, sans-serif',a.text.style.fontSize="12px",a.text.style.fontWeight="bold",a.set(1),a.animate(0,function(){e("#OTPcontainer1").slideUp("slow"),e(".resend_button2").prop("disabled",!1)}),void e(".resend_button2").click(function(){e(".resend_button2").prop("disabled",!0),e("#OTPcontainer1").slideDown("slow"),a.set(1),a.animate(0,function(){e("#OTPcontainer1").slideUp("slow"),e(".resend_button2").prop("disabled",!1)})}))},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return c});