const $ = document;

function myfunction(colorText, subset, angleDown, angleUp) {
    if ($.querySelector(angleDown).style.display == "inline") {
        $.querySelector(colorText).style.color = "red";
        $.querySelector(subset).style.display = "inline";
        $.querySelector(angleDown).style.display = "none";
        $.querySelector(angleUp).style.display = "inline";
    } else {
        $.querySelector(colorText).style.color = "black";
        $.querySelector(subset).style.display = "none";
        $.querySelector(angleDown).style.display = "inline";
        $.querySelector(angleUp).style.display = "none";
    }
}