define(["underscore","Backbone","models/tools/TDRatesModel"],function(e,t,o){var n=new EncryptedLocalStorage("secret"),r=t.Collection.extend({model:o,initialize:function(e,t){},url:function(){var e="",t=n.get("app.respone.mode"),o=n.get("app.context.path"),r=n.get("app.static.context.path"),a=n.get("app.local.context.path");return"server-dynamic-response"==t?e=o+"servicerequest/TDRates":"server-static-response"==t?e=r+"locatorSearchResult.json":"local-static-response"==t&&(e=a+"locatorSearchResult.json"),e}});return r});