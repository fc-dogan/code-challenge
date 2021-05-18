export function solution1() {
    console.log("solution 1");
    let flavors = window.iceCreamFlavors;
    if(flavors.length > 0){
      $('ul li').remove();
      $("#flavor-list").append(
        flavors.map( flavor => $(`<li>${flavor}</li>`))
      )
    }
}