define(["underscore","Backbone","models/creditcard/ccusagectrlCreditCardDetailsModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),c=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=a.get("app.respone.mode"),n=a.get("app.context.path"),c=a.get("app.static.context.path"),r=a.get("app.local.context.path");return ministatement=null,"server-dynamic-response"==t?e=n+"creditcard/ministatement":"server-static-response"==t?e=c+"accountSummary.json":"local-static-response"==t&&(e=r+"accountSummary.json"),e}});return c});