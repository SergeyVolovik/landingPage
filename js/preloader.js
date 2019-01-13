document.body.onload = function () {
	setTimeout(function(){
		var preloader = document.getElementById('page_preloader');
			if (!preloader.classList.contains('done') ) {
				preloader.classList.add('done');
			}
	}, 2200);
};