define(["underscore","Backbone","models/creditcard/cashOnDemandCreditCardOtpModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=a.get("app.respone.mode"),n=a.get("app.context.path"),o=a.get("app.static.context.path"),r=a.get("app.local.context.path");return t="local-static-response","server-dynamic-response"==t?e=n+"transferHomeSummary.json":"server-static-response"==t?e=o+"accountSummary.json":"local-static-response"==t&&(e=r+"accountSummary.json"),e}});return o});