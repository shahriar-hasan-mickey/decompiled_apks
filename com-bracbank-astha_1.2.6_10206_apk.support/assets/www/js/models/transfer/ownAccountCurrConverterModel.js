define(["underscore","Backbone"],function(e,t){var r=new EncryptedLocalStorage("secret"),o=t.Model.extend({errordet:[],initialize:function(){this.get("exchangeRate")?exchangeRate=this.get("exchangeRate"):exchangeRate="",this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("totalAmount")&&(totalAmount=this.get("totalAmount")),this.get("error")?(errordet=this.get("error"),r.set("errordesc",errordet.errorDescription),r.set("errorcode",errordet.errorCode)):(r.set("errordesc",""),r.set("errorcode",""))}});return o});