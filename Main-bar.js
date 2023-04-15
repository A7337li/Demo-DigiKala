const $ = document;

const myfunction = (colorText, subset, angleDown, angleUp) => {

    let angleD = $.querySelector(angleDown).style.display;
    
    if (angleD == "none") {
        $.querySelector(colorText).style.color = "black";
        $.querySelector(subset).style.display = "none";
        $.querySelector(angleDown).style.display = "inline";
        $.querySelector(angleUp).style.display = "none";
    } else {
        $.querySelector(colorText).style.color = "red";
        $.querySelector(subset).style.display = "inline";
        $.querySelector(angleDown).style.display = "none";
        $.querySelector(angleUp).style.display = "inline";
    }
}

