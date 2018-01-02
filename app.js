$('#submit').click((event) => {
	event.preventDefault();
	if ($('#search').val() === "") {
		// alert('Random');
		window.open('https://en.wikipedia.org/wiki/Special:Random');
	}
});