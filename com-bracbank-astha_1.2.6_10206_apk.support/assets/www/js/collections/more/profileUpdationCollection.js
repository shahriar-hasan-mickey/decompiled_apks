define(["underscore","Backbone","models/more/profileUpdatioModel"],function(e,t,o){var n=new EncryptedLocalStorage("secret"),r=t.Collection.extend({model:o,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=n.get("app.respone.mode"),o=n.get("app.context.path"),r=n.get("app.static.context.path"),i=n.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"user/userprofileid":"server-static-response"==t?e=r+"profileUpdation.json":"local-static-response"==t&&(e=i+"profileUpdation.json"),e}});return r});