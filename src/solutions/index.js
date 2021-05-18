  import {solution1} from "./solution1"
  import {solution2} from "./solution2"
  import {solution3} from "./solution3"

$(document).ready(function() {
  $("body").prepend("<div><h1>Ice Cream Flavors </h1><ul id='flavor-list'></ul></div> <div id='solutions'></div>")
  $("#solutions").append(`<button id='solution1-button' >Solution1</button>`);
  $("#solutions").append(`<button id='solution2-button' >Solution2</button>`);
  $("#solutions").append(`<button id='solution3-button' >Solution3</button>`);
  $("#solution1-button").click(function() {
   solution1()
  })
  $("#solution2-button").click(function() {
   solution2()
  })
  $("#solution3-button").click(function() {
   solution3()
  })
})
