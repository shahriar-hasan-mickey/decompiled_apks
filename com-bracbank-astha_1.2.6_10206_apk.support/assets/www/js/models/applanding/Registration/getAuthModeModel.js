define(["underscore","Backbone"],function(t,e){var r=new EncryptedLocalStorage("secret"),i=e.Model.extend({errordet:[],initialize:function(){if(this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("securitySettingList")?(securitySettingList=this.get("securitySettingList"),r.set("securitySettingList",securitySettingList)):(securitySettingList="",r.set("securitySettingList","")),this.get("error")){var t=this.get("error");r.set("errordesc",t.errorDescription),r.set("errorcode",t.errorCode)}else r.set("errordesc",""),r.set("errorcode","")}});return i});