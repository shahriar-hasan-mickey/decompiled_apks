define(["underscore","Backbone","models/moi/moiComboSelectModel"],function(e,t,o){var n=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:o,initialize:function(e,t){},url:function(){var e="",t=n.get("app.respone.mode"),o=n.get("app.context.path"),a=n.get("app.static.context.path"),r=n.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"biller/moidbsubcategorylist":"server-static-response"==t?e=a+"moipayments.json":"local-static-response"==t&&(e=r+"moipayments.json"),e}});return a});