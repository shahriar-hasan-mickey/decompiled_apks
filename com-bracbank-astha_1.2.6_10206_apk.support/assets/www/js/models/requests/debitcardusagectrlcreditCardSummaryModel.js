define(["underscore","Backbone"],function(t,e){var c=new EncryptedLocalStorage("secret"),r=e.Model.extend({myaccounts:[],mycreditcards:[],creditcardsize:[],myloans:[],mydeposit:[],errordet:[],initialize:function(){if(this.get("casaAccountList")?myaccounts=this.get("casaAccountList"):myaccounts="",this.get("creditCardAccountList")){if(mycreditcards=this.get("creditCardAccountList"),c.set("tocreditcard",mycreditcards),void 0!=mycreditcards&&null!=mycreditcards&&""!=mycreditcards){c.set("cccardacctno",mycreditcards[0].accountNumber),c.set("acctno",mycreditcards[0].creditCardNoMasked),c.set("acctnomask",mycreditcards[0].creditCardNoMasked),c.set("expirydate",mycreditcards[0].expiryDate),c.set("cccardacct",mycreditcards[0].creditCardNoMasked),c.set("billingCycleDate",mycreditcards[0].billingCycleDate),c.set("availableCreditLimit",mycreditcards[0].availableCreditLimit),c.set("frmacntval",mycreditcards[0].accountNumber),c.set("creditCardActNo",mycreditcards[0].creditCardActNo),c.set("eppeligiblecardflag",mycreditcards[0].eppeligiblecardflag),c.set("cctypecode",mycreditcards[0].cctypecode),c.set("shortNamesummary",mycreditcards[0].shortName);var t=[];mycreditcards.forEach(function(e){t.push(e.eppeligiblecardflag),c.set("eligibleCardsIndex",t)})}}else mycreditcards="",creditcardsize="empty";this.get("eppccminlmt")&&(eppccminlmt=this.get("eppccminlmt"),c.set("eppccminlmt",eppccminlmt)),this.get("eppccmintranslmt")&&(eppccmintranslmt=this.get("eppccmintranslmt"),c.set("ccmintranslmt",eppccmintranslmt)),this.get("loanAccountList")?myloans=this.get("loanAccountList"):myloans="",this.get("depositAccountList")?mydeposit=this.get("depositAccountList"):mydeposit="",this.get("currency")?currency=this.get("currency"):currency=null,this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")?(errordet=this.get("error"),c.set("errordesc",errordet.errorDescription),c.set("errorcode",errordet.errorCode)):(c.set("errordesc",""),c.set("errorcode","")),c.set("errback","accounts")}});return r});