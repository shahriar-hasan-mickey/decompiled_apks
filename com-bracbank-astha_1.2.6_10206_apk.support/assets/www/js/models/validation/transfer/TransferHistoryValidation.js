define(["underscore","Backbone"],function(n,t){var o=t.Model.extend({url:function(){return this.instanceUrl},validation:{fromAccountId:{fromtoaccountvalidation:!0,msg:"validation.transfer.fromtoaccountmsg"},sariebank:{fromtoaccountvalidation:!0,msg:"validation.transfer.fromtoaccountmsg"}},initialize:function(n){this.url=n.url}});return o});