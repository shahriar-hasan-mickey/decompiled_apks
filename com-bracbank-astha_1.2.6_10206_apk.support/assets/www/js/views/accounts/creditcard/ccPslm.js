define(["jquery","underscore","Backbone","collections/wealth/creditcardDetailStatementCollections","collections/accounts/casaEmailStmtShareCollections","models/validation/emailShareValidationModel","text!views/accounts/creditcard/ccPslm.tpl","views/errors/exception"],function(e,t,a,i,o,n,s,c){var r=new EncryptedLocalStorage("secret"),l=a.View.extend({el:"#container",events:{"click #financialsummary":"openFinancialSummaryPopUp","click #dwldBilledPDF":"PDFDownload","click #supplementarycard":"gotoCreditCardList","click #shareBtn":"showSharePopUp","click #usernametip":"showPasswordTipPopUp","click #sendBtn":"showMailSentSuccessPopUp","click #ok":"backToSharePopUp","click #otherMail":"showOtherMailDiv","click #myMail":"showMyMailDiv","click #unbilled":"getcardstatementList","click #lastsixmonth":"gotoCreditCardLastSixMonthStatement"},initialize:function(){},render:function(t){r.set("isCreditDetail","false"),e("body #expenseSum").removeClass("").addClass("modal-open");var a=t;r.set("creditCardId",a);var o=r.get("creditCardAccountList"),n=o[t].id;r.set("ccardId",n);var s=this;showSpinner();var c=function(t){hideSpinner(),e("html").removeClass("primarybg hasBoth").addClass("app state"),s.gotoPSLM()};s.collection=new i;var l=function(e){s.errorresponse()};s.collection.fetch({data:e.param({access_token:r.get("access_token"),accountId:r.get("ccardId"),type:null,flag:"CC",statementType:"PSLM",txnType:"Data"}),dataType:"json",type:"POST",cache:!1,success:function(e){if("0000"==ackStatus){var t=r.get("errorcode");"9999"==t?l(e):c(e)}else l(e)},error:l})},gotoPSLM:function(){r.set("pageId","pslm"),this.$el.html(t.template(s))},openFinancialSummaryPopUp:function(){},PDFDownload:function(e){var t="";e.stopImmediatePropagation();var a=r.get("app.context.path");t=a+"account/ministatement/download.pdf";var i="access_token="+r.get("access_token")+"&emailRequired=&accountID="+r.get("ccardId")+"&fromAmount=&toAmount=&lastnTxn=&type=CARDS&toDate=&fromDate=&debitCreditFlag=B&cardtype=CC&authtype=PENDING&statementType=BILLED&module=FILTERED&filterby=&sortBy=&sortOrder=ASC",o=encodeURI(i);fileDownLoadAndViewer(t,o,1,r.get("access_token"))},showSharePopUp:function(){e("#sharePopUp").modal("show"),e("#otherMailDiv").hide()},showOtherMailDiv:function(){e("#otherMailDiv").show(),e("#myMailDiv").hide()},showMyMailDiv:function(){e("#otherMailDiv").hide(),e("#myMailDiv").show()},showPasswordTipPopUp:function(){e("#sharePopUp").modal("hide"),e("#usernameTips").modal("show")},showMailSentSuccessPopUp:function(){e("#emailNullError").html(""),e("#PwdNullError").html("");var t=this,i=e("input[name='mailOptions']:checked").val();if("myMail"==i)r.set("emailadd",null),r.set("emailpwd",null),r.set("salttime",null),t.gotoEmailSharing();else if("otherMail"==i){var o=e("#emailId").val(),s=e("#passwd").val();this.model=new n({url:"json/"}),a.Validation.bind(this);var c=this.$("form").serializeObject();if(this.model.set(c,{validate:!0})){this.model.clear(),a.Validation.unbind(this),r.set("emailadd",o);var l=(new Date).getTime();r.set("salttime",l),mailpassword=EncryptWithDynamicSalt(s,l),r.set("emailpwd",mailpassword),t.gotoEmailSharing()}else this.$(".has-error").fadeIn(),event.preventDefault()}},gotoEmailSharing:function(){var t=this,a=function(e){hideSpinner(),t.openMailSentSuccessPopUp()},i=function(e){t.errorresponse()};showSpinner(),t.collection=new o,t.collection.fetch({data:e.param({access_token:r.get("access_token"),accountID:r.get("ccardId"),cardtype:"CC",statementType:"BILLED",statementDate:null,emailValue:r.get("emailadd"),emailPassValue:r.get("emailpwd"),salt:r.get("salttime"),module:"CARD_STATEMENT"}),dataType:"json",type:"POST",cache:!1,success:function(e){"0000"==ackStatus?a(e):i(e)},error:i})},openMailSentSuccessPopUp:function(){e("#sharePopUp").modal("hide"),e("#mailSent").modal("show")},backToSharePopUp:function(){e("#usernameTips").modal("hide"),e("#sharePopUp").modal("show")},gotoCreditCardLastSixMonthStatement:function(){a.history.navigate("#/cclastsixmonthstmt")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(e){return a.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=e,this.currentView.delegateEvents(),this.currentView}});return l});