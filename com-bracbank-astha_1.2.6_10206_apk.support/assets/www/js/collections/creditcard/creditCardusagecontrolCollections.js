define(["underscore","Backbone","models/creditcard/creditCardusagecontrolModel"],function(e,t,c){var r=new EncryptedLocalStorage("secret"),n=t.Collection.extend({model:c,initialize:function(e,t){},url:function(){var e="",t=r.get("app.respone.mode"),c=r.get("app.context.path"),n=r.get("app.static.context.path"),o=r.get("app.local.context.path");return"server-dynamic-response"==t?e=c+"creditcard/ccusagecontrolfetch":"server-static-response"==t?e=n+"accountSummary.json":"local-static-response"==t&&(e=o+"creditcardSummary.json"),e}});return n});