(function($){
	$.fn.countdown = function(options){
	var settings = {'date': null};
	
	if (options) {
		$.extend(settings, options);
		}

	this_sel = $(this);

	function count_exec(){
		eventDate = Date.parse(settings['date'])/1000;
		currentDate = Math.floor($.now()/1000);
		seconds = eventDate - currentDate;
		days = Math.floor(seconds / (60*60*24));
		seconds -= days*60*60*24;
		hours = Math.floor(seconds / (60*60));
		seconds -= hours*60*60;
		minutes = Math.floor(seconds / (60));
		seconds -= minutes*60;
		
		days = (String(days).length ==1) ? '0'+days : days;
		hours = (String(hours).length ==1) ? '0'+hours : hours;
		minutes = (String(minutes).length ==1) ? '0'+minutes : minutes;
		seconds = (String(seconds).length ==1) ? '0'+seconds : seconds;
		
		this_sel.find('.days').html(days+'<p style = "font-size: 12px; font-family:arial;"><b>Days</b></p>');
		this_sel.find('.hours').html(hours+'<p style = "font-size: 12px; font-family:arial;"><b>Hours</b></p>');
		this_sel.find('.minutes').html(minutes+'<p style = "font-size: 12px; font-family:arial;"><b>Minutes</b></p>');
		this_sel.find('.seconds').html(seconds+'<p style = "font-size: 12px; font-family:arial;"><b>Seconds</b></p>');

		if(days==01){
			this_sel.find('.days').html(days+'<p style = "font-size: 12px; font-family:arial;"><b>Day</b></p>');
		}

		if(hours==01){
			this_sel.find('.days').html(hours+'<p style = "font-size: 12px; font-family:arial;"><b>Hour</b></p>');
		}

		if(minutes==01){
			this_sel.find('.days').html(minutes+'<p style = "font-size: 12px; font-family:arial;"><b>Minute</b></p>');
		}

		if(seconds==01){
			this_sel.find('.seconds').html(seconds+'<p style = "font-size: 12px; font-family:arial;"><b>Second</b></p>');
		}


		}

	count_exec();
	interval = setInterval(count_exec, 1000) 

	}
})(jQuery);