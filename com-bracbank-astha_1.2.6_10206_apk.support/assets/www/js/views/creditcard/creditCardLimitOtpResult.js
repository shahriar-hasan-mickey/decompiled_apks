define(["jquery","underscore","Backbone","collections/creditcard/creditCardLimitOtpResultCollections","text!views/creditcard/creditCardLimitOtpResult.tpl"],function(e,t,i,n,r){var c=new EncryptedLocalStorage("secret"),s=i.View.extend({el:"#mobcontent",events:{},initialize:function(){this.on("error",function(e,t){alert(t)})},update:function(){var t=c.get("custno"),i=c.get("acceptcampaign"),r=c.get("promoid"),s=this,a=c.get("newlimnam"),o=c.get("frmnam"),l=c.get("inclimnam"),m=c.get("curlimnam"),u=c.get("resonnam"),g=c.get("selectlim"),d=c.get("inclimit"),p=c.get("limit"),w=c.get("newlimit"),f=c.get("reason"),h=(c.get("ccode"),new Array);h[0]=o,h[1]=l,h[2]=m,h[3]=a,h[4]=u,"Y"==i&&(h[5]="Origin");var v=JSON.stringify(h),y=new Array;y[0]=g,y[1]=d,y[2]=p,y[3]=w,y[4]=f,"Y"==i&&(y[5]="Crossselling");var S=JSON.stringify(y),C=function(e){s.resultPageSuccess()},V=function(e){s.errorresponse()};s.collection=new n([],{}),timestamp=(new Date).getTime();var L="IncreaseCreditCardLimit",O="003",I=getDeviceId(),b=L+""+O+I,k=CryptoJS.MD5(b);b=k+"",showSpinner(),s.collection.fetch({data:e.param({appchecksum:b,servicerequestname:"IncreaseCreditCardLimit",customernumber:t,servicerequesttype:"003",actionFlag:i,campainId:r,name:v,value:S}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(c.get("calltimeout")),success:function(e){"0000"==ackStatus?C(e):V(e)},error:V})},resultPageSuccess:function(){c.set("cidforcclim",""),c.set("acceptcampaign",""),hideSpinner();var i=c.get("selectlim"),n=(c.get("inclimit"),c.get("limit")),s=c.get("newlimit"),a=(c.get("reason"),c.get("ccode"));e(this.el).html(t.template(r,{frmcc:i,limits:n,newLimit:s,ccode:a})).i18n()},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return s});