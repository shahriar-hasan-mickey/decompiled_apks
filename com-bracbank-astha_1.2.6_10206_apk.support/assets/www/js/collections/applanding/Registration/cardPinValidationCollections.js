define(["underscore","Backbone","models/applanding/Registration/cardPinValidationModel"],function(e,n,t){var a=new EncryptedLocalStorage("secret"),o=n.Collection.extend({model:t,initialize:function(e,n){},url:function(){var e="",n=a.get("app.respone.mode"),t=a.get("app.context.path"),o=a.get("app.static.context.path"),r=a.get("app.local.context.path");return"server-dynamic-response"==n?e=t+"prelogin/cardpinval":"server-static-response"==n?e=o+"forgotusername.json":"local-static-response"==n&&(e=r+"cardPinValidation.json"),e}});return o});