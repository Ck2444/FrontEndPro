const button = document.querySelector("button");
const body = document.querySelector("body");

// button.addEventListener("click", function () {
//     // if (body.classList.contains('red')) {
//     //     document.body.classList.remove("red")
//     //     document.body.classList.add("blue")
//     // } else {
//     //     document.body.classList.add("red")
//     //     document.body.classList.remove("blue")
//     //  }

//     // console.log(body.style.background);
// })



// button.addEventListener("click", function () {
//     if (body.style.backgroundColor === "red") {
//         body.style.backgroundColor = "blue";
//     } else {
//         body.style.backgroundColor = "red";
//     }
// });
/* 
js - изменить фона body используя body.setAttribute("style", "background-color: red;");

*/

button.addEventListener("click", function () {
    if (body.style.backgroundColor === "red") {
        body.setAttribute("style", "background-color: blue;");
    } else {
        body.setAttribute("style", "background-color: red;");
    }
});
