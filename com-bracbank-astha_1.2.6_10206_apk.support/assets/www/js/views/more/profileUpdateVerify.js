define(["jquery","underscore","Backbone","routers/morerouter","collections/common/otpGenerateCollections","text!views/more/profileUpdateVerify.tpl","collections/common/otpValidateCollections","models/validation/softOTPValidationModel"],function(e,t,i,n,o,r,s,a){var c=new EncryptedLocalStorage("secret"),l=i.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobmenu",events:{"click #confirm":"confirm","click #cancel":"cancel"},initialize:function(){},render:function(){showSpinner(),this.listcompile()},listcompile:function(){hideSpinner();var e=c.get("profileupdateverifylist");firstName=e[0],mobile=e[1],poboxnumber=e[2],postalnumber=e[3],town=e[4],homephone=e[5],offphone=e[6],emailid=e[7],buildingnumber=e[8],street=e[9],district=e[10],unitnumber=e[11],city=e[12],postalcode=e[13],additionalnumber=e[14],this.$("#mobcontent").html(t.template(r,{firstName:firstName,mobile:mobile,poboxnumber:poboxnumber,postalnumber:postalnumber,town:town,homephone:homephone,offphone:offphone,emailid:emailid,buildingnumber:buildingnumber,street:street,district:district,unitnumber:unitnumber,city:city,postalcode:postalcode,additionalnumber:additionalnumber})).i18n()},confirm:function(){i.history.navigate("#/profileUpdationOTP")},confirm1:function(){this.model=new a({url:"json/"}),this.$(".alert").hide(),i.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){this.model.clear(),i.Validation.unbind(this);e("#softotp").val();showSpinner();var n=this,o=function(e){n.reviewSuccess()},r=function(e){n.errorresponse()};n.collection=new s([],{});var l=(new Date).getTime(),u="SMS",d="0",p=e("#softotp").val(),m=c.get("custno");n.collection.fetch({data:e.param({opttype:u,refno:d,activationno:p,customerno:m,requestid:l}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(c.get("calltimeout")),success:function(e){if("0000"==ackStatus)o(e);else{c.get("errordesc");hideSpinner()}},error:r})}else this.$(".alert-error").fadeIn(),hideSpinner()},confirm2:function(){this.model=new a({url:"json/"}),i.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){showSpinner(),this.model.clear(),i.Validation.unbind(this);var n=this,o=function(e){n.SuccessPage()},r=function(e){n.errorresponse()};n.collection=new s([],{});var l=(new Date).getTime(),u="SMS",d="0",p=c.get("custno");n.collection.fetch({data:e.param({opttype:u,refno:d,activationno:"Y",customerno:p,requestid:l}),dataType:"json",type:"POST",timeout:parseInt(c.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?o(e):r(e)},error:r})}else this.$(".alert-error").fadeIn()},reviewSuccess:function(){hideSpinner(),i.history.navigate("#/profileupdatesuccess")},errorresponse:function(){hideSpinner(),openErrorPopup()},cancel:function(){hideSpinner(),i.history.navigate("#/profileupdate")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});