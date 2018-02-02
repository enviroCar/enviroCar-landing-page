unboldAll = function () {
    $('#dashboard_1').css('font-weight', "");
    $('#dashboard_5').css('font-weight', "");
    $('#dashboard_4').css('font-weight', "");
    $('#dashboard_3').css('font-weight', "");
    $('#dashboard_2').css('font-weight', "");
    $('#calendar_1').css('font-weight', "");
    $('#calendar_2').css('font-weight', "");
    $('#track_1').css('font-weight', "");
    $('#track_2').css('font-weight', "");
    $('#db_1').css('margin-right', "32px");
    $('#db_1').css('margin-left', "8px");
    $('#db_1').css('width', "24px");
    $('#db_1').css('height', "24px");
    $('#db_2').css('margin-right', "32px");
    $('#db_2').css('margin-left', "8px");
    $('#db_2').css('width', "24px");
    $('#db_2').css('height', "24px");
    $('#db_3').css('margin-right', "32px");
    $('#db_3').css('margin-left', "8px");
    $('#db_3').css('width', "24px");
    $('#db_3').css('height', "24px");
    $('#db_4').css('margin-right', "32px");
    $('#db_4').css('margin-left', "8px");
    $('#db_4').css('width', "24px");
    $('#db_4').css('height', "24px");
    $('#db_5').css('margin-right', "32px");
    $('#db_5').css('margin-left', "8px");
    $('#db_5').css('width', "24px");
    $('#db_5').css('height', "24px");
    $('#db_6').css('margin-right', "32px");
    $('#db_6').css('margin-left', "8px");
    $('#db_6').css('width', "24px");
    $('#db_6').css('height', "24px");
    $('#db_7').css('margin-right', "32px");
    $('#db_7').css('margin-left', "8px");
    $('#db_7').css('width', "24px");
    $('#db_7').css('height', "24px");
    $('#db_8').css('margin-right', "32px");
    $('#db_8').css('margin-left', "8px");
    $('#db_8').css('width', "24px");
    $('#db_8').css('height', "24px");
    $('#db_9').css('margin-right', "32px");
    $('#db_9').css('margin-left', "8px");
    $('#db_9').css('width', "24px");
    $('#db_9').css('height', "24px");
};

removeAllHover = function () {
    $('#dashboard_1').removeClass('dashboard-item-hover');
    $('#dashboard_2').removeClass('dashboard-item-hover');
    $('#dashboard_3').removeClass('dashboard-item-hover');
    $('#dashboard_4').removeClass('dashboard-item-hover');
    $('#dashboard_5').removeClass('dashboard-item-hover');
    $('#calendar_1').removeClass('dashboard-item-hover');
    $('#calendar_2').removeClass('dashboard-item-hover');
    $('#track_1').removeClass('dashboard-item-hover');
    $('#track_2').removeClass('dashboard-item-hover');
}

$(function () {
    $('#dashboard_1').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/dashboard_1_de.PNG";
            } else {
                imgsrc = "assets/webapp/dashboard_1_en.PNG";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#dashboard_1').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#dashboard_2').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/dashboard_2_de.png";
            } else {
                imgsrc = "assets/webapp/dashboard_2_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#dashboard_2').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#dashboard_3').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/dashboard_3_de.png";
            } else {
                imgsrc = "assets/webapp/dashboard_3_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#dashboard_3').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#dashboard_4').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/dashboard_4_de.png";
            } else {
                imgsrc = "assets/webapp/dashboard_4_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#dashboard_4').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#dashboard_5').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/dashboard_5_de.png";
            } else {
                imgsrc = "assets/webapp/dashboard_5_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#dashboard_5').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#calendar_1').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/caldendar_1_de.png";
            } else {
                imgsrc = "assets/webapp/caldendar_1_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#calendar_1').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#calendar_2').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/caldendar_2_de.png";
            } else {
                imgsrc = "assets/webapp/caldendar_2_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#calendar_2').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#track_1').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/track_1_de.png";
            } else {
                imgsrc = "assets/webapp/track_1_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#track_1').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

$(function () {
    $('#track_2').hover(function () {
        removeAllHover();
        $('#webapp_img').removeClass('webapp-hover');
        setTimeout(function () {
            var lng = i18nextify.i18next.language;
            var imgsrc = "";
            if (lng === 'de') {
                imgsrc = "assets/webapp/track_2_de.png";
            } else {
                imgsrc = "assets/webapp/track_2_en.png";
            }
            $("#webapp_img").attr("src", imgsrc);
            $('#webapp_img').addClass('webapp-hover');
            $('#track_2').addClass('dashboard-item-hover');
        }, 150);
    }, function () {
        setTimeout(function () {
        }, 150);
    });
});

unboldAll();
removeAllHover();
$('#webapp_img').addClass('webapp-hover');
$('#dashboard_1').addClass('dashboard-item-hover');