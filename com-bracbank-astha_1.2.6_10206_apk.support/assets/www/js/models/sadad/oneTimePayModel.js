define(["underscore","Backbone"],function(e,t){var r=new EncryptedLocalStorage("secret"),i=t.Model.extend({biller:[],errordet:[],initialize:function(){if(this.get("moiBillerFeeDTO")&&(billercategory=this.get("moiBillerFeeDTO")),this.get("casaAccountList")&&(fromacc=this.get("casaAccountList")),this.get("creditCardAccountList")&&(creditcards=this.get("creditCardAccountList")),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),timestamp=(new Date).getTime(),this.get("error")){var e=this.get("error");r.set("errordesc",e.errorDescription),r.set("errorcode",e.errorCode)}else r.set("errordesc"," "),r.set("errorcode","");r.set("errback","sadad")}});return i});