define(["jquery","underscore","Backbone","text!views/requests/applyreadycashrequestresult.tpl"],function(e,t,n,r){var i=new EncryptedLocalStorage("secret"),s=n.View.extend({el:"#mobcontent",events:{},initialize:function(){},render:function(){return hideSpinner(),i.set("currentPage","transferConfirm"),this.$el.html(t.template(r)).i18n(),this},doanotherrequest:function(t){t.preventDefault(),e("#servicerequestMnu").trigger("click")}});return s});