define(["underscore","Backbone"],function(e,l){var i=new EncryptedLocalStorage("secret"),r=l.Model.extend({serviceType:[],idType:[],billerLimit:[],errordet:[],initialize:function(){if(this.get("errorCode")?errorCode=this.get("errorCode"):errorCode="",this.get("billerServiceListDTO")?(billerDetails=this.get("billerServiceListDTO"),billerMobLenMax=billerDetails[0].strBillerMobLenMax,i.set("billerMobLenMax",billerMobLenMax),billerIdLenMax=billerDetails[0].strBillerIdLenMax,i.set("billerIdLenMax",billerIdLenMax),billerSubLenMax=billerDetails[0].strBillerSubLenMax,i.set("billerSubLenMax",billerSubLenMax),billerMobLenMin=billerDetails[0].strBillerMobLenMin,i.set("billerMobLenMin",billerMobLenMin),billerIdLenMin=billerDetails[0].strBillerIdLenMin,i.set("billerIdLenMin",billerIdLenMin),billerSubLenMin=billerDetails[0].strBillerSubLenMin,i.set("billerSubLenMin",billerSubLenMin)):(billerDetails="",billerMobLenMax="",i.set("billerMobLenMax",billerMobLenMax),billerIdLenMax="",i.set("billerIdLenMax",billerIdLenMax),billerSubLenMax="",i.set("billerSubLenMax",billerSubLenMax),billerMobLenMin="",i.set("billerMobLenMin",billerMobLenMin),billerIdLenMin="",i.set("billerIdLenMin",billerIdLenMin),billerSubLenMin="",i.set("billerSubLenMin",billerSubLenMin)),i.set("billerDetails_cache",billerDetails),this.get("serviceType")?serviceType=this.get("serviceType"):serviceType="",this.get("billerLimit")){if(billerLimit=this.get("billerLimit"),i.set("billerLimit",billerLimit),null!=billerLimit&&""!=billerLimit&&void 0!=billerLimit){dbFlag=billerLimit[0].dbFlag,i.set("dbFlag",dbFlag),billerMinValue=billerLimit[0].billerMinValue,i.set("lower",billerMinValue),billerMaxValue=billerLimit[0].billerMaxValue,i.set("upper",billerMaxValue),demon=billerLimit[0].denominationValue;var e=[];e=demon.split(",");var l=e,r=l;i.set("demon",r)}}else dbFlag="",i.set("dbFlag",dbFlag),billerMinValue="",i.set("lower",billerMinValue),billerMaxValue="",i.set("upper",billerMaxValue),demon="",i.set("demon",demon);if(this.get("idType")?idType=this.get("idType"):idType="",i.set("idType_cache",idType),this.get("ackStatus")&&(ackStatus=this.get("ackStatus")),this.get("error")){var t=this.get("error");i.set("errordesc",t.errorDescription),i.set("errorcode",t.errorCode)}else i.set("errordesc",""),i.set("errorcode","");timestamp=(new Date).getTime(),i.set("errback","sadad")}});return r});