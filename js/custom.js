$(document).ready(function(){

	var expedli = $('.toctree-l1.current');
	var expedlis = $('.toctree-l1.current').siblings(".toctree-l1");
	expedli.show();
	expedlis.show();
	if ( expedli.css('display') != 'none' ){
		var clis = expedli.siblings(".toctree-l1");
		var clispan = expedli.siblings().not(".toctree-l1").children('span').children('.fa');
		clispan.removeClass('fa-plus-square-o').addClass('fa-minus-square-o');		
	}
	
	$(".expli").click(function(){
		var ul = $(this).siblings("ul");
		//if ( ul.css('display') == 'none' ){
		if ($('.expli').children('.fa').hasClass('fa-plus-square-o')){		
			$('.expli').children('.fa').removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
			ul.show(300);
		}
		else{	
			$('.expli').children('.fa').removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
			ul.hide(300);
		}
	})
	$(".expul >i.fa").click(function(){
		var lis = $(this).parent().parent().siblings(".toctree-l1 ");
		if ( $(this).hasClass('fa-plus-square-o')){
			$(this).removeClass('fa-plus-square-o').addClass('fa-minus-square-o');
			lis.show(300);
		}
		else{
			var lic = $(this).parent().parent().siblings(".current");
			var lispan = $(this).parent().parent().siblings(".current >span");				
			$(this).removeClass('fa-minus-square-o').addClass('fa-plus-square-o');
			lis.hide(300);
		}
	})
	if ($('li .toctree-l1 >span').length) {
	var nav = $('li .toctree-l1 >span').offset().top;
	$(".wy-nav-side").scrollTop(nav-80);
	}
});