define(["underscore","Backbone","models/wealth/loanDetailStatementModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=a.get("app.respone.mode"),n=a.get("app.context.path"),o=a.get("app.static.context.path"),l=a.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"loan/statementfilter":"server-static-response"==t?e=o+"loanDetailStatement.json":"local-static-response"==t&&(e=l+"loanDetailStatement.json"),e}});return o});