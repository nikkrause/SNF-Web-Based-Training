// JavaScript Document

/*$(document).ready(function()
{
	'use strict';
	$('.head-nav>button:not(#NAV_EXIT)').click(function(section)
	{
		$('.resource').addClass('open');
		$('#NAV_EXIT').addClass('disable').attr('disabled',true);
	});
});*/

function openResources(section)
{
	'use strict';
	$('.page-content.live a, .page-content.live input, .btn-goto').attr('tabindex','-1');
	$('.page-content.live, .disclaimer').addClass('no-print');
	$('.head-nav>button, .resource').removeClass('disable open');
	$('.head-nav .close').removeClass('show').attr('disabled',true);
	$('#NAV_'+section).addClass('disable open');
	$('#'+section).addClass('open').focus().find('button').attr('tabindex','0');
	$('#NAV_EXIT').addClass('disable hide-absolute').attr('disabled',true);
	$('.head-nav .close#NAV_CLOSE_'+section).addClass('show').attr('disabled',false);
	$('.resource-content').removeClass('live print');
	$('.resource-content.default').addClass('live');
	$('.resource.open .navbar').removeClass('hide-nav-mobile');
}

function closeResources()
{
	'use strict';
	$('.page-content.live, .disclaimer').removeClass('no-print');
	$('.head-nav>button, .resource').removeClass('disable open');
	$('.head-nav .close').removeClass('show').attr('disabled',true);
	$('#NAV_EXIT').removeClass('disable hide-absolute').attr('disabled',false);
	$('.resource-content').removeClass('live print');
	$('.resource-content.default').addClass('live');
	$('nav').removeClass('hide-nav-mobile');
}

function openResSection(section)
{
	'use strict';
	$('.resource-content').removeClass('live print');
    $('.resource-content').scrollTop(0);
	$('#'+section).addClass('live print');
	$('.resource.open .navbar').addClass('hide-nav-mobile');
}

$('.mobile-menu').click(function()
{
	'use strict';
	$(this).parent().removeClass('hide-nav-mobile');
	$('.resource-content').removeClass('live print');
	$('.resource-content.default').addClass('live print');
});