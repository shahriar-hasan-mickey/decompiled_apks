define(["underscore","Backbone","models/transfer/withinBankTransferProcessModel"],function(e,n,t){var o=new EncryptedLocalStorage("secret"),r=n.Collection.extend({model:t,initialize:function(e,n){this.id=n.id},url:function(){var e="",n=o.get("app.respone.mode"),t=o.get("app.context.path"),r=o.get("app.static.context.path"),s=o.get("app.local.context.path");return"server-dynamic-response"==n?e=t+"payment/processFTTransfer":"server-static-response"==n?e=r+"withinAccountConfirm.json":"local-static-response"==n&&(e=s+"withinAccountConfirm.json"),e}});return r});