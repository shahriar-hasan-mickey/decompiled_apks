define(["underscore","Backbone"],function(t,i){var e=new EncryptedLocalStorage("secret"),n=i.Model.extend({errordet:[],initialize:function(){if(this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("beneficiaryBeneficiaryInstructionDTOs")?(beneficiaryBeneficiaryInstructionDTOs=this.get("beneficiaryBeneficiaryInstructionDTOs"),e.set("beneficiaryDTO",beneficiaryBeneficiaryInstructionDTOs)):e.set("beneficiaryDTO",""),this.get("localBeneficiaryBeneficiaryInstructionDTOList")?(localBeneficiaryBeneficiaryInstructionDTOList=this.get("localBeneficiaryBeneficiaryInstructionDTOList"),e.set("beneficiaryLocalDTO",localBeneficiaryBeneficiaryInstructionDTOList)):e.set("beneficiaryLocalDTO",""),this.get("mobileWalletInsttructionList")?(mobileWalletInsttructionList=this.get("mobileWalletInsttructionList"),e.set("mobileWalletInsttructionList",mobileWalletInsttructionList)):(mobileWalletInsttructionList="",e.set("mobileWalletInsttructionList","")),this.get("downtimeNotification")?(downtimeNotification=this.get("downtimeNotification"),e.set("downtimeNotification",downtimeNotification)):e.set("downtimeNotification",""),this.get("error")){var t=this.get("error");e.set("errordesc",t.errorDescription),e.set("errorcode",t.errorCode)}else e.set("errordesc","FAILURE")}});return n});