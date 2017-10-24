var traffic_lights = ['assets/traffic_light_green.png', 'assets/traffic_light_red.png'];
var timeout_1 = 1200;
var timeout_2 = 600;
var timeout_3 = 50;
var count_1 = 0; // red
var count_2 = 0; // red
var count_3 = 0; // red

// initial turn traffic light 2 green:
setTimeout(function () {
    timeout_3 = 4000;
    var rand = traffic_lights[count_3];
    document.getElementById('traffic_light_three').src = rand;
    count_3++;
    turnLightThree();
}, timeout_3);

// initial turn traffic light 2 green:
setTimeout(function () {
    timeout_2 = 4000;
    var rand = traffic_lights[count_2];
    document.getElementById('traffic_light_two').src = rand;
    count_2++;
    turnLightTwo();
}, timeout_2);

// initial turn traffic light 1 green:
setTimeout(function () {
    timeout_1 = 4000;
    var rand = traffic_lights[count_1];
    document.getElementById('traffic_light_one').src = rand;
    count_1++;
    turnLightOne();
}, timeout_1);



turnLightOne = function ()
{
    setInterval(function () {

        if (count_1 >= traffic_lights.length)
            count_1 = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count_1];
        document.getElementById('traffic_light_one').src = rand;
        count_1++;
    }, 2000);
}

turnLightTwo = function () {
    setInterval(function () {

        if (count_2 >= traffic_lights.length)
            count_2 = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count_2];
        document.getElementById('traffic_light_two').src = rand;
        count_2++;
    }, 2000);
}

turnLightThree = function () {
    setInterval(function () {

        if (count_3 >= traffic_lights.length)
            count_3 = 0;
        // use this below line if you want images in order.
        var rand = traffic_lights[count_3];
        document.getElementById('traffic_light_three').src = rand;
        count_3++;
    }, 2000);
}