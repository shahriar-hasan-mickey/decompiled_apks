define(["underscore","Backbone"],function(t,i){var n=new EncryptedLocalStorage("secret"),r=i.Model.extend({inquirySOList:[],inquiryownList:[],inquiryextList:[],inquirylocalList:[],inquirywithinList:[],sofreqList:[],errordet:[],initialize:function(){if(this.get("inquiryStandingOrderList")?inquirySOList=this.get("inquiryStandingOrderList"):inquirySOList="",this.get("standingOrderInformations")?(standingOrderInformations=this.get("standingOrderInformations"),n.set("standinginstructionInfo",standingOrderInformations)):(standingOrderInformations="",n.set("standinginstructionInfo","")),this.get("stoFromDate")?(stoFromDate=this.get("stoFromDate"),n.set("stoFromDate",stoFromDate)):(stoFromDate="",n.set("stoFromDate","")),this.get("stoAmount")?(stoAmount=this.get("stoAmount"),n.set("stoAmount",stoAmount)):(stoAmount="",n.set("stoAmount","")),this.get("stocumulativeamount")?(stocumulativeamount=this.get("stocumulativeamount"),n.set("stocumulativeamount",stocumulativeamount)):(stocumulativeamount="",n.set("stocumulativeamount","")),this.get("stoExpatIDTypeList")){stoExpatIDTypeList=this.get("stoExpatIDTypeList");var t=[];stoExpatIDTypeList.length?stoExpatIDTypeList.forEach(function(i){t.push(i.expat_IDTYPE),n.set("stoExpatIDTypeList",t)}):n.set("stoExpatIDTypeList",t)}else stoExpatIDTypeList=[],n.set("stoExpatIDTypeList",[]);if(this.get("inquiryOwnStandingOrderList")?(inquiryOwnStandingOrderList=this.get("inquiryOwnStandingOrderList"),inquiryownList=inquiryOwnStandingOrderList.inquiryStandingOrderList):(inquiryOwnStandingOrderList="",inquiryownList=""),this.get("inquiryWithinStandingOrderList")?(inquiryWithinStandingOrderList=this.get("inquiryWithinStandingOrderList"),inquirywithinList=inquiryWithinStandingOrderList.inquiryStandingOrderList):(inquiryWithinStandingOrderList="",inquirywithinList=""),this.get("inquiryExtStandingOrderList")?(inquiryExtStandingOrderList=this.get("inquiryExtStandingOrderList"),inquiryextList=inquiryExtStandingOrderList.inquiryStandingOrderList):inquiryextList="",this.get("inquiryLocalStandingOrderList")?(inquiryLocalStandingOrderList=this.get("inquiryLocalStandingOrderList"),inquirylocalList=inquiryLocalStandingOrderList.inquiryStandingOrderList):inquirylocalList="",this.get("sofreqList")?sofreqList=this.get("sofreqList"):sofreqList="",this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")){var i=this.get("error");n.set("errordesc",i.errorDescription),n.set("errorcode",i.errorCode)}else n.set("errordesc",""),n.set("errorcode","");n.set("errback","wealth")}});return r});