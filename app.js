$('#submit').click((event) => {
	event.preventDefault();
	if ($('#search').val() === "") {
		// alert('Random');
		window.open('https://en.wikipedia.org/wiki/Special:Random');
	}
});

// https://en.wikipedia.org/w/api.php?action=query&titles=Main%20Page&prop=revisions&rvprop=content&format=json&formatversion=2