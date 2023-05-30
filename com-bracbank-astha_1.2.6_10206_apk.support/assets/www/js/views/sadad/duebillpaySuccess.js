define(["jquery","underscore","Backbone","collections/sadad/duebillPaySuccessCollections","collections/common/emailAdviceCollections","text!views/sadad/duebillpaySuccess.tpl","text!views/sadad/duebillpayConfirm.tpl","text!views/common/emailAdviceSuccessPage.tpl","models/validation/sadad/sadadValidationModel","libs/security/crypto-js/md5"],function(e,t,i,n,c,a,r,o,s,d){var l=new EncryptedLocalStorage("secret"),u=i.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #pay":"pay","click #emailadvice":"EmailAdvice"},initialize:function(){},update:function(){showSpinner();var i=this,c=function(e){i.successPage()},a=function(e){i.errorresponse()};i.collection=new n([],{}),timestamp=(new Date).getTime();var r=new Array,o=new Array,s=new Array,d=new Array,u=new Array,p=new Array,m=l.get("duebillpaymode"),g=new Array;new Array;g=l.get("BillerLists");var y=0;t.each(g,function(e){null!=g[y]&&(r[y]=e[4],o[y]=e[9],s[y]=e[8],d[y]=e[5],u[y]=e[11],p[y]=e[10],y++)});var f,v,h,w,b=JSON.stringify(r),S=JSON.stringify(o),A=JSON.stringify(s),C=JSON.stringify(d),N=JSON.stringify(u),O=JSON.stringify(p),T=(b.replace(/"/g,""),S.replace(/"/g,"")),D=A.replace(/"/g,""),d=C.replace(/"/g,""),E=N.replace(/"/g,""),V=O.replace(/"/g,"");"ACCOUNT"==m?(f="ACTDEB",v=l.get("FrmAcctNoMode")):(f="CCARD",h=l.get("FrmCardNoMode"),w=l.get("CCardActNo"));var k=l.get("custno"),J="KWD",M="",P="",B=l.get("transfees"),I=l.get("otpModule");l.set("otpModule",""),("undefined"==v||void 0==v)&&(v=""),("undefined"==h||void 0==h)&&(h=""),("undefined"==w||void 0==w)&&(w="");var q=getDeviceId(),x=m+""+v+h+w+f+E+V+d+D+B+q,F=CryptoJS.MD5(x);x=F+"";var U=l.get("id_type"),j=l.get("iqama_number"),r=l.get("BillerName"),L=l.get("BillerType");i.collection.fetch({data:e.param({appchecksum:x,custno:k,billername:r,billertype:L,fromcurrname:J,paymentmode:m,processdate:M,paymethod:f,hidduedate:E,hidbillercode:V,hidbillername:d,currentdate:P,hidpayamount:D,transfee:B,hidservicetype:T,custaccountno:v,creditcardnumber:h,creditcardacctnumber:w,requestid:timestamp,isOtpUsed:l.get("isOtpUsed"),owneridno:j,hididtypecode:U,billingaccno:d,pmttype:"POST",paymode:"DUEBILLS",opttype:I}),dataType:"json",type:"POST",timeout:parseInt(l.get("sadadcalltimeout")),cache:!1,success:function(e){if("0000"==ackStatus){c(e);var t=l.get("duebillnotify"),i=parseInt(t);if(i>0){i-=1;var t=i.toString();l.set("duebillnotify",t)}}else a(e)},error:a})},successPage:function(){hideSpinner();var e=l.get("duebilltotamt"),i=l.get("duebillfromacc");this.$("#mobcontent").html(t.template(a,{amt:e,acno:i})).i18n()},EmailAdvice:function(){l.set("currentPage",""),showSpinner();var t=this,i=function(e){t.emailadvicecompile()},n=function(e){t.errorresponse()};t.collection=new c([],{});var a=(new Date).getTime(),r=e("#ftrefno").val(),o="TRANSFER",s=l.get("duebillpaymode");"ACCOUNT"==s?custaccountno=l.get("FrmAcctNoMode"):custaccountno=l.get("CCardActNo");var d=l.get("emailid"),u=(l.get("loginid"),l.get("custno")),p=(l.get("lang_id"),getDeviceId()),m=custaccountno+""+p,g=CryptoJS.MD5(m);m=g+"",t.collection.fetch({data:e.param({appchecksum:m,accountNumber:custaccountno,ftrefno:r,custmailid:d,transfertype:o,custuserid:u,requestid:a}),dataType:"json",type:"POST",timeout:parseInt(l.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?i(e):n(e)},error:n})},emailadvicecompile:function(){return l.set("backReqFromEmail","6"),this.$("#mobcontent").html(t.template(o)).i18n(),this.$("#mobcontent").trigger("create"),hideSpinner(),this},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return u});