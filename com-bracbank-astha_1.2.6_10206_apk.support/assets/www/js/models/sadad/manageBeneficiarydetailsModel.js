define(["underscore","Backbone"],function(e,t){var s=new EncryptedLocalStorage("secret"),r=t.Model.extend({errordet:[],beneInstruction:[],beneBankDetails:[],domesticBankDetails:[],initialize:function(){if(this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("streetAddress1")?(streetAddress1=this.get("streetAddress1"),s.set("streetAddress1",streetAddress1)):s.set("streetAddress1",""),this.get("streetAddress2")?(streetAddress2=this.get("streetAddress2"),s.set("streetAddress2",streetAddress2)):s.set("streetAddress2",""),this.get("streetAddress3")?(streetAddress3=this.get("streetAddress3"),s.set("streetAddress3",streetAddress3)):s.set("streetAddress3",""),this.get("ivrcallinitiationstatus")?(ivrcallinitiationstatus=this.get("ivrcallinitiationstatus"),s.set("ivrcallinitiationstatus",ivrcallinitiationstatus)):s.set("ivrcallinitiationstatus",""),this.get("beneficiaryInstruction")?(beneficiaryInstruction=this.get("beneficiaryInstruction"),benesariecode=beneficiaryInstruction[0].sarieParticipateBankCode,beneInstruction=beneficiaryInstruction[0].bankDetailsDTO.domesticBank[0].bankName,s.set("benesariebankname",beneInstruction),s.set("benesariecode",benesariecode),bankCity=beneficiaryInstruction[0].bankDetailsDTO.domesticBank[0].bankCity,s.set("bankCity",bankCity),servtype=beneficiaryInstruction[0].transactionSubType.serviceApplication.service.code,s.set("servicetype",servtype)):(beneInstruction="",s.set("servicetype",""),s.set("benesariecode",""),s.set("benesariebankname","")),this.get("error")){var e=this.get("error");s.set("errordesc",e.errorDescription),s.set("errorcode",e.errorCode)}else s.set("errordesc",""),s.set("errorcode","");s.set("errback","sadad")}});return r});