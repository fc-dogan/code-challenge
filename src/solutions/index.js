import {solution1} from "./solution1"

$(document).ready(function() {
  $("body").prepend("<div><h1>Ice Cream Flavors </h1><ul id='flavor-list'></ul></div> <div id='solutions'></div>");
  $("#solutions").append(`<button onClick=${solution1()} >Solution1</button>`);

})
