<%
	var els = new EncryptedLocalStorage('secret');
	var minimumAmount = els.get("idtpMin");
	var dailylimit = els.get("dailyAvailableLimit");
	var monthlylimit = els.get("monthlyTransactionLimit");
	var pertranslimit = els.get("idtpMax");
	var dailyAvailableCount = els.get("dailyAvailableCount");
	var dailyTransactionCount = els.get("dailyTransactionCount");
	var monthlyAvailableLimit = els.get("monthlyAvailableLimit");
	var monthlyAvailableCount = els.get("monthlyAvailableCount");
%>
<div class="pagewrapper" id="appwrapper">
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
				<a href="#/binimoyselectpage" class="bacArr">  
           			<i class="fa fa-angle-left" aria-hidden="true"></i>
            	</a>
      	</div>
	    <div class="headerMiddle">
  			<h4 class="p4">Request To Pay - <p>New Request<p></h4>	
		</div>
		<div class="headerRight"></div>
	</header>
	<div class="bodywrapper">
		<div class="contentwrap">
			<section class="content">
				<form>
					<p class="text-right sent-rtp"><a href="javascript:void(0);" id="gotoSentRTPList">Sent RTP List</a></p> 
            		<div class="form-group">
                    	<label for="reason">Request To VID <span class="mandi">*</span></label>
                    	<input type="text" id="rtp_requestToVID" class="form-control alphanumericlengthcontrol rtpCreateClass" maxlength="24">
                	</div>
                	 <div class="row">
	           			<div class="col-xs-12 small">
	            			<span class="small text-muted"><i class="fa fa-user" aria-hidden="true"></i> <span id="vidName"></span></span>
	           			</div>
	         		</div>
            	   	<div class="form-group has-error">
						<p class="help-block error-message has-error" style="color:#a94442" id="reqToVIDNullErr"></p>
					</div>
                	<label for="amt">Requested Amount <span class="mandi">*</span></label>
                	<div class="input-group">
                    	<input type="tel" id="rtp_requestAmount" class="form-control numericlengthcontrol rtpCreateClass" onkeyup="withoutstartZero(event,'rtp_requestAmount')" data-type="currency" pattern="^\$\d{1,3}(,\d{3})*(\.\d+)?$" maxlength="20">
                    	<span class="input-group-addon" id="basic-addon2">BDT</span>
                  	</div>
                  	<br/>
                  	<p class="small">
	        			<a href="javascript:void(0);" class="small text-link" data-toggle="modal" data-target="#TransactionLimit"><%-$.i18n.t('app.transferss.transactionlimits')%></a>
	    			</p>
	    			<br/>
                  	<div class="form-group has-error">
						<p class="help-block error-message has-error" style="color:#a94442" id="rtpReqAmtErr"></p>
					</div>
                	<div class="form-group">
                    	<label for="reason">Remarks<span class="mandi">*</span></label>
                    	<input type="text" class="form-control inputalphanumericlengthcontrol rtpCreateClass" id="retp_sendReqRemarks">
                	</div>
                	<div class="form-group has-error">
						<p class="help-block error-message has-error" style="color:#a94442" id="rtpSendReqRemarksNullErr"></p>
					</div>
                	<div class="form-group">
                    	<label for="reason">Reference ID</label>
                    	<input type="text" id="rtp_sendReqRefID" class="form-control inputalphanumericlengthcontrol rtpCreateClass" maxlength="24">
            		</div>
            		<div class="form-group has-error">
						<p class="help-block error-message has-error" style="color:#a94442" id="rtpSendReqReefIDNullErr"></p>
					</div>
					<div id="rtpCreateExpiryTimeDiv">
						<div class="alert alert-info small" role="alert">
	                    	<small><i class="fa fa-info-circle" aria-hidden="true"></i> Your Request to Pay will be expired on <span id="rtpcreateExpTime"></span></small>
	                   	</div>
					</div>
					<br/>
					<div class="form-group" id="rtpSendReqAuthModeDIV"></div>
					<div class="form-group">
                     	<label class="check-label">
                        	<input type="checkbox" name="transfer" id="binimoyRTPCreateTandC"> I agree to <a href="javascript:void(0);" id="binimoyRTPCreateTAndCPopup" data-target="#termsandcond">Terms &amp; Condition</a>
                          	<span class="checkmark1"></span>
                    	</label>
                  	</div>
                  	<div class="form-group has-error">
						<p class="help-block error-message has-error" style="color:#a94442" id="binimoyRTPCreateTandCErr"></p>
 					</div>
                	<div class="row">
                    	<div class="col-xs-6 pr5">
                        	<button type="button" class="btn btn-default btn-block" id="rtp_SendNewReqCancelBtn">Cancel</button>
                    	</div>
                    	<div class="col-xs-6 pl5">
                        	<button type="button" class="btn btn-primary btn-block" id="rtp_SendNewReqProceedBtn">Next</button>
                    	</div>
                	</div>
                	<br>
        		</form>	
			</section>	
			<div class="modal fade modernPOP" id="TransactionLimit" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
    			<div class="modal-dialog" role="document">
        			<form>
            			<div class="modal-content">
            				<div class="modal-header">
                        		<button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        			<span aria-hidden="true">&times;</span>
                    			</button>
                    			<h4 class="modal-title" id="myModalLabel"><%-$.i18n.t('app.transferss.transactionlimits')%></h4>
                			</div>
                			<div class="modal-body">
                    			<p class="text-center">
                        			<span class="ico-badge center-block">
                        				<span class="menu_icon ico-3x translimit"></span>
                        			</span>
                				</p>
                    			<div class="row">
                        			<div class="col-xs-12">
                            			<div class="row">
											<div class="col-xs-6">
                                    			<p>
                                        			<span class="small"><%-$.i18n.t('app.transferss.minimumamount')%></span>
                                        			<br>
                                        			<span class="amt small">
                                            			<%- checkAmount($.formatNumber(minimumAmount, {format:"#,###.00", locale:"us"}))%>
                                        				<span class="cur"><%-$.i18n.t('app.transferss.bdt')%></span>
                                        			</span>
                                    			</p>
                                			</div>
											<div class="col-xs-6">
                                    			<p>
													<span class="small"><%-$.i18n.t('app.transferss.pertransactionlimit')%></span>
													<br>
													<span class="amt small">
														<%- checkAmount($.formatNumber(pertranslimit, {format:"#,###.00", locale:"us"}))%>
														<span class="cur"><%-$.i18n.t('app.transferss.bdt')%></span>
													</span>
												</p>
                                			</div>
                            			</div>
                        			</div>
									<!--<div class="col-xs-12">
										<div class="row">
											<div class="col-xs-6">
											<p>
                                        			<span class="small"><%-$.i18n.t('app.transferss.dailylimit')%></span>
                                        			<br>
                                        			<span class="amt small">
                                            			<%- checkAmount($.formatNumber(dailylimit, {format:"#,###.00", locale:"us"}))%>
                                        				<span class="cur"><%-$.i18n.t('app.transferss.bdt')%></span>
                                        			</span>
                                    			</p>
											</div>
											<div class="col-xs-6">
                                    			<p>
												<span class="small"><%-$.i18n.t('app.transferss.availabletransfercount')%></span>
												<br>
												<span class="amt small"><%- dailyAvailableCount%>
												</span>
											   </p>
                            				</div>
										</div>
									</div>
									<div class="col-xs-12">
										<div class="row">
											<div class="col-xs-6">
												<p>
													<span class="small"><%-$.i18n.t('app.transferss.monthavalimit')%></span>
													<br>
													<span class="amt small">
														<%- checkAmount($.formatNumber(monthlyAvailableLimit, {format:"#,###.00", locale:"us"}))%>
														<span class="cur"><%-$.i18n.t('app.transferss.bdt')%></span>
													</span>
												</p>
											</div>
											<div class="col-xs-6">
												 <p>
												<span class="small"><%-$.i18n.t('app.transferss.monthavalcount')%></span>
												<br>
												<span class="amt small"><%- monthlyAvailableCount%>
												</span>
											   </p>
											</div>
										</div>
									</div>-->
                    			</div>
                			</div>
            			</div>
        			</form>
    			</div>
			</div>
			<div id="termsAndCondPopup"></div>
		</div>
	</div>
