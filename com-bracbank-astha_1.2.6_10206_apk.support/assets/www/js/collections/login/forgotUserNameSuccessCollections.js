define(["underscore","Backbone","models/login/pinverificationModel"],function(e,t,o){var n=new EncryptedLocalStorage("secret"),r=t.Collection.extend({model:o,initialize:function(e,t){this.id=t.id},url:function(){var e="";n.set("errordesc","");var t=n.get("app.respone.mode"),o=n.get("app.context.path"),r=n.get("app.static.context.path"),a=n.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"prelogin/forgetUserId":"server-static-response"==t?e=r+"forgotusername.json":"local-static-response"==t&&(e=a+"forgotusername.json"),e}});return r});