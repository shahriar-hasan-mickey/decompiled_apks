define(["jquery","underscore","Backbone","collections/requests/DebitCardLimitControlModifyRequestCollections","text!views/requests/debitcardlimitcontrolrequestresult.tpl"],function(e,t,i,r,n){var o=new EncryptedLocalStorage("secret"),c=i.View.extend({el:"#mobcontent",events:{"click #postingrequest":"doanotherrequest"},initialize:function(){},render:function(){o.set("promoid",""),hideSpinner(),o.set("currentPage","transferConfirm");var t=this;timestamp=(new Date).getTime();var i=function(e){t.modifiedlimitcompile()},n=function(e){t.errorresponse()};t.collection=new r([],{});var c=(o.get("custno"),o.get("newposlimit"));showSpinner(),timestamp=(new Date).getTime();var s=o.get("accnumval"),a=o.get("formatedexpirydate"),u=o.get("cardSeqnbr"),c=o.get("newposlimit"),d=o.get("currentlimit"),m=o.get("maskActno"),l=getDeviceId(),p=s+""+d+c+l,f=CryptoJS.MD5(p);p=f+"",t.collection.fetch({data:e.param({appchecksum:p,hidcurrentlimit:d,debitCardMaskedNumber:m,debitCardNumber:s,expdate:a,cardseq:u,hidnewlimit:c,requestid:timestamp}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(o.get("calltimeout")),success:function(e){"0000"==ackStatus?i(e):n(e)},error:n})},modifiedlimitcompile:function(){return hideSpinner(),this.$el.html(t.template(n)).i18n(),this},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},doanotherrequest:function(t){t.preventDefault(),e("#servicerequestMnu").trigger("click")}});return c});