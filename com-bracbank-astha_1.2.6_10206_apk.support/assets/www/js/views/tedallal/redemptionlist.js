define(["jquery","underscore","Backbone","routers/tedallalrouter","text!views/tedallal/redemptionlist.tpl"],function(e,t,n,r,o){var i=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{},initialize:function(){new r},render:function(){var e=i.get("device.platform");"Android"==e&&stopSMSListening(),this.tedallalHome()},tedallalHome:function(){this.$("#mobcontent").html(t.template(o))},errorresponse:function(){n.history.navigate("#/exception")}});return a});