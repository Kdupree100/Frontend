let themeBtn = document.getElementById("themeBtn");

let bgImg = document.getElementsByClassName("entry");
let labels = document.getElementsByTagName("label");
let form = document.getElementsByClassName("form");
let buttons = document.getElementsByTagName("button");

let lightSwitch = true;

function toggleMode()
{
    if(lightSwitch)
    {
        for(let l of bgImg) l.classList.add("entryDarkmode");
        for(let l of labels) l.classList.add("labelDarkmode");
        for(let l of form) l.classList.add("formDarkmode");
        for(let l of buttons) l.classList.add("buttonDarkmode");
    } else
    {
        for(let l of bgImg) l.classList.remove("entryDarkmode");
        for(let l of labels) l.classList.remove("labelDarkmode");
        for(let l of form) l.classList.remove("formDarkmode");
        for(let l of buttons) l.classList.remove("buttonDarkmode");
    }
    lightSwitch = !lightSwitch;
}

themeBtn.addEventListener("click", toggleMode);