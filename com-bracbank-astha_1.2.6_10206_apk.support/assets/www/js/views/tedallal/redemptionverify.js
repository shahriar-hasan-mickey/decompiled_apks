define(["jquery","underscore","Backbone","routers/tedallalrouter","text!views/tedallal/redemptionverify.tpl"],function(e,t,n,r,i){var o=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #redeemVerify":"redeemVerify","click #redeemCancel":"redeemCancel"},initialize:function(){},update:function(){this.showVerifyTemplate()},showVerifyTemplate:function(){this.$("#mobcontent").html(t.template(i))},redeemVerify:function(){n.history.navigate("#/otpverifyredemption")},redeemCancel:function(){n.history.navigate("#/redemofpoints")},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")}}));return o});