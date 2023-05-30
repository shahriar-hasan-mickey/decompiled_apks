define(["jquery","underscore","Backbone","text!views/login/forgotMpin.tpl","text!views/login/forgotmpinUserId.tpl","models/validation/forgotMpinValidationModel","collections/login/preLoginAuthCollections","collections/login/securelogintokenCollections"],function(e,t,i,n,o,r,a,s){var c=new EncryptedLocalStorage("secret"),l=i.View.extend({el:"#container",events:{"click #forgot_username":"loadForgotUsernameUI","click #forgot_password":"loadForgotPasswordUI","click #validateCardPin":"validateCardPin","click #validateuserid":"validateCardandPin"},initialize:function(){},update:function(){this.$el.html(t.template(o))},loadForgotUsernameUI:function(){i.history.navigate("#/forgotusername")},loadForgotPasswordUI:function(){i.history.navigate("#/forgotpasswordnew")},validateCardandPin:function(){this.model=new r({url:"json/"}),i.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){this.model.clear(),i.Validation.unbind(this);var n=getDeviceId(),o=e("#username").val(),s=this,l=function(e){s.securesystimeencuserLogin()},d=function(e){s.errorresponse()};s.collection=new a([],{});var u=null==o?"":o;checkSumEncrypt(u);var p,g=localStorage.getItem("FINALCHECKSUM"),n=getDeviceId(),h=c.get("mpintype");p="NEWMPIN"==h?e.param({userId:o,appchecksum:g,deviceid:n}):e.param({resetOption:"Y",mpinflag:"FORGETMPIN",userId:o,appchecksum:g,deviceid:n}),showSpinner(),s.collection.fetch({data:p,dataType:"json",type:"POST",cache:!1,timeout:parseInt(c.get("calltimeout")),success:function(e){"0000"==ackStatus?l(e):d(e)},error:d})}else this.$(".has-error").fadeIn(),event.preventDefault()},securesystimeencuserLogin:function(){var i=this,o=getDeviceId(),r=(getDeviceId(),function(i){hideSpinner(),e(this.el).html(t.template(n))}),a=function(e){i.errorresponse()};i.collection=new s,i.collection.fetch({data:e.param({device_id:o,ulpId:c.get("ulpID")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?r(e):a(e)},error:a})},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});