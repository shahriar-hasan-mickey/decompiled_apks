define(["underscore","Backbone","models/transfer/registerDeviceIDTPModel"],function(e,t,n){var r=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=r.get("app.respone.mode"),n=r.get("app.context.path"),o=r.get("app.static.context.path"),i=r.get("app.local.context.path");$("form").serialize();return"server-dynamic-response"==t?e=n+"idtp/registerIDTPDevice":"server-static-response"==t?e=o+"addbeneficiaryPosting.json":"local-static-response"==t&&(e=i+"addbeneficiaryPosting.json"),e}});return o});