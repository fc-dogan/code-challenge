export function solution3() {
  console.log("solution 3");
  $('ul').empty();
  let flavors = window.iceCreamFlavors;
  for(let i = 0; i < flavors.length; i++){
    $("#flavor-list").prepend(`<li>${flavors[i]}</li>`)
  }
}