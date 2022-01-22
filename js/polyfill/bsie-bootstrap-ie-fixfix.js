(function($) {

  function bootstrapIE6FixFix(el) {

    if ($.eb.ie6()) {
      el = el || $('html');

      // fix row-fluid span first-child margin-left
      $('[class^="span"]:first-child', el).addClass('span-first-child');
      $('[class*=" span"]:first-child', el).addClass('span-first-child');

    }
  }
  $.bootstrapIE6FixFix = bootstrapIE6FixFix;


  $(document).ready(function () {
    bootstrapIE6FixFix();
  });

})(jQuery);
