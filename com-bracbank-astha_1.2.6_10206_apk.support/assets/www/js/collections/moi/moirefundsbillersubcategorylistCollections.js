define(["underscore","Backbone","models/moi/moibillersubcategorylistModel"],function(e,t,o){var r=new EncryptedLocalStorage("secret"),i=t.Collection.extend({model:o,initialize:function(e,t){},url:function(){var e="",t=r.get("app.respone.mode"),o=r.get("app.context.path"),i=r.get("app.static.context.path"),l=r.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"biller/moibillersubcategorylist":"server-static-response"==t?e=i+"moisubbillercatagerylist.json":"local-static-response"==t&&(e=l+"moisubbillercatagerylist.json"),e}});return i});