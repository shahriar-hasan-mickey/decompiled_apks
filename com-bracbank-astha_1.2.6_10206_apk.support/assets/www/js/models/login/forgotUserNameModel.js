define(["underscore","Backbone"],function(e,t){var r,s=new EncryptedLocalStorage("secret"),i=t.Model.extend({errordet:[],initialize:function(){if(this.get("userid")&&(userid=this.get("userid"),s.set("custno",userid)),this.get("firstName")&&(firstName=this.get("firstName")),this.get("transId")&&(r=this.get("transId")),this.get("mb_token")&&(mb_token=this.get("mb_token"),mb_token=DEcryptWithDynamicSalt(mb_token,r),s.set("appdynamicToken",mb_token)),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")){var e=this.get("error");s.set("errordesc",e.errorDescription),s.set("errorcode",e.errorCode)}else s.set("errordesc",""),s.set("errorcode","")}});return i});