define(["jquery","underscore","Backbone","text!views/sketchdemo/sketchdemo.tpl","text!views/sketchdemo/sketchdemo_ar.tpl","text!views/sketchdemo/sketchdemo_en.tpl"],function(s,e,c,t,l,r){var i=new EncryptedLocalStorage("secret"),o=c.View.extend({el:"#container",events:{"click #ardemo":"ShowArbDemo","click #engdemo":"ShowEngDemo"},render:function(){window.localStorage.setItem("firstTimeDemoCheck","Y");var c=window.localStorage.getItem("WithInPreMore");"Y"==c?(changeStatusBarColor("initial"),s("html").addClass("loginbg"),"en-US"==s.i18n.lng()?this.ShowEngDemo():this.ShowArbDemo()):this.$el.html(e.template(t))},ShowArbDemo:function(){var c="";try{c=getfromStorage("current_theme")}catch(t){c="DEF"}"DEF"==c||null==c?(loadjscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_light.css","css"),removejscssfile("css/style_ar_dark.css","css"),removejscssfile("css/style.css","css"),removejscssfile("css/style_en_light.css","css"),removejscssfile("css/style_en_dark.css","css")):"LIT"==c?(loadjscssfile("css/style_ar_light.css","css"),removejscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_dark.css","css"),removejscssfile("css/style.css","css"),removejscssfile("css/style_en_light.css","css"),removejscssfile("css/style_en_dark.css","css")):"DRK"==c&&(loadjscssfile("css/style_ar_dark.css","css"),removejscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_light.css","css"),removejscssfile("css/style.css","css"),removejscssfile("css/style_en_light.css","css"),removejscssfile("css/style_en_dark.css","css")),s.i18n.init({lng:"en-AR"}),i.set("lang_id",s.i18n.lng()),i.set("language_id",s.i18n.lng());var r=s.i18n.lng();window.localStorage.setItem("setLanguageId",r),this.$el.html(e.template(l)),this.undelegateEvents()},ShowEngDemo:function(){var c="";try{c=getfromStorage("current_theme")}catch(t){c="DEF"}"DEF"==c||null==c?(loadjscssfile("css/style.css","css"),removejscssfile("css/style_en_light.css","css"),removejscssfile("css/style_en_dark.css","css"),removejscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_light.css","css"),removejscssfile("css/style_ar_dark.css","css")):"LIT"==c?(loadjscssfile("css/style_en_light.css","css"),removejscssfile("css/style.css","css"),removejscssfile("css/style_en_dark.css","css"),removejscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_light.css","css"),removejscssfile("css/style_ar_dark.css","css")):"DRK"==c&&(loadjscssfile("css/style_en_dark.css","css"),removejscssfile("css/style_en_light.css","css"),removejscssfile("css/style.css","css"),removejscssfile("css/style_ar.css","css"),removejscssfile("css/style_ar_light.css","css"),removejscssfile("css/style_ar_dark.css","css")),s.i18n.init({lng:"en-US"}),i.set("lang_id",s.i18n.lng()),i.set("language_id",s.i18n.lng());var l=s.i18n.lng();window.localStorage.setItem("setLanguageId",l);var o=i.get("device.platform");if("Android"==o){var n=this;setTimeout(function(){n.$el.html(e.template(r)),n.undelegateEvents()},100)}else{var n=this;setTimeout(function(){n.$el.html(e.template(r)),n.undelegateEvents()},500)}},errorresponse:function(){hideSpinner(),c.history.navigate("#/exception")}});return o});