define(["underscore","Backbone"],function(n,i){var e=i.Model.extend({url:function(){return this.instanceUrl},validation:{username:[{required:!0,msg:"validation.newregistration.usernamenotnull"},{minLength:8,msg:"validation.newregistration.usernameminlengtherror"}],password:[{required:!0,msg:"validation.newregistration.pwdnotnull"},{minLength:8,msg:"validation.newregistration.pwdminlengtherror"}],confpassword:[{required:!0,msg:"validation.newregistration.confpwdnotnull"},{minLength:8,msg:"validation.newregistration.pwdminlengtherror"}]},initialize:function(n){this.url=n.url}});return e});