(function() {
  var done = false;
  var $window = $(window);
  $window.scroll(function onScroll() {
    var oTop = $("#counter").offset().top - window.innerHeight;
    if (
      !done &&
      (numberUsers > 0 || numberTracks > 0 || numberMeasurements > 0) &&
      $window.scrollTop() > oTop
    ) {
      counter(".counter-users", 1000, numberUsers);
      counter(".counter-tracks", 1500, numberTracks);
      counter(".counter-measurements", 2000, numberMeasurements);
      done = true;
    }
  });

  var format =
    window.Intl && window.Intl.NumberFormat
      ? (function() {
          var numberFormat = Intl.NumberFormat(getLanguage());
          return function(num) {
            return numberFormat.format(num);
          };
        })()
      : function(num) {
          var str = num + "";
          var hundreds = str.substring(str.length - 3, str.length);
          var thousands = str.substring(str.length - 6, str.length - 3);
          var millions = str.substring(str.length - 9, str.length - 6);
          if (millions.length > 0) {
            millions += ".";
          }
          if (thousands > 0) {
            thousands += ".";
          }
          return millions + thousands + hundreds;
        };

  function counter(selector, duration, countTo) {
    $(selector).each(function() {
      var $this = $(this);
      $({ countNum: $this.text() }).animate(
        { countNum: countTo },
        {
          duration: duration,
          easing: "swing",
          step: function() {
            $this.text(format(Math.floor(this.countNum)));
          },
          complete: function() {
            $this.text(format(this.countNum));
          }
        }
      );
    });
  }
})();
