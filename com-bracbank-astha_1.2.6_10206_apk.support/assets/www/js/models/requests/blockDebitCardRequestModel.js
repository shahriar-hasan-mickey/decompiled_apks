define(["underscore","Backbone"],function(e,s){var r=new EncryptedLocalStorage("secret"),t=s.Model.extend({reissuecardList:[],stopccreasonList:[],loginerror:[],initialize:function(){this.get("reissuecardList")?(reissuecardList=this.get("reissuecardList"),r.set("reissuecardList",reissuecardList)):(reissuecardList="",r.set("reissuecardList","")),this.get("stopccreasonList")?(stopccreasonList=this.get("stopccreasonList"),r.set("stopccreasonList",stopccreasonList)):(stopccreasonList="",r.set("stopccreasonList","")),this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")?(errordet=this.get("error"),r.set("errordesc",errordet.errorDescription),r.set("errorcode",errordet.errorCode)):(r.set("errordesc",""),r.set("errorcode","")),r.set("errback","accounts")}});return t});