define(["underscore","Backbone"],function(i,n){var e=Backbone.Model.extend({url:function(){return this.instanceUrl},validation:{billercompany:{required:!0,msg:"validation.sadad.billercompanynotnull"},billercategory:{required:!0,msg:"validation.sadad.billercategorynotnull"},servicetype:{required:!0,msg:"validation.sadad.servicetypenotnull"},mobilenumber:{required:!0,msg:"validation.sadad.mobilenumbernotnull"},nickname:{required:!0,msg:"validation.sadad.nicknamenotnull"},otp:{required:!0,msg:"validation.sadad.otpnotnull"},editnickname:{required:!0,msg:"validation.sadad.editnicknamenotnull"},editotp:{required:!0,msg:"validation.sadad.editotpnotnull"},payDate:{required:!0,msg:"validation.sadad.payDatenotnull"},remindDes:{required:!0,msg:"validation.sadad.remindDesnotnull"},transAmt:{required:!0,msg:"validation.sadad.transAmtnotnull"},dueotp:{required:!0,msg:"validation.sadad.editotpnotnull"},onetimeotp:{required:!0,msg:"validation.sadad.onetimeotpnotnull"},otpinquiry:{required:!0,msg:"validation.sadad.onetimeotpnotnull"},billamountent:{required:!0,msg:"validation.sadad.duebillnotnull"}},initialize:function(i){this.url=i.url}});return e});