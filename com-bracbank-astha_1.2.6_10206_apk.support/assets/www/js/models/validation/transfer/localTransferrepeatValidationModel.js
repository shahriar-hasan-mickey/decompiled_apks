define(["underscore","Backbone"],function(t,e){var a=e.Model.extend({url:function(){return this.instanceUrl},validation:{paymentAmount:[{required:!0,msg:"validation.transfer.amountisnotnull"},{pattern:"number",msg:"validation.transfer.validamount"}],startDate:{required:!0,msg:"validation.transfer.startdate"},endDate:{required:!0,msg:"validation.transfer.enddate"},freqList:{required:!0,msg:"validation.transfer.freqList"},fromAccountId:{fromtoaccountvalidation:!0,msg:"validation.transfer.fromtoaccountmsg"},purposetransfer:{required:!0,msg:"validation.transfer.purposetransfernull"},payDate:{required:!0,msg:"validation.transfer.paydateempty"},paydetone:{required:!0,msg:"validation.transfer.payoneempty"},paydettwo:{required:!0,msg:"validation.transfer.paytwoempty"},sendnarate:{required:!0,msg:"validation.transfer.narateempty"}},initialize:function(t){this.url=t.url}});return a});