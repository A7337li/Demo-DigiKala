const $ = document;
let bool= true;


function myfunction() {
    if (bool == true) {
        $.querySelector("p.redcolor0").style.color = "red";
        $.querySelector("div.display0").style.display = "inline";
        $.querySelector("svg.angle-down-0").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "inline";
        bool = false;
    } else {
        $.querySelector("p.redcolor0").style.color = "black";
        $.querySelector("div.display0").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "none";
        $.querySelector("svg.angle-down-0").style.display = "inline";
        bool = true;
    }
}