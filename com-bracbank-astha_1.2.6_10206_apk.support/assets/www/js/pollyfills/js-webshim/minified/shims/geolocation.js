!function(o){var e=window.webshims;setTimeout(function(){e.isReady("geolocation",!0)});var t=function(){setTimeout(function(){throw"document.write is overwritten by geolocation shim. This method is incompatible with this plugin"},1)},i=0,n=e.cfg.geolocation||{};navigator.geolocation||(navigator.geolocation={}),o.extend(navigator.geolocation,function(){var a,c={getCurrentPosition:function(i,c,r){var s,u,l,d=2,g=function(){if(!l)if(a){if(l=!0,i(o.extend({timestamp:(new Date).getTime()},a)),f(),window.JSON&&window.sessionStorage)try{sessionStorage.setItem("storedGeolocationData654321",JSON.stringify(a))}catch(e){}}else c&&!d&&(l=!0,f(),c({code:2,message:"POSITION_UNAVAILABLE"}))},m=function(){d--,w(),g()},f=function(){o(document).off("google-loader",f),clearTimeout(u),clearTimeout(s)},w=function(){if(a||!window.google||!google.loader||!google.loader.ClientLocation)return!1;var e=google.loader.ClientLocation;return a={coords:{latitude:e.latitude,longitude:e.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:o.extend({streetNumber:"",street:"",premises:"",county:"",postalCode:""},e.address)},!0},y=function(){if(!a&&(w(),!a&&window.JSON&&window.sessionStorage))try{a=sessionStorage.getItem("storedGeolocationData654321"),a=a?JSON.parse(a):!1,a.coords||(a=!1)}catch(o){a=!1}};return y(),a?void setTimeout(g,1):n.confirmText&&!confirm(n.confirmText.replace("{location}",location.hostname))?void(c&&c({code:1,message:"PERMISSION_DENIED"})):(o.ajax({url:"",dataType:"jsonp",cache:!0,jsonp:"callback",success:function(o){d--,o&&(a=a||{coords:{latitude:o.latitude,longitude:o.longitude,altitude:null,accuracy:43e3,altitudeAccuracy:null,heading:parseInt("NaN",10),velocity:null},address:{city:o.city,country:o.country_name,countryCode:o.country_code,county:"",postalCode:o.zipcode,premises:"",region:o.region_name,street:"",streetNumber:""}},g())},error:function(){d--,g()}}),clearTimeout(u),window.google&&window.google.loader?d--:u=setTimeout(function(){n.destroyWrite&&(document.write=t,document.writeln=t),o(document).one("google-loader",m),e.loader.loadScript("",!1,"google-loader")},800),void(s=r&&r.timeout?setTimeout(function(){f(),c&&c({code:3,message:"TIMEOUT"})},r.timeout):setTimeout(function(){d=0,g()},1e4)))},clearWatch:o.noop};return c.watchPosition=function(o,e,t){return c.getCurrentPosition(o,e,t),i++,i},c}()),e.isReady("geolocation",!0)}(webshims.$);