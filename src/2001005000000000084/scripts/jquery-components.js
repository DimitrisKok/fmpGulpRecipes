jQuery(document).ready(function($) {

  var expanderTrigger = document.getElementById("js-expander-trigger");
  var expanderContent = document.getElementById("js-expander-content");

      $('#js-expander-trigger').click(function(){
        $(this).toggleClass("expander-hidden");
      });

    $('.js-accordion-trigger').bind('click', function(e){
          jQuery(this).parent().find('.task').slideToggle('fast');  // apply the toggle to the ul
          jQuery(this).parent().toggleClass('is-expanded');
          e.preventDefault();
    });


});
