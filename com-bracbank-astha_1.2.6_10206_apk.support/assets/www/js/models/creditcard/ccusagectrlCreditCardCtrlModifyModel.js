define(["underscore","Backbone"],function(e,r){var t=new EncryptedLocalStorage("secret"),o=r.Model.extend({ccusagecontrolmodifyDTO:[],initialize:function(){this.get("ccusagecontrolmodifyDTO")?ccusagecontrolmodifyDTO=this.get("ccusagecontrolmodifyDTO"):ccusagecontrolmodifyDTO="",this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")?(errordet=this.get("error"),t.set("errordesc",errordet.errorDescription),t.set("errorcode",errordet.errorCode)):(t.set("errordesc"," "),t.set("errorcode","")),t.set("errback","creditcard"),timestamp=(new Date).getTime()}});return o});