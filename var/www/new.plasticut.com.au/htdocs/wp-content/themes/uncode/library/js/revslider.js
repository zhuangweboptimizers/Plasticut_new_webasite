(function($) {
	"use strict";

	UNCODE.revslider = function() {
	$(window).on("load", function() {
		$('.rev_slider_wrapper, rs-module-wrap').each(function(){
			var $this = jQuery(this),
			id_array = $this.attr("id").split("_"),
			id = id_array[2];
			if (id != undefined && id != '') {
				$.globalEval('revapi'+id+'.bind("revolution.slide.onloaded",function (e, data) { if (jQuery(e.currentTarget).closest(".header-revslider").length) { var style = jQuery(e.currentTarget).find("li, rs-slide").eq(0).attr("data-skin"), scrolltop = jQuery(document).scrollTop(); if (style != undefined) UNCODE.switchColorsMenu(scrolltop, style);}})');
				$.globalEval('revapi'+id+'.bind("revolution.slide.onchange",function (e,data) { if (jQuery(e.currentTarget).closest(".header-revslider").length) { var style = jQuery(e.currentTarget).find("li, rs-slide").eq(data.slideIndex - 1).attr("data-skin"), scrolltop = jQuery(document).scrollTop(); if (style != undefined) UNCODE.switchColorsMenu(scrolltop, style);}})');
			}
		});
	});
};


})(jQuery);
