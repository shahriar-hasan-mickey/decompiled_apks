define(["underscore","Backbone"],function(e,t){var r=new EncryptedLocalStorage("secret"),s=t.Model.extend({errordet:[],initialize:function(){if(this.get("access_token")&&(accesstoken=this.get("access_token"),r.set("access_token",accesstoken)),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")){var e=this.get("error");r.set("errordesc",e.errorDescription)}else r.set("errordesc","FAILURE")}});return s});