define(["underscore","Backbone","models/transfer/extbeneAddModel"],function(e,t,n){var r=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){this.id=t.id,this.transfertype=t.transfertype},url:function(){var e="",t=r.get("app.respone.mode"),n=r.get("app.context.path"),a=r.get("app.static.context.path"),o=r.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"beneficiary/bankdetails":"server-static-response"==t?e=a+"extbeneAdd.json":"local-static-response"==t&&(e=o+"extbeneAdd.json"),e}});return a});