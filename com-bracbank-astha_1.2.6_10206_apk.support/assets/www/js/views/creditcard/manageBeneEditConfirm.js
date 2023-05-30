define(["jquery","underscore","Backbone","collections/creditcard/manageBeneEditCollections","routers/creditcardrouter","text!views/creditcard/manageBeneEdit.tpl","text!views/creditcard/manageBeneEditConfirm.tpl","text!views/creditcard/manageBeneEditResult.tpl","models/validation/activateCreditCardValidationModel"],function(e,t,n,i,a,r,c,s,o){var d=new EncryptedLocalStorage("secret"),m=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #submitOTP":"showOTP"},initialize:function(){},update:function(e,t,n){var i=this;showSpinner();var a=d.get("managebeneCCEditCardNo");i.listcompile(t,e,a,n)},listcompile:function(e,n,i,a){hideSpinner();var i=d.get("managebeneCCEditCardNo");this.$("#mobcontent").html(t.template(c,{cardno:e,name:n,no:i,benecode:a})).i18n()},showOTP:function(){var t=this,n=function(e){t.successPage()},a=function(e){t.errorresponse()};t.collection=new i([],{}),timestamp=(new Date).getTime();var r,c,s,o,m,u,l,b,p,g,h,v,N,y,f,w,C,k,E,B,S,A,T,V,P,x,I,O,R,M,j,q,$,z,D,F,L,U,Y,_,G=d.get("custno"),H="",J=d.get("lang_id");"en-US"==J?H="EN":"en-AR"==J&&(H="AR"),r=e("#name").text(),c="",s="",o="",m="",u="",l="",b="",p="",g="",h="",v="",N="",y="",f="",w="",C="",k="",E=d.get("CCEditBeneCode"),B="INACTIVE",S=G,A=d.get("clracctNumber"),T=d.get("clearccNo");var K=T;V="",P="02",x="",I="4",O="",R="",M="",j="",q="",$="",z="",D="",F="",L="",U="",Y=d.get("firstNamefirstName"),_="";var Q="",W="",X="",Z=d.get("usermobile"),ee=(d.get("nickname"),d.get("firstNamefirstName"));showSpinner(),t.collection.fetch({data:e.param({ivrflag:"Y",ReportFlag:"E",shortName:r,firstName:ee,lastName:s,middleName:o,description:m,buildingNumber:u,streetAddress1:l,streetAddress2:b,streetAddress3:p,streetAddress4:g,primaryPhoneNumber:h,secondaryPhoneNumber:v,primaryMobileNumber:N,secondaryMobileNumber:y,cityId:f,primaryEmailAddress:w,secondaryEmailAddress:C,beneficiaryId:k,beneTypeCode:E,beneStatus:B,customerNumber:S,benAcctno:A,creditCardNumber:K,ninikama:V,service:P,serviceType:x,benType:I,benIbanNumber:O,benBankName:R,sarieParticipateBankCode:M,benBankAdd1:j,benBankAdd2:q,benBankAdd3:$,benNationality:z,benBankCountry:D,benBankBic:F,benCity:L,currency:U,benName:Y,customerIdType:_,actvcode:Q,actvcodecreated:W,actvcodeexpiry:X,mobilenumber1:Z,language:H,bennickname:ee,benname:ee,requestid:timestamp}),dataType:"json",type:"POST",timeout:parseInt(d.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus&&"0"==ivrcallinitiationstatus?n(e):"0000"==ackStatus&&"1"==ivrcallinitiationstatus?n(e):"0000"==ackStatus&&""==ivrcallinitiationstatus?n(e):"0000"==ackStatus?n(e):(a(e),d.set("nickname",""))},error:a});hideSpinner()},successPage:function(){hideSpinner(),this.$("#mobcontent").html(t.template(s)).i18n()},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return m});