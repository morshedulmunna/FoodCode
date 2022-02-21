var header = document.getElementById("eat_time");
var tagA = header.getElementsByClassName("tagA");
console.log(tagA);

for (var i = 0; i < tagA.length; i++) {
  tagA[i].addEventListener("click", function () {
    //   color Change on click
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
    //   color Change on click end
    //
    //
    // Data Added on click
  });
}
