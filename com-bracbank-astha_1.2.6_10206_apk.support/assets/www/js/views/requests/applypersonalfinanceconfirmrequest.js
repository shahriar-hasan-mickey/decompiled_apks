define(["jquery","underscore","Backbone","collections/creditcard/creditCardLimitOtpResultCollections","text!views/requests/applypersonalfinanceconfirmrequest.tpl","text!views/requests/applypersonalfinancerequestresult.tpl","views/requests/applypersonalfinancerequestresult"],function(e,t,n,i,r,a,s){var o=new EncryptedLocalStorage("secret"),p=n.View.extend({el:"#mobcontent",events:{"click #applypersonalfinancerequestposting":"applypersonalfinancerequestposting"},initialize:function(){},render:function(){showSpinner(),this.requestcompile()},requestcompile:function(){return hideSpinner(),e(this.el).html(t.template(r,{fintype:fintype,applyfor:applyfor,ename:ename,mobno:mobno,dob:dob,city:city,employername:employername,length:length,sal:sal,amt:amt})).i18n(),this.$el.trigger("create"),this},applypersonalfinancerequestposting:function(){var t=o.get("custno"),n=o.get("acceptcampaign"),r=o.get("promoid"),a=new Array;a[0]=e("#fintype").val(),a[1]=e("#applyfor").val(),a[2]=e("#name").val(),a[3]=e("#mobno").val(),a[4]=e("#dob").val(),a[5]=e("#city").val(),a[6]=e("#employername").val(),a[7]=e("#lengthofservice").val(),a[8]=e("#grosssalary").val(),a[9]=e("#reqamt").val(),"Y"==n&&(a[10]="Origin");var s=JSON.stringify(a),p=new Array;p[0]=o.get("pffintype"),p[1]=o.get("pfapplyfor"),p[2]=o.get("pfename"),p[3]=o.get("pfmobno"),p[4]=o.get("pfdob"),p[5]=o.get("pfcity"),p[6]=o.get("pfemployername"),p[7]=o.get("pflength"),p[8]=o.get("pfsal"),p[9]=o.get("pfamt"),"Y"==n&&(p[10]="Crossselling");var l=JSON.stringify(p),c=o.get("applyforcode"),u="",m="";"TOPUP"==c?(m="RequestATopup",u="008"):(m="RequestALoan",u="007");var f=getDeviceId(),g=m+""+u+f,d=CryptoJS.MD5(g);g=d+"";var y=this;showSpinner();var h=function(e){y.postingcompile()},v=function(e){y.errorresponse()};y.collection=new i([],{id:t});e("form").serialize();y.collection.fetch({data:e.param({appchecksum:g,requestid:timestamp,servicerequestname:m,customernumber:t,servicerequesttype:u,actionFlag:n,campainId:r,name:s,value:l}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(o.get("calltimeout")),success:function(e){"0000"==ackStatus?h(e):v(e)},error:v})},postingcompile:function(){o.set("cidforpf",""),o.set("acceptcampaign",""),this.undelegateEvents(),hideSpinner();var e=t.template(a,{collection:this.collection.models});return this.$el.html(e).trigger("create"),this.$el.unbind(),this.$el.removeData().unbind(),this.unbind(),this.undelegateEvents(),this},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return p});