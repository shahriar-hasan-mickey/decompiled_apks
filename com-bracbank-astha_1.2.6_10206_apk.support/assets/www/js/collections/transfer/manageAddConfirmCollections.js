define(["underscore","Backbone","models/transfer/manageAddConfirmModel"],function(e,n,t){var i=new EncryptedLocalStorage("secret"),r=n.Collection.extend({model:t,initialize:function(e,n){this.id=n.id},url:function(){var e="",n=i.get("app.respone.mode"),t=i.get("app.context.path"),r=i.get("app.static.context.path"),o=i.get("app.local.context.path");return"server-dynamic-response"==n?e=t+"beneficiary/insertbeneficiary":"server-static-response"==n?e=r+"withinSHBAddBene.json":"local-static-response"==n&&(e=o+"withinSHBAddBene.json"),e}});return r});