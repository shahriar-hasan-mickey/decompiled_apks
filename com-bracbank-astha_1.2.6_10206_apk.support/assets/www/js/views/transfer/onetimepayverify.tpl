<%
	var els = new EncryptedLocalStorage('secret');
    var transferreason=els.get("transferreason");
	var Paymentamount=els.get("withinBankPaymentAmount")
	var wonaccno=els.get("wonaccno");
	var Toaccno=els.get("Toaccno");
	var Toaccname=els.get("Toaccname");
	var currency=els.get("currency");
	var beneDTO = els.get("beneficiaryBeneficiaryInstructionDTOs");
	var accntName1 = beneDTO[0].shortName;
	var fromExchangeRate = els.get("fromExchangeRate");
	var transactionChargesCurrency = els.get("transactionChargesCurrency");
	var fees = els.get("fee");
	var convertedAmount = els.get("convertedAmount");
	var debitCurrency = els.get("debitCurrency");
	var totalDebitAmount = els.get("totalDebitAmount");
	var transactionChargesCurrency = els.get("transactionChargesCurrency");
%>


<!--Appwrapper Starts Here-->
		<div class="pagewrapper" id="appwrapper" >
    <aside class="mainnav" id="mnutogglediv">
        <div class="text-center userInfo">
            <div>
              <img src="images/common/user_default1.png" class="profPic img-circle"> 
            </div>
            <div>
              <p class="profilename"></p>
              <p class="small info" >Last login: <span id="lastlogin"></span></p>
			<p class="small info fail" >Last failure login: <span id="lastfaillogin"></span></p>
            </div>            
        </div>
		<nav>
			<ul>
      			<li class="active"><a href="#/wealth" id="dashboard"><span class="ico dashboard"></span><%-$.i18n.t('app.wealth.menu')%></a></li>
      			<li class="" data-toggle="collapse" href="#accounts" id="subNav" aria-expanded="false" aria-controls="accounts"><a href="javascript:void(0);"><span class="ico account"></span><%-$.i18n.t('app.menu.products')%></a></li>        
      			<ul class="collapse" id="accounts">
        			<li><a href="javascript:void(0);" id="slide_out_savings"><%-$.i18n.t('app.wealth.accounts')%></a></li>
        			<li><a href="javascript:void(0);" id="slide_out_deposits"><%-$.i18n.t('app.wealth.termdeposit')%></a></li>
        			<li><a href="javascript:void(0);" id="slide_out_creditcard"><%-$.i18n.t('app.wealth.creditcard')%></a></li>
				<li><a href="javascript:void(0);" id="slide_out_prepaidcard"><%-$.i18n.t('app.wealth.prepaidcard')%></a></li>
        			<li><a href="javascript:void(0);" id="slide_out_loan"><%-$.i18n.t('app.wealth.loans')%></a></li>
      			</ul>
      			<li><a href="javascript:void(0);" id="slide_out_statementCertificate"><span class="ico statement_cert"></span>Statement &amp; Certificates</a></li>
      			<li><a href="javascript:void(0);" id="slide_out_transfers"><span class="ico transfer"></span><%-$.i18n.t('app.wealth.transfers')%></a></li>
      			<li class="scan_pay" id="slide_out_qrcode" aria-controls="qrcode"><a href="javascript:void(0);"><span class="ico qrcode"></span><%-$.i18n.t('app.qrcode.scanandpay')%></a></li>
      			<li><a href="javascript:void(0);" id="slide_out_positivePay"><span class="ico positive_pay"></span>Positive Pay</a></li>
      			<li><a href="javascript:void(0);" id="slide_out_billpay"><span class="ico billpay"></span><%-$.i18n.t('app.wealth.billandfee')%></a></li>
      			<li><a href="javascript:void(0);" id="slide_out_managebene"><span class="ico beneficiary"></span><%-$.i18n.t('app.wealth.benemanagement')%></a></li>
			<li><a href="javascript:void(0);" id="slide_out_transactions"><span class="ico transactions"></span><%-$.i18n.t('app.wealth.transactions')%></a></li>
			<li><a href="javascript:void(0);" id="slide_out_transferlimit"><span class="ico transferLimit"></span><%-$.i18n.t('app.more.general.transferlimit')%></a></li>
      			<!--<li><a href="javascript:void(0);" id="manage_biller"><span class="ico managebiller"></span><%-$.i18n.t('app.wealth.managebillers')%></a></li>-->
      			<li><a href="javascript:void(0);" id="slide_out_services"><span class="ico service"></span><%-$.i18n.t('app.wealth.servicereq')%></a></li>
      			<li><a href="javascript:void(0);" id="slide_out_user_settings"><span class="ico settings"></span><%-$.i18n.t('app.wealth.usersettings')%></a></li>
      			<!--<li><a href="javascript:void(0);"><span class="ico upcoming"></span><%-$.i18n.t('app.wealth.payreminder')%></a></li>-->
      			<li><a href="javascript:void(0);" id="slideout_more"><span class="ico more"></span><%-$.i18n.t('app.wealth.moreoptions')%></a></li>
			<li><a href="javascript:void(0);" id="slideout_contact" onclick="postLogRedir()"><span class="ico contacts"></span>Contact Us</a></li>  
      			<li><a href="javascript:void(0);" id="logout" class="btn-logout"><span class="ico logout"></span><%-$.i18n.t('app.wealth.logout')%></a></li>
			</ul>
    	</nav>
	</aside>
	<div id="ovrlay"></div>
	<header class="appheader">
		<div class="headerLeft">
			<button type="button" id="mnutoggle" class="btn btn-default mnutoggle">
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>			
                  <a href="#/onetimepay" class="bacArr">            
           			<i class="fa fa-angle-left" aria-hidden="true"></i>
            	</a>
	      </div>
	      <div class="headerMiddle">
  			<h4  class="p4">Transfer Review<p class="small">(Payment & Transfers)</p></h4>	
		</div>
		<div class="headerRight">
			<span class="step-badge">3/3</span>
      		<a class="header_logout">
				<i class="fa fa-power-off" aria-hidden="true"></i>
			</a>  
 		</div>
		<ul class="step-progress">
			<li class="done"></li>
            	<li class="done"></li>
			<li class="done"></li>
  		</ul>	
	</header>
			<!-- Header Ends -->
			<!--Bodywrapper Starts Here-->
			<div class="bodywrapper">
				<!-- Actual content area -->
				<div class="contentwrap">
						<section class="content">
    <form method="post" action="#">	
            <div class="veriIconWrap">
               <span class="menu_icon2 ico1x verify"></span>					
             </div>
        <div class="veriWrap">
            <div class="media">
                <div class="media-left media-middle">
                    <img class="img-circle" src="images/common/user_default1.png" width="36" />
                </div>
                <div class="media-body media-middle">
                    <%- els.get("fromname")%>
                    <p class="small text-muted"><%-wonaccno%></p>
                </div>
                <div class="media-right text-right media-middle">
                    <span class="cur small text-muted"><%- els.get("fromAccCurr")%></span>
                </div>
            </div>
            <!-- / media -->
            <div class="media m0">
                <div class="media-left media-middle">
                    <span class="downArAni"></span>
                </div>
                <div class="media-body media-middle">
                 	<span class="amt pos">
                     	<%- checkAmount($.formatNumber(Paymentamount, {format:"#,###.00", locale:"us"}))%>
                        <span class="cur"><%-els.get("transCurr")%></span>
                	</span>
                    <p class="small"><%- els.get("amountInWords")%></p>
                </div>
            </div>
            <!-- / media -->
            <div class="media m0">
                <div class="media-left media-middle">
                    <img class="img-circle" src="images/common/user_default1.png" width="36" />
                </div>
                <div class="media-body media-middle">
                    <%-accntName1%>
                    <p class="small text-muted"><%-els.get("displayValue")%></p>
                </div>
                <div class="media-right text-right media-middle">
                    <span class="cur small text-muted"><%- els.get("toAccCurr")%></span>
                </div>
            </div>
            <!-- / media -->
        </div>
        <ul class="list-unstyled list-nobrd">
           <li class="list-group-item">
                <label><%-$.i18n.t('app.transferss.transactionfees')%></label>
                <p>
                    <%- checkAmount($.formatNumber(fees, {format:"#,###.00", locale:"us"}))%> BDT
                </p>
            </li>
            <li class="list-group-item">
				<label><%-$.i18n.t('app.transferss.totaldebitamount')%></label>
				<p>
					<%- checkAmount($.formatNumber(els.get("totalDebitAmount"), {format:"#,###.00", locale:"us"}))%> BDT
				</p>
			</li>
            <%if(els.get("fromAccCurr") !== els.get("toAccCurr")) { %>
	            <li class="list-group-item">
					<label><%-$.i18n.t('app.transferss.exchangeratelabel')%></label>
					<p>
						1 <%- els.get("toAccCurr")%> = <%- checkAmount($.formatNumber(els.get("toExchangeRate"), {format:"#,###.00", locale:"us"}))%> <%- els.get("fromAccCurr")%>
					</p>
				</li>
				<%if(els.get("debitAmount") != "" && els.get("debitAmount") != null) {%>
					<li class="list-group-item">
						<label><%-$.i18n.t('app.transferss.debitamount')%></label>
						<p>
							<%- checkAmount($.formatNumber(els.get("debitAmount"), {format:"#,###.00", locale:"us"}))%> <%- els.get("fromAccCurr")%>
						</p>
					</li>
				<% } %>
				<% if(els.get("creditAmount") != "" && els.get("creditAmount") != null) {%>
					<li class="list-group-item">
						<label><%-$.i18n.t('app.transferss.creditamount')%></label>
						<p>
							<%- checkAmount($.formatNumber(els.get("creditAmount"), {format:"#,###.00", locale:"us"}))%> <%- els.get("toAccCurr")%>
						</p>
					</li>
				<% } %>
			<% } %>
			<% if(!isNull(transferreason)) { %>
				<li class="list-group-item">
					<label>Transfer Reason</label>
					<p><%-transferreason%></p>
				</li>
			<% } %>
        </ul>
        <div class="clearfix"></div>
        <br>
        <div class="row">
            <div class="col-xs-6 pr5">
                <button type="button" class="btn btn-default btn-block" onClick="location.href='#/selectbeneficiary'">Cancel</button>
            </div>
            <div class="col-xs-6 pl5">
                <button type="button" class="btn btn-primary btn-block" id="WB_OneTimePay_Confirm">TRANSFER</button>
            </div>
        </div>
        <br>
    </form>
