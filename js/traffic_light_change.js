var traffic_lights = ['assets/traffic_light_green.png', 'assets/traffic_light_red.png'];
var timeout_1 = 1200;
var timeout_2 = 600;
var timeout_3 = 50;
var count1 = 1; // red
var tLight1 = document.getElementById('traffic_light_one');
var tLight2 = document.getElementById('traffic_light_two');
var tLight3 = document.getElementById('traffic_light_three');

turnLightOne = function ()
{
    setInterval(function () {
        tLight1.src = traffic_lights[count];
    }, 2000);
};

turnLightTwo = function () {
    setInterval(function () {
        tLight2.src = traffic_lights[count];
    }, 2000);
};

turnLightThree = function () {
    setInterval(function () {
        count++;
        if (count >= traffic_lights.length)
            count = 0;
        // use this below line if you want images in order.
        tLight3.src = traffic_lights[count];
    }, 2000);
};



allLoaded = function() {
    count = 0; // red
    tLight = traffic_lights[count];
    console.log(tLight1);
    console.log(tLight2);
    console.log(tLight3);
    tLight1 = document.getElementById('traffic_light_one');
    tLight2 = document.getElementById('traffic_light_two');
    tLight3 = document.getElementById('traffic_light_three');
    setTimeout(function () {
        // trigger car:
        var car = document.getElementById("car");
        car.className += " car";

        
        tLight3.src = traffic_lights[count];
        turnLightThree();

        setTimeout(function () {
            // wait  550ms
                    
            tLight2.src = traffic_lights[count];
            turnLightTwo();
        }, 550)
        setTimeout(function () {
            //wait 1050ms
            tLight1.src = traffic_lights[count];
            turnLightOne();
        }, 1050)

    }, 2000);
};


var loaded = {
    street: false,
    car: false,
    tl1: false,
    tl2: false,
    tl3: false
};

areAllLoaded = function() {
    console.log(loaded);
    return (loaded.street &&
            loaded.car &&
            loaded.tl1 &&
            loaded.tl2 && 
            loaded.tl3);
};

var street = document.querySelector('#street');
var car = document.querySelector('#car');
var tl1 = document.querySelector('#traffic_light_one');
var tl2 = document.querySelector('#traffic_light_two');
var tl3 = document.querySelector('#traffic_light_three');

streetLoaded = function() {
    loaded.street = true;
    console.log("street img laoded");
    if (areAllLoaded())
        allLoaded();
    street.removeEventListener('load', streetLoaded);
};
carLoaded = function() {
    loaded.car = true;
    console.log("car img laoded");
    if (areAllLoaded())
        allLoaded();
    car.removeEventListener('load', carLoaded);
};
tl1Loaded = function() {
    loaded.tl1 = true;
    console.log("tl1 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl1.removeEventListener('load', tl1Loaded);
};
tl2Loaded = function() {
    loaded.tl2 = true;
    console.log("tl2 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl2.removeEventListener('load', tl2Loaded);
};
tl3Loaded = function() {
    loaded.tl3 = true;
    console.log("tl3 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl3.removeEventListener('load',tl3Loaded);
};

if (street.complete) {
    streetLoaded();
} else {
    street.addEventListener('load', streetLoaded);
    street.addEventListener('error', function() {
        console.log('error loading street img!');
    });
}
if (car.complete) {
    carLoaded();
} else {
    car.addEventListener('load', carLoaded);
    car.addEventListener('error', function() {
        console.log('error loading car img!');
    });
}
if (tl1.complete) {
    tl1Loaded();
} else {
    tl1.addEventListener('load', tl1Loaded);
    tl1.addEventListener('error', function() {
        console.log('error loading tl1 img!');
    });
}
if (tl2.complete) {
    tl2Loaded();
} else {
    tl2.addEventListener('load', tl2Loaded);
    tl2.addEventListener('error', function() {
        console.log('error loading tl2 img!');
    });
}
if (tl3.complete) {
    tl3Loaded();
} else {
    tl3.addEventListener('load', tl3Loaded);
    tl3.addEventListener('error', function() {
        console.log('error loading tl3 img!');
    });
}