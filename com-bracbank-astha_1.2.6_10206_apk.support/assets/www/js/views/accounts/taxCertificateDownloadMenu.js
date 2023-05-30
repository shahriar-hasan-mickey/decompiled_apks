define(["jquery","underscore","Backbone","text!views/accounts/taxCertificateDownloadMenu.tpl"],function(e,t,i,n){var c=new EncryptedLocalStorage("secret"),a=i.View.extend({el:"#container",events:{"click .taxCertificate":"gotoTaxCertificateDownload"},initialize:function(){},update:function(){this.$el.html(t.template(n))},gotoTaxCertificateDownload:function(t){t.stopImmediatePropagation();var i,n=e(t.currentTarget).attr("id");"Account Balance"==n?i="CASA_TAX_CERT":"FDR"==n?i="FDR_TAX_CERT":"DPS"==n?i="DPS_TAX_CERT":"SanchayPatra"==n?i="DPS_TAX_CERT":"Loan"==n&&(i="LOAN_TAX_CERT"),c.set("certificateTypes",n),c.set("certificateTypesRequest",i);var a="",r=c.get("app.context.path");a=r+"account/downloadStatementCertificate";var o="access_token="+c.get("access_token")+"&certificate_type="+c.get("certificateTypes")+"&certificate_type_request="+c.get("certificateTypesRequest"),s=encodeURI(o);taxCertificateFileDownLoadAndViewer(a,s,1,c.get("access_token"))},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});