</section>
<!-- Modal -->
<div class="modal fade modernPOP" id="verify" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
            <form method="post" action="#">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" id="WB_OneTimePay_CloseBtn" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <% if(els.get("alertType") == "TOKEN") { %>
                			<h4 class="modal-title" id="myModalLabel"><%-$.i18n.t('app.registration.otptokenheadertext')%></h4>
                    	<% }  else {%>
                    		<h4 class="modal-title" id="myModalLabel"><%-$.i18n.t('app.transferss.verfici')%></h4>
                    	<% } %>
                    </div>
                    <div class="modal-body">
                        <% if(els.get("alertType") == "SMS") { %>
							<p class="small"><%-$.i18n.t('app.registration.opthelptext')%> <%- maskMobile(els.get("contactNumber"))%></p>
						<% } else if(els.get("alertType") == "EMAIL") {%>
							<p class="small"><%-$.i18n.t('app.registration.opthelpemailtext')%> <%- maskEmailID(els.get("emailId"))%></p>
						<% } else if(els.get("alertType") == "TOKEN") {%>
									<p class="small"><%-$.i18n.t('app.registration.opthelptokentext')%></p>
								<% } else if(els.get("alertType") == "ESIGN") {%>
									<p class="small"><%-$.i18n.t('app.registration.otphelpesigntext')%></p>
									<p class="small" id="challengeText"></p>
								<% } %>
                        <div class="form-group">
                            <div class="pasCode text-center">
                                <div class="form-group">
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp1" name="otp1" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp2" name="otp2" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp3" name="otp3" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp4" name="otp4" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp5" name="otp5" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
									<input type="tel" autocomplete="off" pattern="[0-9]*" id="otp6" name="otp6" maxlength="1" class="inputs cardpinnumericlengthcontrol"/>
			  					</div>
                            </div>
							<div class="form-group has-error" id="otpNullErrorDiv">
								<p class="help-block error-message" style="color:#a94442; text-align:center;" id="otpNullError"></p>
							</div>
                        </div>
                        <!-- / form-group-->
						<% if(els.get("alertType") == "SMS" || els.get("alertType") == "EMAIL") { %>
							<div class="form-group">
								<div id="OTPcontainer1"></div>
							</div>
							<p class="text-center small">
								<a href="javascript:void(0);" class="resend_button2" id="resend_btn8">Resend OTP</a>
							</p>
						<% } %>
                    </div>
                    <div class="modal-footer">
                        <div class="row">
							<div class="col-xs-6 pr5">
								<button type="button" id="WB_OneTimePay_CancelBtn" class="btn btn-primary cancel-btn btn-block" data-dismiss="modal">Cancel</button>
							</div>
							<div class="col-xs-6 pr5">
								<button type="button" class="btn btn-default btn-block otp_done" id="WB_OneTimePay_OTPVerify"><%-$.i18n.t('app.transfer.managebeneficiary.verify')%></button>
							</div>
						</div>
                    </div>
                </div>
            </form>
        </div>
    </div>
