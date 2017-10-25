var traffic_lights = ['assets/traffic_light_green.png', 'assets/traffic_light_red.png'];
var timeout_1 = 1200;
var timeout_2 = 600;
var timeout_3 = 50;
var count = 0; // red

turnLightOne = function ()
{
    setInterval(function () {
        if (count >= traffic_lights.length)
            count = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count];
        document.getElementById('traffic_light_one').src = rand;
        count++;
    }, 2000);
};

turnLightTwo = function () {
    setInterval(function () {

        if (count >= traffic_lights.length)
            count = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count];
        document.getElementById('traffic_light_two').src = rand;
    }, 2000);
};

turnLightThree = function () {
    setInterval(function () {

        if (count >= traffic_lights.length)
            count = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count];
        document.getElementById('traffic_light_three').src = rand;
    }, 2000);
};

window.onload = function () {
    count = 0; // red
    // trigger car:
    var car = document.getElementById("car");
    car.className += " car";
    // initial turn traffic light 2 green:
    setTimeout(function () {
        count++;
        // initial turn traffic light 2 green:
        setTimeout(function () {
            // initial turn traffic light 1 green:
            setTimeout(function () {
                timeout_1 = 4000;
                var rand = traffic_lights[count];
                document.getElementById('traffic_light_one').src = rand;
                turnLightOne();
            }, (timeout_1 - timeout_2));
            timeout_2 = 4000;
            var rand = traffic_lights[count];
            document.getElementById('traffic_light_two').src = rand;
            turnLightTwo();
        }, (timeout_2 - timeout_3));
        timeout_3 = 4000;
        var rand = traffic_lights[count];
        document.getElementById('traffic_light_three').src = rand;
        turnLightThree();
    }, timeout_3);
};