define(["underscore","Backbone"],function(t,e){var r=new EncryptedLocalStorage("secret"),c=e.Model.extend({initialize:function(){this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("creditCardAccountList")?(creditCardAccountList=this.get("creditCardAccountList"),r.set("creditCardAccountList",creditCardAccountList)):(creditCardAccountList="",r.set("creditCardAccountList","")),this.get("dcDetails")?r.set("dcDetails",this.get("dcDetails")):r.set("dcDetails",""),this.get("error")?(errordet=this.get("error"),r.set("errordesc",errordet.errorDescription),r.set("errorcode",errordet.errorCode)):(r.set("errordesc",""),r.set("errorcode",""))}});return c});