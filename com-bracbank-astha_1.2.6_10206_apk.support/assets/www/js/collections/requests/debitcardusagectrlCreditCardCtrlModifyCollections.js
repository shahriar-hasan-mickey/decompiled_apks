define(["underscore","Backbone","models/requests/debitcardusagectrlCreditCardCtrlModifyModel"],function(e,t,n){var r=new EncryptedLocalStorage("secret"),a=t.Collection.extend({model:n,initialize:function(e,t){},url:function(){var e="",t=r.get("app.respone.mode"),n=r.get("app.context.path"),a=r.get("app.static.context.path"),o=r.get("app.local.context.path");return ministatement=null,"server-dynamic-response"==t?e=n+"servicerequest/debitcardcontrolupdate":"server-static-response"==t?e=a+"accountSummary.json":"local-static-response"==t&&(e=o+"accountSummary.json"),e}});return a});