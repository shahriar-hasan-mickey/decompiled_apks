define(["underscore","Backbone"],function(e,r){var t=new EncryptedLocalStorage("secret"),s=r.Model.extend({historylist:[],errordet:[],initialize:function(){if(this.get("tranDetails")?(tranDetails=this.get("tranDetails"),t.set("tranDetails",tranDetails)):(tranDetails="",t.set("tranDetails","")),this.get("error")){var e=this.get("error");t.set("errordesc",e.errorDescription)}this.get("error")?(e=this.get("error"),t.set("errordesc",e.errorDescription),t.set("errorcode",e.errorCode)):(t.set("errordesc",""),t.set("errorcode","")),this.get("ackStatus")?ackStatus=this.get("ackStatus"):t.set("errordesc",""),t.set("errback","transfer")}});return s});