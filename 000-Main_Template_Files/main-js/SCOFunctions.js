/*******************************************************************************
**
** Concurrent Technologies Corporation (CTC) grants you ("Licensee") a non-
** exclusive, royalty free, license to use, modify and redistribute this
** software in source and binary code form, provided that i) this copyright
** notice and license appear on all copies of the software; and ii) Licensee
** does not utilize the software in a manner which is disparaging to CTC.
**
** This software is provided "AS IS," without a warranty of any kind.  ALL
** EXPRESS OR IMPLIED CONDITIONS, REPRESENTATIONS AND WARRANTIES, INCLUDING ANY
** IMPLIED WARRANTY OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE OR NON-
** INFRINGEMENT, ARE HEREBY EXCLUDED.  CTC AND ITS LICENSORS SHALL NOT BE LIABLE
** FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, MODIFYING OR
** DISTRIBUTING THE SOFTWARE OR ITS DERIVATIVES.  IN NO EVENT WILL CTC  OR ITS
** LICENSORS BE LIABLE FOR ANY LOST REVENUE, PROFIT OR DATA, OR FOR DIRECT,
** INDIRECT, SPECIAL, CONSEQUENTIAL, INCIDENTAL OR PUNITIVE DAMAGES, HOWEVER
** CAUSED AND REGARDLESS OF THE THEORY OF LIABILITY, ARISING OUT OF THE USE OF
** OR INABILITY TO USE SOFTWARE, EVEN IF CTC  HAS BEEN ADVISED OF THE
** POSSIBILITY OF SUCH DAMAGES.
**
*******************************************************************************/

// ONLY EDIT THE 'KEY' AND 'WHY' PORTIONS OF THIS FILE!!!!

var startDate;
var exitPageStatus;

function loadPage()
{
   var result = doLMSInitialize();

   var status = doLMSGetValue( "cmi.core.lesson_status" );
	
	 var bookmark = doLMSGetValue( "cmi.core.lesson_location" );

   if (status === "not attempted")
   {
	  	// the student is now attempting the lesson
	  	doLMSSetValue( "cmi.core.lesson_status", "incomplete" );
   }

	 if (bookmark !== "")
	 {
			// is there previous course progress
		  $('.page-content').removeClass('live');
		  $('#PAGE_'+bookmark).addClass('live');
		  
		 	$('.page-title').addClass('move');
		 	$('.fixed-bottom').addClass('z-fix');
			$('.btn-main:not(.close), .btn-goto').attr('tabindex','0');
	 }
	
   exitPageStatus = false;
   startTimer();
}

function addName()
{
	 var mode = doLMSGetValue( "cmi.core.lesson_mode" );
	
	 var studentName = "!";
	 var lmsStudentName = doLMSGetValue(  "cmi.core.student_name" );
	 var firstName = lmsStudentName.split(",").pop();
	
	 if ( lmsStudentName !== "" )
	 {
	    studentName = " " + firstName + "!";
	 }
	
	 if ( mode === "review" )
	 {
		  $('#PAGE_1 h2').prepend('Welcome back '+studentName+'<br>');
	 }
	
	 else
	 {
		  $('#PAGE_1 h2').prepend('Welcome '+studentName+'<br>');
	 }
	
	 $('.first-name').html(firstName);
	 $('.name').html(lmsStudentName);
}

function addNamePost()
{
	 var lmsStudentName = doLMSGetValue(  "cmi.core.student_name" );
	 var firstName = lmsStudentName.split(",").pop();
	
	 var previousScore = doLMSGetValue(  "cmi.core.score.raw" );
	
	 $('.first-name').html(firstName);
	 $('.name').html(lmsStudentName);
	
	 if (previousScore !== "")
	 {
		  var status = doLMSGetValue( "cmi.core.lesson_status" );
		 
		  if (status !== "completed")
		  {
			   $('.previous-score').html('On your previous attempt you scored '+previousScore+' percent&mdash;a failing score.');
		  }
		 
		  else if (status === "completed" && previousScore < 100)
		  {
			  $('.previous-score').html('On your previous attempt you scored '+previousScore+' percent&mdash;a passing score! If you score higher on this attempt, the higher score will be retained.');
		  }

		  else
		  {
			  $('.previous-score').html('On your previous attempt you scored '+previousScore+' percent&mdash;a perfect score! Scoring lower on this attempt will not change your previous score.');
		  }
				 
		  $('.score-update').html(previousScore);
	 }
}

