define(["underscore","Backbone","models/transfer/transferHistoryPostingModel"],function(e,t,r){var n=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:r,initialize:function(e,t){},url:function(){var e="",t=n.get("app.respone.mode"),r=n.get("app.context.path"),o=n.get("app.static.context.path"),s=n.get("app.local.context.path");return"server-dynamic-response"==t?e=r+"payment/getTransferHistory":"server-static-response"==t?e=o+"transferHistory.json":"local-static-response"==t&&(e=s+"transferHistory.json"),e}});return o});