define(["jquery","underscore","Backbone","jqmapservice","text!views/applanding/locator/direction.tpl"],function(e,i,t,n,r){var o=new EncryptedLocalStorage("secret"),a=t.View.extend({el:"#container",events:{"click #listView":"locatorsearchresult","click #mapView":"locatorsearchmap","click #listViewCity":"locatorByCityMapView","click #mapViewCity":"searchByCityMapView"},render:function(i,t){function n(e){onGeoLocationError(e)}function r(n){hideSpinner();var r=(n.coords,o.get("BranchAtmListview"));latitude=n.coords.latitude,longitude=n.coords.longitude;var a=new google.maps.LatLng(latitude,longitude);cachedData=r;e("#map_canvas").gmap({center:a,zoom:12,callback:function(n){var r=this;r.refresh(),r.clear("markers"),e("#directions").empty(),r.displayDirections({origin:a,destination:new google.maps.LatLng(i,t),travelMode:google.maps.DirectionsTravelMode.DRIVING},{panel:document.getElementById("directions")},function(i,t){"OK"===t?e("#directionDiv").show():e("#directionDiv").hide()})}})}showSpinner(),e("#directionDiv").hide(),this.directioncompile(),navigator.geolocation&&(showSpinner(),navigator.geolocation.getCurrentPosition(r,n,{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4}))},directioncompile:function(){return hideSpinner(),this.$el.html(i.template(r,{})).i18n(),this.$el.trigger("create"),this},locatorsearchresult:function(e){e.preventDefault(),t.history.fragment=null,t.history.navigate("#/searchresult")},locatorsearchmap:function(){t.history.navigate("#/mapview")},locatorByCityMapView:function(e){e.preventDefault(),t.history.fragment=null,t.history.navigate("#/searchbycity")},searchByCityMapView:function(){t.history.navigate("#/searchcitymap")},disposeView:function(e){return t.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});