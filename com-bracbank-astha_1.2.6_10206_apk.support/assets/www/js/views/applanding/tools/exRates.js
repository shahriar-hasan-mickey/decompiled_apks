define(["jquery","underscore","Backbone","collections/tools/exRatesCollections","text!views/applanding/tools/exRates.tpl"],function(e,t,n,o,r){var i=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#preloginmobcontent",events:{"click #currencyconvert":"currencyconvert","click #tools":"tools"},render:function(){var t=this,n=function(e){t.showRegTemplate()},r=function(e){t.errorresponse()};showSpinner(),t.collection=new o,t.collection.fetch({data:e.param({login_type:"prelogin"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?n(e):r(e)}})},showRegTemplate:function(){hideSpinner(),e(this.el).html(t.template(r)).i18n(),e(this.el).trigger("create")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}}));return i});