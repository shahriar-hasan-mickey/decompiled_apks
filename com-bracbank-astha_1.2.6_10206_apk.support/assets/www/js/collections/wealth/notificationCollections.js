define(["underscore","Backbone","models/wealth/notificationModel"],function(t,e,n){var o=new EncryptedLocalStorage("secret"),a=e.Collection.extend({model:n,initialize:function(t,e){},url:function(){var t="";o.set("pendingATMActivation",""),o.set("pendingCreditCardActivation",""),o.set("sadadPaymentDue",""),o.set("trafficVoilationDue",""),o.set("totalCount","");var e=o.get("app.respone.mode"),n=o.get("app.context.path"),a=o.get("app.static.context.path"),i=o.get("app.local.context.path");return"server-dynamic-response"==e?t=n+"home/notifications":"server-static-response"==e?t=a+"accountSummary.json":"local-static-response"==e&&(t=i+"accountSummary.json"),t}});return a});