define(["underscore","Backbone"],function(t,i){var e=new EncryptedLocalStorage("secret"),c=i.Model.extend({errordet:[],ownaccounts:[],friendsfamily:[],creditcards:[],billpay:[],initialize:function(){this.get("cclimit")?(cclimit=this.get("cclimit"),e.set("cclimit",cclimit)):(cclimit="",e.set("cclimit","")),this.get("ccavaillimit")?(ccavaillimit=this.get("ccavaillimit"),e.set("ccavaillimit",ccavaillimit)):(ccavaillimit="",e.set("ccavaillimit","")),this.get("ccmaxlimit")?(ccmaxlimit=this.get("ccmaxlimit"),e.set("ccmaxlimit",ccmaxlimit)):(ccmaxlimit="",e.set("ccmaxlimit","")),this.get("errorCode")&&(errorCode=this.get("errorCode")),this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")?(errordet=this.get("error"),e.set("errordesc",errordet.errorDescription),e.set("errorcode",errordet.errorCode)):(e.set("errordesc"," "),e.set("errorcode","")),e.set("errback","creditcard"),timestamp=(new Date).getTime()}});return c});