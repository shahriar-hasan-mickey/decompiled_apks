define(["underscore","Backbone"],function(e,t){var r=new EncryptedLocalStorage("secret"),s=t.Model.extend({timeDepositRatesListDTO:[],initialize:function(){if(this.get("ackStatus")?ackStatus=this.get("ackStatus"):ackStatus="",this.get("depositTypes")?(depositTypes=this.get("depositTypes"),depositTypesdes=depositTypes.productList,r.set("depositTypesdes",depositTypesdes)):(depositTypes="",depositTypesdes=""),this.get("currencyList")?currencyList=this.get("currencyList"):currencyList="",this.get("range1")?range1=this.get("range1"):range1="",this.get("range2")?range2=this.get("range2"):range2="",this.get("range3")?range3=this.get("range3"):range3="",this.get("range4")?range4=this.get("range4"):range4="",this.get("buyrate")?buyrate=this.get("buyrate"):buyrate="",this.get("sellrate")?sellrate=this.get("sellrate"):sellrate="",this.get("currencyname")?currencyname=this.get("currencyname"):currencyname="",this.get("isocurrcode")?isocurrcode=this.get("isocurrcode"):isocurrcode="",this.get("error")){var e=this.get("error");r.set("errordesc",e.errorDescription),r.set("errorcode",e.errorCode)}else r.set("errorcode",""),r.set("errordesc","");timestamp=(new Date).getTime(),r.set("errback","more")}});return s});