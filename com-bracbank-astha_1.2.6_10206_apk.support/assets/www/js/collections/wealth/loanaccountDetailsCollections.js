define(["underscore","Backbone","models/wealth/loanaccountDetailModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=a.get("app.respone.mode"),n=a.get("app.context.path"),o=a.get("app.static.context.path"),l=a.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"loan/details":"server-static-response"==t?e=o+"loanDetail.json":"local-static-response"==t&&(e=l+"loanDetail.json"),e}});return o});