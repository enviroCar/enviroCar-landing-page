(function ($) {
    $.getUrlVar = function (key) {
        var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
        return result && unescape(result[1]) || "";
    };
})(jQuery);

$(window).on('load', function () {
    // get language from url params
    var lang = $.getUrlVar("lng");

    // use German as default
    if (!lang || lang.length === 0) {
        lang = "de";
    }

    $.get("https://envirocar.org/api/stable/termsOfUse", function (data) {

        $.ajax({
            url: "https://envirocar.org/api/stable/termsOfUse/" + data.termsOfUse[0].id, headers: { "Accept-Language": lang }, success: function (data) {
                
                preHtml = data.contents.split("<p>").join("<div>").split("</p>").join("</div><br>");

                // split general and special tous. very hacky
                var general = "";
                var special = "";
                if (lang === "en") {
                    var splitted = preHtml.split("<h2>Special Terms of Use</h2>");
                    general = splitted[0];
                    special = splitted[1];
                } else {
                    var splitted = preHtml.split("<h2>Besondere Nutzungsbedingungen</h2>");
                    general = splitted[0];
                    special = splitted[1];
                }
                
                $('#generalTermsContainer').append(general);
                $('#specialTermsContainer').append(special);

                // add some classes for styling
                $('#generalTermsContainer div').each(function (i) {
                    $(this).addClass('section-lead');
                    $(this).addClass('nomargin');
                });

                $('#generalTermsContainer h1').each(function (i) {
                    $(this).addClass('section-heading');
                });
                $('#specialTermsContainer h1').each(function (i) {
                    $(this).addClass('section-heading');
                });

                $('#generalTermsContainer h2').each(function (i) {
                    $(this).addClass('section-heading-sm');
                });
                $('#specialTermsContainer h2').each(function (i) {
                    $(this).addClass('section-heading-sm');
                });
            }
        });
    });

});
