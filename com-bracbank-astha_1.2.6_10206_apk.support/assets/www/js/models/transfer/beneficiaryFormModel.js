define(["underscore","Backbone"],function(e,t){var r=new EncryptedLocalStorage("secret"),i=t.Model.extend({errordet:[],url:function(){return this.instanceUrl},initialize:function(e){this.url=e.url,tenant_id=r.get("tenantApplicationId"),tenant_short_description=r.get("tenantShortDescription"),group_id=r.get("groupId"),group_short_description=r.get("groupShortDescription"),locale=r.get("locale"),user_login_profile_id=r.get("userLoginProfileId"),login_id=r.get("loginId"),application_id=r.get("applicationId"),channel_id=r.get("channelId"),media_type=r.get("mediaType"),main_module=r.get("mainModule"),sub_module=r.get("subModule"),benefeciaryName=$("#benefeciaryName").val(),accountNumber=$("#accountNumber").val(),confirmAccountNumber=$("#confirmAccountNumber").val(),timestamp=(new Date).getTime(),nickName=$("#nickName").val(),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")?(errordet=this.get("error"),r.set("errordesc",errordet.errorDescription),r.set("errorcode",errordet.errorCode)):r.set("errordesc","")}});return i});