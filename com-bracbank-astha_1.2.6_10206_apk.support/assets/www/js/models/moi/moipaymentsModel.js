define(["underscore","Backbone"],function(e,r){var t=new EncryptedLocalStorage("secret"),i=r.Model.extend({loginerror:[],billercategory:[],fromacc:[],creditcards:[],initialize:function(){if(this.get("moiBillerFeeDTO")&&(billercategory=this.get("moiBillerFeeDTO")),this.get("casaAccountList")&&(fromacc=this.get("casaAccountList")),this.get("creditCardAccountList")&&(creditcards=this.get("creditCardAccountList")),this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("billerServiceListDTO")&&(billerServiceListDTO=this.get("billerServiceListDTO")),this.get("errorCode")&&(errorCode=this.get("errorCode")),this.get("error")){var e=this.get("error");t.set("errordesc",e.errorDescription),t.set("errorcode",e.errorCode)}else t.set("errordesc",""),t.set("errorcode","");t.set("errback","moipayment")}});return i});