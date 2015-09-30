$(document).ready(function(){
	$('a.scrollmy[href^="#"], a.scrollmy[href^="."]').click( function(){ // если в href начинается с # или ., то ловим клик
		var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href
		if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 700); // анимируем скроолинг к элементу scroll_el
		}
		return false; // выключаем стандартное действие
	});

	/*$(document.body).on('appear', '#Advantages', function(e, $affected) {
		console.log(123);
	});*/

	$('#Features').appear().on('appear', function(event, $elements) {
		$('#Features .container-features').css({'opacity':1});
    });

    $('#Features').on('disappear', function(event, $elements) {
		$('#Features .container-features').css({'opacity':0.1});
    });

    $('.cover-image').appear().on('disappear', function(event, $all_disappeared_elements) {
     	console.log('cover-image');
    });

	$('#myTab').tabCollapse();
});