define(["jquery","underscore","Backbone","views/birthday/giftcategory","views/transfer/transfer","text!views/birthday/birthday.tpl"],function(e,r,t,n,i,s){var c=t.View.extend({el:".iscroll-content",events:{"click #sendgift":"sendgift","click #transfermoney":"transfermoney"},initialize:function(){},render:function(){return this.$el.html(r.template(s)),e("#spinner").hide(),this},sendgift:function(r){r.preventDefault(),e("#spinner").show(),this.subview=new n,this.subview.render().$el.trigger("create").trigger("refresh"),e("#content").iscrollview("refresh")},transfermoney:function(r){r.preventDefault(),e("#spinner").show(),this.subview=new i,this.subview.render().$el.trigger("create"),e("#content").iscrollview("refresh")}});return c});