define(["underscore","Backbone","models/transfer/billPaymentPostingModel"],function(e,t,n){var o=new EncryptedLocalStorage("secret"),r=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=o.get("app.respone.mode"),n=o.get("app.context.path"),r=o.get("app.static.context.path"),a=o.get("app.local.context.path");$("form").serialize();return"server-dynamic-response"==t?e=n+"billpay/processbillpayment":"server-static-response"==t?e=r+"paymentPosting.json":"local-static-response"==t&&(e=a+"transferPosting.json"),e}});return r});