// JavaScript Document
var pageTotal = $('.page-content:last-child').attr('id').replace(/PAGE_/,'');
var pageTotalInt = parseInt(pageTotal,10);

//TITLE PAGE ENTER
$('#NAV_ENTER, .page-title').click(function()
{
	'use strict';
	$('.page-title').addClass('enter');
	$('.fixed-bottom').addClass('z-fix');
	$('.btn-main:not(.close), .btn-goto').attr('tabindex','0');
});

//LESSON LAUNCH
$(document).ready(function()
{
	'use strict';
	var currentPage = $('.live');
	var currentPageNumber = currentPage.attr('id').replace(/PAGE_/,'');
	$('#PAGE_TOTAL').html(pageTotalInt);
	$('#PAGE_COUNT').html(currentPageNumber);
	if(currentPage.is('#PAGE_1'))
	{
		$('.foot-nav').children('#NAV_BACK').addClass('hide').attr('disabled',true);
		$('.foot-nav>img').addClass('hide');
	}
});

$('.foot-nav>button').click(function()
{
	'use strict';
	var currentPage = $('.page-content.live');
	var nextPage = currentPage.next();
	var currentPageNumber = $('#PAGE_COUNT').html();
	var currentPageInt = parseInt(currentPageNumber,10);
	$('.page-content a, .page-content input').attr('tabindex','-1');
	$('.foot-nav span').not('#ALERT1').removeClass('show');
	$('.assess-message').addClass('hide');
	if ($(this).is('#NAV_NEXT'))
	{
		currentPage.removeClass('live').next().addClass('live').focus().find('a, input').attr('tabindex','0');
		currentPageInt++;
		if (currentPage.is('#PAGE_1'))
		{
			$('.foot-nav').children('#NAV_BACK').removeClass('hide').attr('disabled',false);
			$('.foot-nav>img').removeClass('hide');
		}
		if (currentPageInt === pageTotalInt)
		{
			$('.foot-nav').addClass('complete').children('#NAV_NEXT').attr('id','FINISH').attr('title','Close this lesson');
			$('.head-nav #NAV_EXIT');
			$('.foot-nav #ALERT1').addClass('show');
			doStatus('completed');
		}
		if (nextPage.is('.page-question:not(.answered)'))
		{
			$('#NAV_NEXT').attr('disabled',true);
			$('.foot-nav #ALERT2').addClass('show');
		}
		$('#PAGE_COUNT').html(currentPageInt);
	}
	else if ($(this).is('#FINISH'))
	{
		doContinue('completed');
	}
	else
	{
		currentPage.removeClass('live').prev().addClass('live');
		$('#NAV_NEXT').attr('disabled',false);
		currentPageInt--;
		if (currentPage.is('#PAGE_2'))
		{
			$('.foot-nav').children('#NAV_BACK').addClass('hide').attr('disabled',true);
		}
		if (currentPageInt === pageTotalInt-1)
		{
			$('.foot-nav').removeClass('complete').children('#FINISH').attr('id','NAV_NEXT').attr('title','');
		}
		$('#PAGE_COUNT').html(currentPageInt);
	}
});

//HYPERLINK HANDLER
$('a').not('.dynamic').click(function()
{
	'use strict';
	//IE 10 conditional
	var b = document.documentElement;
	b.setAttribute('data-useragent',  navigator.userAgent);
	b.setAttribute('data-platform', navigator.platform );
	
	var link = $(this).attr('href');
	if (navigator.appName === "Microsoft Internet Explorer")
	{
  	window.parent.open
		(
			link, 
			'newwindow', 
			'width='+ window.outerWidth / 2 +',height='+ window.outerHeight / 1.5 +', resizable=yes, scrollbars=yes, menubar=yes, top=0, left=0;'
		);
	} 
	else 
	{
		window.open
		(
			link, 
			'newwindow', 
			'width='+ window.outerWidth / 2 +',height='+ window.outerHeight / 1.5 +', resizable=yes, scrollbars=yes, menubar=yes, top=0, left=0;'
		);
	}
  return false;
});

//PRINT ENTIRE LESSON
$('.print-lesson').click(function()
{
	'use strict';
	$('.page-content:not(.live)').addClass('print');
	$('.resource').addClass('no-print');
	window.print();
	$('.page-content').removeClass('print');
	$('.resource').removeClass('no-print');
});