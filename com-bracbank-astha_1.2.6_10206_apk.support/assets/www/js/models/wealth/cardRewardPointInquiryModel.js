define(["underscore","Backbone"],function(e,t){var i=new EncryptedLocalStorage("secret"),r=t.Model.extend({myaccountscreditlist:[],errordet:[],initialize:function(){if(this.get("creditCardAccountListDTO")?setRewardPointsinquiryListDTO(this.get("creditCardAccountListDTO")):setRewardPointsinquiryListDTO(""),this.get("rewardEarned")?i.set("rewardPointsRedeemRewardEarned",this.get("rewardEarned")):i.set("rewardPointsRedeemRewardEarned",""),this.get("openingBalance")?i.set("rewardPointsRedeemOpeningBalance",this.get("openingBalance")):i.set("rewardPointsRedeemOpeningBalance",""),this.get("rewardpointsRedeemed")?i.set("rewardPointsRedeemRewardpointsRedeemed",this.get("rewardpointsRedeemed")):i.set("rewardPointsRedeemRewardpointsRedeemed",""),this.get("pointsExpiringThisMonth")?i.set("rewardPointsRedeemPointsExpiringThisMonth",this.get("rewardpointsRedeemed")):i.set("rewardPointsRedeemPointsExpiringThisMonth",""),this.get("closingBalance")?i.set("rewardPointsRedeemClosingBalance",this.get("closingBalance")):i.set("rewardPointsRedeemClosingBalance",""),this.get("expiredRewardPoints")?i.set("rewardPointsRedeemExpiredRewardPoints",this.get("expiredRewardPoints")):i.set("rewardPointsRedeemExpiredRewardPoints",""),this.get("availableRewardPoint")?i.set("rewardPointsRedeemAvailableRewardPoint",this.get("availableRewardPoint")):i.set("rewardPointsRedeemAvailableRewardPoint",""),this.get("downtimeNotification")?(downtimeNotification=this.get("downtimeNotification"),i.set("downtimeNotification",downtimeNotification)):i.set("downtimeNotification",""),this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("error")){var e=this.get("error");i.set("errordesc",e.errorDescription),i.set("errorcode",e.errorCode)}else i.set("errordesc",""),i.set("errorcode","");i.set("errback","wealth")}});return r});