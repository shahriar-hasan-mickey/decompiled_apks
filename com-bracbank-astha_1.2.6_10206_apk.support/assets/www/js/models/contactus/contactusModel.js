define(["underscore","Backbone"],function(r,e){var t=new EncryptedLocalStorage("secret"),s=e.Model.extend({ownaccounts:[],creditcards:[],errordet:[],initialize:function(){this.get("appParametersList")?appParametersList=this.get("appParametersList"):appParametersList="",this.get("errorCode")&&(errorCode=this.get("errorCode")),this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")?(errordet=this.get("error"),t.set("errordesc",errordet.errorDescription),t.set("errorcode",errordet.errorCode)):(t.set("errordesc"," "),t.set("errorcode","")),t.set("errback","creditcard")}});return s});