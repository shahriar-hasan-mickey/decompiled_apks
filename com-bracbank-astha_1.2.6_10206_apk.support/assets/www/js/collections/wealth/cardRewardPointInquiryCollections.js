define(["underscore","Backbone","models/wealth/cardRewardPointInquiryModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),r=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=a.get("app.respone.mode"),n=a.get("app.context.path"),r=a.get("app.static.context.path"),o=a.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"creditcard/cardRewardPointInquiry":"server-static-response"==t?e=r+"accountSummary.json":"local-static-response"==t&&(e=o+"ccDetailStatement.json"),e}});return r});