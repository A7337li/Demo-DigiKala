const $ = document;
const phone = $.querySelector("div.phone-0");
let bool = true;


phone.addEventListener("click",function(){
    if (bool == true) {
        $.querySelector("p.mobile").style.color = "red";
        $.querySelector("div.subset-mobile").style.display = "inline";
        $.querySelector("svg.angle-down-0").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "inline";
        bool = false;
    } else {
        $.querySelector("p.mobile").style.color = "black";
        $.querySelector("div.subset-mobile").style.display = "none";
        $.querySelector("svg.angle-up-0").style.display = "none";
        $.querySelector("svg.angle-down-0").style.display = "inline";
        bool = true;
    }
});