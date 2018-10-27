$(document).ready(function () {
	
	$('.main_btna, .main_btn, a[href="#sheldure"], .close').on('click', function (event) {
		event.preventDefault();
		$('.overlay').animate(
			{
				opacity: 'toggle'
			}, 1400);
		$('.modal').slideToggle(function() {
		   $(this).animate({ 
		     display: 'block',
		     opacity: '0'
		   }, 2000);
		   },
		   function() {
		   $(this).animate({ 
		     display: 'none',
		     opacity: '1'
		   }, 2000);
		 });

	});

	$('.form-inline').on('submit', function (event) {

		let msg = $(this).serialize();
		let resault; 
		    $.ajax({
		      type: 'POST',
		      url: 'server.php',
		      data: msg
            }).done(function() {
            	console.log('done');
            	resault = $("<p></p>").text("Форма успешно отправлена!");
            	$(".form-inline").append(resault); 
              $(".form-inline").trigger('reset');             

            }).fail(function() {
            	console.log('fail');
              resault = $("<p></p>").text("Что-то пошло не так.");
              $(".form-inline").append(resault); 
              $(".form-inline").trigger('reset');
            });
		event.preventDefault();
	});
	
});	