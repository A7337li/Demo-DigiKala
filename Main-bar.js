const $ = document;

function myfunction(a, b, c, d) {
    if ($.querySelector(c).style.display == "inline") {
        $.querySelector(a).style.color = "red";
        $.querySelector(b).style.display = "inline";
        $.querySelector(c).style.display = "none";
        $.querySelector(d).style.display = "inline";
        bool = false;
    } else {
        $.querySelector(a).style.color = "black";
        $.querySelector(b).style.display = "none";
        $.querySelector(c).style.display = "inline";
        $.querySelector(d).style.display = "none";
        bool = true;
    }
}