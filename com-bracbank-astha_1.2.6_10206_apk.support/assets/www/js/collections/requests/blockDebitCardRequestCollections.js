define(["underscore","Backbone","models/requests/blockDebitCardRequestModel"],function(e,t,s){var a=new EncryptedLocalStorage("secret"),n=t.Collection.extend({model:s,initialize:function(e,t){this.id=t.id},url:function(){var e="",t=a.get("app.respone.mode"),s=a.get("app.context.path"),n=a.get("app.static.context.path"),o=a.get("app.local.context.path");return"server-dynamic-response"==t?e=s+"servicerequest/getDropDownValues":"server-static-response"==t?e=n+"serviceRequestMetaDataList.json":"local-static-response"==t&&(e=o+"serviceRequestMetaDataList.json"),e}});return n});