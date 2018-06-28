// JavaScript Document
var KEY;
var WHY;

function resetQuestion()
{
	'use strict';
	$('.live').removeClass('answered').find('form').removeClass('answered').find('[disabled]').removeAttr('disabled');
	$('.live label').removeClass('wrong').find('div').remove();
	$('main .live .reset').removeClass('show');
}

var selected = $('input:checked').attr('value');

$(document).ready(function()
{
	'use strict';
	$('fieldset li>label>input').change(function()
	{
		$(this).parent().parent().parent().find('.assess-submit').find('.submitAnswer').attr('disabled',false);
	});
});

var currentScore = $('#TOTAL_SCORE').html();
var currentScoreInt = parseInt(currentScore,10);
var totalQuestions = $('.total').first().html();
var totalQuestionsInt = parseInt(totalQuestions,10);
var eachQuestionPercent = 100 / totalQuestionsInt;

function checkAnswer(question)
{
	'use strict';
	$('#'+question).addClass('answered');
	$('#NAV_NEXT').attr('disabled',false);
	$('.live input, .live .submitAnswer').attr('disabled',true);
	$('.live.page-question').addClass('answered');
	var answer = $('#'+question).find('input:checked');
	var answerVal = answer.val();
	var type = $('#'+question).attr('data-type');
	
	if (type === "true-false")
	{
		var answerValTF = answer.attr('data-TF');
	}
	
	/*// pre-assessment
	if (question === 'PRE_1')
	{
		if(answerVal === KEY.PRE_1)
		{
			right();
		}
		else
		{
			wrong();
			$('#PRE_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.PRE_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.PRE_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}*/
	
	// lesson 1 review
	if (question === 'L1_1')
	{
		if(answerVal === KEY.L1_1)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_2')
	{
		if(answerVal === KEY.L1_2)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_2+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_2+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_3')
	{
		if(answerVal === KEY.L1_3)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_3+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_3+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_4')
	{
		if(answerVal === KEY.L1_4)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_4+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_4+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_5')
	{
		if(answerVal === KEY.L1_5)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_5+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_5+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_6')
	{
		if(answerVal === KEY.L1_6)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_6 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_6+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_6+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L1_7')
	{
		if(answerVal === KEY.L1_7)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L1_7 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L1_7+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L1_7+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	// lesson 2 review
	if (question === 'L2_1')
	{
		if(answerVal === KEY.L2_1)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L2_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L2_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L2_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L2_2')
	{
		if(answerVal === KEY.L2_2)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L2_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L2_2+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L2_2+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L2_3')
	{
		if(answerVal === KEY.L2_3)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L2_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L2_3+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L2_3+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L2_4')
	{
		if(answerVal === KEY.L2_4)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L2_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L2_4+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L2_4+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L2_5')
	{
		if(answerVal === KEY.L2_5)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L2_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L2_5+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L2_5+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	// lesson 3 review
	if (question === 'L3_1')
	{
		if(answerVal === KEY.L3_1)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_2')
	{
		if(answerVal === KEY.L3_2)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_2+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_2+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_3')
	{
		if(answerVal === KEY.L3_3)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_3+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_3+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_4')
	{
		if(answerVal === KEY.L3_4)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_4+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_4+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_5')
	{
		if(answerVal === KEY.L3_5)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_5+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_5+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_6')
	{
		if(answerVal === KEY.L3_6)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_6 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_6+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_6+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_7')
	{
		if(answerVal === KEY.L3_7)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_7 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_7+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_7+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_8')
	{
		if(answerVal === KEY.L3_8)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_8 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_8+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_8+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_9')
	{
		if(answerVal === KEY.L3_9)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_9 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_9+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_9+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L3_10')
	{
		if(answerVal === KEY.L3_10)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L3_10 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L3_10+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L3_10+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	// lesson 4 review
	if (question === 'L4_1')
	{
		if(answerVal === KEY.L4_1)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L4_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L4_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L4_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L4_2')
	{
		if(answerVal === KEY.L4_2)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L4_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L4_2+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L4_2+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L4_3')
	{
		if(answerVal === KEY.L4_3)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L4_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L4_3+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L4_3+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	/*if (question === 'L4_4')
	{
		if(answerVal === KEY.L4_4)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L4_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L4_4+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L4_4+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L4_5')
	{
		if(answerVal === KEY.L4_5)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L4_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L4_5+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L4_5+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}*/
	
	// lesson 5 review
	if (question === 'L5_1')
	{
		if(answerVal === KEY.L5_1)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L5_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L5_1+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L5_1+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L5_2')
	{
		if(answerVal === KEY.L5_2)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L5_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L5_2+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L5_2+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L5_3')
	{
		if(answerVal === KEY.L5_3)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L5_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L5_3+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L5_3+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	if (question === 'L5_4')
	{
		if(answerVal === KEY.L5_4)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L5_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L5_4+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L5_4+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}
	
	/* if (question === 'L5_5')
	{
		if(answerVal === KEY.L5_5)
		{
			right();
		}
		else
		{
			wrongRev();
			$('#L5_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.L5_5+'.</div><div class="more-info"><a href="#">More Information</a></div><div class="assess-message hide">'+WHY.L5_5+'<br><button type="button">CLOSE</button><div class="assess-message-curtain"></div></div>');
		}
	}*/
	
	// post-assessment
	if (question === 'POST_1')
	{
		doLMSSetValue( "cmi.interactions.0.id", question );
		doLMSSetValue( "cmi.interactions.0.type", type );
		doLMSSetValue( "cmi.interactions.0.student_response", answerValTF );
		if(answerVal === KEY.POST_1)
		{
			right();
			doLMSSetValue( "cmi.interactions.0.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_1 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_1+'.</div>');
			doLMSSetValue( "cmi.interactions.0.result", "wrong" );
		}
	}
	
	if (question === 'POST_2')
	{
		doLMSSetValue( "cmi.interactions.1.id", question );
		doLMSSetValue( "cmi.interactions.1.type", type );
		doLMSSetValue( "cmi.interactions.1.student_response", answerValTF );
		if(answerVal === KEY.POST_2)
		{
			right();
			doLMSSetValue( "cmi.interactions.1.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_2 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_2+'.</div>');
			doLMSSetValue( "cmi.interactions.1.result", "wrong" );
		}
	}
	
	if (question === 'POST_3')
	{
		doLMSSetValue( "cmi.interactions.2.id", question );
		doLMSSetValue( "cmi.interactions.2.type", type );
		doLMSSetValue( "cmi.interactions.2.student_response", answerValTF );
		if(answerVal === KEY.POST_3)
		{
			right();
			doLMSSetValue( "cmi.interactions.2.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_3 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_3+'.</div>');
			doLMSSetValue( "cmi.interactions.2.result", "wrong" );
		}
	}
	
	if (question === 'POST_4')
	{
		doLMSSetValue( "cmi.interactions.3.id", question );
		doLMSSetValue( "cmi.interactions.3.type", type );
		doLMSSetValue( "cmi.interactions.3.student_response", answerValTF );
		if(answerVal === KEY.POST_4)
		{
			right();
			doLMSSetValue( "cmi.interactions.3.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_4 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_4+'.</div>');
			doLMSSetValue( "cmi.interactions.3.result", "wrong" );
		}
	}
	
	if (question === 'POST_5')
	{
		doLMSSetValue( "cmi.interactions.4.id", question );
		doLMSSetValue( "cmi.interactions.4.type", type );
		doLMSSetValue( "cmi.interactions.4.student_response", answerValTF );
		if(answerVal === KEY.POST_5)
		{
			right();
			doLMSSetValue( "cmi.interactions.4.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_5 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_5+'.</div>');
			doLMSSetValue( "cmi.interactions.4.result", "wrong" );
		}
	}
	
	if (question === 'POST_6')
	{
		doLMSSetValue( "cmi.interactions.5.id", question );
		doLMSSetValue( "cmi.interactions.5.type", type );
		doLMSSetValue( "cmi.interactions.5.student_response", answerValTF );
		if(answerVal === KEY.POST_6)
		{
			right();
			doLMSSetValue( "cmi.interactions.5.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_6 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_6+'.</div>');
			doLMSSetValue( "cmi.interactions.5.result", "wrong" );
		}
	}
	
	if (question === 'POST_7')
	{
		doLMSSetValue( "cmi.interactions.6.id", question );
		doLMSSetValue( "cmi.interactions.6.type", type );
		doLMSSetValue( "cmi.interactions.6.student_response", answerValTF );
		if(answerVal === KEY.POST_7)
		{
			right();
			doLMSSetValue( "cmi.interactions.6.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_7 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_7+'.</div>');
			doLMSSetValue( "cmi.interactions.6.result", "wrong" );
		}
	}
	
	if (question === 'POST_8')
	{
		doLMSSetValue( "cmi.interactions.7.id", question );
		doLMSSetValue( "cmi.interactions.7.type", type );
		doLMSSetValue( "cmi.interactions.7.student_response", answerValTF );
		if(answerVal === KEY.POST_8)
		{
			right();
			doLMSSetValue( "cmi.interactions.7.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_8 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_8+'.</div>');
			doLMSSetValue( "cmi.interactions.7.result", "wrong" );
		}
	}
	
	if (question === 'POST_9')
	{
		doLMSSetValue( "cmi.interactions.8.id", question );
		doLMSSetValue( "cmi.interactions.8.type", type );
		doLMSSetValue( "cmi.interactions.8.student_response", answerValTF );
		if(answerVal === KEY.POST_9)
		{
			right();
			doLMSSetValue( "cmi.interactions.8.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_9 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_9+'.</div>');
			doLMSSetValue( "cmi.interactions.8.result", "wrong" );
		}
	}
	
	if (question === 'POST_10')
	{
		doLMSSetValue( "cmi.interactions.9.id", question );
		doLMSSetValue( "cmi.interactions.9.type", type );
		doLMSSetValue( "cmi.interactions.9.student_response", answerValTF );
		if(answerVal === KEY.POST_10)
		{
			right();
			doLMSSetValue( "cmi.interactions.9.result", "correct" );
		}
		else
		{
			wrong();
			$('#POST_10 .wrong').append('<div><span class="bold">YOU ARE INCORRECT.</span> The correct answer is '+KEY.POST_10+'.</div>');
			doLMSSetValue( "cmi.interactions.9.result", "wrong" );
		}
	}
	
	$('.foot-nav span').removeClass('show');
}

$(document).on('click','.more-info a', function()
{
	'use strict';
	$(this).parent().next('div').removeClass('hide');
	$('.answered input').attr('disabled',true);
});

$(document).on('click','.assess-message button, .assess-message-curtain', function()
{
	'use strict';
	$('.assess-message').addClass('hide');
	$('.answered input').attr('disabled',true);
});

function addScore()
{
	'use strict';
	var finalScore = eachQuestionPercent * currentScoreInt;
	var previousScore = doLMSGetValue( "cmi.core.score.raw" );
	$('#FINAL_PERCENT1, #FINAL_PERCENT2, #FINAL_PERCENT3, #FINAL_PERCENT4, #FINAL_PERCENT5, #FINAL_PERCENT6').html(finalScore);
	if (previousScore === "" || previousScore < 70)
	{
		if (finalScore >= 70)
		{
			//alert('Normal Pass');
			$('#PASSED').addClass('show');
			$('.scoreboard-final, #PRINT_SCORE')/*.removeClass('failed')*/.addClass('passed');
			$('#ALERT1').html('This course is now complete! &nbsp; <a class="link-button btn-cta dynamic inline" href="javascript:doQuit()" tabindex="-1">Close the Course</a>');
			// complete the lesson status now
			doStatus('completed');
		}
		else
		{
			//alert('Normal Fail');
			$('#FAILED').addClass('show');
			$('.scoreboard-final, #PRINT_SCORE').addClass('failed');
			$('.foot-nav img.no-mobile').attr('src','../000-Main_Template_Files/main-images/WBTfooterNavFailBG.png');
			$('.foot-nav img.mobile-only').attr('src','../000-Main_Template_Files/main-images/WBTfooterNavMobFailBG.png');
			if (previousScore > finalScore)
			{
				$('.score-update').html(previousScore);
			}
			doStatus('incomplete');
		}
	}
	if (previousScore !== "" && previousScore >= 70)
	{
		if (finalScore >= previousScore)
		{
			//alert('Pass Pass');
			$('#REPASS_PASS').addClass('show');
			$('.scoreboard-final, #PRINT_SCORE').addClass('passed');
			$('#ALERT1').html('This course is complete! &nbsp; <a class="link-button btn-cta dynamic inline" href="javascript:doQuit()" tabindex="-1">Close the Course</a>');
		}
		else
		{
			//alert('Pass Fail');
			$('#REPASS_FAIL').addClass('show');
			$('.scoreboard-final, #PRINT_SCORE').addClass('re-passed');
			$('#ALERT1').html('This course is complete! &nbsp; <a class="link-button btn-cta dynamic inline" href="javascript:doQuit()" tabindex="-1">Close the Course</a>');
			if (previousScore > finalScore)
			{
				$('.score-update').html(previousScore);
			}
		}
	}
}

function right()
{
	'use strict';
	currentScoreInt++;
	$('main	.live input:checked').parent().addClass('right').append('<div class="bold">YOU ARE CORRECT!</div>');
	$('.score').html(currentScoreInt);
	//$('#FINAL_PERCENT').html()
	
}

function wrong()
{
	'use strict';
	$('main .live input:checked').parent().addClass('wrong');
}

function wrongRev()
{
	'use strict';
	$('main .live .reset').addClass('show');
	$('main .live input:checked').parent().addClass('wrong');
}

function addReview()
{
	'use strict';
	$('.page-question').clone().removeAttr('class').appendTo('#REVIEW>div');
	$('.foot-nav #ALERT3').addClass('show');
}