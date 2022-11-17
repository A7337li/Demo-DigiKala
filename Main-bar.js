const $ = document;
const phone = $.querySelectorAll("div.angle")[0];
const brand_goshi = $.querySelectorAll("div.angle")[1];
let bool_0 = true;
let bool_1 = true;


phone.addEventListener("click", function () {
    if (bool_0 == true) {
        $.querySelector("p.redcolor0").style.color = "red";
        $.querySelector("div.display0").style.display = "inline";
        $.querySelector("svg.angle-down-0").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "inline";
        bool_0 = false;
    } else {
        $.querySelector("p.redcolor0").style.color = "black";
        $.querySelector("div.display0").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "none";
        $.querySelector("svg.angle-down-0").style.display = "inline";
        bool_0 = true;
    }
});

brand_goshi.addEventListener("click" , function(){
    if (bool_1 == true) {
        $.querySelector("p.redcolor1").style.color = "red";
        $.querySelector("div.display1").style.display = "inline";
        $.querySelector("svg.angle-down-1").style.display = "none";
        $.querySelector("svg.angle-up-1").style.display = "inline";
        bool_1 = false;
    } else {
        $.querySelector("p.redcolor1").style.color = "black";
        $.querySelector("div.display1").style.display = "none";
        $.querySelector("svg.angle-up-1").style.display = "none";
        $.querySelector("svg.angle-down-1").style.display = "inline";
        bool_1 = true; 
    }
});