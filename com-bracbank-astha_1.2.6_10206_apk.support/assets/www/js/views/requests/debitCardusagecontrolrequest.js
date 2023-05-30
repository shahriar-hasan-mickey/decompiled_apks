define(["jquery","underscore","Backbone","collections/requests/debitcardusagecontrolCollections","models/validation/tedallal/tedallalValidationModel","text!views/requests/debitCardusagecontrolrequest.tpl"],function(e,t,a,c,i,n){var r=new EncryptedLocalStorage("secret"),l="",o=a.View.extend({el:"#mobcontent",events:{"touchmove #localCheckLabel":"localCheckHandler","touchmove #intCheckLabel":"intCheckHandler","change #ecommCheckLabel":"ecommCheckHandler","click #validatePoints":"validatePoints","change #serviceType":"convertedamount"},update:function(){r.set("managecreditcardsubmenu",""),e("#switchDiv").hide();var t=this;timestamp=(new Date).getTime();var a=function(e){l=debitCardControlFetchDTO,r.set("debitCardControlFetchDTO",l),t.requestcompile()},i=function(e){t.errorresponse()};t.collection=new c([],{});r.get("custno");showSpinner(),timestamp=(new Date).getTime();t.collection.fetch({data:e.param({}),dataType:"json",type:"POST",cache:!1,timeout:parseInt(r.get("calltimeout")),success:function(e){"0000"==ackStatus?a(e):i(e)},error:i})},localCheckHandler:function(t){var a=e(t.currentTarget).data("index");e('#localCheckLabel[data-index="'+a+'"]').find("input:checkbox:first").is(":checked")||e('#intCheckLabel[data-index="'+a+'"]').find("input:checkbox:first").is(":checked")||e("#errorcheckLabel"+a).hide()},intCheckHandler:function(t){var a=e(t.currentTarget).data("index");e('#localCheckLabel[data-index="'+a+'"]').find("input:checkbox:first").is(":checked")||e('#intCheckLabel[data-index="'+a+'"]').find("input:checkbox:first").is(":checked")||e("#errorcheckLabel"+a).hide()},requestcompile:function(){hideSpinner(),this.$el.html(t.template(n,{})).i18n(),this.$el.trigger("create");var e=r.get("device.platform");return"Android"==e||"Ios"==e?this.datefunc():this.datefunc(),this},validatePoints:function(){var t=r.get("debitCardControlFetchDTO"),a=this;e("#errorcheckLabelEnd").hide(),t.forEach(function(t,a){e("#errorcheckLabel"+a).hide()});var c=!1;t.forEach(function(i,n){var o=e('#localCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked"),d=e('#intCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked"),h=e('#ecommCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked");if(o&&d?i.controlFlag="N":o&&0==d?i.controlFlag="I":d&&0==o?i.controlFlag="L":o||1!=d?d||1!=o?o||d||(i.controlFlag="B"):i.controlFlag="I":i.controlFlag="L","Y"==i.ecommerceDBFlag&&(1==h&&(i.ecommerceFlag="N"),0==h&&(i.ecommerceFlag="Y")),JSON.stringify(l[n])!=JSON.stringify(i)&&(c=!0),t.length-1==n){if(0==c)return e("#errorcheckLabelEnd").show(),!1;1==c&&(r.set("debitCardControlFetchDTO",t),showSpinner(),a.verificationcompile())}})},verificationcompile:function(){hideSpinner();var t=r.get("debitCardControlFetchDTO"),c=[];t.forEach(function(i,n){if(JSON.stringify(l[n])!=JSON.stringify(i)){var o=e('#localCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked"),d=e('#intCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked"),h=e('#ecommCheckLabel[data-index="'+n+'"]').find("input:checkbox:first").is(":checked"),s={};s.CardNumber=i.cardNumber,s.hidmaskcardnumber=i.debitCardnomasked,s.hidexpiryDate=i.expiryDate,s.hidcardType=i.cardType,s.controlFlag=i.controlFlag,s.ecommerceFlag=i.ecommerceFlag,s.ecommerceDBFlag=i.ecommerceDBFlag,o&&d?(s.localflagval="Y",s.interflagval="Y"):o&&0==d?(s.localflagval="Y",s.interflagval="N"):d&&0==o?(s.localflagval="N",s.interflagval="Y"):o||1!=d?d||1!=o?o||d||(s.localflagval="N",s.interflagval="N"):(s.localflagval="Y",s.interflagval="N"):(s.localflagval="N",s.interflagval="Y"),1==h&&(s.ecommerceFlag="N"),0==h&&(s.ecommerceFlag="Y");var f=getDeviceId(),u=i.creditcardnumberenc+""+f,g=CryptoJS.MD5(u);s.appCheckSum=g+"",c.push(s)}t.length-1==n&&(r.set("creditcardcontrols",c),a.history.navigate("#/debitCardusagecontrolconfirmrequest"))})},datefunc:function(t){e(".nativedatepicker").focus(function(t){t.preventDefault();var a,c=e(this);if(""!==c.val()){var i=c.val(),n=/(\d+)\/(\d+)\/(\d+)/.exec(i),r=new Date(+n[3],+n[2]-1,+n[1]);a=Date.parse(r)}else t.preventDefault(),a=new Date;"number"==typeof a&&(a=new Date(a)),window.plugins.datePicker.show({date:a,mode:"date",allowOldDates:!0},function(e){if(e){var t=new Date(e),a=t.getDate(),i=t.getMonth()+1,n=t.getFullYear(),r=""+(9>=a?"0"+a:a)+"/"+(9>=i?"0"+i:i)+"/"+n;c.val(r)}c.blur()})})},errorresponse:function(){hideSpinner(),a.history.navigate("#/exception")}});return o});