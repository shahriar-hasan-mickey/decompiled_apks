define(["jquery","underscore","Backbone","collections/more/bblAppsCollections","collections/more/logBBLAppInfoCollections","text!views/BBLApps/BBLPartnerApps.tpl","views/errors/exception"],function(e,t,a,n,i,o,s){var r=new EncryptedLocalStorage("secret"),c=a.View.extend({el:"#container",events:{"click .navigateClass":"logBBLAppInfo"},initialize:function(){},render:function(){var t=this,a=function(e){hideSpinner(),t.loadBBLAppsTemplate()},i=function(e){hideSpinner(),t.errorresponse()};showSpinner(),t.collection=new n,t.collection.fetch({data:e.param({access_token:r.get("access_token")}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?a(e):i(e)},error:i})},loadBBLAppsTemplate:function(){this.$el.html(t.template(o)),e("html").removeClass().addClass("app")},logBBLAppInfo:function(t){t.stopImmediatePropagation();var a=e(t.currentTarget).attr("label"),n=e(t.currentTarget).attr("url"),o=this,s=function(e){hideSpinner(),o.gotoBBLPartnerApps(t)},c=function(e){hideSpinner(),o.errorresponse()};showSpinner(),o.collection=new i,o.collection.fetch({data:e.param({access_token:r.get("access_token"),bbl_code:a,bblurl:n}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?s(e):c(e)},error:c})},gotoBBLPartnerApps:function(t){t.stopImmediatePropagation();var a="",n=this,i=(r.get("bblURLs"),e(t.currentTarget).attr("id"));if("bracEPLiDesk"==i)a=r.get("iDeskUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("premiumBanking"==i)a=r.get("pbUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("womenBanking"==i)a=r.get("womenBanking"),r.set("navigationURL",a),n.navigateToURL(t);else if("sohoj"==i)a=r.get("ekycUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("bblWebsite"==i)a=r.get("bblUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("formsAndSOC"==i)a=r.get("socUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("seba"==i)a=r.get("sebaUrl"),r.set("navigationURL",a),n.navigateToURL(t);else if("subidha"==i){var o=/iPad|iPhone|iPod/.test(navigator.userAgent);o?(a=r.get("iosAppStoreUrl"),r.set("navigationURL",a)):(a=r.get("andriodPlayStroreUrl"),r.set("navigationURL",a)),n.navigateToAppOrStore(t)}else"agami"==i?(a=r.get("agamiUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaPlay"==i?(a=r.get("asthaPlayUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"taxReturn"==i?(a=r.get("taxUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaMusic"==i?(a=r.get("asthaMusicUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaLearning"==i?(a=r.get("asthaLearningUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaIslamic"==i?(a=r.get("asthaIslamicUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaTravel"==i?(a=r.get("asthaTravelUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthNews"==i?(a=r.get("asthaNewsUrl"),r.set("navigationURL",a),n.navigateToURL(t)):"asthaBook"==i&&(a=r.get("asthaBookUrl"),r.set("navigationURL",a),n.navigateToURL(t))},navigateToURL:function(e){e.stopImmediatePropagation();var t=r.get("navigationURL");if(null!=t&&void 0!=t&&""!=t){var a=/iPad|iPhone|iPod/.test(navigator.userAgent);a?window.location.href=t:window.open(t,"_system","location=no")}},navigateToAppOrStore:function(e){e.stopImmediatePropagation();var t=/iPad|iPhone|iPod/.test(navigator.userAgent),a=r.get("navigationURL");t?appAvailability.check("asthaApp-linking://",function(){window.plugins.launcher.launch({uri:"asthaApp-linking://"},function(e){},function(e){})},function(){window.location.href=a}):appAvailability.check("com.bracbank.shubidha",function(){window.plugins.launcher.launch({packageName:"com.bracbank.shubidha"},function(e){},function(e){})},function(){window.open(a,"_system","location=no")})},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return a.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return c});