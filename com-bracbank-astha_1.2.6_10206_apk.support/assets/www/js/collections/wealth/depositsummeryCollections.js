define(["underscore","Backbone","models/wealth/depositsummeryModel"],function(e,t,n){var o=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=o.get("app.respone.mode"),n=o.get("app.context.path"),a=o.get("app.static.context.path"),r=o.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"home/depositsummary":"server-static-response"==t?e=a+"creditcarddetails.json":"local-static-response"==t&&(e=r+"accountDetailStatement.json"),e}});return a});