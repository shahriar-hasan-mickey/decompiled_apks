define(["jquery","underscore","Backbone","text!views/accounts/loans/loan/loanaccountdetails.tpl","text!views/accounts/loans/loanaccountdetailslist.tpl","text!views/accounts/loans/loanaccounttermdetailslist.tpl","text!views/accounts/loans/loanaccountdemanddetailslist.tpl","text!views/accounts/loans/loanaccountrevokedetailslist.tpl","views/errors/exception"],function(t,e,n,i,a,o,l,s,c){var r=(new EncryptedLocalStorage("secret"),n.View.extend({el:"#container",events:{"click #loanstmt":"loanstmt","click #termloan":"termloan","click #depandloan":"depandloan","click #revokeloan":"revokeloan","click #termloanbackbtn":"loanstmt","click #depandloanbackbtn":"loanstmt","click #revokeloanbackbtn":"loanstmt","click #revokeloanstmt":"LoanMinistatement","click #hideDetails":"hideDetails","click #showDetails":"showDetails","click #loanstmt":"loanstmt","click #loanstatementview":"LoanMinistatement","click #loanbackbutton":"loanbackbutton"},initialize:function(){},update:function(){this.$el.html(e.template(i)),hideSpinner()},LoanMinistatement:function(){n.history.navigate("#/loanstatement")},loanstmt:function(){this.$el.html(e.template(a)),hideSpinner()},termloan:function(){this.$el.html(e.template(o)),hideSpinner()},hideDetails:function(){t("#hideDetails").hide(),t("#a1").hide(),t("#showDetails").show()},showDetails:function(){t("#hideDetails").show(),t("#a1").show(),t("#showDetails").hide()},depandloan:function(){this.$el.html(e.template(l)),t("html").removeClass("").addClass("app state"),hideSpinner()},revokeloan:function(){this.$el.html(e.template(i)),t("html").removeClass().addClass("app state"),hideSpinner()},loanbackbutton:function(){n.history.navigate("#/loan")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(t){return n.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=t,this.currentView.delegateEvents(),this.currentView}}));return r});