define(["underscore","Backbone","models/tools/currencyConverterModel"],function(e,r,t){var n=new EncryptedLocalStorage("secret"),o=r.Collection.extend({model:t,initialize:function(e,r){},url:function(){var e="",r=n.get("app.respone.mode"),t=n.get("app.context.path"),o=n.get("app.static.context.path"),c=n.get("app.local.context.path");return"server-dynamic-response"==r?e=t+"servicerequest/currencyConverter":"server-static-response"==r?e=o+"currencyConverter.json":"local-static-response"==r&&(e=c+"currencyConverter.json"),e}});return o});