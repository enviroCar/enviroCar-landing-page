allLoaded = function () {

    var traffic_light1 = document.getElementById("traffic_light_three_g");
    traffic_light1.className += " traffic_light_anim";
    setTimeout(function () {
        // trigger car:
        var car = document.getElementById("car");
        car.className += " car";

    }, 2200);

    setTimeout(function () {
        
        var traffic_light2 = document.getElementById("traffic_light_two_g");
        traffic_light2.className += " traffic_light_anim";
        
    }, 1000);

    setTimeout(function () {
        
        var traffic_light3 = document.getElementById("traffic_light_one_g");
        traffic_light3.className += " traffic_light_anim";
        
    }, 1700);
};


var loaded = {
    street: false,
    car: false,
    tl1: false,
    tl2: false,
    tl3: false
};

areAllLoaded = function () {
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

streetLoaded = function () {
    loaded.street = true;
    console.log("street img laoded");
    if (areAllLoaded())
        allLoaded();
    street.removeEventListener('load', streetLoaded);
};
carLoaded = function () {
    loaded.car = true;
    console.log("car img laoded");
    if (areAllLoaded())
        allLoaded();
    car.removeEventListener('load', carLoaded);
};
tl1Loaded = function () {
    loaded.tl1 = true;
    console.log("tl1 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl1.removeEventListener('load', tl1Loaded);
};
tl2Loaded = function () {
    loaded.tl2 = true;
    console.log("tl2 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl2.removeEventListener('load', tl2Loaded);
};
tl3Loaded = function () {
    loaded.tl3 = true;
    console.log("tl3 img laoded");
    if (areAllLoaded())
        allLoaded();
    tl3.removeEventListener('load', tl3Loaded);
};

if (street.complete) {
    streetLoaded();
} else {
    street.addEventListener('load', streetLoaded);
    street.addEventListener('error', function () {
        console.log('error loading street img!');
    });
}
if (car.complete) {
    carLoaded();
} else {
    car.addEventListener('load', carLoaded);
    car.addEventListener('error', function () {
        console.log('error loading car img!');
    });
}
if (tl1.complete) {
    tl1Loaded();
} else {
    tl1.addEventListener('load', tl1Loaded);
    tl1.addEventListener('error', function () {
        console.log('error loading tl1 img!');
    });
}
if (tl2.complete) {
    tl2Loaded();
} else {
    tl2.addEventListener('load', tl2Loaded);
    tl2.addEventListener('error', function () {
        console.log('error loading tl2 img!');
    });
}
if (tl3.complete) {
    tl3Loaded();
} else {
    tl3.addEventListener('load', tl3Loaded);
    tl3.addEventListener('error', function () {
        console.log('error loading tl3 img!');
    });
}