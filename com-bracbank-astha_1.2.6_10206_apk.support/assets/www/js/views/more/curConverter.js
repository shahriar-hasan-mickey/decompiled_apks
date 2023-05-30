define(["jquery","underscore","Backbone","models/validation/tools/currencyConverterValidationModel","models/tools/toolMetaFormModel","collections/tools/currencyConverterListCollections","collections/more/currncyDropCollections","text!views/more/curConverter.tpl","collections/tools/currencyConverterCollections"],function(e,t,r,n,o,i,a,c,s){var l=new EncryptedLocalStorage("secret"),u=r.View.extend({el:"#container",e1:"#menuwrapper",e2:"#mobcontent",events:{"click #currencyconvert":"currencyconvert","blur  .transAmt":"convertedamount","change #fromcurr":"currencycheck","click #tools":"tools","change #tocurr":"changeToCurr","click #transAmt":"openNumPad"},openNumPad:function(){id="transAmt";var t=/iPad|iPhone|iPod/.test(navigator.userAgent),r=l.get("isKeyPadNeed");if(t&&r)navigator.notification.keypadOpen(e("#"+id).val(),9,function(t){e("#"+id).val(convertNumbers2English(t))},function(t){e("#"+id).val(convertNumbers2English(t));var r=(e("#"+id).val(),e("input[name=fromcurr]:checked").val()),n=r.split("~"),o=(n[0],e("input[name=tocurr]:checked").val()),i=o.split("~");i[0]});else{var n=(e("#transAmt").val(),e("input[name=fromcurr]:checked").val()),o=e("input[name=tocurr]:checked").val();if(void 0!=n&&void 0!=o){var i=n.split("~"),a=(i[0],o.split("~"));a[0]}}},currencycheck:function(){var t=(e("#transAmt").val(),e("input[name=fromcurr]:checked").val()),r=t.split("~"),n=(r[0],e("input[name=tocurr]:checked").val()),o=n.split("~");o[0]},changeToCurr:function(){var t=e("input[name=tocurr]:checked").val(),r=t.split("~"),n=r[1],o=r[2];e("#nme"+o).text(n),this.currencycheck()},render:function(){l.set("currentPage","");var t=this,r=function(e){t.showRegTemplate()},n=function(e){t.errorresponse()};showSpinner(),t.collection=new a,t.collection.fetch({dataType:"json",type:"POST",data:e.param({access_token:l.get("access_token")}),cache:!1,success:function(e){"0000"==ackStatus?r(e):n(e)},error:n})},showRegTemplate:function(){hideSpinner(),this.$("#mobcontent").html(t.template(c)).i18n()},changeToAccount:function(){e("#examt").empty(),e("#exrate").empty(),this.model=new n({url:"json/"}),r.Validation.bind(this);var t=this.$("form").serializeObject();if(this.model.set(t,{validate:!0})){for(var o=e("input[name=fromcurr]:checked").val(),i=o.split("~"),a=i[4],c=parseInt(a),s=e("#casaacctlength").val(),l=parseInt(s),u=0;l>u;u++)c!=u?e("#toAcctLabelList-"+u).show():e("#toAcctLabelList-"+u).hide();var d=e("input[name=tocurr]:checked").val(),m=e("#paymentAmount").val();"undefiend"!=typeof o&&"undefiend"!=typeof d&&""!=m&&this.convertedamount()}},currencyconvert:function(t){e("#examt").empty(),e("#exrate").empty(),e("#errorsar").hide(),e("#errorsame").hide(),e("#errorFromAct").hide(),e("#errorToAct").hide(),e("#examt").hide(),e("#exrate").hide(),e("#erramtnull").hide(),e("#errlength20").hide();var i=e("#transAmt").val();if(""==i||"undefined"==i)return e("#erramtnull").show(),!1;l.set("inptamountcon",i),this.model=new n({url:"json/"}),r.Validation.bind(this);var a=this.$("form").serializeObject();if(this.model.set(a,{validate:!0})){var c,u,d,m,h=e("input[name=fromcurr]:checked").val(),p=e("input[name=tocurr]:checked").val();void 0!=h&&void 0!=p&&(c=p.split("~"),u=c[0],d=c[1],m=u);var v=!1;("KWD"==h||"KWD"==m)&&(v=!0);var f="false",g="false";if("undefined"==typeof h)return f="true",e("#errorFromAct").show(),!1;if("undefined"==typeof m)return g="true",e("#errorToAct").show(),!1;if(h==m)return e("#errorsame").show(),!1;if("true"==f||"true"==g)return!1;var y=h.split("~"),w=y[0],k=y[1],A=m.split("~"),x=A[0];l.set("frmcurrency",w);var b=e("#transAmt").val(),S=0,C=e.i18n.t("app.tools.general.exrate"),T=e("#transAmt").val();if(T.length>"20")return e("#errlength20").show(),!1;this.model.clear(),r.Validation.unbind(this),t.preventDefault(),accid=e("#accid").val();e("#transferAmount").val();this.model=new o({url:"json/"}),showSpinner();var V=this,P=function(e){V.errorresponse()};V.collection=new s([],{id:accid});e("form").serialize();timestamp=(new Date).getTime(),showSpinner(),V.collection.fetch({data:e.param({access_token:l.get("access_token"),fromCurrency:k,toCurrency:d,transferAmount:b}),dataType:"json",type:"POST",cache:!1,success:function(t){if("0000"==ackStatus){var r=l.get("convertedAmt"),n=l.get("exchangerate"),o=l.get("inptamountcon"),i=l.get("frmcurrency");if("KWD"==i)var a=o;else a=parseFloat(o).toFixed(2);if(r!=S||n!=S){var c=l.get("lang_id");"en-US"==c?e("#examt").html("Converted Amount = "+r+" "+x):e("#examt").html("المبلغ المحول = "+r+" "+x),e("#examt").show(),e("#exrate").html(C+" = "+parseFloat(Math.round(1e4*n)/1e4).toFixed(3)+"  "),e("#exrate").show(),e("#erramtnull").hide()}hideSpinner()}else P(t)},error:P})}else this.$(".alert-error").fadeIn(),t.preventDefault(),hideSpinner()},tools:function(e){e.preventDefault(),r.history.fragment=null,r.history.navigate("#/more",{trigger:!0,replace:!0})},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return r.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return u});