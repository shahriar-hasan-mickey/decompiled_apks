define(["underscore","Backbone","models/creditcard/eppmerchantplancodeModel"],function(e,t,n){var c=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=c.get("app.respone.mode"),n=c.get("app.context.path"),a=c.get("app.static.context.path"),o=c.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"creditcard/eppmerchantplancode":"server-static-response"==t?e=a+"accountSummary.json":"local-static-response"==t&&(e=o+"eppmerchantplancode.json"),e}});return a});