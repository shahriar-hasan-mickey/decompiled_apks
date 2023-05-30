define(["jquery","underscore","Backbone","collections/creditcard/creditCardSummaryCollections","collections/creditcard/outstandAuthCreditCardCollections","routers/creditcardrouter","routers/requestrouter","text!views/creditcard/outstandAuthCreditCard.tpl","views/errors/exception"],function(e,t,n,c,o,r,i,a,d){var s=new EncryptedLocalStorage("secret"),l=n.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"change #fromactno":"details","change #cardtype":"details","click #pdfdownload":"PDFDownload","click #xlsdownload":"XLSdownload"},initialize:function(){new i},update:function(){s.set("currentPage","");var t=this,n=function(e){t.details()},o=function(e){t.errorresponse()};t.collection=new c([],{}),showSpinner(),t.collection.fetch({data:e.param({status:"",requestid:timestamp}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(s.get("calltimeout")),success:function(e){var c=s.get("errorcode");"0000"==ackStatus?"0000"==c?n(e):t.listcompile():null!=c&&"MTC-RT-0003"!=c?n(e):o(e)},error:o})},details:function(){hideSpinner();var t=this;e("#minstmtshow").hide();var n=function(e){t.listcompile()},c=function(e){t.errorresponse()};t.collection=new o([],{});var r=e("input[name=fromactno]:checked").val(),i=s.get("cccardacctno"),a=s.get("acctno");"undefined"==typeof r&&("undefined"!=typeof shortName,r=i,ccMask=a),s.set("selectedAcct",r);var d=s.get("custno");timestamp=(new Date).getTime();var l=getDeviceId(),u=r+""+l,p=CryptoJS.MD5(u);u=p+"",showSpinner(),t.collection.fetch({data:e.param({appchecksum:u,ccMaskedno:r,sortBy:"",creditcardno:r,customerno:d,requestid:timestamp}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(s.get("calltimeout")),success:function(e){var t=s.get("errorcode");"0000"==ackStatus?n(e):null!=t&&"MTC-RT-0003"!=t?n(e):c(e)},error:c})},listcompile:function(){hideSpinner(),this.$("#mobcontent").html(t.template(a)),e(".amtformatter").formatamount()},PDFDownload:function(e){var t="",n=s.get("app.context.path");t=n+"creditcard/ministatement/download.pdf";var c=s.get("appSessionId"),o=s.get("device_id"),r=s.get("lang_id"),i=s.get("cccardacctno"),a=getDeviceId(),d=i+""+a,l=CryptoJS.MD5(d);d=l+"";var u="device_id="+o+"&appchecksum="+d+"&lang_id="+r+"&accountNumber="+i+"&download=PDF&cardoract=CARD",p=encodeURI(u);fileDownLoadAndViewer(t,p,1,c)},XLSdownload:function(e){var t="",n=s.get("app.context.path");t=n+"creditcard/ministatement/download.xls";var c=s.get("appSessionId"),o=s.get("device_id"),r=s.get("lang_id"),i=s.get("cccardacctno"),a=getDeviceId(),d=i+""+a,l=CryptoJS.MD5(d);d=l+"";var u="device_id="+o+"&appchecksum="+d+"&lang_id="+r+"&accountNumber="+i+"&download=XLS&cardoract=CARD",p=encodeURI(u);fileDownLoadAndViewer(t,p,2,c)},errorresponse:function(){hideSpinner(),n.history.navigate("#/exception")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});