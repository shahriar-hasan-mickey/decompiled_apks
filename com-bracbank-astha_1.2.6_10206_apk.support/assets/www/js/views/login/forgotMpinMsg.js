define(["jquery","underscore","Backbone","collections/login/forgotOTPValidateCollections","text!views/login/forgotMpinMsg.tpl","collections/login/forgotMpinSuccessCollections","collections/login/forgotPasswordSuccessCollections","collections/login/createMPINCollections","models/validation/forgotMpinValidationModel"],function(e,t,r,i,n,o,a,s,c){var l=new EncryptedLocalStorage("secret"),m=r.View.extend({el:"#container",events:{"click #submitresult":"resultpage","click #termandcondition":"termandcondition"},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(){l.set("currentPage","transferConfirm");var e=this;e.mpinmsg()},mpinmsg:function(){return hideSpinner(),e(this.el).html(t.template(n)).i18n(),e(this.el).trigger("create"),this},termandcondition:function(){l.get("lang_id")},resultpage:function(){e(".submitforgotmsg").attr("disabled",!0),e("#commonError").hide(),e("#errorlength").hide(),e("#errornum").hide(),e("#errorusr").hide(),e("#errorlwr").hide(),e("#errorupr").hide(),e("#errorspc").hide(),e("#errnumber").hide(),e("#errorcon").hide(),e("#errorconseq").hide(),e("#minValidError").hide(),e("#commonMpinError").hide(),this.model=new c({url:"json/"}),this.$(".alert").hide(),r.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){this.model.clear(),r.Validation.unbind(this),timestamp=(new Date).getTime();var i=(l.get("atmcardpassword"),this),n=(e("form#sub1"),e("#newpin").val()),a=e("#conpin").val();if(n.length<6)return e("#minValidError").show(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;if(a.length<6)return e("#minValidError").show(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;if(n!=a)return e("#commonError").show(),hideSpinner(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;for(var m=0,d=e("#newpin").val(),g=0;5>g;g++){parseInt(d[g])+1;+d[+g+1]==+d[g]+1&&+d[+g+2]==+d[g]+2&&m++}if(m>0)return e("#errorconseq").show(),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;var m=0,d=e("#newpin").val();if(d.match(/(.)\1\1/))return e("#errorcon").show(),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;var p=(new Date).getTime(),u=e("#newpin").val();u=EncryptWithDynamicSalt(u,p);var h=l.get("uid"),v=getDeviceId(),f=e("#newpin").val(),b=getDeviceId(),w=l.get("mpintype"),I=(/iPad|iPhone|iPod/.test(navigator.userAgent),"");I=l.get("agreeForWatch");var M=e("#newpin").val(),S=l.get("ulpID"),P=S+M;checkSumEncryptMPINN(P);var N=localStorage.getItem("FINALCHECKSUM");if("NEWMPIN"!=w){var y=function(e){i.resultpageSuccess()},E=function(e){i.errorresponse()};i.collection=new o([],{});var A=h+f;A=null==A?"":A,checkSumEncrypt(A);var k=localStorage.getItem("FINALCHECKSUM");showSpinner();var V=CryptoJS.SHA512(N+l.get("appdynamicTokenn"))+"";i.collection.fetch({data:e.param({appDynamicValue:V,device_id:v,salt:p,newpassword:N,userLogin:h,ulpId:l.get("ulpID"),appchecksum:k,deviceid:b}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(l.get("calltimeout")),success:function(t){e(".submitforgotMPINmsg").attr("disabled",!0),"0000"==ackStatus?(l.set("agreeForWatch",I),y(t),e(".submitforgotMPINmsg").attr("disabled",!0)):(E(t),e(".submitforgotMPINmsg").removeAttr("disabled"))},error:E})}else{var y=function(e){i.creatempinverificationcompiler()},E=function(e){i.errorresponse()};i.collection=new s([],{});var A=l.get("ulpID")+p+v;A=null==A?"":A,checkSumEncrypt(A);var k=localStorage.getItem("FINALCHECKSUM"),V=CryptoJS.SHA512(N+l.get("appdynamicTokenn"))+"";showSpinner(),i.collection.fetch({data:e.param({appDynamicValue:V,device_id:v,salt:p,mpin:N,ulpid:l.get("ulpID"),appchecksum:k}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(l.get("calltimeout")),success:function(t){e(".submitforgotMPINmsg").attr("disabled",!0),"0000"==ackStatus?(l.set("agreeForWatch",I),window.localStorage.setItem("mpin_reg_flag","Y"),y(t),e(".submitforgotMPINmsg").attr("disabled",!0)):(E(t),e(".submitforgotMPINmsg").removeAttr("disabled"))},error:E})}}else e(".submitforgotmsg").removeAttr("disabled"),this.$(".alert-error").fadeIn()},resultpage11:function(){e("#commonError").hide(),e("#minValidError").hide(),e("#commonMpinError").hide(),e(".submitforgotMPINmsg").attr("disabled",!0),this.model=new c({url:"json/"}),this.$(".alert").hide(),r.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){this.model.clear(),r.Validation.unbind(this);var i=(l.get("customernumber"),l.get("timeStampharse"),l.get("deccust")),n=l.get("iqamanumber"),a=l.get("accountnumber");timestamp=(new Date).getTime();var m=Encryptuser(i,timestamp),d=m,g=Encryptuser(i,timestamp),p=this,u=(e("form#sub1"),e("#newpin").val()),h=e("#conpin").val();if(u.length<5)return e("#minValidError").show(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;if(h.length<5)return e("#minValidError").show(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;if(u!=h)return e("#commonError").show(),hideSpinner(),e("#newpin").val(""),e("#conpin").val(""),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;for(var v=0,f=e("#newpin").val(),b=0;b<f.length-1;b++){var w=parseInt(f[b])+1;f[b+1]==w&&f[b]!=f[b+1]&&v++}if(4==v)return e("#commonMpinError").show(),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;for(var v=0,f=e("#newpin").val(),b=0;b<f.length-1;b++)f[b+1]==f[b]&&v++;if(4==v)return e("#commonMpinError").show(),e(".submitforgotMPINmsg").removeAttr("disabled"),!1;var I,M=l.get("shamd5flagreqcheck"),S=getDeviceId();if("E"==M){var S=getDeviceId(),P=S+u,N=CryptoJS.MD5(P);I=N+""}else{var S=getDeviceId(),P=S+u,y=CryptoJS.SHA512(P)+"";I=y}l.set("device_id",S),l.set("lang_id",e.i18n.lng());var E=l.get("atmcardmpin"),A=l.get("mpintype"),k=/iPad|iPhone|iPod/.test(navigator.userAgent),V="";if(k&&document.getElementById("agreeeForWatch")){if(e(".submitforgotMPINmsg").removeAttr("disabled"),!e("#agreeeForWatch").prop("checked"))return e("#errorWatch").show(),!1;V="Y"}else V=l.get("agreeForWatch");if("NEWMPIN"!=A){var F=function(e){p.resultpageSuccess()},C=function(e){p.errorresponse()};p.collection=new o([],{}),showSpinner(),p.collection.fetch({data:e.param({userid:d,timeenv:g,timephrase:timestamp,channelid:"MTC",atmcard:E,accountnumber:a,niniqama:n,mpin:I,confirmpassword:I,shaMpinMigFlag:"",migrAppRequiredFlag:"Y"}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(l.get("calltimeout")),success:function(t){e(".submitforgotMPINmsg").attr("disabled",!0),"0000"==ackStatus?(l.set("agreeForWatch",V),F(t),e(".submitforgotMPINmsg").attr("disabled",!0)):(C(t),e(".submitforgotMPINmsg").removeAttr("disabled"))},error:C})}else{var F=function(e){p.creatempinverificationcompiler()},C=function(e){p.errorresponse()};p.collection=new s([],{}),showSpinner(),p.collection.fetch({data:e.param({requestid:timestamp,mpin:I,shaMpinMigFlag:"",migrAppRequiredFlag:"Y",hiduserid:d,timeenv:g,timephrase:timestamp}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(l.get("calltimeout")),success:function(t){e(".submitforgotMPINmsg").attr("disabled",!0),"0000"==ackStatus?(l.set("agreeForWatch",V),window.localStorage.setItem("mpin_reg_flag","Y"),F(t),e(".submitforgotMPINmsg").attr("disabled",!0)):(C(t),e(".submitforgotMPINmsg").removeAttr("disabled"))},error:C})}}else hideSpinner()},resultpageSuccess:function(){hideSpinner(),l.set("mpincheck_local","mpinch"),l.set("mpincheck_server","mpinch"),updateMpinFlag("Y");var t=e("#newpin").val();return l.set("mpinval",t),window.localStorage.setItem("FirstTimeLoginChk","DONE"),r.history.fragment=null,r.history.navigate("#/forgotmpinSuccess",{trigger:!0,replace:!0}),this},creatempinverificationcompiler:function(t){hideSpinner(),l.set("mpincheck_local","mpinch"),l.set("mpincheck_server","mpinch"),updateMpinFlag("Y");var i=e("#newpin").val();l.set("mpinval",i),window.localStorage.setItem("FirstTimeLoginChk","DONE"),r.history.fragment=null,r.history.navigate("#/creatempinsuccess",{trigger:!0,replace:!0})},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return m});