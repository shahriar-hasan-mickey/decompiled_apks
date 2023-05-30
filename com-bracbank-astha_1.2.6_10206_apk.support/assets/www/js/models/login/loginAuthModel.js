define(["underscore","Backbone"],function(e,i){var r=new EncryptedLocalStorage("secret"),o=i.Model.extend({errordet:[],menuList:[],initialize:function(){this.get("access_token")&&(accesstoken=this.get("access_token"),r.set("access_token",accesstoken));var e=new Array;if(this.get("userLoginProfile")){userLoginProfile=this.get("userLoginProfile"),e[0]=userLoginProfile.userProfile.firstName,e[1]=userLoginProfile.userProfile.lastName,e[2]=userLoginProfile.userProfile.middleName,e[3]=userLoginProfile.lastSuccessLogin,e[4]=userLoginProfile.lastFailureLogin,e[5]=userLoginProfile.userProfile.mobileNoMasked,e[6]=userLoginProfile.userProfile.emailid,e[7]=userLoginProfile.userProfile.mobile,e[8]=userLoginProfile.userProfile.birthdate,e[9]=userLoginProfile.id_type,e[10]=userLoginProfile.iqama_number,e[11]=userLoginProfile.isStaff,e[12]=userLoginProfile.segment,e[13]=userLoginProfile.userProfile.loyaltypoints,e[14]=userLoginProfile.userProfile.residence,e[15]=userLoginProfile.userProfile.statuscode,e[16]=userLoginProfile.userProfile.stopmailflag,e[17]=userLoginProfile.userProfile.occupation,e[18]=userLoginProfile.userProfile.nationality,e[19]=userLoginProfile.userProfile.idexpdate,e[20]=userLoginProfile.userProfile.gender,e[21]=userLoginProfile.userProfile.segment,e[22]=userLoginProfile.userProfile.idtype,e[23]=userLoginProfile.userProfile.birthdatehijira,e[24]=userLoginProfile.userProfile.hijiraidexpdate;var i=null!=userLoginProfile.userProfile.firstName&&""!=userLoginProfile.userProfile.firstName&&"null"!=userLoginProfile.userProfile.firstName?userLoginProfile.userProfile.firstName:"",o=null!=userLoginProfile.userProfile.lastName&&""!=userLoginProfile.userProfile.lastName&&"null"!=userLoginProfile.userProfile.lastName?userLoginProfile.userProfile.lastName:"",s=null!=userLoginProfile.userProfile.poboxnumber&&""!=userLoginProfile.userProfile.poboxnumber&&"null"!=userLoginProfile.userProfile.poboxnumber?userLoginProfile.userProfile.poboxnumber:"",t=null!=userLoginProfile.userProfile.street&&""!=userLoginProfile.userProfile.street&&"null"!=userLoginProfile.userProfile.street?userLoginProfile.userProfile.street:"",n=null!=userLoginProfile.userProfile.town&&""!=userLoginProfile.userProfile.town&&"null"!=userLoginProfile.userProfile.town?userLoginProfile.userProfile.town:"",a=null!=userLoginProfile.userProfile.statuscode&&""!=userLoginProfile.userProfile.statuscode&&"null"!=userLoginProfile.userProfile.statuscode?userLoginProfile.userProfile.statuscode:"";r.set("customerAddress",i+" "+o+"  "+s+"  "+t+"  "+n+"  "+a),r.set("LoginProfile",e),r.set("MaskMobile",e[5]),r.set("birthdate",e[8]);var u,l,m,c=e[23];m=c.substring(0,4),l=c.substring(5,7),u=c.substring(8,10),c=u+"-"+l+"-"+m,birthdatee=m+"-"+l+"-"+u,birthdatehij=l+"-"+m,r.set("dateChanged",c),r.set("dateChangedd",birthdatee),r.set("dateChangedhijri",birthdatehij);var d=e[8],P=e[8],f=e[8];d=d.substring(6,10),P=P.substring(3,5),f=f.substring(0,2),birthdatechanges=d+"-"+P+"-"+f,r.set("birthdatechanges",birthdatechanges);var g=P+"-"+d;r.set("birthmonthyear",g),r.set("birthdateyear",d),r.set("birthdatemonth",P),r.set("birthdateday",f);var _=e[23],p=e[23],L=e[23];_=d.substring(0,4),p=P.substring(5,7),L=f.substring(8,10),r.set("birthdateyearhijrinat",_),r.set("birthdatemonthhijrinat",p),r.set("birthdatedayhijrinat",L),r.set("emailid",e[6]),r.set("usermobile",userLoginProfile.userProfile.mobile),r.set("loyaltypoints",e[13]),r.set("residence",e[14]),r.set("statuscode",e[15]),r.set("stopmailflag",e[16]),r.set("occupation",e[17]),r.set("nationality",e[18]),r.set("idexpdate",e[19]);var T=e[24],O=T.substring(0,4),y=T.substring(5,7),h=T.substring(8,10);T=O+""+y+h,r.set("idexpdatekycc",T),r.set("gender",e[20]),r.set("upsegment",e[21]),r.set("idtypelogin",e[22]),r.set("id_type",e[9]),r.set("iqama_number",e[10]);var b=e[10];b=b.substring(0,1),r.set("iqnumid",b),r.set("isStaff",e[11]),r.set("segment",e[12]),r.set("iqama_id",e[22]),r.set("birthdatehijira",e[23]);var D=userLoginProfile.segment;r.set("segmentvalue",D);var S=userLoginProfile.userProfile.customernumber,v=r.get("shamd5flagreqcheck");"E"==v?r.set("custno",S):r.set("custno",""),r.set("custnoenc",S);var I="";try{null!=userLoginProfile.userProfile.timeStamp&&(I=userLoginProfile.userProfile.timeStamp),I=""!=userLoginProfile.userProfile.timeStamp?userLoginProfile.userProfile.timeStamp:""}catch(k){I=""}r.set("timeStampharse",I);var A=userLoginProfile.userProfile.firstName;r.set("custname",A);var N=userLoginProfile.userProfile.branchcode;if(r.set("branchcode",N),r.set("actual_mob_no",e[7]),r.set("is_mobilenumber_confirmed",userLoginProfile.isMobileNumberConfirmed),null!=userLoginProfile.dyanamicOTPDTO&&(r.set("soft_token",userLoginProfile.dyanamicOTPDTO.soft_token),r.set("token_serno",userLoginProfile.dyanamicOTPDTO.token_serno),r.set("user_login",userLoginProfile.dyanamicOTPDTO.user_login),r.set("touch_login",userLoginProfile.dyanamicOTPDTO.biometric_otp),r.set("touch_id_login",userLoginProfile.dyanamicOTPDTO.touch_id_login_otp),r.set("face_id_login",userLoginProfile.dyanamicOTPDTO.face_id_login_otp),r.set("touch_reg_login",userLoginProfile.dyanamicOTPDTO.touch_id_reg_otp),r.set("face_reg_login",userLoginProfile.dyanamicOTPDTO.face_id_reg_otp),r.set("login_management",userLoginProfile.dyanamicOTPDTO.login_management),window.localStorage.setItem("mpin_login_otp",userLoginProfile.mpin_login_otp),r.set("mpin_login_otp",userLoginProfile.mpin_login_otp),r.set("forgot_mpin",userLoginProfile.dyanamicOTPDTO.forgot_mpin),r.set("new_registration",userLoginProfile.dyanamicOTPDTO.new_registration),r.set("personalfinanceprocess",userLoginProfile.dyanamicOTPDTO.loanbookingprocess),r.set("KYCprocess",userLoginProfile.dyanamicOTPDTO.kyc_otp),r.set("moi_payments",userLoginProfile.dyanamicOTPDTO.moi_payments),r.set("one_time_payment",userLoginProfile.dyanamicOTPDTO.one_time_payment),r.set("sadad_manage_profile",userLoginProfile.dyanamicOTPDTO.sadad_manage_profile),r.set("bill_inquiry_and_payment",userLoginProfile.dyanamicOTPDTO.bill_inquiry_and_payment),r.set("own_accounts",userLoginProfile.dyanamicOTPDTO.own_accounts),r.set("within_shb_transfer",userLoginProfile.dyanamicOTPDTO.within_shb_transfer),r.set("sarie_payments",userLoginProfile.dyanamicOTPDTO.sarie_payments),r.set("external_payments",userLoginProfile.dyanamicOTPDTO.external_payments),r.set("charity_payments",userLoginProfile.dyanamicOTPDTO.charity_payments),r.set("card_payment",userLoginProfile.dyanamicOTPDTO.card_payment),r.set("activate_new_credit_card",userLoginProfile.dyanamicOTPDTO.activate_new_credit_card),r.set("reset_and_create_new_pin_credit_card",userLoginProfile.dyanamicOTPDTO.reset_and_create_new_pin_credit_card),r.set("cash_on_demand",userLoginProfile.dyanamicOTPDTO.cash_on_demand),r.set("card_increaselimit",userLoginProfile.dyanamicOTPDTO.card_increaselimit),r.set("block_credit_card",userLoginProfile.dyanamicOTPDTO.block_credit_card),r.set("reissue_credit_card_pin",userLoginProfile.dyanamicOTPDTO.reissue_credit_card_pin),r.set("epp_merchant_plan",userLoginProfile.dyanamicOTPDTO.epp_merchant_plan),r.set("card_increasetemplimit",userLoginProfile.dyanamicOTPDTO.card_increasetemplimit),r.set("cc_control",userLoginProfile.dyanamicOTPDTO.cc_control),r.set("vcc_otp",userLoginProfile.dyanamicOTPDTO.vcc_otp),r.set("update_personal_information",userLoginProfile.dyanamicOTPDTO.update_personal_information),r.set("debit_card_blocking",userLoginProfile.dyanamicOTPDTO.debit_card_blocking),r.set("debit_card_activation",userLoginProfile.dyanamicOTPDTO.debit_card_activation),r.set("chequebook_activation",userLoginProfile.dyanamicOTPDTO.cheque_book_request),r.set("addaccopening",userLoginProfile.dyanamicOTPDTO.add_acct_opening),r.set("debitcardpos",userLoginProfile.dyanamicOTPDTO.debit_card_limit),r.set("dc_usage_control",userLoginProfile.dyanamicOTPDTO.dc_usage_control),r.set("iban_inquiry",userLoginProfile.dyanamicOTPDTO.iban_inquiry),r.set("opening_sub_account",userLoginProfile.dyanamicOTPDTO.opening_sub_account),r.set("redemption_of_points",userLoginProfile.dyanamicOTPDTO.redemption_of_points),r.set("order_basket",userLoginProfile.dyanamicOTPDTO.order_basket),r.set("redeem_tadallal_reward_points",userLoginProfile.dyanamicOTPDTO.redeem_tadallal_reward_points),r.set("previous_statement",userLoginProfile.dyanamicOTPDTO.previous_statement),r.set("forgot_transaction_password",userLoginProfile.dyanamicOTPDTO.forgot_transaction_password),r.set("soft_token_renewal",userLoginProfile.dyanamicOTPDTO.soft_token_renewal),r.set("ipo_information",userLoginProfile.dyanamicOTPDTO.ipo_information),r.set("lmsreqid",userLoginProfile.dyanamicOTPDTO.lmsreqid),r.set("queueMode",userLoginProfile.dyanamicOTPDTO.queuemode)),r.set("isAccountHolder",userLoginProfile.isAccountHolder),null!=userLoginProfile.userMenuSettingsListDTO){var w={};menuList=userLoginProfile.userMenuSettingsListDTO;var C=[],M=[];$.each(menuList,function(e){w[menuList[e].mtc_programid]={menu_status:menuList[e].menu_status,menu_status_at_admin:menuList[e].menu_status_at_admin},C.push(menuList[e].mtc_programid),""!=menuList[e].menu_order&&"-1"!=menuList[e].menu_order&&M.push({menu_order:menuList[e].menu_order,mtc_programid:menuList[e].mtc_programid})}),r.set("menuKeyList",C),$.each(C,function(e){C[e],w[C[e]].menu_status}),M.sort(function(e,i){return e=e.menu_order,i=i.menu_order,e-i});var q=M;r.set("mainMenuOrder",q),r.set("menuVisibilityList",w)}}if(null!=this.get("commonParamListDTO")){var x=this.get("commonParamListDTO");$.each(x,function(e){"EXTERNAL"==x[e].paramCode?r.set("ExternalPaymentMinAmount",x[e].paramDescription):"OWNACCOUNTS"==x[e].paramCode?r.set("OwnAccountsMinAmount",x[e].paramDescription):"SARIE"==x[e].paramCode?r.set("SarieMinAmount",x[e].paramDescription):"WITHINSHB"==x[e].paramCode?r.set("WithinShbMinAmount",x[e].paramDescription):"SIOWNACCOUNTS"==x[e].paramCode?r.set("SIOwnAccountsMinAmount",x[e].paramDescription):"SIWITHINSHB"==x[e].paramCode?r.set("SIWithinShbMinAmount",x[e].paramDescription):"SISARIE"==x[e].paramCode?r.set("SISarieMinAmount",x[e].paramDescription):"SIEXTERNAL"==x[e].paramCode?r.set("SIExternalMinAmount",x[e].paramDescription):"CHARITY"==x[e].paramCode?r.set("CharityMinAmount",x[e].paramDescription):"SICHARITY"==x[e].paramCode&&r.set("SICharityMinAmount",x[e].paramDescription)})}if(this.get("usermpinflag"),this.get("appSessionId")&&(appSessionId=this.get("appSessionId"),r.set("appSessionId",appSessionId)),this.get("appDeviceId")?(appDeviceId=this.get("appDeviceId"),r.set("appDeviceId",appDeviceId)):r.set("appDeviceId",""),userName=$("#userName").val(),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("mpinStatus")?(mpinStatus=this.get("mpinStatus"),r.set("mpinStatus",mpinStatus)):mpinStatus="","0"==mpinStatus||"00"==mpinStatus?r.set("MPINFLAG","Y"):r.set("MPINFLAG","N"),this.get("error")){var E=this.get("error");r.set("errordesc",E.errorDescription),r.set("errorCode",E.errorCode)}else r.set("errordesc","FAILURE"),r.set("errorCode","")}});return o});