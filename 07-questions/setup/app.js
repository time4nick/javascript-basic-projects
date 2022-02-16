//using selectors inside the element
// traversing the dom

const questions = document.querySelectorAll(".question");

questions.forEach(function (param) {
  const btn = param.querySelector(".question-btn");
  btn.addEventListener("click", function () {
    questions.forEach(function (param2) {
      if (param2 !== param) {
        param2.classList.remove("show-text");
      }
    });
    param.classList.toggle("show-text");
  });
});

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (param) {
//   param.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;
//     question.classList.toggle("show-text");
//   });
// });
