define(["underscore","Backbone","models/messages/composeFormModel"],function(e,t,o){var n=new EncryptedLocalStorage("secret"),s=t.Collection.extend({model:o,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=n.get("app.respone.mode"),o=n.get("app.context.path"),s=n.get("app.static.context.path"),c=n.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"messagecenter/messagesubject":"server-static-response"==t?e=s+"ownAccountTransfer.json":"local-static-response"==t&&(e=c+"compose.json"),e}});return s});