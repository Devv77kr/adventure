
var main = document.querySelector("#main");
var cursr = document.querySelector(".cursor");

main.addEventListener("mousemove", function(dets) {

    cursr.style.left = dets.clientX + "px";
    cursr.style.top = dets.clientY + "px";

});
