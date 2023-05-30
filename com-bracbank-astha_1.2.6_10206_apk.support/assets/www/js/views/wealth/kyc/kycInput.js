define(["jquery","underscore","Backbone","backbonevalidation","models/wealth/kycInputValidationModel","collections/wealth/kycInputCollections","collections/wealth/kycUpdateExpDateCollections","text!views/wealth/kyc/kycInput.tpl"],function(e,t,i,n,a,r,o,s){var l=new EncryptedLocalStorage("secret"),c=i.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click  #kycverifysubmit":"gotokycverifysubmit"},initialize:function(){},render:function(){hideSpinner(),this.$("#mobcontent").html(t.template(s)).i18n(),l.set("landingKYC","");var i=e("#DD option:selected").val(),n=e("#MM option:selected").val(),a=e("#YYYY option:selected").val(),r=("0"+i).slice(-2),o=("0"+n).slice(-2),c=r+"-"+o+"-"+a;l.set("dobsel",c);var d=l.get("birthdateyear"),u=l.get("birthdatemonth"),p=l.get("birthdateday"),g=l.get("birthdatehijira"),h=g.substring(0,4),v=g.substring(5,7),b=g.substring(8,10),m=l.get("iqnumid"),f=l.get("device.platform");"Android"==f?1==m?(v=Number(v),b=Number(b),e("#YYYY").find("option[value="+h+"]").attr("selected",!0),e("#MM").find("option[value="+v+"]").attr("selected",!0),e("#DD").find("option[value="+b+"]").attr("selected",!0)):(u=Number(u),p=Number(p),e("#YYYY").find("option[value="+d+"]").attr("selected",!0),e("#MM").find("option[value="+u+"]").attr("selected",!0),e("#DD").find("option[value="+p+"]").attr("selected",!0)):1==m?(v=Number(v),b=Number(b),e("#YYYY").val(h),e("#MM").val(v),e("#DD").val(b)):(u=Number(u),p=Number(p),e("#YYYY").val(d),e("#MM").val(u),e("#DD").val(p))},applytermsandconurl:function(){l.get("lang_id")},gotokycverifysubmit:function(t){e("#errortermscond").hide(),this.model=new a({url:"json/"}),i.Validation.bind(this);var n=this.$("form").serializeObject();if(this.model.set(n,{validate:!0})){if(this.model.clear(),i.Validation.unbind(this),t.preventDefault(),!e("#iagreee").prop("checked"))return watchTCvalue="N",e("#errortermscond").show(),!1;showSpinner();var r=this,s=function(e){r.kycverifysubmitcompile()},c=function(e){r.errorresponse()};r.collection=new o([],{});var d=(new Date).getTime();"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR");var u=l.get("custno"),p=l.get("iqama_number"),g=(l.get("iqama_id"),e("#DD option:selected").val()),h=e("#MM option:selected").val(),v=e("#YYYY option:selected").val(),b=("0"+g).slice(-2),m=("0"+h).slice(-2),f=b+"/"+m+"/"+v,y=b+"-"+m+"-"+v;l.set("dobbirth",y);var Y=m+"-"+v;l.set("dobbirthmon",Y);var w=v+"-"+m+"-"+b,k=m+"-"+v;l.set("dob",f),l.set("dobrep",w),l.set("YYYYnat",v),l.set("dobiqa",k);var D,D,w,M=(l.get("iqama_id"),l.get("iqnumid")),N=l.get("idexpdatekycc"),S=l.get("birthdatechanges"),V=l.get("dateChangedd"),q=l.get("dobsel"),x=l.get("dob");D=q==x?2==M?l.get("birthmonthyear"):l.get("dateChanged"):2==M?Y:y,w=q==x?2==M?S:V:f;var C=l.get("idexpdatekycc"),I=C.substring(0,4),j=C.substring(4,6),E=C.substring(6,8);C=E+"/"+j+"/"+I,showSpinner(),r.collection.fetch({data:e.param({iqamaNumber:p,id:M,dateOfBirth:D,username:"",expDate:N,custId:u,oldexpDate:C,dobReport:w,requestid:d}),dataType:"json",type:"POST",timeout:parseInt(l.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?s(e):c(e)},error:c})}else this.$(".alert-error").fadeIn(),t.preventDefault(),hideSpinner()},kycverifysubmitcompile:function(){hideSpinner();l.get("renewalFlag"),l.get("legalStaus");i.history.navigate("#/kycverify")},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});