define(["jquery","underscore","Backbone","collections/requests/applyFinanceRequestPostingCollections","text!views/requests/applypersonalfinancerequestresult.tpl"],function(e,t,n,r,i){var s=new EncryptedLocalStorage("secret"),o=n.View.extend({el:"#mobcontent",events:{"click #postingrequest":"doanotherrequest"},initialize:function(){},render:function(){return s.set("promoid",""),hideSpinner(),s.set("currentPage","transferConfirm"),this.$el.html(t.template(i)).i18n(),this},doanotherrequest:function(t){t.preventDefault(),e("#servicerequestMnu").trigger("click")}});return o});