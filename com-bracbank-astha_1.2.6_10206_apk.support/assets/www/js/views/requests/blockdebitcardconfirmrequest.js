define(["jquery","underscore","Backbone","collections/requests/blockDebitCardRequestPostingCollections","text!views/requests/blockdebitcardconfirmrequest.tpl","text!views/requests/blockdebitcardrequestresult.tpl"],function(e,t,i,n,r,o){var s=new EncryptedLocalStorage("secret"),c=i.View.extend({el:"#mobcontent",events:{"click #managedebitcardrequestconfirm":"gotomanagedebitcardrequestposting"},initialize:function(){},render:function(){var i=(s.get("blockCardNo"),s.get("blockCardMaskNo")),n=e("#exp").val();s.get("blockmmyy");return hideSpinner(),this.$el.html(t.template(r,{frmacno:i,mmyy:n})).i18n(),this.$el.trigger("create"),this},gotomanagedebitcardrequestposting:function(){this.postingcompile()},postingcompile:function(){return hideSpinner(),this.undelegateEvents(),i.history.navigate("#/blockDBTOTP"),s.set("currentPage","transferConfirm"),this},errorresponse:function(){hideSpinner(),i.history.navigate("#/exception")},disposeView:function(e){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});