<!-- / modal-->	
					<!--Content Ends Here-->
				</div>
				<!--contentwrap Ends here -->
			</div>
			<!--bodywrap Ends here -->
		</div>
		<!--Appwrapper Ends Here-->
<script src="js/library/progressbar.min.js"></script>
<script src="js/libs/bootstrap/bootstrap-pincode-input.js"></script>
<script>
	$(document).ready(function() {
		$('#mpininput').pincodeInput({complete:function(value, e){  	
        }});

		DisableCopyPaste();
		
		$('input').keypress(function(e) {
			var code = (e.keyCode ? e.keyCode : e.which);
			if ( (code==13) || (code==10)) {
				$(this).blur();
				return false;
			}
		});
	});
</script>
<script>
	$(".cardinputs").keyup(function (e) {
	    if (this.value.length == this.maxLength) {
	    	$(this).parent().next().find('.cardinputs').focus();  
	    } else if((e.which == 8 || e.which == 46) && (this.value == "")) {
	    	$(this).parent().prev().find('.cardinputs').focus();  
	    }
	});
	
	(function ($){
		 $.fn.numericlength=function() {
			return this.each(function() {
			  var makelength=$(this).attr("maxlength");
			  $(this).on('keyup',function(e) { 
			  var allowedTest ="1234567890";					
			  var orignalValue=$(this).val();
			  for(var i=0;i<orignalValue.length;i++) {
				var atchar = orignalValue[i];
				if(allowedTest.indexOf(atchar) != -1) {
				} else {
					var changeTest =orignalValue.substr(0,i);
					orignalValue=changeTest;
				}
			   }
				$(this).val(orignalValue);
				 if($(this).val().length>=makelength &&  e.keyCode != '8' && e.keyCode != '46'){
					e.preventDefault();
				   return false;
				 }
			  });
			});
		 };
	}(jQuery));
	$('.numericlengthcontrol').numericlength();

	(function ($){
		 $.fn.cardpinnumericlength=function() {
			return this.each(function() {
			  var makelength=$(this).attr("maxlength");
			  $(this).on('input ',function(e) { 
			  var allowedTest ="1234567890";					
			  var orignalValue=$(this).val();
			 
			  for(var i=0;i<orignalValue.length;i++) {
				var atchar = orignalValue[i];
				if(allowedTest.indexOf(atchar) != -1) {
					$(this).next('.inputs').focus();
				} else {
					var changeTest =orignalValue.substr(0,i);
					orignalValue=changeTest;
				}
			   }
				$(this).val(orignalValue);
				 if($(this).val().length>=makelength &&  e.keyCode != '8' && e.keyCode != '46'){
					e.preventDefault();
				   return false;
				 }
			  });
			   $(this).on('keyup',function(e) { 
				    if((e.which == 8 || e.which == 46) && (this.value == "")) { 
				$(this).prev('.inputs').focus();
				return false;
			  }
			   });
			});
		 };
	}(jQuery));
	$('.cardpinnumericlengthcontrol').cardpinnumericlength();
	$(".cardpinnumericlengthcontrol").css({'-webkit-text-security': 'disc','-moz-webkit-text-security': 'disc','-moz-text-security': 'disc'});
</script>
