define(["underscore","Backbone","models/more/availableLimitsModel"],function(e,t,n){var o=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=o.get("app.respone.mode"),n=o.get("app.context.path"),a=o.get("app.static.context.path"),i=o.get("app.local.context.path");return"server-dynamic-response"==t?e=n+"payment/availablelimits":"server-static-response"==t?e=a+"profileUpdation.json":"local-static-response"==t&&(e=i+"profileUpdation.json"),e}});return a});