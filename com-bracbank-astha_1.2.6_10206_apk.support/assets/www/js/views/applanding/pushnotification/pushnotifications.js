define(["jquery","underscore","Backbone","collections/pushnotification/pushnotificationsCollection","text!views/applanding/pushnotification/pushnotifications.tpl"],function(e,t,n,i,o){var r=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#preloginmobcontent",events:{"click #offersshow":"offersshow"},update:function(){r.set("pushNotifyDetailsDTOlargebanner",""),r.set("pushNotifyDetailsDTOtargeturl","");var t=this,n=(getDeviceId(),function(e){t.showpromotionTemplate()}),o=function(e){t.errorresponse()};showSpinner(),t.collection=new i([],{}),timestamp=(new Date).getTime(),"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR"),t.collection.fetch({data:e.param({language:language}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(r.get("calltimeout")),success:function(e){"0000"==ackStatus?n(e):o(e)},error:o})},offersearchmap:function(e){e.preventDefault(),n.history.fragment=null,n.history.navigate("#/offersearchmap")},promotiondet:function(){var t=r.get("promotionsListDTO");""!=t&&e.each(t,function(e){var i=(t[e],parseInt(e));r.set("index",i),e>=0&&(n.history.fragment=null,n.history.navigate("#/promotiondetails/"+e))})},promotions:function(){var t=this,n=getDeviceId();"en-US"==e.i18n.lng()?language="EN":"en-AR"==e.i18n.lng()&&(language="AR");var o=function(e){t.showpromotionTemplate()},a=function(e){t.errorresponse()};t.collection=new i([],{}),timestamp=(new Date).getTime(),t.collection.fetch({data:e.param({login_type:"prelogin",paramcode:"PROMO",device_id:n,language:language,requestid:timestamp}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(r.get("calltimeout")),success:function(e){"0000"==ackStatus?o(e):a(e)},error:a})},showpromotionTemplate:function(){return this.$el.html(t.template(o,{})).i18n(),this.$el.trigger("create"),hideSpinner(),this},offersshow:function(e){e.preventDefault(),n.history.fragment=null,n.history.navigate("#/offers",!0)},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});