define(["underscore","Backbone","models/requests/cancelChequeBookRequestResultModel"],function(e,t,n){var o=new EncryptedLocalStorage("secret"),s=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=o.get("app.respone.mode"),n=o.get("app.context.path"),s=o.get("app.static.context.path"),c=o.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"servicerequest/cancelChequeBookRequestResult":"server-static-response"==t?e=s+"financeRequestPosting.json":"local-static-response"==t&&(e=c+"financeRequestPosting.json"),e}});return s});