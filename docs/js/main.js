/*eslint-env browser*/

"use strict";

let options = {
        set0: ['Grafičko Inženjerstvo i Dizajn','Dizajn Industrijskih Proizvoda','Veb Dizajn','Drumski Saobraćaj','Elektrotehnika','Informacione Tehnologije','Elektrotehnika','Zaštita Od Katastrofalnih Događaja i Požara','Zaštita Na Radu','Zaštita Životne Sredine'],
        set1: ['Grafičko Inženjerstvo i Dizajn','Dizajn Industrijskih Proizvoda','Veb Dizajn','Mašinsko Inženjerstvo','Drumski Saobraćaj','Elektrotehnika','Informacione Tehnologije','Zaštita Od Katastrofalnih Događaja i Požara','Zaštita Na Radu','Zaštita Životne Sredine']
};

let firstlist = "<li>" + options.set0.join("</li><li>") + "</li>";
document.getElementById("first-list").innerHTML = firstlist;
let secondlist = "<li>" + options.set1.join("</li><li>") + "</li>";
document.getElementById("second-list").innerHTML = secondlist;


$(document).ready(function () {
  $('#myModal').modal();
 });

function setDarkMode() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}