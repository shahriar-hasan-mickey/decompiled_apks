define(["underscore","Backbone","models/moi/moirefundComboSelectModel"],function(e,o,t){var n=new EncryptedLocalStorage("secret"),a=o.Collection.extend({model:t,initialize:function(e,o){},url:function(){var e="",o=n.get("app.respone.mode"),t=(n.get("app.context.path"),n.get("app.static.context.path")),a=n.get("app.local.context.path");if("server-dynamic-response"==o){var r=n.get("language_id");e="en-US"==r?a+"moibillercombovalues_us.json":a+"moibillercombovalues_ar.json"}else"server-static-response"==o?e=t+"moipayments.json":"local-static-response"==o&&(e=a+"moipayments.json");return e}});return a});