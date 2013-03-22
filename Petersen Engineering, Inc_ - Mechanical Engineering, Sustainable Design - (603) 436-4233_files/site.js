google.load("jquery", "1");
google.setOnLoadCallback(function() {
	
	// highlight primary navigation
	$("#major_navigation a").each(function() {
		var link = this.href.replace(window.location.protocol + "//" + window.location.host + "/", "").split("/")[0];
		var page = window.location.href.replace(window.location.protocol + "//" + window.location.host + "/", "").split("/")[0];
		
		if (link == page) {
			$(this).addClass("active");
		}
	});

});

