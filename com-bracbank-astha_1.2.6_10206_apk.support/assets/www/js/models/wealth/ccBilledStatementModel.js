define(["underscore","Backbone"],function(t,e){var r=new EncryptedLocalStorage("secret"),i=e.Model.extend({minibilledstatement:[],creditcardMonthsList:[],errordet:[],creditcardDetail:[],initialize:function(){if(this.get("statementDetails")?(minibilledstatement=this.get("statementDetails"),r.set("minibilledstatement",minibilledstatement)):minibilledstatement="",this.get("creditcardMonthsList")?creditcardMonthsList=this.get("creditcardMonthsList"):creditcardMonthsList="",this.get("creditcardDetail")?creditcardDetail=this.get("creditcardDetail"):creditcardDetail="",this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")){var t=this.get("error");r.set("errordesc",t.errorDescription),r.set("errorcode",t.errorCode)}else r.set("errordesc",""),r.set("errorcode","");r.set("errback","wealth")}});return i});