function startTimer()
{
   startDate = new Date().getTime();
}

function computeTime()
{
   if ( startDate !== 0 )
   {
      var currentDate = new Date().getTime();
      var elapsedSeconds = ( (currentDate - startDate) / 1000 );
      var formattedTime = convertTotalSeconds( elapsedSeconds );
   }
   else
   {
      formattedTime = "00:00:00.0";
   }

   doLMSSetValue( "cmi.core.session_time", formattedTime );
}

function doBack()
{
   doLMSSetValue( "cmi.core.exit", "suspend" );

   computeTime();
   exitPageStatus = true;
   
   var result;

   result = doLMSCommit();

	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		   to calling LMSFinish.   
   
   result = doLMSFinish();

}


function doStatus( status )
{
	// var mode = doLMSGetValue( "cmi.core.lesson_mode" );

   // if ( mode !== "review"  &&  mode !== "browse" )
   // {
      doLMSSetValue( "cmi.core.lesson_status", status );
   // reset bookmark to page 1
      doLMSSetValue( "cmi.core.lesson_location", "1" );
   // }
}


function doContinue( status )
{
   // Reinitialize Exit to blank
   doLMSSetValue( "cmi.core.exit", "" );

   var mode = doLMSGetValue( "cmi.core.lesson_mode" );
	
	 var lesson = $('body').attr('id');
	
	 if (lesson === "POST")
	 {
       var currentScore = $('#FINAL_PERCENT1').html();
	
	   var currentScoreInt = parseInt(currentScore,10);
	
	   var previousScore = doLMSGetValue( "cmi.core.score.raw" );
		 
		 if (currentScore === "NaN")
		 {
			 doLMSSetValue( "cmi.core.score.raw", "" );
		 }

		 if (previousScore === "" || previousScore < currentScoreInt)
		 {
				doLMSSetValue( "cmi.core.score.raw", currentScoreInt );
		 }
	 }
	
if ( mode !== "review"  &&  mode !== "browse" )
   {
      doLMSSetValue( "cmi.core.lesson_status", status );
   }
 
   computeTime();
   exitPageStatus = true;
   
   var result;
   result = doLMSCommit();
	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		   to calling LMSFinish.   

   result = doLMSFinish();

}

function doQuit()
{
   doLMSSetValue( "cmi.core.exit", "logout" );
	
	 var mode = doLMSGetValue( "cmi.core.lesson_mode" );
	
	 var lesson = $('body').attr('id');

   computeTime();
   exitPageStatus = true;
   
   var result;
	
	 var thresholds = $('.page-content.live').attr('data-sequence'); 
	
	 var currentPage = $('.page-content.live').attr('data-page-number'); 
	
	 if (lesson === "POST")
	 {
		 var currentScore = $('#FINAL_PERCENT1').html();
	
	   var currentScoreInt = parseInt(currentScore,10);
	
	   var previousScore = doLMSGetValue( "cmi.core.score.raw" );
		 
		 doLMSSetValue( "cmi.core.lesson_location", "1" );
		 
		 if (currentScore === "NaN")
		 {
			 doLMSSetValue( "cmi.core.score.raw", "" );
		 }

		 if (previousScore === "" || previousScore < currentScoreInt)
		 {
				doLMSSetValue( "cmi.core.score.raw", currentScoreInt );
		 }
	 }
	
	 if ( lesson !== "POST" && mode !== "review"  &&  mode !== "browse" )
   {
		  if (thresholds === undefined)
		  {
			  // bookmark the current location
			  doLMSSetValue( "cmi.core.lesson_location", currentPage );
		  }

		  if (thresholds !== undefined)
		  {
			  // reset bookmark to page 1
			  doLMSSetValue( "cmi.core.lesson_location", "1" );
		  }
	 }

   result = doLMSCommit();

	// NOTE: LMSFinish will unload the current SCO.  All processing
	//       relative to the current page must be performed prior
	//		   to calling LMSFinish.   

   result = doLMSFinish();
}

