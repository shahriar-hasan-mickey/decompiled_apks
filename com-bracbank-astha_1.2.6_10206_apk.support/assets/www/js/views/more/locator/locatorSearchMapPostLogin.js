define(["jquery","underscore","Backbone","jqmapservice","text!views/more/locator/locatorSearchMapPostLogin.tpl"],function(e,t,n,o,r){var i=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#container",events:{"click #listView":"locatorsearchresult"},render:function(){showSpinner(),this.showRegTemplate(),e("html").removeClass().addClass("preLog")},showRegTemplate:function(){function o(e){var t=/iPad|iPhone|iPod/.test(navigator.userAgent);t||n.history.navigate("#/locator"),onGeoLocationError(e)}function a(t){hideSpinner();var n,o,r=(t.coords,i.get("BranchAtmListview"));i.get("app.context.path");n=t.coords.latitude,o=t.coords.longitude,showSpinner();var a=(i.get("BranchAtmName"),new google.maps.LatLng(n,o));cachedData=r,e("#map_canvas").empty();var c="images/common/map/pin_blue.png";e("#map_canvas").gmap({center:a,zoom:12,callback:function(t){var n=this;n.refresh(),n.clear("markers"),e(cachedData).each(function(e,t){n.addMarker({position:new google.maps.LatLng(t.latitude,t.longitude),bounds:!1,icon:c}).click(function(e,o){n.openInfoWindow({content:t.branchATMName},this)})}),hideSpinner()}})}hideSpinner(),this.$el.html(t.template(r,{})).i18n(),navigator.geolocation&&(showSpinner(),navigator.geolocation.getCurrentPosition(a,o,{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4}))},locatorsearchresult:function(e){e.preventDefault(),n.history.fragment=null,n.history.navigate("#/searchresult")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});