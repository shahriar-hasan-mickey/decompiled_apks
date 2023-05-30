define(["jquery","underscore","Backbone","collections/creditcard/manageBeneficiaryCreditCardCollections","collections/creditcard/manageBeneAddOtpResultCollections","collections/creditcard/manageBeneEditCollections","routers/creditcardrouter","text!views/creditcard/manageBeneActivation.tpl","text!views/creditcard/manageBeneficiaryCreditCard.tpl"],function(e,t,n,a,i,r,c,s,o){var d=new EncryptedLocalStorage("secret"),l=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #dele":"deletemanage","click #indele":"deletemanage"},initialize:function(){},update:function(){d.set("currentPage","transferConfirm");var t=this;showSpinner();var n=function(e){t.listcompile()},i=function(e){t.errorresponse()};t.collection=new a([],{});var r="ALL",c="06",s="4",o="",l=d.get("lang_id");"en-US"==l?o="EN":"en-AR"==l&&(o="AR"),timestamp=(new Date).getTime(),t.collection.fetch({data:e.param({serviceid:c,beneficiarystatus:r,beneficiarytype:s,language:o,requestid:timestamp}),dataType:"json",timeout:parseInt(d.get("calltimeout")),type:"POST",cache:!1,success:function(e){var t=d.get("errorcode");"0000"==ackStatus?(n(e),hideSpinner()):null!=t&&"MTC-RT-0003"!=t?n(e):i(e)},error:i})},SuccessPage:function(){showSpinner();var t=this,n=function(e){t.resultPageSuccess()},a=function(e){t.errorresponse()};t.collection=new r([],{}),timestamp=(new Date).getTime();var i,c,s,o,l,m,u,b,p,g,v,h,y,f,N,k,S,w,A,C,B,T,E,P,V,I,R,x,D,j,q,L,M,O,$,_,U,z,F,Y,G=(e("#currcodeval").val(),e("#b_shortName").val()),H=d.get("custno"),J="",K=d.get("lang_id");"en-US"==K?J="EN":"en-AR"==K&&(J="AR"),i=e("#name").text(),c="",s="",o="",l="",m="",u="",b="",p="",g="",v="",h="",y="",f="",N="",k="",S="",w="",A=d.get("CCEditBeneCode"),C="INACTIVE",B=H,T=e("#accountNumber").val(),E=e("#accountNumber").val();var Q=Encrypt(E);P="",V="02",I="",R="4",x="",D="",j="",q="",L="",M="",O="",$="",_="",U="",z="",F="",Y="";var W="",X="",Z="",ee=d.get("usermobile");d.get("benename");showSpinner(),t.collection.fetch({data:e.param({ivrflag:"Y",ReportFlag:"A",shortName:G,firstName:c,lastName:s,middleName:o,description:l,buildingNumber:m,streetAddress1:u,streetAddress2:b,streetAddress3:p,streetAddress4:g,primaryPhoneNumber:v,secondaryPhoneNumber:h,primaryMobileNumber:y,secondaryMobileNumber:f,cityId:N,primaryEmailAddress:k,secondaryEmailAddress:S,beneficiaryId:w,beneTypeCode:A,beneStatus:C,customerNumber:B,benAcctno:T,creditCardNumber:Q,ninikama:P,service:V,serviceType:I,benType:R,benIbanNumber:x,benBankName:D,sarieParticipateBankCode:j,benBankAdd1:q,benBankAdd2:L,benBankAdd3:M,benNationality:O,benBankCountry:$,benBankBic:_,benCity:U,currency:z,benName:F,customerIdType:Y,actvcode:W,actvcodecreated:X,actvcodeexpiry:Z,mobilenumber1:ee,language:J,bennickname:bennickname,benname:c,requestid:timestamp}),dataType:"json",type:"POST",timeout:parseInt(d.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus&&"0"==ivrcallinitiationstatus?n(e):"0000"==ackStatus&&"1"==ivrcallinitiationstatus?n(e):"0000"==ackStatus&&""==ivrcallinitiationstatus?n(e):"0000"==ackStatus?n(e):a(e)},error:a})},resultPageSuccess:function(){return this.$("#mobcontent").html(t.template(s,{})),this.$("#mobcontent").trigger("create"),hideSpinner(),this},listcompile:function(){hideSpinner(),this.$("#mobcontent").html(t.template(o))},deletemanage:function(t){t.preventDefault(),d.set("ccmbdacno",""),d.set("ccmbdname",""),d.set("ccmbdbenecode",""),d.set("ccmbdnomask","");var a=e("#creditcardmasked").val(),i=e("#benecode").val(),r=e("#shortName").val(),c=e("#accountNumber").val();d.set("ccmbdacno",c),d.set("ccmbdname",r),d.set("ccmbdbenecode",i),d.set("ccmbdnomask",a),n.history.navigate("#/manageBeneDelete")},errorresponse:function(){n.history.navigate("#/exception"),hideSpinner()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});