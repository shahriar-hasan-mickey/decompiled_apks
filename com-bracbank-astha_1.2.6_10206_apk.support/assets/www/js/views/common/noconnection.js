define(["jquery","underscore","Backbone","models/common/exceptionModel","text!views/common/noconnection.tpl"],function(e,n,t,i,o){var c=t.View.extend({events:{},initialize:function(){this.on("invalid",function(e,n){})},render:function(){return this.model=new i,this.$el.html(n.template(o)).i18n(),this}});return c});