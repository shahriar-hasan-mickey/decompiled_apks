define(["jquery","underscore","Backbone","collections/login/forgotPasswordSuccessCollections","models/validation/login/forgotPasswordValidationModel","text!views/login/forgotpasswordsuccess.tpl"],function(r,t,e,o,a,n){var i=new EncryptedLocalStorage("secret"),s=e.View.extend({el:"#container",events:{"click #login_btn":"backToLogin","click #next_btn":"validatePassword","click #cancel_btn":"backToLogin","keyup #password":"forgotPasswordChange","keyup #confpassword":"forgotConfirmPasswordChange"},initialize:function(){r("div").removeClass("modal-backdrop fade in")},update:function(){this.$el.html(t.template(n))},loadloginUI:function(){showSpinner();var t=this,e=function(r){t.backToLogin()},a=function(r){t.errorresponse()};t.collection=new o([],{}),hideSpinner();var n=(new Date).getTime(),s=i.get("userID"),l=EncryptWithDynamicSalt(s,n);t.collection.fetch({data:r.param({salt:n,userLogin:l,appDynamicValue:"32523452345",ulpId:i.get("ulpID"),userflag:"Y"}),dataType:"json",type:"POST",cache:!1,success:function(r){"0000"==ackStatus?e(r):a(r)},error:a})},backToLogin:function(){e.history.navigate("#/login")},forgotConfirmPasswordChange:function(){r("#confirmPasswordError").html("");var t=r("#confpassword").val();return""==t||null==t?(r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.confpwdnotnull")),!1):void 0},forgotPasswordChange:function(){r("#passwordError").html(""),r("#confirmPasswordError").html("");var t=/[0-9]/g,e=r("#password").val(),o=r("#confpassword").val(),a=i.get("pwdpolicy"),n=/[a-z\u0600-\u06FF]/g,s=/[A-Z\u0600-\u06FF]/g,l=/^[A-Z]/,p=/^[a-z]/,d=/^[0-9]/,c=/^[!@#$%^&*()-_+~.]/,u=/^[a-zA-Z]/;if(""==e||null==e)return r("#passwordError").html(r.i18n.t("validation.newregistration.pwdnotnull")),!1;if("U"===a.firstCharacterValue){if(!l.test(e))return r("#passwordError").html(r.i18n.t("app.login.errUP")),!1}else if("L"===a.firstCharacterValue){if(p.test(e))return r("#passwordError").html(r.i18n.t("app.login.errLOW")),!1}else if("N"===a.firstCharacterValue){if(d.test(e))return r("#passwordError").html(r.i18n.t("app.login.errNUM")),!1}else if("S"===a.firstCharacterValue){if(c.test(e))return r("#passwordError").html(r.i18n.t("app.login.errSpecl")),!1}else if("A"===a.firstCharacterValue&&!u.test(e))return r("#passwordError").html(r.i18n.t("First Character should be an alphabet")),!1;if(e.length<a.minimumLength)return r("#passwordError").html(r.i18n.t("app.login.pwderrlength1")+" "+a.minimumLength+" "+r.i18n.t("app.login.pwderrlength2")+" "+a.maximumLength+" "+r.i18n.t("app.login.pwderrlength3")),!1;var h=e.search(t);if("Y"===a.numeralsMandatory&&"-1"==h)return r("#passwordError").html(r.i18n.t("app.login.errnumber")),!1;var w=e.search(n);if("Y"===a.lowercaseMandatory&&"-1"==w)return r("#passwordError").html(r.i18n.t("app.login.errlwr")),!1;var f=e.search(s);if("Y"===a.uppercaseMandatory)if("U"===a.firstCharacterValue){if(-1==f||0!==f)return r("#passwordError").html(r.i18n.t("app.login.errupr")),!1}else if(-1==f)return r("#passwordError").html(r.i18n.t("app.login.errupr")),!1;if("Y"===a.specialCharactersMandatory)if(isNull(a.disallowedCharacters)){var g=!1,m=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(m.test(e)||(g=!0),g)return isError=!0,void r("#passwordError").html(r.i18n.t("app.login.errspc"))}else{for(var v=a.disallowedCharacters,E=!1,C=0;C<e.length;C++){var y=e[C];-1!=v.indexOf(y)&&(E=!0)}if(E)return isError=!0,void r("#passwordError").html("Entered password does not match with password policy "+a.disallowedCharacters+" are not allowed");var g=!1,m=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(m.test(e)||(g=!0),g)return isError=!0,void r("#passwordError").html(r.i18n.t("app.login.errspc"))}var P=e.toLowerCase();if("N"===a.repeatingValueAllowedInPwd)for(var C=0;C<P.length;C++){var y=P[C],V=P[C+1];if(y===V&&y===P[C+2])return isError=!0,void r("#passwordError").html(r.i18n.t("app.login.errcon"))}if("N"===a.seqValueAllowedInPwd){if(P.match(/([a-zA-Z0-9])\1\1+|(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ|012|123|234|345|456|567|678|789)+/g))return isError=!0,void r("#passwordError").html(r.i18n.t("app.login.errconseq"));for(var L=0,C=0;C<P.length-1;C++){var S=parseInt(P[C])+1;P[C+1]==S&&P[C]!=P[C+1]&&L++}if(4==L)return isError=!0,void r("#passwordError").html(r.i18n.t("app.login.errconseq"))}return(""!=e||null!=e)&&""==o||null==o?(r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.confpwdnotnull")),!1):""!=e&&""!=o&&e!=o?(r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.pwdmismatch")),!1):void 0},validatePassword:function(t){t.stopImmediatePropagation(),r("#passwordError").html(""),r("#confirmPasswordError").html("");var a=/[0-9]/g,n=this,s=!1,l=r("#password").val(),p=r("#confpassword").val(),d=i.get("pwdpolicy"),c=/[a-z\u0600-\u06FF]/g,u=/[A-Z\u0600-\u06FF]/g,h=/^[A-Z]/,w=/^[a-z]/,f=/^[0-9]/,g=/^[!@#$%^&*()-_+~.]/,m=/^[a-zA-Z]/;if((""==l||null==l)&&(s=!0,r("#passwordError").html(r.i18n.t("validation.newregistration.pwdnotnull"))),(""==p||null==p)&&(s=!0,r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.confpwdnotnull"))),""==l||null==l)return s=!0,void r("#passwordError").html(r.i18n.t("validation.newregistration.pwdnotnull"));if("U"===d.firstCharacterValue){if(!h.test(l))return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errUP"))}else if("L"===d.firstCharacterValue){if(w.test(l))return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errLOW"))}else if("N"===d.firstCharacterValue){if(f.test(l))return s=!0,r("#passwordError").html(r.i18n.t("app.login.errNUM")),!1}else if("S"===d.firstCharacterValue){if(g.test(l))return s=!0,r("#passwordError").html(r.i18n.t("app.login.errSpecl")),!1}else if("A"===d.firstCharacterValue&&!m.test(l))return r("#passwordError").html(r.i18n.t("First Character should be an alphabet")),!1;if(l.length<d.minimumLength)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.pwderrlength1")+" "+d.minimumLength+" "+r.i18n.t("app.login.pwderrlength2")+" "+d.maximumLength+" "+r.i18n.t("app.login.pwderrlength3"));if(l.length>d.maximumLength)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.pwderrmaxlen")+" "+d.maximumLength+" "+r.i18n.t("app.login.pwderrlength3"));var v=l.search(a);if("Y"===d.numeralsMandatory&&"-1"==v)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errnumber"));var E=l.search(c);if("Y"===d.lowercaseMandatory&&"-1"==E)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errlwr"));var C=l.search(u);if("Y"===d.uppercaseMandatory)if("U"===d.firstCharacterValue){if(-1==C||0!==C)return r("#passwordError").html(r.i18n.t("app.login.errupr")),!1}else if(-1==C)return r("#passwordError").html(r.i18n.t("app.login.errupr")),!1;if("Y"===d.specialCharactersMandatory)if(isNull(d.disallowedCharacters)){var y=!1,P=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(P.test(l)||(y=!0),y)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errspc"))}else{for(var V=d.disallowedCharacters,L=!1,S=0;S<l.length;S++){var b=l[S];-1!=V.indexOf(b)&&(L=!0)}if(L)return s=!0,void r("#passwordError").html("Entered password does not match with password policy "+d.disallowedCharacters+" are not allowed");var y=!1,P=/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;if(P.test(l)||(y=!0),y)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errspc"))}var I=l.toLowerCase();if("N"===d.repeatingValueAllowedInPwd)for(var S=0;S<I.length;S++){var b=I[S],k=I[S+1];if(b===k&&b===I[S+2])return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errcon"))}if("N"===d.seqValueAllowedInPwd){if(I.match(/([a-zA-Z0-9])\1\1+|(abc|bcd|cde|def|efg|fgh|ghi|hij|ijk|jkl|klm|lmn|mno|nop|opq|pqr|qrs|rst|stu|tuv|uvw|vwx|wxy|xyz|ABC|BCD|CDE|DEF|EFG|FGH|GHI|HIJ|IJK|JKL|KLM|LMN|MNO|NOP|OPQ|PQR|QRS|RST|STU|TUV|UVW|VWX|WXY|XYZ|012|123|234|345|456|567|678|789)+/g))return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errconseq"));for(var M=0,S=0;S<I.length-1;S++){var x=parseInt(I[S])+1;I[S+1]==x&&I[S]!=I[S+1]&&M++}if(4==M)return s=!0,void r("#passwordError").html(r.i18n.t("app.login.errconseq"))}if((""!=l||null!=l)&&""==p||null==p)return s=!0,void r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.confpwdnotnull"));if(""!=l&&""!=p&&l!=p)return s=!0,void r("#confirmPasswordError").html(r.i18n.t("validation.newregistration.pwdmismatch"));if(!s){var D=(new Date).getTime();l=EncryptWithDynamicSalt(l,D);var F=function(t){hideSpinner(),"Y"==i.get("isMigUser")?(i.set("migratedPassword",r("#password").val()),i.set("isMigUserForgotpassword","true"),e.history.navigate("#/migratedauthmode")):(r("#next_btn").attr("data-target","#success"),r("#success").modal("show"))},U=function(r){n.errorresponse()};showSpinner(),n.collection=new o;var A=i.get("userID"),N=EncryptWithDynamicSalt(A,D);checkSumEncrypt(i.get("userID")+l),n.collection.fetch({data:r.param({newpassword:l,salt:D,userLogin:N,ulpId:i.get("ulpID"),userflag:"Y"}),dataType:"json",type:"POST",cache:!1,success:function(r){"0000"==ackStatus?F(r):U(r)},error:U})}},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(r){return e.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=r,this.currentView.delegateEvents(),this.currentView}});return s});