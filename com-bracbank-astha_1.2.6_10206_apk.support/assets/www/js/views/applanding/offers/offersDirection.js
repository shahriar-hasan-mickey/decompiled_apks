define(["jquery","underscore","Backbone","jqmapservice","text!views/applanding/offers/offersDirection.tpl"],function(e,t,n,i,o){var r=new EncryptedLocalStorage("secret"),a=n.View.extend({el:"#preloginmobcontent",events:{},render:function(e,t,n){showSpinner(),this.directioncompile(e,t,n)},directioncompile:function(n,i,a){function c(e){onGeoLocationError(e)}function s(t){hideSpinner();var o,c,s=(t.coords,r.get("BranchAtmList")),d=r.get("app.context.path");-1!=d.indexOf("dev")?(o="24.669170",c="46.70533"):(o=t.coords.latitude,c=t.coords.longitude);var l=new google.maps.LatLng(o,c);cachedData=s;r.get("ResultsAtmList"),parseInt(n);e("#map_canvas").gmap({center:l,zoom:12,callback:function(t){var n=this;n.refresh(),n.clear("markers"),e("#directions").empty(),n.displayDirections({origin:l,destination:new google.maps.LatLng(i,a),travelMode:google.maps.DirectionsTravelMode.DRIVING},{panel:document.getElementById("directions")},function(t,n){"OK"===n?e("#directions").show():e("#directions").hide()})}})}hideSpinner(),this.$el.html(t.template(o,{})).i18n(),navigator.geolocation?(showSpinner(),navigator.geolocation.getCurrentPosition(s,c,{enableHighAccuracy:!0,timeout:1e4,maximumAge:1e4})):alert("Please Enable your GPS and try again")},disposeView:function(e){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return a});