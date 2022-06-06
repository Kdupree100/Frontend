console.log("Hello World");
 let juice = ['Orange','Apple','Mango-peach', 'Tropical Blend'];


 for(let i = 0; i < juice.length; i++)
 {
     console.log(juice[i]);
 }
 let food = ['Bread','Fish','Corn', 'Potatoes'];
 for(let j = 0; j < food.length; j++)
 {
     console.log(food[j]);
 }
 let sports = ['Football','Baseball','Basektball', 'Hockey'];
 for(let k = 0; k < juice.length; k++)
 {
     console.log(sports[k]);
 }

 let document =[ form];
//  let themeBtn = document.getElementById(Username);
//  let bgImg = document.getElementsByClassName("password")
//  let labels = document.getElementByClassName("label");
  let form = document.getElementByClassName("form");
 //let buttons = document.getElementByTypeName("Submit");

 let lightSwitch = true;

 function toggleMode()
 {
     if(lightSwitch)
     {
         for(let e of bgImg) e.classList.add("entryDarkMode");
         for(let e of labels) e.classList.add("labelDarkMode");
         for(let e of forms) e.classList.add("formDarkmode");
         for(let e of buttons) e.classList.add("buttomDarkMode");
     }else{

        for(let e of bgImg) e.classList.remove("entryDarkMode");
        for(let e of labels) e.classList.remove("labelDarkMode");
        for(let e of forms) e.classList.remove("formDarkMode");
        for(let e of buttons) e.classList.remove("buttomDarkMode");
        lightSwitch = !lightSwitch;
     }
 }
 themeBtn.addEventListener("click", toggleMode);