define(["jquery","underscore","Backbone","routers/morerouter","collections/login/ChangePasswordCollections","text!views/more/changePasswordSuccess.tpl"],function(e,t,n,r,s,o){var c=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #home":"home","click #cancel":"cancel"},initialize:function(){},render:function(){var t=this,n=c.get("newpassword"),r=c.get("oldpassword"),o=function(e){t.changePasswordSuccessCompile()},a=function(e){t.errorresponse()},i=(new Date).getTime();r=EncryptWithDynamicSalt(r,i),n=EncryptWithDynamicSalt(n,i),c.set("newpassword",n);var p=getDeviceId();showSpinner(),t.collection=new s([],{}),t.collection.fetch({data:e.param({Validation:"N",salt:i,newpassword:n,oldpassword:r,access_token:c.get("access_token"),deviceId:p}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(e){c.get("errordesc"),c.get("errorcode");"0000"==ackStatus?o(e):(hideSpinner(),a(e))},error:a})},MD5ChangePass:function(){c.set("currentPage","transferConfirm");var t=this,n=c.get("oldpassword"),r=c.get("newpassword"),o=c.get("custno"),a=function(e){t.changePasswordSuccessCompile()},i=function(e){t.errorresponse()};showSpinner(),t.collection=new s;var p=o,u=p+n,l=CryptoJS.MD5(u),d=l+"",h=o,g=h+r,m=CryptoJS.MD5(g),w=m+"";timestamp=(new Date).getTime(),t.collection.fetch({data:e.param({requestid:timestamp,oldpassword:d,newpassword:w,customerno:o,channelid:"MTC"}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?a(e):i(e)}})},Sha512ChangePass:function(){c.set("currentPage","transferConfirm");var t=this,n=c.get("oldpassword"),r=c.get("newpassword"),o=(c.get("custno"),function(e){t.changePasswordSuccessCompile()}),a=function(e){t.errorresponse()};showSpinner(),t.collection=new s;var i,p,u,l="",d=c.get("deccust"),h=d+n;i=c.get("shaMigrateFlag"),p="N"==i||""==i||null==i||void 0==i?CryptoJS.MD5(h)+"":CryptoJS.SHA512(h)+"";var g=d+r,m=CryptoJS.SHA512(g)+"";u=m,timestamp=(new Date).getTime();var w=c.get("custnoenc"),S=c.get("timeStampharse"),f=DEcryptuser(w,S),y=getDeviceId(),v=w+""+y,C=CryptoJS.MD5(v);v=C+"";var P=f,D=Encryptuser(f,timestamp),T=D,M=Encryptuser(P,timestamp);t.collection.fetch({data:e.param({requestid:timestamp,shaMigFlag:c.get("shaMigrateFlag"),migrAppRequiredFlag:"Y",oldpassword:p,newpassword:u,customerno:l,custno:T,timeenv:M,channelid:"MTC"}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?o(e):a(e)}})},cancel:function(){hideSpinner(),n.history.navigate("#/preference")},changePasswordSuccessCompile:function(){return hideSpinner(),this.$("#mobcontent").html(t.template(o)).i18n(),this},home:function(){hideSpinner(),c.set("currentPage",""),n.history.navigate("#/wealth")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});