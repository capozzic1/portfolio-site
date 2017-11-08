$(document).ready(function(){

	$(".port1").click(function(){

		window.open("https://rufflefordogs.herokuapp.com");

		

	});

	$(".port2").click(function(){

		window.open("http://capozzic1.github.io/partialtheme");



	});


$('.navbar-collapse').click(function(e) {

    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});


});
