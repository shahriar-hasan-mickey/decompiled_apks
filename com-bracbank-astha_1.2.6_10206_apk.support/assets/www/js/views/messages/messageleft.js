define(["jquery","underscore","Backbone","text!views/messages/messageleft.tpl"],function(e,t,n,i){var r=n.View.extend({el:"#contentwrap",events:{},initialize:function(){},render:function(){return this.$el.html(t.template(i)).trigger("create"),e("#spinner").hide(),this}});return r});