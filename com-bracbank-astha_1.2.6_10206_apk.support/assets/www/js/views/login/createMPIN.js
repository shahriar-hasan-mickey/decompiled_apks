define(["jquery","underscore","Backbone","text!views/login/createMPIN.tpl","models/validation/login/loginValidationModel","collections/login/preLoginAuthCollections","collections/login/securelogintokenCollections","collections/login/secureloginCollections","collections/login/forcepassCollections"],function(e,i,n,o,t,l,r,a,c){var s=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",events:{"click #mpin_tab":"loadMpinUI","click #login_tab":"loadLoginUI","click #continue":"gotoMpinReg"},initialize:function(){e("div").removeClass("modal-backdrop fade in")},render:function(e){this.$el.html(i.template(o))},loadLoginUI:function(){n.history.navigate("#/login")},loadMpinUI:function(){n.history.navigate("#/creatempin")},gotoMpinReg:function(i){var o=(new Array,getDeviceId(),e.trim(e("#username").val()));o.charAt(0),o.charAt(o.length-1);this.model=new t({url:"json/"}),this.$(".alert").hide(),n.Validation.bind(this);var l=this.$("form").serializeObject();this.model.set(l,{validate:!0})?(i.preventDefault(),n.history.navigate("#/mpinreg",{trigger:!0,replace:!0})):(this.$(".has-error").fadeIn(),hideSpinner(),n.Validation.unbind(i))},errorresponse:function(e){hideSpinner(),openErrorPopup()}}));return s});