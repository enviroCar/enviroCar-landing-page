var a = 0;
$(window).scroll(function () {

    var oTop = $('#counter').offset().top - window.innerHeight;
    if (numberUsers > 0 
            && numberTracks > 0
            && numberMeasurements > 0
            && a == 0 
            && $(window).scrollTop() > oTop) {
        $('.counter-users').each(function () {
            var $this = $(this),
                    countTo = numberUsers;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                    {

                        duration: 1000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            var str = this.countNum+"";
                            var hundreds = str.substring(str.length-3,str.length);
                            var thousands = str.substring(str.length-6,str.length-3);
                            var millions = str.substring(str.length-9,str.length-6);
                            if (millions.length > 0)
                                millions = millions + ".";
                            else {
                                if (thousands > 0)
                                    thousands = thousands + ".";
                            }
                            var text = millions + thousands + hundreds;
                            $this.text(text);
                        }

                    });
        });
        $('.counter-tracks').each(function () {
            var $this = $(this),
                    countTo = numberTracks;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                    {

                        duration: 1500,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            var str = this.countNum+"";
                            var hundreds = str.substring(str.length-3,str.length);
                            var thousands = str.substring(str.length-6,str.length-3);
                            var millions = str.substring(str.length-9,str.length-6);
                            if (millions.length > 0)
                                millions = millions + ".";
                            else {
                                if (thousands > 0)
                                    thousands = thousands + ".";
                            }
                            var text = millions + thousands + hundreds;
                            $this.text(text);
                        }

                    });
        });
        $('.counter-measurements').each(function () {
            var $this = $(this),
                    countTo = numberMeasurements;
            $({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            },
                    {

                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            var str = this.countNum+"";
                            var hundreds = str.substring(str.length-3,str.length);
                            var thousands = str.substring(str.length-6,str.length-3);
                            var millions = str.substring(str.length-9,str.length-6);
                            var text = millions + "." + thousands + "." + hundreds;
                            $this.text(text);
                        }

                    });
        });

        a = 1;
    }

});