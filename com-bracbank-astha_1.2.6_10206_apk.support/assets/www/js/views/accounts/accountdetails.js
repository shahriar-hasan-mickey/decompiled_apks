define(["jquery","underscore","Backbone","text!views/accounts/accountdetails.tpl","text!views/accounts/accountdetailsstmt.tpl","text!views/accounts/accountdetailsstmtview.tpl","views/errors/exception"],function(t,e,i,n,c,s,a){var r=(new EncryptedLocalStorage("secret"),i.View.extend({el:"#container",events:{"click #backbutton":"backbutton","click #getdetailstmt":"getdetailstmt","click #getdetailstmtview":"getdetailstmtview","click #chequedeatil":"chequedeatil","click #accstat":"accstat"},initialize:function(){t("html").attr("class","app")},render:function(){this.$el.html(e.template(n)),t("html").removeClass("app state").addClass("app"),hideSpinner()},getdetailstmt:function(){i.history.navigate("#/chequehistorylist")},getdetailstmtview:function(){i.history.navigate("#/chequehistoryview")},chequedeatil:function(){this.$el.html(e.template(n)),hideSpinner()},backbutton:function(){i.history.navigate("#/accountssummary")},accstat:function(){i.history.navigate("#/wealth")},errorresponse:function(){hideSpinner(),openErrorPopup()},disposeView:function(t){return i.View.prototype.close=function(){this.unbind(),this.undelegateEvents()},void 0!==this.currentView&&this.currentView.close(),this.currentView=t,this.currentView.delegateEvents(),this.currentView}}));return r});