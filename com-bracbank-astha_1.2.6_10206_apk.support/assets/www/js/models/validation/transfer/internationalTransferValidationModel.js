define(["underscore","Backbone"],function(t,n){var r=n.Model.extend({url:function(){return this.instanceUrl},validation:{paymentAmount:[{required:!0,msg:"validation.transfer.amountisnotnull"},{pattern:"number",msg:"validation.transfer.validamount"}],fromAccountId:{fromtoaccountvalidation:!0,msg:"validation.transfer.fromtoaccountmsg"},purposetransfer:{required:!0,msg:"validation.transfer.purposetransfernull"},startDate:{required:!0,msg:"validation.transfer.startdate"},endDate:{required:!0,msg:"validation.transfer.enddate"}},initialize:function(t){this.url=t.url}});return r});