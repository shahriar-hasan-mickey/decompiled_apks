define(["underscore","Backbone","models/sadad/addBillsModel"],function(e,t,n){var a=new EncryptedLocalStorage("secret"),o=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=a.get("app.respone.mode"),n=(a.get("app.context.path"),a.get("app.static.context.path")),o=a.get("app.local.context.path");return"server-dynamic-response"==t||("server-static-response"==t?e=n+"managebills.json":"local-static-response"==t&&(e=o+"managebills.json")),e}});return o});