/*******************************************************************************
** The purpose of this function is to handle cases where the current SCO may be 
** unloaded via some user action other than using the navigation controls 
** embedded in the content.   This function will be called every time an SCO
** is unloaded.  If the user has caused the page to be unloaded through the
** preferred SCO control mechanisms, the value of the "exitPageStatus" var
** will be true so we'll just allow the page to be unloaded.   If the value
** of "exitPageStatus" is false, we know the user caused to the page to be
** unloaded through use of some other mechanism... most likely the back
** button on the browser.  We'll handle this situation the same way we 
** would handle a "quit" - as in the user pressing the SCO's quit button.
*******************************************************************************/
function unloadPage()
{

	if (exitPageStatus !== true)
	{
		doQuit();
	}

	// NOTE:  don't return anything that resembles a javascript
	//		    string from this function or IE will take the
	//		    liberty of displaying a confirm message box.
	
}

/*******************************************************************************
** this function will convert seconds into hours, minutes, and seconds in
** CMITimespan type format - HHHH:MM:SS.SS (Hours has a max of 4 digits &
** Min of 2 digits
*******************************************************************************/
function convertTotalSeconds(ts)
{
   var sec = (ts % 60);

   ts -= sec;
   var tmp = (ts % 3600);  //# of seconds in the total # of minutes
   ts -= tmp;              //# of seconds in the total # of hours

   // convert seconds to conform to CMITimespan type (e.g. SS.00)
   sec = Math.round(sec*100)/100;
   
   var strSec = new String(sec);
   var strWholeSec = strSec;
   var strFractionSec = "";

   if (strSec.indexOf(".") !== -1)
   {
      strWholeSec =  strSec.substring(0, strSec.indexOf("."));
      strFractionSec = strSec.substring(strSec.indexOf(".")+1, strSec.length);
   }
   
   if (strWholeSec.length < 2)
   {
      strWholeSec = "0" + strWholeSec;
   }
   strSec = strWholeSec;
   
   if (strFractionSec.length)
   {
      strSec = strSec+ "." + strFractionSec;
   }


   if ((ts % 3600) !== 0 )
      var hour = 0;
   else var hour = (ts / 3600);
   if ( (tmp % 60) !== 0 )
      var min = 0;
   else var min = (tmp / 60);

   if ((new String(hour)).length < 2)
      hour = "0"+hour;
   if ((new String(min)).length < 2)
      min = "0"+min;

   var rtnVal = hour+":"+min+":"+strSec;

   return rtnVal;
}


// Key
var KEY = {
	L1_1 : 'B',
	L1_2 : 'C',
	L1_3 : 'A',
	L1_4 : 'B',
	L1_5 : 'A',
	L1_6 : 'C',
	L1_7 : 'E',
	L2_1 : 'A',
	L2_2 : 'B',
	L2_3 : 'A',
	L2_4 : 'B',
	L2_5 : 'B',
	L3_1 : 'B',
	L3_2 : 'A',
	L3_3 : 'A',
	L3_4 : 'B',
	L3_5 : 'A',
	L3_6 : 'C',
	L3_7 : 'C',
	L3_8 : 'B',
	L3_9 : 'D',
	L3_10 : 'A',
	L4_1 : 'A',
	L4_2 : 'B',
	L4_3 : 'D',
	L4_4 : 'X',
	L4_5 : 'X',
	L5_1 : 'A',
	L5_2 : 'B',
	L5_3 : 'C',
	L5_4 : 'A',
	L5_5 : 'X',
	PRE_1 : 'X',
	PRE_2 : 'X',
	PRE_3 : 'X',
	PRE_4 : 'X',
	PRE_5 : 'X',
	PRE_6 : 'X',
	PRE_7 : 'X',
	PRE_8 : 'X',
	PRE_9 : 'X',
	PRE_10 : 'X',
	POST_1 : 'A',
	POST_2 : 'A',
	POST_3 : 'B',
	POST_4 : 'A',
	POST_5 : 'A',
	POST_6 : 'A',
	POST_7 : 'A',
	POST_8 : 'B',
	POST_9 : 'A',
	POST_10 : 'B'
};


