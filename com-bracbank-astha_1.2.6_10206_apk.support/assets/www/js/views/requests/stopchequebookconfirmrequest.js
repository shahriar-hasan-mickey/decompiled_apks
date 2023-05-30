define(["jquery","underscore","Backbone","text!views/requests/stopchequebookconfirmrequest.tpl","models/validation/OTPValidationModel","collections/common/otpGenerateCollections"],function(e,t,n,o,r,i){var s=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#mobcontent",events:{"click #stopchequebooksubmitotp":"stopchequebooksubmitotp","click #stopchequebooksubmitresentotp":"ResendOtpRequest"},initialize:function(){},render:function(){showSpinner(),this.requestcompile()},requestcompile:function(){return hideSpinner(),this.$el.html(t.template(o)).i18n(),this.$el.trigger("create"),this},ResendOtpRequest:function(){e("#secError").hide(),e("#otp").val(""),e("#stopchequebooksubmitotp").removeAttr("disabled");var t=this,n=function(e){t.errorresponse()};t.collection=new i([],{});var o=(new Date).getTime();"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR");var r=s.get("custno"),a="9004",c="";showSpinner(),t.collection.fetch({data:e.param({servicetype:a,language:language,custno:r,ipaddress:c,requestid:o}),dataType:"json",type:"POST",timeout:parseInt(s.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?hideSpinner():n(e)},error:n})},stopchequebooksubmitotp:function(){showSpinner(),this.chequebooksubmitotpCompile()},chequebooksubmitotpCompile:function(){var t=new Array;t[0]=e("#casaaccno").val(),t[1]=e("#casaaccname").val(),t[2]=e("#branch").val(),t[3]=e("#branchname").val(),t[4]=e("#noofchequebook").val();var o=JSON.stringify(t);s.set("nameJSON",o);var r=new Array;r[0]=s.get("sraccno"),r[1]=s.get("sraccname"),r[2]=s.get("srbranch"),r[3]=s.get("srbranchname"),r[4]=s.get("srchequeleaves");var i=JSON.stringify(r);s.set("valueJSON",i),hideSpinner(),n.history.navigate("#/stopchequebookrequestOtp")},confirm:function(t,n){t.preventDefault();var n=s.get("custno"),o=new Array;o[0]=e("#casaaccno").val(),o[1]=e("#casaaccname").val(),o[2]=e("#branch").val(),o[3]=e("#branchname").val(),o[4]=e("#noofchequebook").val();var r=JSON.stringify(o),i=new Array;i[0]=s.get("sraccno"),i[1]=s.get("sraccname"),i[2]=s.get("srbranch"),i[3]=s.get("srbranchname"),i[4]=s.get("srchequeleaves");var a=JSON.stringify(i),c=this;showSpinner();var u=function(e){c.postingcompile()},l=function(e){c.errorresponse()};c.collection=new creditCardLimitOtpResultCollections([],{id:n});e("form").serialize();c.collection.fetch({data:e.param({requestid:timestamp,servicerequestname:"ChequeBookRequest",customernumber:n,servicerequesttype:"002",name:r,value:a}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(s.get("calltimeout")),success:function(e){"0000"==ackStatus?u(e):l(e)},error:l})},postingcompile:function(){hideSpinner(),this.undelegateEvents(),n.history.navigate("#/stopchequebookrequestresult")},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});