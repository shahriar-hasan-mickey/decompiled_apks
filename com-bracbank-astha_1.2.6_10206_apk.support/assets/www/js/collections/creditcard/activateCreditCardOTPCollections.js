define(["underscore","Backbone","models/creditcard/activateCreditCardOTPModel"],function(e,t,a){var n=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:a,initialize:function(e,t){},url:function(){var e="",t=n.get("app.respone.mode"),a=n.get("app.context.path"),o=n.get("app.static.context.path"),r=n.get("app.local.context.path");return"server-dynamic-response"==t?e=a+"payment/otpvalidation":"server-static-response"==t?e=o+"accountSummary.json":"local-static-response"==t&&(e=r+"accountSummary.json"),e}});return o});