// Why?
var WHY = {
	L1_1 : '<p>The entity looks to the Skilled Nursing Facility (SNF) for payment for services subject to Consolidated Billing and provided by entities other than the SNF.</p> <p class="bold">Review Lesson 1, Page 1 for more information.</p>',
	L1_2 : '<p>Custodial care is an example of an unskilled care service.</p> <p class="bold">Review Lesson 1, Page 3 for more information.</p>',
	L1_3 : '<p>The statement is true.</p> <p class="bold">Review Lesson 1, Page 5 for more information.</p>',
	L1_4 : '<p>Medicare Part A covers a maximum of 100 days of Skilled Nursing Facility care per benefit period.</p> <p class="bold">Review Lesson 1, Page 4 for more information.</p>',
	L1_5 : '<p>The statement is true.</p> <p class="bold">Review Lesson 1, Page 15 for more information.</p>',
	L1_6 : '<p>Increased use of skilled services is not a reason Congress enacted Skilled Nursing Facility Consolidated Billing.</p> <p class="bold">Review Lesson 1, Page 17 for more information.</p>',
	L1_7 : '<p>Skilled Nursing Facilities should bill for services in all of these instances.</p> <p class="bold">Review Lesson 1, Page 14 for more information.</p>',
	L2_1 : '<p>The statement is true.</p> <p class="bold">Review Lesson 2, Page 2 for more information.</p>',
	L2_2 : '<p>Since the Skilled Nursing Facility (SNF) bills the Medicare Administrative Contractor (MAC) for all services subject to Consolidated Billing, the outside provider or supplier must look to the SNF, rather than the MAC, for payment.</p> <p class="bold">Review Lesson 2, Page 2 for more information.</p>',
	L2_3 : '<p>The statement is true.</p> <p class="bold">Review Lesson 2, Page 4 for more information.</p>',
	L2_4 : '<p>Skilled Nursing Facility (SNF) Consolidated Billing affects various health care providers furnishing services to SNF residents.</p> <p class="bold">Review Lesson 2, Page 5 for more information.</p>',
	L2_5 : '<p>The Skilled Nursing Facility is responsible for Consolidated Billing and is the best source to help you determine a resident’s status.</p> <p class="bold">Review Lesson 2, Page 6 for more information.</p>',
	L3_1 : '<p>The term “excluded” usually means services excluded from Medicare coverage, but when referring to Skilled Nursing Facility Consolidated Billing (CB), it means any covered service paid separately apart from CB under Part B.</p> <p class="bold">Review Lesson 3, Page 2 for more information.</p>',
	L3_2 : '<p>The statement is true.</p> <p class="bold">Review Lesson 3, Page 7 for more information.</p>',
	L3_3 : '<p>Medicare Part A (institutional) claims for Skilled Nursing Facility excluded services are grouped by major category.</p> <p class="bold">Review Lesson 3, Page 4 for more information.</p>',
	L3_4 : '<p>Preventive and screening services are excluded from the Part A payment made under the Skilled Nursing Facility (SNF) Prospective Payment System but are subject to SNF Consolidated Billing. As such, they are separately payable under Medicare Part B, but only to the SNF.</p> <p class="bold">Review Lesson 3, Page 10 for more information.</p>',
	L3_5 : '<p>The statement is true.</p> <p class="bold">Review Lesson 3, Page 18 for more information.</p>',
	L3_6 : '<p>An ambulance trip from a Skilled Nursing Facility (SNF) to the beneficiary’s house is included in the SNF Prospective Payment System and Consolidated Billing if the beneficiary is readmitted to a SNF before the following midnight and did not receive any services from a Medicare-participating Home Health Agency under a plan of care during the absence from the SNF.</p> <p class="bold"> Review Lesson 3, Page 20 for more information.</p>',
	L3_7 : '<p>If File 1 or File 2 does not list the code for the service, the service is subject to Skilled Nursing Facility (SNF) Consolidated Billing and the physician, Non-Physician Practitioner, or supplier must look to the SNF for service payment.</p> <p class="bold">Review Lesson 3, Page 16 for more information.</p>',
	L3_8 : '<p>The physician service exclusion applies only to the professional component of the diagnostic test, which the provider bills directly to the Medicare Administrative Contractor. In contrast, the technical component is subject to Consolidated Billing.</p> <p class="bold">Review Lesson 3, Page 19 for more information.</p>',
	L3_9 : '<p>When a Skilled Nursing Facility Part A resident receives the services of a physician from a Rural Health Clinic or Federally Qualified Health Center, those services are not subject to Consolidated Billing.</p> <p class="bold">Review Lesson 3, Page 25 for more information.</p>',
	L3_10 : '<p>Major Category V and File 4 tells you how to bill therapy services.</p> <p class="bold">Review Lesson 3, Page 21 for more information.</p>',
	L4_1 : '<p>The statement is true.</p> <p class="bold">Review Lesson 4, Page 3 for more information.</p>',
	L4_2 : '<p>Part B has no respiratory therapy benefit. Neither the Skilled Nursing Facility nor the provider receives Medicare payment for respiratory therapy services furnished during a noncovered Part B stay.</p> <p class="bold">Review Lesson 4, Page 5 for more information.</p>',
	L4_3 : '<p>When a beneficiary’s Skilled Nursing Facility Medicare Part A coverage is disqualified (for example, Part A benefits exhausted, no qualifying 3-day hospital stay, or level-of-care requirement not met), it creates a noncovered Part B stay.</p> <p class="bold">Review Lesson 4, Page 2 for more information.</p>',
	L4_4 : '<p></p> <p class="bold"></p>',
	L4_5 : '<p></p> <p class="bold"></p>',
	L5_1 : '<p>The statement is true.</p> <p class="bold">Review Lesson 5, Page 4 for more information.</p>',
	L5_2 : '<p>The Skilled Nursing Facility (SNF) is responsible for billing all services covered under Part A Consolidated Billing (CB). Outside providers and “under arrangement” providers who deliver services to SNF residents also have a responsibility to determine the coverage status of a SNF resident, and they MUST look to the SNF for payment of CB-covered services. Providers may only bill the MAC for services not subject to CB, such as the professional component of their services.</p> <p class="bold">Review Lesson 5, Pages 2 and 5 for more information.</p>',
	L5_3 : '<p>When an outside provider or supplier has an existing arrangement and furnishes a service subject to Consolidated Billing, the provider or supplier looks to the Skilled Nursing Facility (SNF) for its payment, and the SNF helps coordinate the process.</p> <p class="bold">Review Lesson 5, Page 2 for more information.</p>',
	L5_4 : '<p>The Anti-Kickback Statute and the Limitation on Certain Physician Referrals Statute (also known as the Physician Self-Referral Statute or Stark Law) prohibit certain referrals.</p> <p class="bold">Review Lesson 5, Page 9 for more information.</p>',
	L5_5 : '<p></p> <p class="bold"></p>',
	PRE_1 : '<p></p> <p class="bold"></p>',
	PRE_2 : '<p></p> <p class="bold"></p>',
	PRE_3 : '<p></p> <p class="bold"></p>',
	PRE_4 : '<p></p> <p class="bold"></p>',
	PRE_5 : '<p></p> <p class="bold"></p>',
	PRE_6 : '<p></p> <p class="bold"></p>',
	PRE_7 : '<p></p> <p class="bold"></p>',
	PRE_8 : '<p></p> <p class="bold"></p>',
	PRE_9 : '<p></p> <p class="bold"></p>',
	PRE_10 : '<p></p> <p class="bold"></p>'
};

