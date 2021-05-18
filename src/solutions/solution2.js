export function solution2() {
  console.log("solution 2 ");
  let flavors = window.iceCreamFlavors;
  $('ul li').remove();
  flavors.forEach( flavor => $("#flavor-list").prepend(`<li>${flavor}</li>`) );
}