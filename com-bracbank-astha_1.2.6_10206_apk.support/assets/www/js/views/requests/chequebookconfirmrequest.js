define(["jquery","underscore","Backbone","collections/creditcard/creditCardLimitOtpResultCollections","collections/requests/requestVerificationCollections","text!views/requests/chequebookconfirmrequest.tpl","text!views/requests/chequebookrequestresult.tpl","models/validation/OTPValidationModel","collections/common/otpGenerateCollections"],function(e,t,n,o,i,c,s,r,a){var u=new EncryptedLocalStorage("secret"),l=n.View.extend({el:"#mobcontent",events:{"click #chequebooksubmitotp":"chequebooksubmitotp","click #chequebooksubmitresentotp":"ResendOtpRequest"},initialize:function(){},update:function(){showSpinner(),this.requestcompile()},requestcompile:function(){hideSpinner(),this.$el.html(t.template(c)).i18n(),this.$el.trigger("create")},ResendOtpRequest:function(){e("#secError").hide(),e("#otp").val(""),e("#chequebooksubmitotp").removeAttr("disabled");var t=this,n=function(e){t.errorresponse()};t.collection=new a([],{});var o=(new Date).getTime();"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR");var i=u.get("custno"),c="9004",s="";showSpinner(),t.collection.fetch({data:e.param({servicetype:c,language:language,custno:i,ipaddress:s,requestid:o}),dataType:"json",type:"POST",timeout:parseInt(u.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?hideSpinner():n(e)},error:n})},chequebooksubmitotp:function(){showSpinner(),n.history.navigate("#/chequebookrequestOtp")},chequebooksubmitotpCompile:function(){var t=new Array;t[0]=e("#casaaccno").val(),t[1]=e("#casaaccname").val(),t[2]=e("#branch").val(),t[3]=e("#branchname").val(),t[4]=e("#noofchequebook").val();var o=JSON.stringify(t);u.set("nameJSON",o);var i=new Array;i[0]=u.get("sraccno"),i[1]=u.get("sraccname"),i[2]=u.get("srbranch"),i[3]=u.get("srbranchname"),i[4]=u.get("srchequeleaves");var c=JSON.stringify(i);u.set("valueJSON",c),hideSpinner(),n.history.navigate("#/chequebookrequestOtp")},chequebooksubmitotp11:function(t,n){showSpinner();var o=this,c=function(e){o.postingcompile()},s=function(e){o.errorresponse()};o.collection=new i([],{}),timestamp=(new Date).getTime(),o.collection.fetch({data:e.param({access_token:u.get("access_token"),casaAcctId:u.get("sraccountId"),noofchequeleaves:u.get("srleavesnos"),noofchequebooks:u.get("srchequeleaves"),branchname:u.get("srbranch"),validtype:"Posting",servicecode:"CHQBOOKREQ",code:"CHQBOOKREQ"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?c(e):s(e)},error:s})},postingcompile:function(){hideSpinner(),this.undelegateEvents(),n.history.navigate("#/chequebookrequestresult")},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});