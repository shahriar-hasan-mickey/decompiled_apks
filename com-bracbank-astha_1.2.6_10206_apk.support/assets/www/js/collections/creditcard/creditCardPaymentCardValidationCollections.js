define(["underscore","Backbone","models/creditcard/creditCardPaymentCardValidateModel"],function(e,t,r){var a=new EncryptedLocalStorage("secret"),n=t.Collection.extend({model:r,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=a.get("app.respone.mode"),r=a.get("app.context.path"),n=a.get("app.static.context.path"),c=a.get("app.local.context.path");return"server-dynamic-response"==t?e=r+"payment/creditcardpayment":"server-static-response"==t?e=n+"charitytransfer.json":"local-static-response"==t&&(e=c+"charitytransfer.json"),e}});return n});