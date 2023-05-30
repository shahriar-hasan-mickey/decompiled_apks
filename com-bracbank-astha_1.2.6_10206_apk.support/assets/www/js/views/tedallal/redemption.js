define(["jquery","underscore","Backbone","collections/tedallal/rewardSummaryCollections","models/validation/tedallal/tedallalValidationModel","text!views/tedallal/redemption.tpl"],function(e,t,o,n,i,a){var s=new EncryptedLocalStorage("secret"),r=o.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"focus #voucherCount":"showHideButtons","focus #pointRedeem":"showHideButtons","click #validatePoints":"validatePoints","click #submitPoints":"submitPoints","click #cancelPoints":"cancelPoints","click #option2":"ccfee"},render:function(){var t=s.get("lmsreqid"),o=(s.get("myaccounts"),s.get("isAccountHolder"));if("Y"==o){showSpinner(),s.set("showRedemption",!0);var i=this;i.collection=new n([],{});var a=function(e){i.showRewardPoints()},r=function(e){i.errorresponse()};i.collection.fetch({data:e.param({channelcode:"MOBILE",requestdatetime:"",requestusername:t}),dataType:"json",type:"POST",timeout:parseInt(s.get("calltimeout")),cache:!1,success:function(e){"0000"==ackStatus?a(e):r(e)},error:r})}else s.set("showRedemption",!1),this.showRewardPoints()},showHideButtons:function(){e("#validatePoints").show(),e("#submitPoints").hide(),e("#pointOveralert").hide(),e("#pointalert").show(),e("#pointalert").removeClass("alert-danger").addClass("alert-info")},showRewardPoints:function(){hideSpinner(),this.$("#mobcontent").html(t.template(a))},validatePoints:function(t){e(".amt2").hide(),e("#amountBelowLimit").hide(),e("#pointOveralert").hide(),e("#pointalert").show(),e("#pointalert").removeClass("alert-danger").addClass("alert-info"),this.model=new i({url:"json/"}),o.Validation.bind(this);var n=this.$("form").serializeObject();if(this.model.set(n,{validate:!0})){this.model.clear(),o.Validation.unbind(this),t.preventDefault();var a=e("#voucherCount").val(),r=e("#pointRedeem").val(),l=e("#avaliablepoints").val();s.set("avilPoints",l);var c=checkAmount(e.formatNumber(l,{format:"#,###",locale:"us"})),d=parseFloat(a),u=parseFloat(r),m=(parseFloat(c),u%1e4);if(1e4>u||m>0)return e("#pointOveralert").hide(),e("#pointalert").show(),e("#pointalert").removeClass("alert-info").addClass("alert-danger"),!1;var h=d*u,v=h/100;if(h>l)return e("#pointalert").hide(),e("#pointOveralert").show(),!1;h=0==h?"0":checkAmount(e.formatNumber(h,{format:"#,###",locale:"us"})),s.set("tot_Rew_Points",h),e("#PointsAmount").text(h),e("#PointsAmountsar").text(v),e(".amt2").show(),e("#PointsAmount").show(),e("#PointsAmountsar").show(),e("#validatePoints").hide(),e("#submitPoints").show()}else e(".amt2").hide()},submitPoints:function(){var t=new Array,n=e("#voucherCount").val(),i=e("#pointRedeem").val(),a=e("#PointsAmount").text();t[0]=n,t[1]=i,t[2]=a,s.set("lmsrewards",t),o.history.navigate("#/verifyredemption")},ccfee:function(){e("#option2").addClass("active"),e("#option1").removeClass("active"),o.history.navigate("#/ccfee")},cancelPoints:function(){},errorresponse:function(){hideSpinner(),o.history.navigate("#/exception")}});return r});