</div>

<script>
	(function ($){
	     $.fn.inputalphanumericlength=function() {
	        return this.each(function() {
	          var makelength=$(this).attr("maxlength");
	          $(this).on('keyup',function(e) { 
	          var allowedTest ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\@. ";					
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
				if(makelength!=""){
		             if($(this).val().length>=makelength &&  e.keyCode != '8' && e.keyCode != '46'){
		                e.preventDefault();
		               return false;
		             }
		          }
	          });
	        });
	     };
	}(jQuery));
	$('.alphanumericlengthcontrol').inputalphanumericlength();
	
	(function ($){
	     $.fn.inputalphanumericlength=function() {
	        return this.each(function() {
	          var makelength=$(this).attr("maxlength");
	          $(this).on('keyup',function(e) { 
	          var allowedTest ="1234567890, ";					
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
				if(makelength!=""){
		             if($(this).val().length>=makelength &&  e.keyCode != '8' && e.keyCode != '46'){
		                e.preventDefault();
		               return false;
		             }
		          }
	          });
	        });
	     };
	}(jQuery));
	$('.numericlengthcontrol').inputalphanumericlength();
	
	
	(function ($){
     $.fn.inputalphanumericlen=function() {
        return this.each(function() {
          var makelength=$(this).attr("maxlength");
          $(this).on('keyup',function(e) { 
          var allowedTest ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890\"!#$%&'()*+,-./:<=>?@[\]^_`{|}~ ";					
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
			if(makelength!=""){
	             if($(this).val().length>=makelength &&  e.keyCode != '8' && e.keyCode != '46'){
	                e.preventDefault();
	               return false;
	             }
	          }
          });
        });
     };
}(jQuery));
$('.inputalphanumericlengthcontrol').inputalphanumericlen();
	
	$("input[data-type='currency']").on({
	    keyup: function() {
	      formatCurrency($(this));
	    }
	});
</script>