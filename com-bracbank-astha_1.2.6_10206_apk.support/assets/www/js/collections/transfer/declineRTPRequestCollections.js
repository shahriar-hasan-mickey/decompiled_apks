define(["underscore","Backbone","models/transfer/declineRTPRequestModel"],function(e,n,t){var o=new EncryptedLocalStorage("secret"),r=n.Collection.extend({model:t,initialize:function(e,n){},url:function(){var e="",n=o.get("app.respone.mode"),t=o.get("app.context.path"),r=o.get("app.static.context.path"),a=o.get("app.local.context.path");$("form").serialize();return"server-dynamic-response"==n?e=t+"idtp/sendRTPDeclinedResponse":"server-static-response"==n?e=r+"addbeneficiaryPosting.json":"local-static-response"==n&&(e=a+"addbeneficiaryPosting.json"),e}});return r});