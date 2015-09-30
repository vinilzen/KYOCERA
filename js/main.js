$(document).ready(function(){
	$('a.scrollmy[href^="#"]').click( function(){ // если в href начинается с # или ., то ловим клик
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

	$('#Features').appear().on('appear', function(event, $elements) {
		$('#Features .container-features').css({'opacity':1});
    });

    $('#Features').on('disappear', function(event, $elements) {
		$('#Features .container-features').css({'opacity':0.1});
    });

	$('#myTab').tabCollapse();

	$(window).scroll(function() {
		// Scroll the background at var speed
		// the yPos is a negative value because we're scrolling it UP!
		var yPos = -($(window).scrollTop() / 5); 
		// Put together our final background position
		// Move the background
		$('.section-advantage').css({ backgroundPositionY: yPos + 'px' });
	});
});