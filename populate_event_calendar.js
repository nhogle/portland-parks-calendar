$(document).ready(function() {
	// Add a #calendar element
	$('<div id="calendar" />').insertBefore( '#content-wrap' );

	//Find the default event time
	var default_event_time = "7:00 pm";
	var m = $("body").text().match( /begins? at (\d?\d:\d\d (am|pm))/i );
	if (m)
		default_event_time = m[1];

	// Collect all the events
	var events = [];
	$('.greentable').each( function() {
		var park_name  = "";
		var event_time = "";

		// Iterate through the table-rows
		$(this).find("tr").each( function() {
			var $tr = $(this);
			var first_td_text = $tr.find( "td:eq(0)" ).text();
			var m = first_td_text.match( /([^•]*)•(.*)(\d?\d:\d\d (AM|PM))/i );

			// When we encounter a park-name and event time,
			// set these as state variables
			if ( m ) {
				park_name = m[1];
				event_time = m[3];
			}
			// Otherwise, process a row as if it were an event
			else {
				var date_str = $tr.children("td:eq(0)").text().trim() + " " + (new Date().getFullYear()) + " " + (event_time || default_event_time);
				var date = new Date( date_str );
				var event_title = $tr.children("td:eq(1)").text().trim();

				// Movie titles are on the 5th column
				var title_extra = $tr.children("td:eq(4)").text().trim();

				if ( date && (event_title||title_extra) ) {
					var title = park_name;
					if (title_extra)
						title += " - " + title_extra;
					if ( event_title )
						title += " - " + event_title;
					events.push( {title: title, start: date} );
				}
			}

		});
	} );

	// Create the calendar, populating it with th collected events
	$('#calendar').fullCalendar({
		contentHeight: "auto",
		events: events
	})
});
