define(["underscore","Backbone","models/wealth/kycInputModel"],function(e,t,n){var o=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=o.get("app.respone.mode"),n=o.get("app.context.path"),a=o.get("app.static.context.path"),r=o.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"home/KYCCustomerInquiry":"server-static-response"==t?e=a+"accountSummary.json":"local-static-response"==t&&(e=r+"accountSummary.json"),e}});return a});